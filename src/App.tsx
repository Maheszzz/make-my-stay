import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/layout/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'));
const Properties = lazy(() => import('./pages/Properties'));

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <Suspense fallback={
                    <div className="h-screen w-full bg-slate-50 flex items-center justify-center">
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="h-12 w-12 bg-emerald-100 rounded-full mb-4"></div>
                            <div className="h-4 w-32 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/properties" element={<Properties />} />
                        <Route path="/property/:id" element={<PropertyDetails />} />
                    </Routes>
                </Suspense>
            </Router>
        </HelmetProvider>
    );
}

export default App;
