import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Loader2 } from 'lucide-react';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));

const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#050505] text-[#B0B0B0] gap-4">
    <div className="w-10 h-10 rounded-full border-2 border-[#FF7518]/20 border-t-[#FF7518] animate-spin flex items-center justify-center">
      <Loader2 className="w-5 h-5 text-[#FF7518] animate-spin" />
    </div>
    <span className="text-xs uppercase tracking-widest text-[#FFAD33] font-semibold font-display">
      Zodiac Webs
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#FF7518] selection:text-black">
          <Navbar />
          <main id="main-content" className="flex-grow focus:outline-none">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;