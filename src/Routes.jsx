import { BrowserRouter, Routes, Route } from 'react-router-dom'

import House from './components/House'
import Houses from './components/Houses'
import Bookings from './components/Bookings'
import Signup from './components/Signup'
import Profile from './components/Profile'
import HouseEdit from './components/HouseEdit'
import Listings from './components/Listings'
import Login  from './components/Login'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id/edit' element={<HouseEdit />} />
                <Route path='/houses/:id' element={<House />} />
                <Route path='/signup' element={<Signup /> } />
                <Route path='/profile' element={<Profile /> } />
                <Route path='/bookings' element={<Bookings /> } />
                <Route path='/listings' element={<Listings /> } />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router