<?php

namespace App\Controller;

use App\Entity\Idiomas;
use App\Entity\Recetas;
use App\Entity\RecetasDescripcion;
use App\Repository\IdiomasRepository;
use App\Repository\RecetasDescripcionRepository;
use App\Repository\RecetasRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RecetasController extends AbstractController
{
    /**
     * @Route("/api/recipes")", name="app_recipes_index", methods={"GET"})
     */
    public function index(RecetasDescripcionRepository $recetasDescripcionRepository, IdiomasRepository $idiomasRepository, Request $request): Response
    {
        //recibimos los query params para realizar busquedas concretas
        $page = $request->query->get('page', 1);
        $language = $request->query->get('language', "es");
        $limit = $request->query->get('limit', 20);

        if($page<=0){
            $page=1;
        }

        //Comprobamos el idioma recibido
        $languageRegister = $idiomasRepository->findOneBy(['abreviatura'=>$language]);
        $language= $languageRegister->getId();
        
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;

        //Consulta para recibir las recetas segun los params recibidos
        $recetas = $recetasDescripcionRepository->findBy(['idioma' => $language], ['id' => 'DESC'], $limit, $offset);
        $contador = count($recetas);
        $resultado = [];
        foreach ($recetas as $receta){

            $resultado[]=[
                'id' => $receta->getId(),
                'nombre' => $receta->getNombre(),
                'slug' => $receta->getSlug(),
                'descripcion' => $receta->getDescripcion(),
                'ingredientes' => $receta->getIngredientes(),
                'idioma' => $receta->getIdioma()->getId(),
                'fecha_creacion' => $receta->getReceta()->getFechaCreacion()->format('Y-m-d H:i:s'),
                'activo' => $receta->getReceta()->getActivo(),
                'imagen' => $receta->getReceta()->getImagen(),
            ];
        }

        return $this->json($resultado);
    }

    /**
     * @Route("/api/recipes/{slug}", name="app_recipes_recipe", methods={"GET"})
     */
    public function showRecipe(RecetasDescripcionRepository $recetasDescripcionRepository, $slug): Response
    {
        $receta = $recetasDescripcionRepository->findOneBy(['slug'=>$slug]);
        if($receta == null){
            throw $this->createNotFoundException();
        }
        
        $resultado[]=[
            'id' => $receta->getId(),
            'nombre' => $receta->getNombre(),
            'slug' => $receta->getSlug(),
            'descripcion' => $receta->getDescripcion(),
            'ingredientes' => $receta->getIngredientes(),
            'idioma' => $receta->getIdioma()->getId(),
            'fecha_creacion' => $receta->getReceta()->getFechaCreacion()->format('Y-m-d H:i:s'),
            'activo' => $receta->getReceta()->getActivo(),
            'imagen' => $receta->getReceta()->getImagen(),
        ];

        return $this->json($resultado);
    }

    /**
     * @Route("/api/recipe", name="app_recipes_new_recipe", methods={"POST"})
     */
    public function newRecipe(Request $request, IdiomasRepository $idiomasRepository, EntityManagerInterface $em): Response
    {
        $data = $request->toArray();

        // $idioma = $idiomasRepository->find(1);
        // $resultado="ko";
        // if(isset($data["nombre"])){
        //     $receta = new Recetas();
        //     $receta->setActivo(1);
        //     $receta->setFechaCreacion(new \DateTime());
        //     $receta->setFechaModificacion(new \DateTime());
        //     $receta->setImagen($data["ingredientes"]);

        //     $em->persist($receta);
        //     $em->flush();

        //     if(!empty($receta->getId())){
        //         $recetaDescripcion = new RecetasDescripcion();
        //         $recetaDescripcion->setReceta($receta);
        //         $recetaDescripcion->setIdioma($idioma);
        //         $recetaDescripcion->setNombre($data["nombre"]);
        //         $recetaDescripcion->setDescripcion($data["descripcion"]);
        //         $recetaDescripcion->setIngredientes($data["ingredientes"]);
        //         $recetaDescripcion->setSlug($data["nombre"]);
        //         $em->persist($recetaDescripcion);
        //         $em->flush();

        //         if(!empty($recetaDescripcion->getId()))
        //         {
        //             $resultado="ok";
        //         }

        //     }
        // }

        // return $this->json([
        //     'resultado' => $resultado
        // ]);

        return $this->json([
            'nombre' => $data["nombre"],
            'ingredientes' => $data["ingredientes"],
            'descripcion' => $data["descripcion"],
            'imagen' => $data["imagen"],
        ]);
    }
}
