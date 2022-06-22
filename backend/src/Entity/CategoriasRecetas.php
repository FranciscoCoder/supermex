<?php

namespace App\Entity;

use App\Repository\CategoriasRecetasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoriasRecetasRepository::class)
 */
class CategoriasRecetas
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $activo;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fecha_creacion;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fecha_modificacion;

    /**
     * @ORM\OneToMany(targetEntity=CategoriasRecetasDescripcion::class, mappedBy="categoria")
     */
    private $categoriasRecetasDescripcions;

    public function __construct()
    {
        $this->categoriasRecetasDescripcions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActivo(): ?int
    {
        return $this->activo;
    }

    public function setActivo(int $activo): self
    {
        $this->activo = $activo;

        return $this;
    }

    public function getFechaCreacion(): ?\DateTimeInterface
    {
        return $this->fecha_creacion;
    }

    public function setFechaCreacion(\DateTimeInterface $fecha_creacion): self
    {
        $this->fecha_creacion = $fecha_creacion;

        return $this;
    }

    public function getFechaModificacion(): ?\DateTimeInterface
    {
        return $this->fecha_modificacion;
    }

    public function setFechaModificacion(\DateTimeInterface $fecha_modificacion): self
    {
        $this->fecha_modificacion = $fecha_modificacion;

        return $this;
    }

    /**
     * @return Collection<int, CategoriasRecetasDescripcion>
     */
    public function getCategoriasRecetasDescripcions(): Collection
    {
        return $this->categoriasRecetasDescripcions;
    }

    public function addCategoriasRecetasDescripcion(CategoriasRecetasDescripcion $categoriasRecetasDescripcion): self
    {
        if (!$this->categoriasRecetasDescripcions->contains($categoriasRecetasDescripcion)) {
            $this->categoriasRecetasDescripcions[] = $categoriasRecetasDescripcion;
            $categoriasRecetasDescripcion->setCategoria($this);
        }

        return $this;
    }

    public function removeCategoriasRecetasDescripcion(CategoriasRecetasDescripcion $categoriasRecetasDescripcion): self
    {
        if ($this->categoriasRecetasDescripcions->removeElement($categoriasRecetasDescripcion)) {
            // set the owning side to null (unless already changed)
            if ($categoriasRecetasDescripcion->getCategoria() === $this) {
                $categoriasRecetasDescripcion->setCategoria(null);
            }
        }

        return $this;
    }
}
