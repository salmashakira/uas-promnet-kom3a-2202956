-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2024 at 01:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2202956_salmashakiranurulazmi_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasien_puskesmas_salma`
--

CREATE TABLE `pasien_puskesmas_salma` (
  `id` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `usia` int(11) NOT NULL,
  `jenis_kelamin` enum('L','P') DEFAULT NULL,
  `alamat` varchar(20) NOT NULL,
  `deskripsi` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien_puskesmas_salma`
--

INSERT INTO `pasien_puskesmas_salma` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(1, 'Salma', 20, 'P', 'Jl. Cipageran No 17', 'Pasien Poli Gigi, keluhan gigi berlubang'),
(2, 'Natasya', 19, 'P', 'Gang Cempaka', 'Pasien Poli Bedah. Keluhan infeksi luka op'),
(3, 'Elliora', 21, 'P', 'Jl. Kenanga', 'Pasien Poli Gigi. Keluhan cabut akar gigi '),
(4, 'Citra', 22, 'P', 'Jl. Mawar No 18', 'Pasien Poli Saraf. Keluhan gangguan saraf'),
(5, 'Oktavina', 21, 'P', 'Jl. Tulip No 15', 'Pasien Poli Jantung. Keluhan nyeri dada'),
(14, 'Danish', 6, 'L', 'Jl. Kebangsaan No 21', 'Pasien Poli Anak. Keluhan demam dan batuk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasien_puskesmas_salma`
--
ALTER TABLE `pasien_puskesmas_salma`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasien_puskesmas_salma`
--
ALTER TABLE `pasien_puskesmas_salma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
