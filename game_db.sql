

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `game_db`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `marker`
--

CREATE TABLE `marker` (
  `markerid` smallint(6) NOT NULL,
  `latitude` decimal(11,0) NOT NULL,
  `longitude` decimal(11,0) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `player`
--

CREATE TABLE `player` (
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `team` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `player`
--

INSERT INTO `player` (`username`, `email`, `password`, `team`) VALUES
('tester9696', 'tester9696@hotmail.com', 'test', '0'),
('julia', 'julia@test.com', 'test', '0');

-- --------------------------------------------------------

--
-- Tabellstruktur `playerscore`
--

CREATE TABLE `playerscore` (
  `username` varchar(50) NOT NULL,
  `score` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
