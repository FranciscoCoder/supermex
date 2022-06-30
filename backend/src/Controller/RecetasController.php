<?php

namespace App\Controller;

use App\Entity\Idiomas;
use App\Entity\Recetas;
use App\Repository\IdiomasRepository;
use App\Repository\RecetasRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RecetasController extends AbstractController
{
    /**
     * @Route("/api/recipes", name="app_recetas_index", methods={"GET"})
     * 
     */
    public function index(RecetasRepository $recetasRepository, IdiomasRepository $idiomasRepository, Request $request): Response
    {
        //?page=1&language=es&limit=12
        //recibimos los query params para realizar busquedas concretas
        $page = $request->query->get('page', 1);
        $language = $request->query->get('language', "es");
        $limit = $request->query->get('limit', 20);

        if($page<=0){$page=1;}

        //Comprobamos el idioma recibido
        $languageRegister = $idiomasRepository->findOneBy(['abreviatura'=>$language]);
        $language= $languageRegister->getId();
        
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;

        //Consulta para recibir las recetas segun los params recibidos
        $recetas = $recetasRepository->findBy(['idioma' => $language], ['id' => 'DESC'], $limit, $offset);
        $totalRegistros = count($recetasRepository->findBy(['idioma' => $language]));
        $resultado = [];
        foreach ($recetas as $receta){
            if($receta->getActivo()===1){$activo='Si';}else{$activo='No';}

            $resultado[]=[
                'id' => $receta->getId(),
                'nombre' => $receta->getNombre(),
                'slug' => $receta->getSlug(),
                'descripcion' => $receta->getDescripcion(),
                'ingredientes' => $receta->getIngredientes(),
                'idioma' => $receta->getIdioma()->getId(),
                'fecha_creacion' => $receta->getFechaCreacion()->format('d-m-Y H:i'),
                'activo' => $activo,
                'imagen' => $receta->getImagen(),
            ];
        }

        return $this->json([
            "result" => $resultado ,
            "count" => $totalRegistros
        ]);
    }

    /**
     * @Route("/api/recipes/{slug}", name="app_recipes_show", methods={"GET"})
     */
    public function showRecipe(RecetasRepository $recetasRepository, $slug): Response
    {
        $receta = $recetasRepository->findOneBy(['slug'=>$slug]);
        if($receta === null){
            throw $this->createNotFoundException();
        }
        
        $resultado[]=[
            'id' => $receta->getId(),
            'nombre' => $receta->getNombre(),
            'slug' => $receta->getSlug(),
            'descripcion' => $receta->getDescripcion(),
            'ingredientes' => $receta->getIngredientes(),
            'idioma' => $receta->getIdioma()->getId(),
            'fecha_creacion' => $receta->getFechaCreacion()->format('d-m-Y H:i'),
            'activo' => $receta->getActivo(),
            'imagen' => $receta->getImagen(),
        ];

        return $this->json([
            'result' => $resultado,
        ]);
    }

    /**
     * @Route("/api/recipe/", name="app_recipes_register", methods={"POST"})
     */
    public function newRecipe(Request $request, IdiomasRepository $idiomasRepository, EntityManagerInterface $em): Response
    {
        $data = $request->toArray();

        $idioma = $idiomasRepository->find(1);
        $resultado="ko";

        if(isset($data["nombre"])){
            $slug=strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data["nombre"])));

            $receta = new Recetas();
            $receta->setActivo(1);
            $receta->setNombre($data["nombre"]);
            $receta->setSlug($slug);
            $receta->setIdioma($idioma);
            $receta->setDescripcion($data["descripcion"]);
            $receta->setIngredientes($data["ingredientes"]);
            $receta->setFechaCreacion(new \DateTime());
            $receta->setFechaModificacion(new \DateTime());
            $receta->setImagen($data["ingredientes"]);

            $em->persist($receta);
            $em->flush();

            $registro='';
            if(!empty($receta->getId()))
            {
                $resultado="ok";
                $registro=$receta->getId();
            }
        }

        return $this->json([
            'result' => $resultado,
            'id' => $registro
        ]);
    }

    /**
     * @Route("/api/recipe/{id}", name="app_recipes_update", methods={"PUT"})
     */
    public function updateRecipe(Request $request, IdiomasRepository $idiomasRepository, RecetasRepository $recetasRepository, EntityManagerInterface $em, $id): Response
    {
        $data=$request->toArray();
        $receta = $recetasRepository->find($id);
        
        if(isset($data['nombre'])){
            $receta->setNombre($data['nombre']);
            $slug=strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data["nombre"])));
            $receta->setSlug($slug);
        }
        if(isset($data['descripcion'])){
            $receta->setDescripcion($data['descripcion']);
        }
        if(isset($data['ingredientes'])){
            $receta->setIngredientes($data['ingredientes']);
        }
        if(isset($data['activo'])){
            $receta->setActivo($data['activo']);
        }

        $receta->setFechaModificacion(new \DateTime());
        $em->flush();
        
        return $this->json([
            'result' => 'ok',
            'id' => $receta->getId(),
        ]);
    }

    /**
     * @Route("/api/recipe/{id}", name="app_recipes_detele", methods={"DELETE"})
     */
    public function deleteRecipe(RecetasRepository $recetasRepository, EntityManagerInterface $em, $id): Response
    {
        $receta = $recetasRepository->find($id);
        $em->remove($receta);
        $em->flush();
        
        return $this->json([
            'result' => 'ok',
        ]);
    }
}