<?php

namespace App\Controller;

use App\Entity\Contacto;
use App\Repository\ContactoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactoController extends AbstractController
{
    /**
     * @Route("/api/contact", name="app_contact_index", methods={"GET"})
     */
    public function index(ContactoRepository $contactoRepository, Request $request): Response
    {
        //?page=1&limit=20
        
        //recibimos los query params para realizar busquedas concretas
        $page = $request->query->get('page', 1);
        $limit = $request->query->get('limit', 20);

        if($page<=0){$page=1;}

        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;
        
        $contactos = $contactoRepository->findBy([], ['fecha' => 'DESC'], $limit, $offset);
        $totalRegistros = count($contactoRepository->findAll());
        $resultado = [];
        foreach ($contactos as $contacto){
            $aceptar='No';
            if($contacto->getAceptar()===1){$aceptar='Si';}
            $resultado[]=[
                'id' => $contacto->getId(),
                'nombre' => $contacto->getNombre(),
                'email' => $contacto->getCorreo(),
                'telefono' => $contacto->getTelefono(),
                'mensaje' => $contacto->getMensaje(),
                'aceptar' => $aceptar,
                'fecha' => $contacto->getFecha()->format('d-m-Y H:i'),
            ];
        }
        return $this->json([
            'result' => $resultado,
            'count' => $totalRegistros,
        ]);
    }

    /**
     * @Route("/api/contact/{slug}", name="app_contact_register", methods={"GET"})
     */
    public function showContact(contactoRepository $contactoRepository, $slug): Response
    {
        $contacto = $contactoRepository->findOneBy(['id'=>$slug]);
        if($contacto == null){
            throw $this->createNotFoundException();
        }
        
        $resultado[]=[
            'id' => $contacto->getId(),
            'nombre' => $contacto->getNombre(),
            'email' => $contacto->getCorreo(),
            'telefono' => $contacto->getTelefono(),
            'mensaje' => $contacto->getMensaje(),
            'aceptar' => $contacto->getAceptar(),
            'fecha' => $contacto->getFecha(),
        ];
        return $this->json($resultado);
    }

    /**
     * @Route("/api/contact", name="app_contact_new_contact", methods={"POST"})
     */
    public function newContact(Request $request, contactoRepository $contactoRepository, EntityManagerInterface $em): Response
    {
        $data = $request->toArray();

        $resultado="ko";
        if(isset($data["nombre"])){
            $contacto = new Contacto();
            $contacto->setNombre($data["nombre"]);
            $contacto->setFecha(new \DateTime());
            $contacto->setCorreo($data["correo"]);
            $contacto->setTelefono($data["telefono"]);
            $contacto->setMensaje($data["mensaje"]);
            $contacto->setAceptar($data["acepto"]);

            $em->persist($contacto);
            $em->flush();

            if(!empty($contacto->getId()))
            {
                //mail('fcommm@gmail.com', "Formulario de contacto", $contacto->getMensaje());
                $resultado="ok";
            }
        }

        return $this->json([
            'resultado' => $resultado
        ]);
    }
}
