<?php

namespace App\Entity;

use App\Repository\NoticiasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NoticiasRepository::class)
 */
class Noticias
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imagen;

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
     * @ORM\OneToMany(targetEntity=NoticiasDescripcion::class, mappedBy="noticia")
     */
    private $noticiasDescripcions;

    public function __construct()
    {
        $this->noticiasDescripcions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
     * @return Collection<int, NoticiasDescripcion>
     */
    public function getNoticiasDescripcions(): Collection
    {
        return $this->noticiasDescripcions;
    }

    public function addNoticiasDescripcion(NoticiasDescripcion $noticiasDescripcion): self
    {
        if (!$this->noticiasDescripcions->contains($noticiasDescripcion)) {
            $this->noticiasDescripcions[] = $noticiasDescripcion;
            $noticiasDescripcion->setNoticia($this);
        }

        return $this;
    }

    public function removeNoticiasDescripcion(NoticiasDescripcion $noticiasDescripcion): self
    {
        if ($this->noticiasDescripcions->removeElement($noticiasDescripcion)) {
            // set the owning side to null (unless already changed)
            if ($noticiasDescripcion->getNoticia() === $this) {
                $noticiasDescripcion->setNoticia(null);
            }
        }

        return $this;
    }
}
