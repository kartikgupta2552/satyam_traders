import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'


function App() {

  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='order' element={<PlaceOrder />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
