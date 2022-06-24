<?php

namespace App\Entity;

use App\Repository\NoticiasDescripcionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NoticiasDescripcionRepository::class)
 */
class NoticiasDescripcion
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
    private $titular;

    /**
     * @ORM\Column(type="text")
     */
    private $descripcion;

    /**
     * @ORM\ManyToOne(targetEntity=Noticias::class, inversedBy="noticiasDescripcions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $noticia;

    /**
     * @ORM\ManyToOne(targetEntity=Idiomas::class, inversedBy="noticiasDescripcion", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $idioma;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitular(): ?string
    {
        return $this->titular;
    }

    public function setTitular(string $titular): self
    {
        $this->titular = $titular;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(string $descripcion): self
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getNoticia(): ?Noticias
    {
        return $this->noticia;
    }

    public function setNoticia(?Noticias $noticia): self
    {
        $this->noticia = $noticia;

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
