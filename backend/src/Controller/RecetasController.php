<?php

namespace App\Controller;

use App\Entity\Recetas;
use App\Repository\IdiomasRepository;
use App\Repository\RecetasRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RecetasController extends AbstractController
{
    /**
     * @Route("/api/recipes", name="app_recetas_index", methods={"GET"})
     * 
     */
    public function index(RecetasRepository $recetasRepository, IdiomasRepository $idiomasRepository, Request $request): Response
    {
        //?page=1&language=es&limit=12
        //recibimos los query params para realizar busquedas concretas
        $page = $request->query->get('page', 1);
        $language = $request->query->get('language');
        $limit = $request->query->get('limit', 20);
        $active = $request->query->get('active');
        $totalRegistros=0;

        if($page<=0){$page=1;}

        //Comprobamos el idioma recibido
        if(!empty($language)){
            $languageRegister = $idiomasRepository->findOneBy(['abreviatura'=>$language]);
            $language= $languageRegister->getId();
        }
        
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;

        //Consulta para recibir las recetas segun los params recibidos
        if(!empty($language)){
            $recetas = $recetasRepository->findBy(['idioma' => $language, 'activo' => $active], ['id' => 'DESC'], $limit, $offset);
            $totalRegistros = count($recetasRepository->findBy(['idioma' => $language, 'activo' => $active]));
        }
        else{
            $recetas = $recetasRepository->findBy([], ['id' => 'DESC'], $limit, $offset);
            $totalRegistros = count($recetasRepository->findBy([], ['id' => 'DESC']));
        }
        
        $resultado = [];
        foreach ($recetas as $receta){
            if($receta->getActivo()===1){$activo='Si';}else{$activo='No';}
            $imagen='';
            if(!empty($receta->getImagen()))
            {
                $imagen='http://localhost:8080/uploads/'.$receta->getImagen();
            }

            $resultado[]=[
                'id' => $receta->getId(),
                'nombre' => $receta->getNombre(),
                'slug' => $receta->getSlug(),
                'descripcion' => $receta->getDescripcion(),
                'ingredientes' => $receta->getIngredientes(),
                'idioma_id' => $receta->getIdioma()->getId(),
                'idioma' => strtoupper($receta->getIdioma()->getAbreviatura()),
                'fecha_creacion' => $receta->getFechaCreacion()->format('d-m-Y H:i'),
                'activo' => $activo,
                'imagen' => $imagen,
            ];
        }

        return $this->json([
            "result" => $resultado ,
            "count" => $totalRegistros
        ]);
    }

    /**
     * @Route("/api/recipes/{slug}", name="app_recipes_show", methods={"GET"})
     */
    public function showRecipe(RecetasRepository $recetasRepository, $slug): Response
    {
        $receta = $recetasRepository->findOneBy(['slug'=>$slug]);
        if($receta === null){
            throw $this->createNotFoundException();
        }
        
        $imagen='';
        if(!empty($receta->getImagen()))
        {
            $imagen='http://localhost:8080/uploads/'.$receta->getImagen();
        }

        $resultado[]=[
            'id' => $receta->getId(),
            'nombre' => $receta->getNombre(),
            'slug' => $receta->getSlug(),
            'descripcion' => $receta->getDescripcion(),
            'ingredientes' => $receta->getIngredientes(),
            'idioma' => $receta->getIdioma()->getId(),
            'fecha_creacion' => $receta->getFechaCreacion()->format('d-m-Y H:i'),
            'activo' => $receta->getActivo(),
            'imagen' => $imagen,
        ];

        return $this->json([
            'result' => $resultado,
        ]);
    }

    /**
     * @Route("/api/recipe/", name="app_recipes_register", methods={"POST"})
     */
    public function newRecipe(Request $request, IdiomasRepository $idiomasRepository, EntityManagerInterface $em): Response
    {
        $imagen = $request->files->get('imagen');
        $nombreImagen='';
        $nombreRequest = $request->request->get("nombre");
        $slugRequest = $request->request->get("slug");
        $idiomaRequest = $request->request->get("idioma");
        $activoRequest = $request->request->get("activo");
        $ingredientesRequest = $request->request->get("ingredientes");
        $descripcionRequest = $request->request->get("descripcion");

        //$data = $request->toArray();
        $idioma = $idiomasRepository->find($idiomaRequest);
        $resultado="ko";
        $registro='';
        if(!empty($idioma->getId())){
            if(isset($nombreRequest)){
                $receta = new Recetas();
                $receta->setActivo($activoRequest);
                $receta->setNombre($nombreRequest);
                $receta->setSlug($slugRequest);
                $receta->setIdioma($idioma);
                $receta->setDescripcion($descripcionRequest);
                $receta->setIngredientes($ingredientesRequest);
                $receta->setFechaCreacion(new \DateTime());
                $receta->setFechaModificacion(new \DateTime());

                //Subimos la imagen
                if(!empty($imagen))
                {
                    if(!empty($imagen->getClientOriginalName()))
                    {
                        $nombreImagen = uniqid().'_'.strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                        $imagen->move('uploads/', $nombreImagen);
                        $receta->setImagen($nombreImagen);
                    }
                }
    
                $em->persist($receta);
                $em->flush();
    
                $registro='';
                if(!empty($receta->getId()))
                {
                    $resultado="ok";
                    $registro=$receta->getId();
                }
            }
        }

        return $this->json([
            'result' => $resultado,
            'id' => $registro
        ]);
    }

    /**
     * @Route("/api/recipe/{id}", name="app_recipes_update", methods={"POST"})
     */
    public function updateRecipe(Request $request, IdiomasRepository $idiomasRepository, RecetasRepository $recetasRepository, EntityManagerInterface $em, $id): Response
    {
        // if (!$this->isGranted('ROLE_MODIFY')){
        //     return $this->json(['error' => "no tienes permiso"]);
        // };

        //$data = $request->toArray();
        $imagen = $request->files->get('imagen');
        $nombreImagen='';
        $nombreRequest = $request->request->get("nombre");
        $slugRequest = $request->request->get("slug");
        $idiomaRequest = $request->request->get("idioma");
        $activoRequest = $request->request->get("activo");
        $ingredientesRequest = $request->request->get("ingredientes");
        $descripcionRequest = $request->request->get("descripcion");
     
        //Comprobamos si existe el idioma
        $idioma = $idiomasRepository->find($idiomaRequest);
        //Comprobamos si existe el registro
        $receta = $recetasRepository->find($id);
        $resultado="ko";

        if(!empty($idioma->getId()))
        {
            if(!empty($receta->getId()))
            {
                $receta->setNombre($nombreRequest);
                $receta->setSlug($slugRequest);
                $receta->setDescripcion($descripcionRequest);
                $receta->setIngredientes($ingredientesRequest);
                $receta->setIdioma($idioma);
                $receta->setActivo($activoRequest);

                //Subimos la imagen al servidor
                if(!empty($imagen))
                {
                    if(!empty($imagen->getClientOriginalName()))
                    {
                        $nombreImagen = uniqid().'_'.strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                        $imagen->move('uploads/', $nombreImagen);
                        $receta->setImagen($nombreImagen);
                    }
                }
                $receta->setFechaModificacion(new \DateTime());
        
                $em->flush();

                $resultado="ok";
            }
        }
        
        return $this->json([
            'result' => $resultado,
            'id' => $receta->getId(),
        ]);
    }

    /**
     * @Route("/api/recipe/{id}/delete", name="app_recipes_delete", methods={"DELETE"})
     */
    public function deleteRecipe(RecetasRepository $recetasRepository, EntityManagerInterface $em, $id): Response
    {
        $resultado="ko";
        if(!empty($id)){
            $receta = $recetasRepository->find($id);
            $em->remove($receta);
            $em->flush();
            $resultado="ok";
        }
        
        return $this->json([
            'result' => $resultado,
        ]);
    }
}