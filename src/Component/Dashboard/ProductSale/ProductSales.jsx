import React, { useContext } from 'react'
import uiContext from '../../../store/ui-context';
import classes from './ProductSales.module.scss'
import SalesTable from './SaleTable/SaleTable'
const ProductSales = () => {
	const uiCont = useContext(uiContext);
	const themeClass = uiCont.theme === "light" ? classes.light__mode : classes.dark__mode;
	return (
		<div className={`${classes.productsales} ${themeClass}`}>
			<div className={classes.productsales__header}>
				<h2 className={`${classes.productsales__header__title} ${themeClass}`}>
				Product Sales
				</h2>
			</div>
			<SalesTable />
		</div>
	)
}

export default ProductSales
