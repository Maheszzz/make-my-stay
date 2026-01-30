import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
