<?php

namespace App\Entity;

use App\Repository\IdiomasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\Column(type="string", length=3)
     */
    private $abreviatura;

    /**
     * @ORM\OneToMany(targetEntity=Recetas::class, mappedBy="idioma")
     */
    private $recetas;

    /**
     * @ORM\OneToMany(targetEntity=Noticias::class, mappedBy="idioma")
     */
    private $noticias;

    public function __construct()
    {
        $this->recetas = new ArrayCollection();
        $this->noticias = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection<int, Recetas>
     */
    public function getRecetas(): Collection
    {
        return $this->recetas;
    }

    public function addReceta(Recetas $receta): self
    {
        if (!$this->recetas->contains($receta)) {
            $this->recetas[] = $receta;
            $receta->setIdioma($this);
        }

        return $this;
    }

    public function removeReceta(Recetas $receta): self
    {
        if ($this->recetas->removeElement($receta)) {
            // set the owning side to null (unless already changed)
            if ($receta->getIdioma() === $this) {
                $receta->setIdioma(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Noticias>
     */
    public function getNoticias(): Collection
    {
        return $this->noticias;
    }

    public function addNoticia(Noticias $noticia): self
    {
        if (!$this->noticias->contains($noticia)) {
            $this->noticias[] = $noticia;
            $noticia->setIdioma($this);
        }

        return $this;
    }

    public function removeNoticia(Noticias $noticia): self
    {
        if ($this->noticias->removeElement($noticia)) {
            // set the owning side to null (unless already changed)
            if ($noticia->getIdioma() === $this) {
                $noticia->setIdioma(null);
            }
        }

        return $this;
    }
}
