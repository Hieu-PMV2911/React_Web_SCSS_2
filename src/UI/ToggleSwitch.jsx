import React, {useState} from 'react'
import classes from '../UI/ToggleSwitch.module.scss'
const ToggleSwitch = ({ toggle }) => {
	const [switchOn, setSwitchOn] = useState(false);

	const switchOnHandler = () => {
		setSwitchOn(p => !p);
		toggle();
	};

	const switchOnClass = switchOn ? classes.on : '';
	return (
		<div className={`${classes.switch} ${switchOnClass}`} onClick={switchOnHandler}>
			<div className={classes.switch__thumb}></div>
		</div>
	)
}

export default ToggleSwitch
