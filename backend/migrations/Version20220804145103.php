<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220804145103 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE recetas_productos (id INT AUTO_INCREMENT NOT NULL, recetas_id INT NOT NULL, producto_id INT NOT NULL, INDEX IDX_175A6A4C54433F58 (recetas_id), INDEX IDX_175A6A4C7645698E (producto_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE recetas_productos ADD CONSTRAINT FK_175A6A4C54433F58 FOREIGN KEY (recetas_id) REFERENCES recetas (id)');
        $this->addSql('ALTER TABLE recetas_productos ADD CONSTRAINT FK_175A6A4C7645698E FOREIGN KEY (producto_id) REFERENCES productos (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE recetas_productos');
    }
}
