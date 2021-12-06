import React,  { useContext, useEffect, useRef }  from 'react'
import {Chart, registerables} from 'chart.js'
import uiContext from '../../../../store/ui-context';
import {addData} from '../../../../utils/ChartUtils';
Chart.register(...registerables);

const labels =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = {
	labels: labels,
	datasets: [
		{
			label: "Sales",
			backgroundColor: "rgba(51, 200, 99, .1)",
			fill: true,
			borderColor: "#33c863",
			data: addData(12),
			tension: 0.2,
		},
		{
			label: "Profit",
			backgroundColor: "rgba(242, 153, 74, .1)",
			fill: true,
			borderColor: "#f2994a",
			data: addData(12),
			tension: 0.2,
		},
	],
};

const CharContainer = () => {
	const uiCont = useContext(uiContext)
	const charRef = useRef()
	useEffect(()=>{
		const canvasId = document.getElementById('myCanvas')
		charRef.current = new Chart(canvasId, {
			type: 'line',
			data,
			options: {
				maintainAspectRatio: false,
				interaction: {
					mode: 'index',
					interaction: false,
					axis:'x'
				},
				plugins:{
					tooltip:{
						enabled: true,
					},
					legend: false
				},
				scales: {
					y:{
						display: false
					},
					x:{
						grid: {
							drawBorder: false,
							borderDash: [7],
							color: uiCont.theme === 'light' ? '#dddfe5' : '#26323f',
							border: false
						},
						tick: {
							color: uiCont.theme === 'light' ? '#929292' : '#fff',
							font: {
								family: "'Mulish', sans-serif",
								size: "16px",
							}
						}
					}

				}
			}
		})
		return () => charRef.current.destroy();
	},[uiCont.theme])
	return (
		<canvas id="myCanvas"></canvas>
	)
}

export default CharContainer
