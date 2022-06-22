<?php

namespace App\Entity;

use App\Repository\IdiomasRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=IdiomasRepository::class)
 */
class Idiomas
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $idioma;

    /**
     * @ORM\Column(type="string", length=3)
     */
    private $abreviatura;

    /**
     * @ORM\Column(type="integer")
     */
    private $activo;

    /**
     * @ORM\OneToOne(targetEntity=CategoriasRecetasDescripcion::class, mappedBy="idioma", cascade={"persist", "remove"})
     */
    private $categoriasRecetasDescripcion;

    /**
     * @ORM\OneToOne(targetEntity=RecetasDescripcion::class, mappedBy="idioma", cascade={"persist", "remove"})
     */
    private $recetasDescripcion;

    /**
     * @ORM\OneToOne(targetEntity=NoticiasDescripcion::class, mappedBy="idioma", cascade={"persist", "remove"})
     */
    private $noticiasDescripcion;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdioma(): ?string
    {
        return $this->idioma;
    }

    public function setIdioma(string $idioma): self
    {
        $this->idioma = $idioma;

        return $this;
    }

    public function getAbreviatura(): ?string
    {
        return $this->abreviatura;
    }

    public function setAbreviatura(string $abreviatura): self
    {
        $this->abreviatura = $abreviatura;

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

    public function getCategoriasRecetasDescripcion(): ?CategoriasRecetasDescripcion
    {
        return $this->categoriasRecetasDescripcion;
    }

    public function setCategoriasRecetasDescripcion(CategoriasRecetasDescripcion $categoriasRecetasDescripcion): self
    {
        // set the owning side of the relation if necessary
        if ($categoriasRecetasDescripcion->getIdioma() !== $this) {
            $categoriasRecetasDescripcion->setIdioma($this);
        }

        $this->categoriasRecetasDescripcion = $categoriasRecetasDescripcion;

        return $this;
    }

    public function getRecetasDescripcion(): ?RecetasDescripcion
    {
        return $this->recetasDescripcion;
    }

    public function setRecetasDescripcion(RecetasDescripcion $recetasDescripcion): self
    {
        // set the owning side of the relation if necessary
        if ($recetasDescripcion->getIdioma() !== $this) {
            $recetasDescripcion->setIdioma($this);
        }

        $this->recetasDescripcion = $recetasDescripcion;

        return $this;
    }

    public function getNoticiasDescripcion(): ?NoticiasDescripcion
    {
        return $this->noticiasDescripcion;
    }

    public function setNoticiasDescripcion(NoticiasDescripcion $noticiasDescripcion): self
    {
        // set the owning side of the relation if necessary
        if ($noticiasDescripcion->getIdioma() !== $this) {
            $noticiasDescripcion->setIdioma($this);
        }

        $this->noticiasDescripcion = $noticiasDescripcion;

        return $this;
    }
}
