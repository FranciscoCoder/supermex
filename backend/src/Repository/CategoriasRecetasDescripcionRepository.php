<?php

namespace App\Repository;

use App\Entity\CategoriasRecetasDescripcion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategoriasRecetasDescripcion>
 *
 * @method CategoriasRecetasDescripcion|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategoriasRecetasDescripcion|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategoriasRecetasDescripcion[]    findAll()
 * @method CategoriasRecetasDescripcion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriasRecetasDescripcionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategoriasRecetasDescripcion::class);
    }

    public function add(CategoriasRecetasDescripcion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategoriasRecetasDescripcion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CategoriasRecetasDescripcion[] Returns an array of CategoriasRecetasDescripcion objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CategoriasRecetasDescripcion
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
