<?php

namespace App\Entity;

use App\Repository\RecetasDescripcionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecetasDescripcionRepository::class)
 */
class RecetasDescripcion
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
    private $nombre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\Column(type="text")
     */
    private $ingredientes;

    /**
     * @ORM\ManyToOne(targetEntity=Recetas::class, inversedBy="recetasDescripcion", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $receta;

    /**
     * @ORM\ManyToOne(targetEntity=Idiomas::class, inversedBy="recetasDescripcion", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $idioma;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getIngredientes(): ?string
    {
        return $this->ingredientes;
    }

    public function setIngredientes(string $ingredientes): self
    {
        $this->ingredientes = $ingredientes;

        return $this;
    }

    public function getReceta(): ?Recetas
    {
        return $this->receta;
    }

    public function setReceta(Recetas $receta): self
    {
        $this->receta = $receta;

        return $this;
    }

    public function getIdioma(): ?Idiomas
    {
        return $this->idioma;
    }

    public function setIdioma(Idiomas $idioma): self
    {
        $this->idioma = $idioma;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }
}
