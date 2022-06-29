<?php

namespace App\Controller;

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
     * @Route("/api/new", name="app_new_index", methods={"GET"})
     */
    public function index(NoticiasRepository $noticiasRepository, IdiomasRepository $idiomasRepository, Request $request): Response
    {
        //?page=1&limit=20
        
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
        
        $noticias = $noticiasRepository->findBy([], ['fecha' => 'DESC'], $limit, $offset);
        $totalRegistros = count($noticiasRepository->findBy(['idioma' => $language]));

        $resultado = [];
        foreach ($noticias as $noticia){
            $aceptar='No';
            //if($noticia->getNoticia()->getActivo()===1){$aceptar='Si';}
            $resultado[]=[
                // 'id' => $noticia->getId(),
                // 'idioma' => $noticia->getIdioma()->getId(),
                // 'nombre' => $noticia->getTitular(),
                // 'descripcion' => $noticia->getDescripcion(),
                // 'activo' => $aceptar,
                // 'imagen' => $noticia->getNoticia()->getImagen(),
                // 'fecha' => $noticia->getNoticia()->getFechaCreacion()->format('d-m-Y H:i'),
            ];
        }
        return $this->json([
            'result' => $resultado,
            'count' => $totalRegistros,
        ]);
    }

    /**
     * @Route("/api/new/{slug}", name="app_new_show", methods={"GET"})
     */
    public function showNew(NoticiasRepository $noticiasRepository, IdiomasRepository $idiomasRepository, $slug): Response
    {
        $contacto = $noticiasRepository->findOneBy(['id'=>$slug]);
        if($contacto == null){
            throw $this->createNotFoundException();
        }
        
        $resultado[]=[
            // 'id' => $contacto->getId(),
            // 'nombre' => $contacto->getNombre(),
            // 'email' => $contacto->getCorreo(),
            // 'telefono' => $contacto->getTelefono(),
            // 'mensaje' => $contacto->getMensaje(),
            // 'aceptar' => $contacto->getAceptar(),
            // 'fecha' => $contacto->getFecha(),
        ];
        return $this->json($resultado);
    }

    /**
     * @Route("/api/new", name="app_new_register", methods={"POST"})
     */
    public function newContact(Request $request, NoticiasRepository $noticiasRepository, EntityManagerInterface $em): Response
    {
        $data = $request->toArray();

        $resultado="ko";
        // if(isset($data["nombre"])){
        //     $contacto = new Contacto();
        //     $contacto->setNombre($data["nombre"]);
        //     $contacto->setFecha(new \DateTime());
        //     $contacto->setCorreo($data["correo"]);
        //     $contacto->setTelefono($data["telefono"]);
        //     $contacto->setMensaje($data["mensaje"]);
        //     $contacto->setAceptar($data["acepto"]);

        //     $em->persist($contacto);
        //     $em->flush();

        //     if(!empty($contacto->getId()))
        //     {
        //         //mail('fcommm@gmail.com', "Formulario de contacto", $contacto->getMensaje());
        //         $resultado="ok";
        //     }
        // }

        return $this->json([
            'resultado' => $resultado
        ]);
    }
}
