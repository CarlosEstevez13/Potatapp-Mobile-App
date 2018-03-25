CREATE TABLE `actividad` (
  `id_activi` int(4) NOT NULL,
  `nombre_activi` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_activi` varchar(200) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `empleado` (
  `id_empleado` int(4) NOT NULL,
  `nombre_emple` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos_emple` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `cedula_emple` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `nacimiento_emple` date NOT NULL,
  `estado_emple` text COLLATE utf8_spanish_ci NOT NULL,
  `eps_emple` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `finca` (
  `id_finca` int(4) NOT NULL,
  `nombre_finca` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion_finca` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_finca` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `trabajador_encargado` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `historial` (
  `num_jornales` int(11) NOT NULL,
  `valor_jornal` int(11) NOT NULL,
  `estado_actividad` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_actividad` date NOT NULL,
  `id_activi` int(4) NOT NULL,
  `id_finca` int(4) NOT NULL,
  `id_empleado` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id_activi`);

ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id_empleado`);

ALTER TABLE `finca`
  ADD PRIMARY KEY (`id_finca`),
  ADD KEY `trabajador_encargado` (`trabajador_encargado`);

ALTER TABLE `historial`
  ADD PRIMARY KEY (`id_activi`,`id_finca`,`id_empleado`),
  ADD KEY `id_activi` (`id_activi`),
  ADD KEY `id_finca` (`id_finca`),
  ADD KEY `id_empleado` (`id_empleado`);


ALTER TABLE `actividad`
  MODIFY `id_activi` int(4) NOT NULL AUTO_INCREMENT;
ALTER TABLE `empleado`
  MODIFY `id_empleado` int(4) NOT NULL AUTO_INCREMENT;
ALTER TABLE `finca`
  MODIFY `id_finca` int(4) NOT NULL AUTO_INCREMENT;

ALTER TABLE `historial`
  ADD CONSTRAINT `id_activi` FOREIGN KEY (`id_activi`) REFERENCES `actividad` (`id_activi`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_empleado` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_finca` FOREIGN KEY (`id_finca`) REFERENCES `finca` (`id_finca`) ON DELETE CASCADE ON UPDATE CASCADE;