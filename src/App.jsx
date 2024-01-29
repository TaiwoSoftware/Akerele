import './App.css'
import Body from './components/Body'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
