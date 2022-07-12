-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-07-2022 a las 16:09:47
-- Versión del servidor: 8.0.29-0ubuntu0.20.04.3
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `supermex`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id` int NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mensaje` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `aceptar` int NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220704215642', '2022-07-04 23:56:47', 46);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id` int NOT NULL,
  `abreviatura` varchar(3) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id`, `abreviatura`) VALUES
(1, 'es'),
(2, 'en');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int NOT NULL,
  `idioma_id` int NOT NULL,
  `titular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` int NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `slug` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id` int NOT NULL,
  `idioma_id` int NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` longtext COLLATE utf8mb4_unicode_ci,
  `ingredientes` longtext COLLATE utf8mb4_unicode_ci,
  `imagen` longtext COLLATE utf8mb4_unicode_ci,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `activo` int NOT NULL,
  `slug` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `idioma_id`, `nombre`, `descripcion`, `ingredientes`, `imagen`, `fecha_creacion`, `fecha_modificacion`, `activo`, `slug`) VALUES
(13, 1, 'Burritos de carne', 'Calentar el aceite en una sartén a fuego alto. Agregar el ajo y la cebolla, cocinar durante 2 minutos hasta que la cebolla esté ligeramente dorada. Agregar la carne y cocinar hasta que cambie de rojo a marrón.\r\n\r\nAgregar el sazonador de Tacos y Burritos Super-Mex y cocinar durante 1 minuto. A continuación, agregar la pasta de tomate y el agua, cocinar durante 3 minutos hasta que el agua se haya evaporado en su mayoría, pero la carne todavía esté jugosa, no seca. Dejar enfriar unos 10 minutos (rellenar el burrito caliente hará que la tortilla quede blanda).\r\n\r\nColocar una tortilla en una superficie de trabajo. Colocar 1/4 – 1/3 taza de arroz justo debajo del centro. Cubrir con 1/4 – 1/3 de taza de carne picada, luego lechuga, maíz, frijoles negros, tomate, un poco de cebolla roja y queso.\r\n\r\nDoblar la parte inferior para cubrir el relleno y luego doblar los bordes hacia adentro. Enrollar bien y envolver en papel de aluminio. Servir.\r\n\r\nLos Burritos se sirven mejor con algo para mojar como el guacamole. Puedes hacer guacamole casero o usar la salsa de Guacamole Super-Mex lista para comer.', '- 1 sobre de sazonador de Tacos y Burritos Super-Mex\r\n- 1/2 cucharada de aceite de oliva\r\n- 2 dientes de ajo\r\n- 1/2 cebolla, finamente picada\r\n- 500 g de carne picada o troceada\r\n- 2 cucharadas de pasta de tomate\r\n- 3 cucharadas de agua\r\n- 6- 8 tortillas de harina grandes Super-Mex\r\n- 3 tazas de arroz cocido\r\n- 3 tazas de lechuga iceberg\r\n- 1 taza de maíz en grano\r\n- 1 taza de frijoles negros\r\n- 3 tomates sin semillas y cortados en cubitos\r\n- 1/2 cebolla roja finamente picada\r\n- 150 g de queso rallado a elección', '62bf46e2206a4_shutterstock-x-.jpg', '2022-07-01 21:11:30', '2022-07-01 21:11:30', 1, 'burritos-de-carne'),
(14, 1, 'Ensalada Mexicana', '1) Precalentar el horno a 180º. En una bandeja de muffins del revés, colocar las tortillas de trigo Super-Mex tal y como se muestra en la foto. Hornear hasta que estén doradas y retirar. Así se formarán los cuencos para las ensaladas.\r\n\r\n2) En una sartén, cocinar la cebolla picada junto con la carne con un chorrito de aceite y sal. Reservar.\r\n\r\n3) En un bol, colocar los 30g de sazonador Taco Mix Super-Mex, un chorro de aceite de oliva, sal y vinagre mezclar hasta que esté ligado. Esto será el aliño de la ensalada.\r\n\r\n4) Cortar la lechuga, los tomates y colocar en los “Tortilla bols” junto con las aceitunas, la carne previamente cocinada, el queso rallado y aliñar.\r\n\r\n¡A comer!', '- 1 Lechuga\r\n- 2 Tomates\r\n- Aceitunas negras\r\n- Queso rallado\r\n- Medio kilo de carne picada\r\n- 1 cebolla\r\n- 30 g Sazonador Taco Mix Super-Mex\r\n- 4 tortillas de trigo Super-Mex\r\n- Aceite de oliva, sal y vinagre', '62bf47b36ba9d_ensalada-mexicana.jpg', '2022-07-01 21:14:59', '2022-07-01 21:14:59', 1, 'ensalada-mexicana'),
(15, 1, 'Tacos blandos de carne', '1) Mezclar la carne con el sazonador Taco Mix de Super-Mex y dejar marinar durante 10 minutos.\r\n\r\n2) Calentar una sartén con un chorro de aceite y cocinar la carne hasta que quede jugosa. Retirar del fuego y reservar.\r\n\r\n3) Cortar la cebolla en tiras y reservar.\r\n\r\n4) Para la preparación del guacamole comenzamos por pelar y trocear el aguacate. Picar también un cuarto de cebolla y mezclar con el aguacate. Aliñar con sal, zumo de lima, ajo en polvo y un chorrito de aceite de oliva. Machacar todo hasta encontrar la consistencia deseada. Picar medio tomate y añadir al final.\r\n\r\n5) Calentar las tortillas de trigo Super-Mex y llevar a la mesa junto con el guacamole, el queso, la lechuga, el maíz y la carne. Rellenar las tortillas con los ingredientes, doblar por la mitad y ¡disfrutar!', '- 1kg de ternera picada\r\n- 8 tortillas de trigo Super-Mex\r\n- 25g de Sazonador Taco Mix de Super-Mex\r\n- 1 cebolla roja\r\n- 2 aguacates\r\n- 2 tomates\r\n- zumo de lima\r\n- aceite, sal, pimienta\r\n- queso rallado\r\n- lechuga\r\n- maíz', '62bf481666694_tacos-blandos.de.carne.logo.jpg', '2022-07-01 21:16:38', '2022-07-01 21:16:38', 1, 'tacos-blandos-de-carne'),
(16, 1, 'Super nachos con todo', 'Precalentamos el horno a 200 ºC. Colocamos los nachos en una bandeja de horno y cubrimos con el queso para gratinar. Introducimos en el horno hasta que se funda el queso.\r\n\r\nMientras tanto vamos calentando el chili con carne en un cazo.\r\n\r\nPreparamos el pico de gallo. Para eso se trocean en cubos pequeños el tomate, la cebolla y el pimiento. Mezclar y reservar.\r\n\r\nRetiramos la bandeja del horno, añadimos el chili con carne, la salsa de guacamole, el queso batido, el pico de gallo y terminamos con algunos jalapeños troceados para un toque extra de sabor.\r\n\r\n¡A disfrutar!', '- 1 bolsa de Nachos Super-Mex 400g\r\n- Queso rallado para gratinar\r\n- 1 lata Chili con Carne Super-Mex\r\n- 5 cucharadas de queso batido\r\n- Salsa Guacamole Dip Super-Mex o guacamole fresco\r\n- 1 tomate\r\n- 1/2 cebolla\r\n- 1/2 pimiento\r\n- Jalapeños troceados', '62bf4857df139_fully-loaded-nachos-.jpg', '2022-07-01 21:17:43', '2022-07-01 21:17:43', 1, 'super-nachos-con-todo'),
(17, 1, 'Fajitas de pollo al estilo Super-Mex', 'Cortar el pollo en tiras y añadir el sazonador Fajita Mix de Super-Mex. Dejar marinar durante 10 minutos.\r\n\r\nCortar en tiras los pimientos y las cebollas. Sofreírlos a fuego alto con el aceite de oliva y la sal. Retirar del fuego y reservar en un plato.\r\n\r\nCocinar el pollo a fuego medio en la misma sartén de las verduras. Una vez listo retirar del fuego, incorporar las verduras y llevar a la mesa en la misma sartén para que mantenga el calor.\r\n\r\nCalentar las Tortillas de trigo Super-Mex en el microondas envueltas en un paño de cocina limpio durante unos 15-20 segundo a máxima potencia.\r\n\r\nRellenar las tortillas con el pollo y las verduras tal y como se indica en el diagrama. Puedes añadir guacamole, queso, salsa agria, salsa picante… lo que tú quieras, ¡el límite está en tu imaginación!', '- 1 pimiento rojo\r\n- 1 pimiento verde\r\n- 1 cebolla grande\r\n- 750g de pechuga de pollo\r\n- 20g Sazonador Fajita Mix de Super-Mex\r\n- Aceite de oliva\r\n- Sal\r\n- Un paquete de Tortillas de trigo Super-Mex', '62bf489537551_fajita-pollo-x-.jpg', '2022-07-01 21:18:45', '2022-07-01 21:18:45', 1, 'fajitas-de-pollo-al-estilo-super-mex'),
(18, 1, 'Quesadillas con membrillo y queso de cabra payoya', 'Cortar membrillo suficiente para rellenar una tortilla. Lo colocamos en una de las mitades, cubrimos con queso al gusto, tapamos con la otra mitad de la tortilla. Calentamos mantequilla en una sartén e incorporamos la quesadilla hasta que se funda el queso y la tortilla quede dorada.\r\n\r\nUna vez este listo, lo retiramos y volvemos a doblar por el medio. Esta receta se puede elaborar también con dulce de leche.', '- Tortillas de trigo Super-Mex\r\n- 250 gr. de membrillo\r\n- 250 gr. de queso de cabra payoya en lonchas o rallado\r\n- Mantequilla', '62bf4b0829612_quesadill-con-membrillo.jpg', '2022-07-01 21:29:12', '2022-07-01 21:29:12', 1, 'quesadillas-con-membrillo-y-queso-de-cabra-payoya'),
(19, 1, 'Fajita de atún de almadraba con pisto de verduras', 'Cortar en dados toda la verdura y sofreír hasta que esté tierna y dorada, salpimentar al gusto, añadir el atún en pequeños tacos y rehogar durante 5 min. hasta que el atún este hecho. Para que no se reseque le podemos añadir un par de cucharadas de la salsa Nacho Dip de Supermex y remover todo el pisto. Reservamos el pisto, y a continuación colocamos las tortillas extendidas  y disponemos en el centro de la misma una cucharada y media de pisto,  y enrrollamos la tortilla.  Colocamos las fajitas en la bandeja del horno con la parte por la que hemos cerrado el rollito hacia abajo. Repetimos esta acción con todas las tortillas hasta finalizar el pisto. Por último cubrimos con el mix de quesos al gusto y lo ponemos a gratinar durante 10min. Para servir, realizamos un corte en diagonal en el centro de las fajitas.\r\n\r\nLa ración por persona equivale a tres medias fajitas. Esta receta se puede elaborar con atún o con cualquier otro pescado o carne.\r\n\r\nAcompañamos con salsa Nacho Dip o Guacamole Dip.', '- 1 calabacín\r\n- 1 pimiento rojo\r\n- 1 pimiento verde\r\n- 1 pimiento amarillo\r\n- 1 cebolla\r\n- 500 gr. atún\r\n- Aceite\r\n- Sal y pimienta\r\n- 6 tortillas de trigo Super-Mex de 20 cm.\r\n- Mix de quesos para gratinar', '62bf4bb419018_fajita-de-atun-horizontal.jpg', '2022-07-01 21:32:04', '2022-07-09 11:38:00', 1, 'fajita-de-at-n-de-almadraba-con-pisto-de-verduras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` int NOT NULL,
  `refresh_token` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `username` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `username`, `roles`, `password`, `nombre`, `fecha_creacion`) VALUES
(1, 'admin', '[\"ROLE_SUPERADMIN\"]', '$2y$13$z47E55ZSd1bs485NpEqZZeX55zRiNvH7i6lPN3PG.D2ZK2qkND.Qq', 'admin', '2022-07-04 23:55:27'),

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_253D925DEDC0611` (`idioma_id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8ADA30D5DEDC0611` (`idioma_id`);

--
-- Indices de la tabla `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_9BACE7E1C74F2195` (`refresh_token`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_2265B05DF85E0677` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `FK_253D925DEDC0611` FOREIGN KEY (`idioma_id`) REFERENCES `idiomas` (`id`);

--
-- Filtros para la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD CONSTRAINT `FK_8ADA30D5DEDC0611` FOREIGN KEY (`idioma_id`) REFERENCES `idiomas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
