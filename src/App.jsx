import './App.css'
import Body from './components/Body'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body />} />
      </Routes>
    </Router>
  )
}

export default App
