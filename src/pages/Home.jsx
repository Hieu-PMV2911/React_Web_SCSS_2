import React, {Fragment, useContext} from 'react'
import AppBar from '../Component/AppBar/AppBar'
import classes from '../Component/../pages/Home.module.scss'
import uiContext from '../store/ui-context'
import Dashboard from '../Component/Dashboard/Dashboard'
import PageNotFound from './../assets/page404.jpg'
const Home = () => {
	const uiCont = useContext(uiContext)
	const themeClass = uiCont.theme === 'light' ? classes.light__mode : classes.dark__mode ;
	return (
		<Fragment>
			<div className={`${classes.home__container} ${themeClass}`}>
				<div className={classes.home}>
					<AppBar />
					<Dashboard />
				</div>
				<div  className={classes.home__not__page}>
					<img src={PageNotFound} alt=""  className={classes.home__not__page__img}/>
					<h2>This website does not support mobile use!!</h2>
					<div className={classes.home__page__wave}>
						<svg viewBox="0 0 500 150" preserveAspectRatio="none">
							<path d="M-9.93,12.33 C123.25,150.49 382.84,-56.74 514.33,120.89 L500.00,150.00 L-60.72,218.57 Z"></path>
						</svg>
					</div>
				</div>
				
			</div>
		</Fragment>
	)
}

export default Home
