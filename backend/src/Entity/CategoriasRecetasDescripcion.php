<?php

namespace App\Entity;

use App\Repository\CategoriasRecetasDescripcionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoriasRecetasDescripcionRepository::class)
 */
class CategoriasRecetasDescripcion
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
     * @ORM\ManyToOne(targetEntity=CategoriasRecetas::class, inversedBy="categoriasRecetasDescripcions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $categoria;

    /**
     * @ORM\OneToOne(targetEntity=Idiomas::class, inversedBy="categoriasRecetasDescripcion", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $idioma;

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

    public function getCategoria(): ?CategoriasRecetas
    {
        return $this->categoria;
    }

    public function setCategoria(?CategoriasRecetas $categoria): self
    {
        $this->categoria = $categoria;

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
}
