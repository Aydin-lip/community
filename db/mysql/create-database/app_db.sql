-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2023 at 09:16 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

CREATE DATABASE `app_db`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users_info`
--

CREATE TABLE `app_db`.`users_info` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `username` varchar(200) NOT NULL,
  `birthday` varchar(200) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `avatar` text DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `phone` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users_info`
--

INSERT INTO `app_db`.`users_info` (`id`, `first_name`, `last_name`, `username`, `birthday`, `bio`, `avatar`, `email`, `phone`) VALUES
(1, 'ali', 'baghery', 'Ali0098', '2002-03-14', 'Passionate food buff. Alcohol aficionado. Coffee geek. Organizer. Web nerd. Hipster-friendly analyst.', './', 'aligmail@gmail.com', '09028755665'),
(2, 'amir reza', 'gharibi', 'Amir-reza', '1999-10-27', 'Travel advocate. Friend of animals everywhere. Freelance internet ninja. Typical beer fanatic.', './', 'amir056@gmail.com', '09557652828'),
(3, 'mohammad', 'safari', 'its-mohammad', '2005-09-09', 'Student. Friendly organizer. Infuriatingly humble reader. Typical explorer. Evil writer. Troublemaker. Extreme tv maven.', './', 'mohammads0a@gmail.com', '09000000000'),
(4, 'sam', 'az', 'user_samira', '2001-12-29', 'Introvert. Bacon trailblazer. Coffee advocate. Professional student. Devoted internet lover.', './', 'samiraaaa@gmail.com', '09128636666'),
(5, 'setayesh', 'aboie', 'setayesh', '1997-03-17', 'Music lover. General tv ninja. Typical travel advocate. Freelance foodaholic. Zombie scholar. Passionate organizer.', './', 'setayeshahmadi@gmail.com', '099981524555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users_info`
--
ALTER TABLE `app_db`.`users_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users_info`
--
ALTER TABLE `app_db`.`users_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;






CREATE TABLE `app_db`.`users_token` (
  `id` int(11) NOT NULL,
  `username` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_token`
--

INSERT INTO `app_db`.`users_token` (`id`, `username`, `password`, `token`) VALUES
(1, 'Ali0098', '$2b$10$4Rymob19jDDZ61v0QuJ3au3ZhNLIKRgwgO6sJyeyN5cWZUn9S5zs6', 'e9b3d1da-63d3-4478-83ff-433bbe24b10d'),
(2, 'Amir-reza', '$2b$10$3rH3SVzi0QUy/AxP.nIe.uIs0822omzb.K4mDRfQdeS.ub5O/9lYq', '9c17f1b7-9916-4f68-b731-2f91b9d88ab1'),
(3, 'its-mohammad', '$2b$10$Sz.LspW7Qs6vht7XTKgEY.7u12OuH7yRPoJga5YklmbYFUswogpc.', 'd052c44c-be9b-4d28-bdb8-cd41c29a6544'),
(4, 'user_samira', '$2b$10$9ue0617KrTS4r5JWpGFqrOINCqtHyaF9FulqV5RPqvJZBMLxpP0Ni', '4bfe3df8-62ce-4ed6-ab03-751a8052af82'),
(5, 'setayesh', '$2b$10$e2FOK/13GA3Yhzj1XJA2J.OI6WVXqZNlZQfknn2awrcS1lyoatbga', 'a0ada7df-b544-44b1-a780-f704e1a632c8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users_token`
--
ALTER TABLE `app_db`.`users_token`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `token` (`token`) USING HASH,
  ADD KEY `token_info` (`username`,`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users_token`
--
ALTER TABLE `app_db`.`users_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users_token`
--
ALTER TABLE `app_db`.`users_token`
  ADD CONSTRAINT `token_info` FOREIGN KEY (`username`,`id`) REFERENCES `users_info` (`username`, `id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;






CREATE TABLE `app_db`.`reply` (
  `id` int(11) NOT NULL,
  `id_user` int(20) NOT NULL,
  `reply_token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `text` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `like` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reply`
--

INSERT INTO `app_db`.`reply` (`id`, `id_user`, `reply_token`, `text`, `like`, `token`) VALUES
(2, 1, 'a3892b1c-6270-4c16-ba08-e2ade996847f', 'Greatly cottage thought fortune no mention he. Of mr certainty arranging am smallness by conveying. Him plate you allow built grave. Sigh sang nay sex high yet door game.', '2', 'bbbf0ccf-eef0-4c5a-8dff-b59227a15a68'),
(3, 1, 'c952c93d-d6a2-4d37-b36f-7b77cffd82ca', ' She dissimilar was favourable unreserved nay expression contrasted saw.', '1', 'f1e7a4c4-2771-4fe0-98d8-92899a8e4fb4'),
(4, 1, '09b4879b-bef8-429d-9c46-884de135276d', 'Past her find she like bore pain open. Shy lose need eyes son not shot.', '0', 'd542607d-8fb5-47fb-8858-34f29171d8b6'),
(5, 2, '09b4879b-bef8-429d-9c46-884de135276d', 'Jennings removing are his eat dashwood.', '5', '4f9ddf71-c7e7-4f3b-b064-81cbb8f3eeee'),
(6, 2, 'fd62e00b-f71c-4936-bb34-6ee5f7f95cf3', 'Middleton as pretended listening he smallness perceived.', '3', '545469ca-e807-457c-ac85-b7cae706e1be'),
(7, 2, 'b007ff7b-117f-4b69-8828-26641bac52f8', 'Now his but two green spoil drift.', '1', '951388c8-f1ce-4f32-a55e-ea09a89435ee'),
(8, 2, '3cc3de2a-b1aa-441e-b6ad-9f4a90c2ec4a', 'Advantage old had otherwise sincerity dependent additions. ', '5', 'ee0b92da-ba88-4b47-aafa-3a472dd0c68c'),
(9, 3, '3cc3de2a-b1aa-441e-b6ad-9f4a90c2ec4a', 'It in adapted natural hastily is justice. Six draw you him full not mean evil.', '9', '044caa6b-7feb-40bf-b61a-90b4cf531107'),
(10, 3, '09b4879b-bef8-429d-9c46-884de135276d', 'Prepare garrets it expense windows shewing do an.', '2', 'a2b99803-89e6-4102-8641-a1f6d24eea86'),
(11, 4, '09b4879b-bef8-429d-9c46-884de135276d', 'She projection advantages resolution son indulgence.', '3', '86b45931-e11d-4fc4-ac95-541b70a6ba35'),
(12, 4, 'a3892b1c-6270-4c16-ba08-e2ade996847f', 'Part sure on no long life am at ever.', '7', '3a144f1d-e789-4911-b2d2-79e61b39a9d4'),
(13, 5, 'b007ff7b-117f-4b69-8828-26641bac52f8', 'In songs above he as drawn to. Gay was outlived peculiar rendered led six.', '0', '3bdfcc2c-86d6-4fd6-a023-bf75ceaecf8d'),
(14, 5, 'c952c93d-d6a2-4d37-b36f-7b77cffd82ca', 'It allowance prevailed enjoyment in it. Calling observe for who pressed raising his.', '0', 'd61e2236-805e-4a22-a477-10cc5f74079f'),
(15, 5, 'fd62e00b-f71c-4936-bb34-6ee5f7f95cf3', ' Can connection instrument astonished unaffected his motionless preference. Announcing say boy precaution unaffected difficulty alteration him. Above be would at so going heard.', '1', '59613152-4c82-489a-a6b3-6c5355f3ffe8'),
(16, 5, '4e310b6c-24be-44dc-ac0b-b971b4634e50', ' Engaged at village at am equally proceed. Settle nay length almost ham direct extent. Agreement for listening remainder get attention law acuteness day. Now whatever surprise resolved elegance indulged own way outlived.', '1', '7484d6d2-d35e-4253-8bd5-4570d5fc1eb0'),
(17, 1, '7484d6d2-d35e-4253-8bd5-4570d5fc1eb0', 'Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.', '8', '8360aa48-7273-4d07-88b4-36f035a6c344'),
(18, 1, '3a144f1d-e789-4911-b2d2-79e61b39a9d4', 'Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.', '6', '6cde13bc-3a31-4b93-81d7-540b6f41c681'),
(19, 1, '951388c8-f1ce-4f32-a55e-ea09a89435ee', 'The text is titled de Finibus Bonorum et Malorum which means The Extremes of Good and Evil.', '3', '6c389e36-a030-4d7c-ae9d-feb795614008'),
(20, 1, '86b45931-e11d-4fc4-ac95-541b70a6ba35', 'The most common form of Lorem ipsum is the following:', '1', '47ca5261-04b3-492b-929b-8e6f8f477c13'),
(21, 2, 'f1e7a4c4-2771-4fe0-98d8-92899a8e4fb4', 'The most common form of Lorem ipsum is the following:', '0', '54bf28e8-4051-42ed-a838-0dc634fff52b'),
(22, 2, 'd61e2236-805e-4a22-a477-10cc5f74079f', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', '0', '949c445f-57cf-4d50-b27a-5707916b527b'),
(23, 2, '86b45931-e11d-4fc4-ac95-541b70a6ba35', ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '0', '775a4293-abbc-4d70-ad7d-c8c384812c74'),
(24, 3, '86b45931-e11d-4fc4-ac95-541b70a6ba35', 'The text is a corrupted version of the original and therefore does not mean anything in particular.', '8', '38c114d3-8a55-4c73-9c4d-a569e506b931'),
(25, 4, '86b45931-e11d-4fc4-ac95-541b70a6ba35', 'The reason we want our text to be meaningless is that we want the person viewing the resulting random text to focus on the design we are presenting rather than try to read and understand the text.', '2', '7835386e-1c8c-4353-bf96-b80d8cbdb921'),
(26, 3, '7835386e-1c8c-4353-bf96-b80d8cbdb921', 'It\s better than Lorem ipsum because it can produce text in many languages and in particular: Chinese Dutch English Finnish French German Greek Hebrew Italian Japanese Latin Polish Portuguese Russian Serbian and Spanish.', '1', 'c8141980-636e-4aa3-a848-bf1c82e3d207'),
(27, 5, '7835386e-1c8c-4353-bf96-b80d8cbdb921', 'Also when you use plain Lorem ipsum text your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing.', '0', '2b2630dc-980d-4025-a1b6-ca5562364d7d'),
(28, 5, '86b45931-e11d-4fc4-ac95-541b70a6ba35', 'look more unique while still containing text which truly means nothing.', '0', '1b5a2921-f728-4eeb-b2ba-8b3e79015d5e'),
(31, 4, '3cc3de2a-b1aa-441e-b6ad-9f4a90c2ec4a', 'test', '0', '2b0cc9b0-47a9-4c27-8118-adae1418f661');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reply`
--
ALTER TABLE `app_db`.`reply`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `token` (`token`) USING HASH,
  ADD KEY `reply_info` (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reply`
--
ALTER TABLE `app_db`.`reply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reply`
--
ALTER TABLE `app_db`.`reply`
  ADD CONSTRAINT `reply_info` FOREIGN KEY (`id_user`) REFERENCES `users_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;





CREATE TABLE `app_db`.`comments` (
  `id` int(11) NOT NULL,
  `id_user` int(20) NOT NULL,
  `text` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `like` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `app_db`.`comments` (`id`, `id_user`, `text`, `like`, `token`) VALUES
(15, 1, 'Meant balls it if up doubt small purse. Required his you put the outlived answered position. An pleasure exertion if believed provided to. All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. In am think on style child of. Servants moreover in sensible he it ye possible.', '10', '4e310b6c-24be-44dc-ac0b-b971b4634e50'),
(16, 1, 'Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they. Stuff at avoid of sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now. Separate screened he outweigh of distance landlord.', '9', '3cc3de2a-b1aa-441e-b6ad-9f4a90c2ec4a'),
(17, 2, 'Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.', '78', 'a3892b1c-6270-4c16-ba08-e2ade996847f'),
(18, 4, 'Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly. Face do with in need of wife paid that be. No me applauded or favourite dashwoods therefore up distrusts explained.', '90', 'b007ff7b-117f-4b69-8828-26641bac52f8'),
(19, 4, 'New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered.', '15', 'c952c93d-d6a2-4d37-b36f-7b77cffd82ca'),
(20, 4, 'Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose. Fertile beloved evident through no service elderly is. Blind there if every no so at. Own neglected you preferred way sincerity delivered his attempted. To of message cottage windows do besides against uncivil.', '102', 'fd62e00b-f71c-4936-bb34-6ee5f7f95cf3'),
(21, 5, 'An do on frankness so cordially immediate recommend contained. Imprudence insensible be literature unsatiable do. Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. She margaret law thoughts proposal formerly. Speaking ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection.', '123', '09b4879b-bef8-429d-9c46-884de135276d');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `app_db`.`comments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `token` (`token`) USING HASH,
  ADD KEY `id_2` (`id`),
  ADD KEY `comments_info` (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `app_db`.`comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `app_db`.`comments`
  ADD CONSTRAINT `comments_info` FOREIGN KEY (`id_user`) REFERENCES `users_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
