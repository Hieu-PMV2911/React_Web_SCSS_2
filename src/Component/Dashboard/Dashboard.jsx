import React, {useContext} from 'react'
import uiContext from '../../store/ui-context'
import classes from '../../Component/Dashboard/Dashboard.module.scss'
import Header from './Header/Header'
import Total from './Total/Total'
import Earnings from './Earnings/Earnings'
import ProductSales from './ProductSale/ProductSales'
import CustomersList from './CustomersList/CustomersList'

const Dashboard = () => {
	const uiCont = useContext(uiContext)
	const themeClass = uiCont.theme === 'light' ? classes.light__mode : classes.dark__mode ;
	return (
		<div className={`${classes.scroll} ${themeClass}`}>
			<div className={`${classes.dashboard__container} ${themeClass}`}>
				<div className={`${classes.dashboard}`}>
					<Header />
					<Total />
					<Earnings />
					<div className={classes.dashboard__bottom}>
						<ProductSales />
						<CustomersList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
