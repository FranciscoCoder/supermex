<?php

namespace App\Controller;

use App\Entity\Noticias;
use App\Repository\IdiomasRepository;
use App\Repository\NoticiasRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NoticiasController extends AbstractController
{
    /**
     * @Route("/api/news", name="app_new_index", methods={"GET"})
     */
    public function index(NoticiasRepository $noticiasRepository, IdiomasRepository $idiomasRepository, Request $request): Response
    {
        //?page=1&language=es&limit=12
        //recibimos los query params para realizar busquedas concretas
        $page = $request->query->get('page', 1);
        $language = $request->query->get('language');
        $limit = $request->query->get('limit', 20);

        if($page<=0){$page=1;}

        //Comprobamos el idioma recibido
        if(!empty($language)){
            $languageRegister = $idiomasRepository->findOneBy(['abreviatura'=>$language]);
            $language= $languageRegister->getId();
        }
        
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;

        //Consulta para recibir las noticias segun los params recibidos
        if(!empty($language)){
            $noticias = $noticiasRepository->findBy(['idioma' => $language], ['id' => 'DESC'], $limit, $offset);
        }
        else{
            $noticias = $noticiasRepository->findBy([], ['id' => 'DESC'], $limit, $offset);
        }
        $totalRegistros = count($noticiasRepository->findBy(['idioma' => $language]));
        $resultado = [];
        foreach ($noticias as $noticia){
            if($noticia->getActivo()===1){$activo='Si';}else{$activo='No';}
            $resultado[]=[
                'id' => $noticia->getId(),
                'titular' => $noticia->getTitular(),
                'slug' => $noticia->getSlug(),
                'descripcion' => $noticia->getDescripcion(),
                'idioma_id' => $noticia->getIdioma()->getId(),
                'idioma' => strtoupper($noticia->getIdioma()->getAbreviatura()),
                'fecha_creacion' => $noticia->getFechaCreacion()->format('d-m-Y H:i'),
                'activo' => $activo,
                'imagen' => $noticia->getImagen(),
            ];
        }

        return $this->json([
            "result" => $resultado ,
            "count" => $totalRegistros
        ]);
    }

    /**
     * @Route("/api/news/{slug}", name="app_news_show", methods={"GET"})
     */
    public function showNew(NoticiasRepository $noticiasRepository, $slug): Response
    {
        $noticia = $noticiasRepository->findOneBy(['slug'=>$slug]);
        if($noticia == null){
            throw $this->createNotFoundException();
        }
        
        $resultado[]=[
            'id' => $noticia->getId(),
            'titular' => $noticia->getTitular(),
            'slug' => $noticia->getSlug(),
            'descripcion' => $noticia->getDescripcion(),
            'idioma' => $noticia->getIdioma()->getId(),
            'fecha_creacion' => $noticia->getFechaCreacion()->format('d-m-Y H:i'),
            'activo' => $noticia->getActivo(),
            'imagen' => $noticia->getImagen(),
        ];

        return $this->json([
            'result' => $resultado,
        ]);
    }

    /**
     * @Route("/api/new/", name="app_new_register", methods={"POST"})
     */
    public function newNew(Request $request, IdiomasRepository $idiomasRepository, EntityManagerInterface $em): Response
    {
        $data = $request->toArray();
        $idioma = $idiomasRepository->find(1);
        $resultado="ko";
        $registro='';
        if(!empty($idioma->getId())){
            if(isset($data["nombre"])){
                $slug=strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data["nombre"])));

                $noticia = new Noticias();
                $noticia->setActivo(1);
                $noticia->setTitular($data["nombre"]);
                $noticia->setSlug($slug);
                $noticia->setIdioma($idioma);
                $noticia->setDescripcion($data["descripcion"]);
                $noticia->setFechaCreacion(new \DateTime());
                $noticia->setFechaModificacion(new \DateTime());
                $noticia->setImagen('');

                $em->persist($noticia);
                $em->flush();

                $registro='';
                if(!empty($noticia->getId()))
                {
                    $resultado="ok";
                    $registro=$noticia->getId();
                }
            }
        }

        return $this->json([
            'result' => $resultado,
            'id' => $registro
        ]);
    }

    /**
     * @Route("/api/new/{id}", name="app_new_update", methods={"PUT"})
     */
    public function updateNew(Request $request, IdiomasRepository $idiomasRepository, NoticiasRepository $noticiasRepository, EntityManagerInterface $em, $id): Response
    {
        $data=$request->toArray();
        $noticia = $noticiasRepository->find($id);
        $idioma = $idiomasRepository->find($data["idioma"]);
        $resultado="ko";
        
        if(!empty($idioma->getId()))
        {
            if(!empty($noticia->getId()))
            {
                if(isset($data['nombre'])){
                    $noticia->setTitular($data['nombre']);
                    $slug=strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data["nombre"])));
                    $noticia->setSlug($slug);
                }
                if(isset($data['descripcion'])){
                    $noticia->setDescripcion($data['descripcion']);
                }
                
                if(isset($data['activo'])){
                    $noticia->setActivo($data['activo']);
                }

                $noticia->setFechaModificacion(new \DateTime());
                $em->flush();

                $resultado="ok";
            }
        }
        
        return $this->json([
            'result' => $resultado,
            'id' => $noticia->getId(),
        ]);
    }

    /**
     * @Route("/api/new/{id}", name="app_new_detele", methods={"DELETE"})
     */
    public function deleteRecipe(NoticiasRepository $noticiasRepository, EntityManagerInterface $em, $id): Response
    {
        $resultado="ko";
        if(!empty($id)){
            $noticia = $noticiasRepository->find($id);
            $em->remove($noticia);
            $em->flush();
            $resultado="ok";
        }
        
        return $this->json([
            'result' => $resultado,
        ]);
    }
}