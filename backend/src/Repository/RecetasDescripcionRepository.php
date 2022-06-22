<?php

namespace App\Repository;

use App\Entity\RecetasDescripcion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RecetasDescripcion>
 *
 * @method RecetasDescripcion|null find($id, $lockMode = null, $lockVersion = null)
 * @method RecetasDescripcion|null findOneBy(array $criteria, array $orderBy = null)
 * @method RecetasDescripcion[]    findAll()
 * @method RecetasDescripcion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RecetasDescripcionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RecetasDescripcion::class);
    }

    public function add(RecetasDescripcion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(RecetasDescripcion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return RecetasDescripcion[] Returns an array of RecetasDescripcion objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RecetasDescripcion
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
