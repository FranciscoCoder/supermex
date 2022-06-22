<?php

namespace App\Entity;

use App\Repository\RecetasRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecetasRepository::class)
 */
class Recetas
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
     * @ORM\Column(type="string", length=255)
     */
    private $imagen;

    /**
     * @ORM\OneToOne(targetEntity=RecetasDescripcion::class, mappedBy="receta", cascade={"persist", "remove"})
     */
    private $recetasDescripcion;

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

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(string $imagen): self
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getRecetasDescripcion(): ?RecetasDescripcion
    {
        return $this->recetasDescripcion;
    }

    public function setRecetasDescripcion(RecetasDescripcion $recetasDescripcion): self
    {
        // set the owning side of the relation if necessary
        if ($recetasDescripcion->getReceta() !== $this) {
            $recetasDescripcion->setReceta($this);
        }

        $this->recetasDescripcion = $recetasDescripcion;

        return $this;
    }
}
