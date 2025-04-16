import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
