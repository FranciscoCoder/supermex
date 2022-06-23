<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220623150347 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorias_recetas (id INT AUTO_INCREMENT NOT NULL, activo INT NOT NULL, fecha_creacion DATETIME NOT NULL, fecha_modificacion DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorias_recetas_descripcion (id INT AUTO_INCREMENT NOT NULL, categoria_id INT NOT NULL, idioma_id INT NOT NULL, nombre VARCHAR(255) NOT NULL, INDEX IDX_6D27A15E3397707A (categoria_id), UNIQUE INDEX UNIQ_6D27A15EDEDC0611 (idioma_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE idiomas (id INT AUTO_INCREMENT NOT NULL, idioma VARCHAR(50) NOT NULL, abreviatura VARCHAR(3) NOT NULL, activo INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE noticias (id INT AUTO_INCREMENT NOT NULL, imagen VARCHAR(255) NOT NULL, activo INT NOT NULL, fecha_creacion DATETIME NOT NULL, fecha_modificacion DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE noticias_descripcion (id INT AUTO_INCREMENT NOT NULL, noticia_id INT NOT NULL, idioma_id INT NOT NULL, titular VARCHAR(255) NOT NULL, descripcion LONGTEXT NOT NULL, INDEX IDX_76C2F2E599926010 (noticia_id), UNIQUE INDEX UNIQ_76C2F2E5DEDC0611 (idioma_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recetas (id INT AUTO_INCREMENT NOT NULL, activo INT NOT NULL, fecha_creacion DATETIME NOT NULL, fecha_modificacion DATETIME NOT NULL, imagen VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recetas_descripcion (id INT AUTO_INCREMENT NOT NULL, receta_id INT NOT NULL, idioma_id INT NOT NULL, nombre VARCHAR(255) NOT NULL, descripcion LONGTEXT DEFAULT NULL, ingredientes LONGTEXT NOT NULL, INDEX IDX_A9AA014F54F853F8 (receta_id), UNIQUE INDEX UNIQ_A9AA014FDEDC0611 (idioma_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categorias_recetas_descripcion ADD CONSTRAINT FK_6D27A15E3397707A FOREIGN KEY (categoria_id) REFERENCES categorias_recetas (id)');
        $this->addSql('ALTER TABLE categorias_recetas_descripcion ADD CONSTRAINT FK_6D27A15EDEDC0611 FOREIGN KEY (idioma_id) REFERENCES idiomas (id)');
        $this->addSql('ALTER TABLE noticias_descripcion ADD CONSTRAINT FK_76C2F2E599926010 FOREIGN KEY (noticia_id) REFERENCES noticias (id)');
        $this->addSql('ALTER TABLE noticias_descripcion ADD CONSTRAINT FK_76C2F2E5DEDC0611 FOREIGN KEY (idioma_id) REFERENCES idiomas (id)');
        $this->addSql('ALTER TABLE recetas_descripcion ADD CONSTRAINT FK_A9AA014F54F853F8 FOREIGN KEY (receta_id) REFERENCES recetas (id)');
        $this->addSql('ALTER TABLE recetas_descripcion ADD CONSTRAINT FK_A9AA014FDEDC0611 FOREIGN KEY (idioma_id) REFERENCES idiomas (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorias_recetas_descripcion DROP FOREIGN KEY FK_6D27A15E3397707A');
        $this->addSql('ALTER TABLE categorias_recetas_descripcion DROP FOREIGN KEY FK_6D27A15EDEDC0611');
        $this->addSql('ALTER TABLE noticias_descripcion DROP FOREIGN KEY FK_76C2F2E5DEDC0611');
        $this->addSql('ALTER TABLE recetas_descripcion DROP FOREIGN KEY FK_A9AA014FDEDC0611');
        $this->addSql('ALTER TABLE noticias_descripcion DROP FOREIGN KEY FK_76C2F2E599926010');
        $this->addSql('ALTER TABLE recetas_descripcion DROP FOREIGN KEY FK_A9AA014F54F853F8');
        $this->addSql('DROP TABLE categorias_recetas');
        $this->addSql('DROP TABLE categorias_recetas_descripcion');
        $this->addSql('DROP TABLE idiomas');
        $this->addSql('DROP TABLE noticias');
        $this->addSql('DROP TABLE noticias_descripcion');
        $this->addSql('DROP TABLE recetas');
        $this->addSql('DROP TABLE recetas_descripcion');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
