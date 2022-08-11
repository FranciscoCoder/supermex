<?php

namespace App\Entity;

use App\Repository\RecetasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\Column(type="string", length=255)
     */
    private $nombre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $ingredientes;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $imagen;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fecha_creacion;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fecha_modificacion;

    /**
     * @ORM\Column(type="integer")
     */
    private $activo;

    /**
     * @ORM\ManyToOne(targetEntity=Idiomas::class, inversedBy="recetas")
     * @ORM\JoinColumn(nullable=false)
     */
    private $idioma;

    /**
     * @ORM\Column(type="text")
     */
    private $slug;

    /**
     * @ORM\OneToMany(targetEntity=RecetasProductos::class, mappedBy="recetas")
     */
    private $recetasProductos;

    public function __construct()
    {
        $this->recetasProductos = new ArrayCollection();
    }

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

    public function setIngredientes(?string $ingredientes): self
    {
        $this->ingredientes = $ingredientes;

        return $this;
    }

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(?string $imagen): self
    {
        $this->imagen = $imagen;

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

    public function getActivo(): ?int
    {
        return $this->activo;
    }

    public function setActivo(int $activo): self
    {
        $this->activo = $activo;

        return $this;
    }

    public function getIdioma(): ?Idiomas
    {
        return $this->idioma;
    }

    public function setIdioma(?Idiomas $idioma): self
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

    /**
     * @return Collection<int, RecetasProductos>
     */
    public function getRecetasProductos(): Collection
    {
        return $this->recetasProductos;
    }

    public function addRecetasProducto(RecetasProductos $recetasProducto): self
    {
        if (!$this->recetasProductos->contains($recetasProducto)) {
            $this->recetasProductos[] = $recetasProducto;
            $recetasProducto->setRecetas($this);
        }

        return $this;
    }

    public function removeRecetasProducto(RecetasProductos $recetasProducto): self
    {
        if ($this->recetasProductos->removeElement($recetasProducto)) {
            // set the owning side to null (unless already changed)
            if ($recetasProducto->getRecetas() === $this) {
                $recetasProducto->setRecetas(null);
            }
        }

        return $this;
    }
}
