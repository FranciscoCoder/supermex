<?php

namespace App\Entity;

use App\Repository\RecetasProductosRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecetasProductosRepository::class)
 */
class RecetasProductos
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Recetas::class, inversedBy="recetasProductos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $recetas;

    /**
     * @ORM\ManyToOne(targetEntity=Productos::class, inversedBy="recetasProductos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $producto;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRecetas(): ?Recetas
    {
        return $this->recetas;
    }

    public function setRecetas(?Recetas $recetas): self
    {
        $this->recetas = $recetas;

        return $this;
    }

    public function getProducto(): ?Productos
    {
        return $this->producto;
    }

    public function setProducto(?Productos $producto): self
    {
        $this->producto = $producto;

        return $this;
    }
}
