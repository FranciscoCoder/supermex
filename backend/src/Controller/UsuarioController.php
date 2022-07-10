<?php

namespace App\Controller;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class UsuarioController extends AbstractController
{
    /**
     * @Route("/api/users", name="app_users_index", methods={"GET"})
     */
    public function index(UsuarioRepository $usuarioRepository, Request $request): Response
    {
        $page = $request->query->get('page', 1);
        $limit = $request->query->get('limit', 20);

        if($page<=0){$page=1;}

        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;

        $usuarios = $usuarioRepository->findBy([], ['id' => 'DESC'], $limit, $offset);
        $totalRegistros = count($usuarios);
        $resultado = [];

        foreach ($usuarios as $usuario){
            $resultado[]=[
                'id' => $usuario->getId(),
                'nombre' => $usuario->getNombre(),
                'usuario' => $usuario->getUserIdentifier(),
                'rol' => $usuario->getRoles(),
                'fecha_creacion' => $usuario->getFechaCreacion()->format('d-m-Y H:i'),
            ];
        }
        
        return $this->json([
            "result" => $resultado ,
            "count" => $totalRegistros
        ]);
    }

    /**
     * @Route("/api/users/{id}", name="app_users_show", methods={"GET"})
     */
    public function showUser(UsuarioRepository $usuarioRepository, $id): Response
    {
        $usuario = $usuarioRepository->find($id);
        if($usuario === null){
            throw $this->createNotFoundException();
        }

        $resultado[]=[
            'id' => $usuario->getId(),
            'nombre' => $usuario->getNombre(),
            'usuario' => $usuario->getUserIdentifier(),
            'rol' => $usuario->getRoles(),
            'fecha_creacion' => $usuario->getFechaCreacion()->format('d-m-Y H:i')
        ];

        return $this->json([
            'result' => $resultado,
        ]);
    }

    /**
     * @Route("/api/verify_token", name="app_users_verify", methods={"POST"})
     */
    public function verifyToken(): Response
    {
        $resultado="ok";
        if((!$this->isGranted('ROLE_SUPERADMIN'))&&(!$this->isGranted('ROLE_ADMIN'))&&(!$this->isGranted('ROLE_USER'))) {
            $resultado="ko";
        }

        return $this->json([
            'result' => $resultado,
        ]);
    }

    /**
     * @Route("/api/user/", name="app_user_register", methods={"POST"})
     */
    public function newUser(Request $request, UsuarioRepository $usuarioRepository, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $em): Response
    {
        $nombreRequest = $request->request->get("nombre");
        $usuarioRequest = $request->request->get("usuario");
        $rolRequest = $request->request->get("rol");
        $passwordRequest = $request->request->get("password");

        //$data = $request->toArray();
        $resultado="ko";
        $registro='';

        if((!empty($usuarioRequest))&&(!empty($passwordRequest))){
            $verifyUser= $usuarioRepository->findBy(['username'=>$usuarioRequest]);
            $registro='ko';
            if(count($verifyUser)>0){
                $registro="0";
            }
            else{
                $usuario = new Usuario();
                $usuario->setNombre($nombreRequest);
                $usuario->setUsername($usuarioRequest);
                $usuario->setRoles([$rolRequest]);
    
                if(!empty($passwordRequest))
                {
                    $hashedPassword = $passwordHasher->hashPassword(
                        $usuario,
                        $passwordRequest
                    );
                    $usuario->setPassword($hashedPassword);
                }
                
                $usuario->setFechaCreacion(new \DateTime());
    
                $em->persist($usuario);
                $em->flush();
    
                if(!empty($usuario->getId()))
                {
                    $resultado="ok";
                    $registro=$usuario->getId();
                }
            }
        }

        return $this->json([
            'result' => $resultado,
            'id' => $registro
        ]);
    }

    /**
     * @Route("/api/user/{id}", name="app_user_update", methods={"PUT"})
     */
    public function updateUser(Request $request, UsuarioRepository $usuarioRepository, UserPasswordHasherInterface $passwordHasher,EntityManagerInterface $em, $id): Response
    {
        $nombreRequest = $request->request->get("nombre");
        $usuarioRequest = $request->request->get("usuario");
        $rolRequest = $request->request->get("rol");
        $passwordRequest = $request->request->get("password");

        //Comprobamos si existe el registro
        $usuario = $usuarioRepository->find($id);
        $resultado="ko";

        if(!empty($usuario->getId()))
        {
            $usuario->setNombre($nombreRequest);
            $usuario->setUsername($usuarioRequest);
            $usuario->setRoles([$rolRequest]);
            
            if(!empty($passwordRequest))
            {
                $hashedPassword = $passwordHasher->hashPassword(
                    $usuario,
                    $passwordRequest
                );
                $usuario->setPassword($hashedPassword);
            }
            $em->flush();

            $resultado="ok";
        }
        
        return $this->json([
            'result' => $resultado,
            'id' => $usuario->getId(),
        ]);
    }

    /**
     * @Route("/api/user/{id}/delete", name="app_user_delete", methods={"DELETE"})
     */
    public function deleteUser(UsuarioRepository $usuarioRepository, EntityManagerInterface $em, $id): Response
    {
        // if(!$this->isGranted('ROLE_DELETE')) {
        //     return $this->json('No has dicho la palabra mágica ah aa h.');
        // }

        $resultado="ko";
        if(!empty($id)){
            $receta = $usuarioRepository->find($id);
            $em->remove($receta);
            $em->flush();
            $resultado="ok";
        }
        
        return $this->json([
            'result' => $resultado,
        ]);
    }
}