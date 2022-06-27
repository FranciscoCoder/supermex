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
    public function index(ContactoRepository $contactoRepository): Response
    {
        $contactos = $contactoRepository->findAll();
        $resultado = [];
        foreach ($contactos as $contacto){
            $resultado[]=[
                'id' => $contacto->getId(),
                'nombre' => $contacto->getNombre(),
                'email' => $contacto->getCorreo(),
                'telefono' => $contacto->getTelefono(),
                'mensaje' => $contacto->getMensaje(),
                'aceptar' => $contacto->getAceptar(),
                'fecha' => $contacto->getFecha(),
            ];
        }
        return $this->json([
            'result' => $resultado
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
