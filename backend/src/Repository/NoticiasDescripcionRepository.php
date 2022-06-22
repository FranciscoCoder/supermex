<?php

namespace App\Repository;

use App\Entity\NoticiasDescripcion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<NoticiasDescripcion>
 *
 * @method NoticiasDescripcion|null find($id, $lockMode = null, $lockVersion = null)
 * @method NoticiasDescripcion|null findOneBy(array $criteria, array $orderBy = null)
 * @method NoticiasDescripcion[]    findAll()
 * @method NoticiasDescripcion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NoticiasDescripcionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NoticiasDescripcion::class);
    }

    public function add(NoticiasDescripcion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(NoticiasDescripcion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return NoticiasDescripcion[] Returns an array of NoticiasDescripcion objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('n')
//            ->andWhere('n.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('n.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?NoticiasDescripcion
//    {
//        return $this->createQueryBuilder('n')
//            ->andWhere('n.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
