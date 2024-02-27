import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Bookings from './components/Bookings'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Listings from './components/Profile'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup /> } />
                <Route path='/profile' element={<Profile /> } />
                <Route path='/bookings' element={<Bookings /> } />
                <Route path='/listings' element={<Listings /> } />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router