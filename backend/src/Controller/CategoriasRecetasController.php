<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoriasRecetasController extends AbstractController
{
    /**
     * @Route("/categorias/recetas", name="app_categorias_recetas")
     */
    public function index(): Response
    {
        return $this->render('categorias_recetas/index.html.twig', [
            'controller_name' => 'CategoriasRecetasController',
        ]);
    }
}
