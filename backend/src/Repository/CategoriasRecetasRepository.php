<?php

namespace App\Repository;

use App\Entity\CategoriasRecetas;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategoriasRecetas>
 *
 * @method CategoriasRecetas|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategoriasRecetas|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategoriasRecetas[]    findAll()
 * @method CategoriasRecetas[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriasRecetasRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategoriasRecetas::class);
    }

    public function add(CategoriasRecetas $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategoriasRecetas $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CategoriasRecetas[] Returns an array of CategoriasRecetas objects
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

//    public function findOneBySomeField($value): ?CategoriasRecetas
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
