import { createGlobalStyle } from "styled-components";
import DrukWideCyrMediumWOFF2 from "../../fonts/DrukWideCyr-Medium.woff2";
import DrukWideCyrMediumWOFF from "../../fonts/DrukWideCyr-Medium.woff";
import DrukWideCyrMediumTTF from "../../fonts/DrukWideCyr-Medium.ttf";

import ArtegraSansExMediumWOFF2 from "../../fonts/ArtegraSansExMedium.woff2";
import ArtegraSansExMediumWOFF from "../../fonts/ArtegraSansExMedium.woff";
import ArtegraSansExMediumTTF from "../../fonts/ArtegraSansExMedium.ttf";

import ArtegraSansExBoldWOFF2 from "../../fonts/ArtegraSansExBold.woff2";
import ArtegraSansExBoldWOFF from "../../fonts/ArtegraSansExBold.woff";
import ArtegraSansExBoldTTF from "../../fonts/ArtegraSansExBold.ttf";

const GlobalStyles = createGlobalStyle`

	@font-face {
		font-family: 'Artegra Sans Extended';
		src: url(${ArtegraSansExMediumWOFF2}) format('woff2'),
			url(${ArtegraSansExMediumWOFF}) format('woff'),
			url(${ArtegraSansExMediumTTF}) format('truetype');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Artegra Sans Extended';
		src: url(${ArtegraSansExBoldWOFF2}) format('woff2'),
			url(${ArtegraSansExBoldWOFF}) format('woff'),
			url(${ArtegraSansExBoldTTF}) format('truetype');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Druk Wide Cyr';
		src: url(${DrukWideCyrMediumWOFF2}) format('woff2'),
			url(${DrukWideCyrMediumWOFF}) format('woff'),
			url(${DrukWideCyrMediumTTF}) format('truetype');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: #FFFFFF;
		font-family: "Artegra Sans Extended";
	}

	html {
		font-size: 8px;
		@media (max-width: 1440px) {
			font-size: 7px;
		}
		@media (max-width: 1000px) {
			font-size: 6px;
		}
		@media (max-width: 750px) {
			font-size: 5px;
		}
		@media (max-width: 666px) {
			font-size: 4.5px;
		}
	}

	body {
		background: #1B1B1B;
		// width: 100vw;
		// height: 100vh;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyles;
