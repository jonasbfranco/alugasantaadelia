-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.32 - MySQL Community Server - GPL
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para alugasantaadelia
CREATE DATABASE IF NOT EXISTS `alugasantaadelia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `alugasantaadelia`;

-- Copiando estrutura para tabela alugasantaadelia.imoveis
CREATE TABLE IF NOT EXISTS `imoveis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `bairro` varchar(20) NOT NULL,
  `status` varchar(45) NOT NULL,
  `created_at` varchar(45) NOT NULL,
  `updated_at` varchar(45) NOT NULL,
  `endereco_imovel` varchar(200) DEFAULT NULL,
  `numero_imovel` varchar(200) DEFAULT NULL,
  `qtdquartos_imovel` int DEFAULT '1',
  `priscina_imovel` varchar(3) DEFAULT 'NAO',
  `garagem_imovel` varchar(3) DEFAULT 'SIM',
  `qtdcarros_imovel` int DEFAULT '1',
  `area_de_lazer_imovel` varchar(3) DEFAULT 'SIM',
  `observacoes_imovel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela alugasantaadelia.imoveis: ~6 rows (aproximadamente)
INSERT INTO `imoveis` (`id`, `title`, `bairro`, `status`, `created_at`, `updated_at`, `endereco_imovel`, `numero_imovel`, `qtdquartos_imovel`, `priscina_imovel`, `garagem_imovel`, `qtdcarros_imovel`, `area_de_lazer_imovel`, `observacoes_imovel`) VALUES
	(1, 'Casa para Vender', 'Jardim Itália', 'ativo', 'Wed, 22 Mar 2023 15:56:36 GMT', 'Wed, 22 Mar 2023 15:56:36 GMT', 'Rua Delfino Neto 33', '1568', 1, 'NAO', 'SIM', 1, 'NAO', 'Imovel muito novo, com 3 quartos e garagem para dois carros'),
	(2, 'Casa para Alugar', 'Jardim Itália', 'ativo', 'Wed, 22 Mar 2023 15:56:42 GMT', 'Wed, 22 Mar 2023 15:56:42 GMT', 'Avenidade da Saudade', '2563', 1, 'NAO', 'SIM', 1, 'NAO', NULL),
	(3, 'Edicula para Alugar', 'Jardim Itália', 'ativo', 'Wed, 22 Mar 2023 15:56:48 GMT', 'Wed, 22 Mar 2023 15:56:48 GMT', 'RUa Elizio Freitas', '36', 1, 'NAO', 'SIM', 1, 'NAO', NULL),
	(4, 'Terreno para Alugar', 'Jardim Itália', 'ativo', 'Wed, 22 Mar 2023 15:56:53 GMT', 'Wed, 22 Mar 2023 15:56:53 GMT', 'Rua Afounso Leite Neto da SIlva', '1', 1, 'NAO', 'SIM', 1, 'SIM', NULL),
	(5, 'Terreno para Vender', 'Jardim Itália', 'ativo', 'Wed, 22 Mar 2023 15:57:01 GMT', 'Wed, 22 Mar 2023 15:57:01 GMT', 'Rua 2', '36987', 1, 'NAO', 'SIM', 1, 'NAO', NULL),
	(6, 'Edicula para Vender', 'Jardim Itália', 'ativo', 'Wed, 22 Mar 2023 15:57:07 GMT', 'Wed, 22 Mar 2023 15:57:07 GMT', 'RUa 15 de Novembro', '8569', 1, 'NAO', 'SIM', 1, 'NAO', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
