import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Signup from './components/Signup'
import House from './components/House'
import Houses from './components/Houses'
import Listings from './components/Listings'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
                <Route path='/listings' element={<Listings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router