import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router