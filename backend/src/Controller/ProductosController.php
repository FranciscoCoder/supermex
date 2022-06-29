<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductosController extends AbstractController
{
    /**
     * @Route("/api/products", name="app_productos_index", methods={"GET"})
     */
    public function index(): Response
    {
        $resultado=[];
        $totalRegistros=0;
        return $this->json([
            "result" => $resultado ,
            "count" => $totalRegistros
        ]);
    }
}
