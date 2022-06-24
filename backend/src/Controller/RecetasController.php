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

/**
 * @Route("/api/recipes")
 */
class RecetasController extends AbstractController
{
    /**
     * @Route("/", name="app_recipes_index", methods={"GET"})
     */
    public function index(RecetasDescripcionRepository $recetasDescripcionRepository): Response
    {
        $recetas = $recetasDescripcionRepository->findAll();
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
     * @Route("/recipe/{slug}", name="app_recipes_recipe", methods={"GET"})
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
     * @Route("/recipe", name="app_recipes_new_recipe", methods={"POST"})
     */
    public function newRecipe(Request $request, IdiomasRepository $idiomasRepository, EntityManagerInterface $em): Response
    {
        $data = $request->toArray();

        $idioma = $idiomasRepository->find(1);
        $resultado="ko";
        if(isset($data["titulo"])){
            $receta = new Recetas();
            $receta->setActivo(1);
            $receta->setFechaCreacion(new \DateTime());
            $receta->setFechaModificacion(new \DateTime());
            $receta->setImagen('');

            $em->persist($receta);
            $em->flush();

            if(!empty($receta->getId())){
                $recetaDescripcion = new RecetasDescripcion();
                $recetaDescripcion->setReceta($receta);
                $recetaDescripcion->setIdioma($idioma);
                $recetaDescripcion->setNombre($data["titulo"]);
                $recetaDescripcion->setDescripcion($data["descripcion"]);
                $recetaDescripcion->setIngredientes($data["ingredientes"]);
                $recetaDescripcion->setSlug($data["slug"]);
                $em->persist($recetaDescripcion);
                $em->flush();

                if(!empty($recetaDescripcion->getId()))
                {
                    $resultado="ok";
                }

            }
        }

        return $this->json([
            'resultado' => $resultado
        ]);
    }
}
