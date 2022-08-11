<?php

namespace App\Entity;

use App\Repository\ProductosRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductosRepository::class)
 */
class Productos
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
     * @ORM\Column(type="string", length=255)
     */
    private $imagen;

    /**
     * @ORM\ManyToOne(targetEntity=idiomas::class, inversedBy="productos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $idioma;

    /**
     * @ORM\OneToMany(targetEntity=RecetasProductos::class, mappedBy="producto")
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

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(string $imagen): self
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getIdioma(): ?idiomas
    {
        return $this->idioma;
    }

    public function setIdioma(?idiomas $idioma): self
    {
        $this->idioma = $idioma;

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
            $recetasProducto->setProducto($this);
        }

        return $this;
    }

    public function removeRecetasProducto(RecetasProductos $recetasProducto): self
    {
        if ($this->recetasProductos->removeElement($recetasProducto)) {
            // set the owning side to null (unless already changed)
            if ($recetasProducto->getProducto() === $this) {
                $recetasProducto->setProducto(null);
            }
        }

        return $this;
    }
}
