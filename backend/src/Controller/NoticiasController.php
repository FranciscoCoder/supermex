<?php

namespace App\Controller;

use App\Repository\IdiomasRepository;
use App\Repository\NoticiasRepository;
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
        $language = $request->query->get('language', "es");
        $limit = $request->query->get('limit', 20);

        if($page<=0){$page=1;}

        //Comprobamos el idioma recibido
        $languageRegister = $idiomasRepository->findOneBy(['abreviatura'=>$language]);
        $language= $languageRegister->getId();
        
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;

        //Consulta para recibir las noticias segun los params recibidos
        $noticias = $noticiasRepository->findBy(['idioma' => $language], ['id' => 'DESC'], $limit, $offset);
        $totalRegistros = count($noticiasRepository->findBy(['idioma' => $language]));
        $resultado = [];
        foreach ($noticias as $noticia){
            if($noticia->getActivo()===1){$activo='Si';}else{$activo='No';}

            $resultado[]=[
                'id' => $noticia->getId(),
                'nombre' => $noticia->getTitular(),
                'slug' => $noticia->getSlug(),
                'descripcion' => $noticia->getDescripcion(),
                'idioma' => $noticia->getIdioma()->getId(),
                'fecha_creacion' => $noticia->getFechaCreacion()->format('Y-m-d H:i:s'),
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
    public function showRecipe(NoticiasRepository $noticiasRepository, $slug): Response
    {
        $noticia = $noticiasRepository->findOneBy(['slug'=>$slug]);
        if($noticia == null){
            throw $this->createNotFoundException();
        }
        
        $resultado[]=[
            'id' => $noticia->getId(),
            'nombre' => $noticia->getTitular(),
            'slug' => $noticia->getSlug(),
            'descripcion' => $noticia->getDescripcion(),
            'idioma' => $noticia->getIdioma()->getId(),
            'fecha_creacion' => $noticia->getFechaCreacion()->format('Y-m-d H:i:s'),
            'activo' => $noticia->getActivo(),
            'imagen' => $noticia->getImagen(),
        ];

        return $this->json($resultado);
    }
}