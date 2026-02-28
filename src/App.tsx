import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InvestmentCalculator from './components/calculators/InvestmentCalculator/InvestmentCalculator'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<InvestmentCalculator/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
