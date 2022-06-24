<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220624151155 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorias_recetas_descripcion DROP INDEX UNIQ_6D27A15EDEDC0611, ADD INDEX IDX_6D27A15EDEDC0611 (idioma_id)');
        $this->addSql('ALTER TABLE noticias_descripcion DROP INDEX UNIQ_76C2F2E5DEDC0611, ADD INDEX IDX_76C2F2E5DEDC0611 (idioma_id)');
        $this->addSql('ALTER TABLE recetas_descripcion DROP INDEX UNIQ_A9AA014FDEDC0611, ADD INDEX IDX_A9AA014FDEDC0611 (idioma_id)');
        $this->addSql('ALTER TABLE recetas_descripcion ADD slug VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorias_recetas_descripcion DROP INDEX IDX_6D27A15EDEDC0611, ADD UNIQUE INDEX UNIQ_6D27A15EDEDC0611 (idioma_id)');
        $this->addSql('ALTER TABLE noticias_descripcion DROP INDEX IDX_76C2F2E5DEDC0611, ADD UNIQUE INDEX UNIQ_76C2F2E5DEDC0611 (idioma_id)');
        $this->addSql('ALTER TABLE recetas_descripcion DROP INDEX IDX_A9AA014FDEDC0611, ADD UNIQUE INDEX UNIQ_A9AA014FDEDC0611 (idioma_id)');
        $this->addSql('ALTER TABLE recetas_descripcion DROP slug');
    }
}
