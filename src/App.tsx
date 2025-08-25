// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AuthPage from '@/pages/AuthPage';
import BookRidePage from '@/pages/BookRidePage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProtectedRoute from '@/components/auth/ProtectedRoute'; // 1. Import the component

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* --- Protected Route --- */}
          <Route
            path="/book-ride"
            element={
              // 2. Wrap the BookRidePage with ProtectedRoute
              <ProtectedRoute>
                <BookRidePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;