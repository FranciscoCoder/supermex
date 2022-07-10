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
        $active = $request->query->get('active');
        $totalRegistros=0;

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
            $noticias = $noticiasRepository->findBy(['idioma' => $language, 'activo' => $active], ['id' => 'DESC'], $limit, $offset);
            $totalRegistros = count($noticiasRepository->findBy(['idioma' => $language, 'activo' => $active]));
        }
        else{
            $noticias = $noticiasRepository->findBy([], ['id' => 'DESC'], $limit, $offset);
            $totalRegistros = count($noticiasRepository->findBy([], ['id' => 'DESC']));
        }
        
        $resultado = [];
        foreach ($noticias as $noticia){
            if($noticia->getActivo()===1){$activo='Si';}else{$activo='No';}

            $imagen='';
            if(!empty($noticia->getImagen()))
            {
                $imagen='http://localhost:8080/uploads/'.$noticia->getImagen();
            }

            $resultado[]=[
                'id' => $noticia->getId(),
                'titular' => $noticia->getTitular(),
                'slug' => $noticia->getSlug(),
                'descripcion' => $noticia->getDescripcion(),
                'idioma_id' => $noticia->getIdioma()->getId(),
                'idioma' => strtoupper($noticia->getIdioma()->getAbreviatura()),
                'fecha_creacion' => $noticia->getFechaCreacion()->format('d-m-Y H:i'),
                'activo' => $activo,
                'imagen' => $imagen,
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

        $imagen='';
        if(!empty($noticia->getImagen()))
        {
            $imagen='http://localhost:8080/uploads/'.$noticia->getImagen();
        }
        
        $resultado[]=[
            'id' => $noticia->getId(),
            'titular' => $noticia->getTitular(),
            'slug' => $noticia->getSlug(),
            'descripcion' => $noticia->getDescripcion(),
            'idioma' => $noticia->getIdioma()->getId(),
            'fecha_creacion' => $noticia->getFechaCreacion()->format('d-m-Y H:i'),
            'activo' => $noticia->getActivo(),
            'imagen' => $imagen,
        ];

        return $this->json([
            'result' => $resultado,
        ]);
    }

    /**
     * @Route("/api/new/", name="app_new_register", methods={"POST"})
     */
    public function newNew(Request $request, IdiomasRepository $idiomasRepository, NoticiasRepository $noticiasRepository, EntityManagerInterface $em): Response
    {
        $imagen = $request->files->get('imagen');
        $nombreImagen='';
        $nombreRequest = $request->request->get("nombre");
        $slugRequest = $request->request->get("slug");
        $idiomaRequest = $request->request->get("idioma");
        $activoRequest = $request->request->get("activo");
        $descripcionRequest = $request->request->get("descripcion");

        $idioma = $idiomasRepository->find($idiomaRequest);
        $resultado="ko";
        $registro='';
        if(!empty($idioma->getId())){
            if(isset($nombreRequest)){
                $noticia = new Noticias();
                $noticia->setActivo($activoRequest);
                $noticia->setTitular($nombreRequest);

                //$verifySlug=$noticiasRepository->getOldSlug($slugRequest);
                // if(!empty($verifySlug)){
                //     $noticia->setSlug($verifySlug.'-2');
                // }
                // else {$noticia->setSlug($slugRequest);}
                $noticia->setSlug($slugRequest);
                $noticia->setIdioma($idioma);
                $noticia->setDescripcion($descripcionRequest);
                $noticia->setFechaCreacion(new \DateTime());
                $noticia->setFechaModificacion(new \DateTime());
                
                //Subimos la imagen al servidor
                if(!empty($imagen))
                {
                    if(!empty($imagen->getClientOriginalName()))
                    {
                        $nombreImagen = uniqid().'_'.strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                        $imagen->move('uploads/', $nombreImagen);
                        $noticia->setImagen($nombreImagen);
                    }
                }

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
     * @Route("/api/new/{id}", name="app_new_update", methods={"POST"})
     */
    public function updateNew(Request $request, IdiomasRepository $idiomasRepository, NoticiasRepository $noticiasRepository, EntityManagerInterface $em, $id): Response
    {
        $nombreImagen='';
        $nombreRequest = $request->request->get("nombre");
        $slugRequest = $request->request->get("slug");
        $idiomaRequest = $request->request->get("idioma");
        $activoRequest = $request->request->get("activo");
        $descripcionRequest = $request->request->get("descripcion");

        //Comprobamos si existe el idioma
        $idioma = $idiomasRepository->find($idiomaRequest);
        //Comprobamos si existe el registro
        $noticia = $noticiasRepository->find($id);
        $resultado="ko";
        if(!empty($idioma->getId()))
        {
            if(!empty($noticia->getId()))
            {
                if(isset($nombreRequest)){
                    $noticia->setTitular($nombreRequest);

                    //Comprobamos si slug es diferente del que teniamos registrado
                    // if($slugRequest!=$noticia->getSlug()){
                    //     $oldSlug=$noticiasRepository->getOldSlug($slugRequest);
                    //     if(!empty($oldSlug)){
                    //         $noticia->setSlug($oldSlug.'-2');
                    //     }
                    //     else {$noticia->setSlug($slugRequest);}
                    // }
                    $noticia->setSlug($slugRequest);
                }
                
                if(isset($descripcionRequest)){
                    $noticia->setDescripcion($descripcionRequest);
                }                
                if(isset($activoRequest)){
                    $noticia->setActivo($activoRequest);
                }
                $noticia->setIdioma($idioma);

                //Subimos la imagen al servidor
                if(!empty($imagen))
                {
                    if(!empty($imagen->getClientOriginalName()))
                    {
                        $nombreImagen = uniqid().'_'.strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                        $imagen->move('uploads/', $nombreImagen);
                        $noticia->setImagen($nombreImagen);
                    }
                }

                $noticia->setFechaModificacion(new \DateTime());
                $em->flush();

                $resultado="ok";
            }
        }
        
        return $this->json([
            'result' => $resultado,
            'id' => $noticia->getId()
        ]);
    }

    /**
     * @Route("/api/new/{id}/delete", name="app_new_delete", methods={"DELETE"})
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