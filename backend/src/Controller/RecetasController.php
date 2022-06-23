<?php

namespace App\Controller;

use App\Repository\RecetasDescripcionRepository;
use App\Repository\RecetasRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function index(RecetasRepository $recetasRepository, RecetasDescripcionRepository $recetasDescripcionRepository): Response
    {
        $recetas = $recetasRepository->findAll();
        $resultado = [];
        foreach ($recetas as $receta){
            // $recetasDescripcion= $recetasDescripcionRepository->findBy(['receta_id' => $receta->getId()]);
            // $textosResultados = [];

            // foreach($recetasDescripcion as $recetasTextos)
            // {
            //     $textosResultados[] = [
            //         "id" => $recetasTextos->getId(),
            //         "idioma" => $recetasTextos->getIdioma(),
            //         "nombre" => $recetasTextos->getNombre(),
            //         "descripcion" => $recetasTextos->getDescripcion(),
            //         "ingredientes" => $recetasTextos->getIngredientes(),
            //     ];
            // }

            $resultado[]=[
                'id' => $receta->getId(),
                'fecha_creacion' => $receta->getFechaCreacion(),
                'fecha_modificacion' => $receta->getFechaModificacion(),
                'activo' => $receta->getActivo(),
                'imagen' => $receta->getImagen(),
            ];
        }

        return $this->json([
            'result' => $resultado
        ]);
    }
}
