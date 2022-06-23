<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/categories-recipes")
 */
class CategoriasRecetasController extends AbstractController
{
    /**
     * @Route("/", name="app_categorias_recetas_index", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->render('categorias_recetas/index.html.twig', [
            'controller_name' => 'CategoriasRecetasController',
        ]);
    }
}
