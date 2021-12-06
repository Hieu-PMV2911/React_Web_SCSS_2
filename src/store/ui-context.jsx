import { createContext } from 'react'

const uiContext = createContext({
	theme: 'light',
	toggleTheme : () =>{}
})

export default uiContext