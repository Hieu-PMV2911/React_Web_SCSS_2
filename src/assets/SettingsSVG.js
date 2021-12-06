import React from "react";

const SettingsSVG = ({ fillColor }) => {
	return (
		<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		>
		<path
			d="M19.44 12.99L19.43 13.01C19.47 12.68 19.51 12.34 19.51 12C19.51 11.66 19.48 11.34 19.44 11.01L19.45 11.03L21.89 9.11L19.46 4.89L16.59 6.05L16.6 6.06C16.08 5.66 15.51 5.32 14.89 5.06H14.9L14.44 2H9.57L9.13 5.07H9.14C8.52 5.33 7.95 5.67 7.43 6.07L7.44 6.06L4.56 4.89L2.12 9.11L4.56 11.03L4.57 11.01C4.53 11.34 4.5 11.66 4.5 12C4.5 12.34 4.53 12.68 4.58 13.01L4.57 12.99L2.47 14.64L2.14 14.9L4.57 19.1L7.45 17.95L7.43 17.91C7.96 18.32 8.53 18.66 9.16 18.92H9.13L9.58 22H14.43C14.43 22 14.46 21.82 14.49 21.58L14.87 18.93H14.86C15.48 18.67 16.06 18.33 16.59 17.92L16.57 17.96L19.45 19.11L21.88 14.91C21.88 14.91 21.74 14.79 21.55 14.65L19.44 12.99ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
			fill={fillColor}
		/>
		</svg>
	);
};

export default SettingsSVG;