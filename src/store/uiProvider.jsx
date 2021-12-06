import {useReducer} from 'react'

import uiContext from './ui-context'

const defaultUiState = {
	theme: 'light'
};

const uiReducer = (state, action) =>{
	if(action.type === 'TOGGLE'){
		let updateTheme = state.theme === 'light' ? 'dark' : 'light';
		return{
			theme: updateTheme
		}
	}
	return defaultUiState
};

const UiProvider = ({ children }) => {
	const [uiState, dispatchUiAction] = useReducer(uiReducer, defaultUiState)

	const toggleThemeHandler = () => {
		dispatchUiAction({type: 'TOGGLE'})
	}

	const UiContext = {
		theme: uiState.theme,
		toggleTheme: toggleThemeHandler
	}
	return <uiContext.Provider value={UiContext}>{children}</uiContext.Provider>
}

export default UiProvider



