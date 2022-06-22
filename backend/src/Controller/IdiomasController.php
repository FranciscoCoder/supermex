<?php

namespace App\Controller;

use App\Repository\IdiomasRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IdiomasController extends AbstractController
{
    /**
     * @Route("/idiomas", name="app_idiomas", methods={"GET"})
     */
    public function index(IdiomasRepository $idiomasRepository): Response
    {
        $idiomas = $idiomasRepository->findAll();
        $resultado = [];
        foreach ($idiomas as $idioma){
            $resultado[]=[
                'id' => $idioma->getId(),
                'abreviatura' => $idioma->getAbreviatura(),
            ];
        }

        return $this->json([
            'result' => $resultado
        ]);
    }

    /**
     * @Route("/idiomas/activos", name="app_idiomas_activos", methods={"GET"})
     */
    public function activosIdioma(Request $request, IdiomasRepository $idiomasRepository): Response
    {
        // /idiomas/?activate=1
        $idiomas = $idiomasRepository->findBy(['activo'=>1]);
        $resultado = [];
        foreach ($idiomas as $idioma){
            $resultado[]=[
                'id' => $idioma->getId(),
                'abreviatura' => $idioma->getAbreviatura(),
            ];
        }

        return $this->json([
            'result' => $resultado
        ]);
    }
}
