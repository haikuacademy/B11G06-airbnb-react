import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import House from './components/House'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/houses/:id' element={<House />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router