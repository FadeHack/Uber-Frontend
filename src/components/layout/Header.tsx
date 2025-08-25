// src/components/layout/Header.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { user, setUser } = useAppStore(); // Get the user object from the store
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Set user to null to log out
    navigate('/');   // Redirect to home page
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Uber</Link>
      <nav className="flex items-center gap-4">
        <Link to="/book-ride">
            <Button variant="link" className="text-white">Book a Ride</Button>
        </Link>
        {/* --- This is the conditional logic --- */}
        {user ? (
          // Renders if user IS authenticated
          <>
            <span className="hidden sm:inline">Welcome, {user.name}</span>
            <Button onClick={handleLogout} variant="destructive">Logout</Button>
          </>
        ) : (
          // Renders if user IS NOT authenticated
          <Link to="/auth">
            <Button>Login / Sign Up</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;