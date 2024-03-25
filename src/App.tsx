import { Route, Routes } from 'react-router-dom'

import Card from './components/Card/Card'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/posts/:id' element={<Card />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
