import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { Home, HelpCircle, LogIn } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo/Butterfly */}
        <div className="butterfly-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a2 2 0 0 1-3 0 2 2 0 0 1-3 0" />
          </svg>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="nav-button">
            <Home size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="nav-button">
            <HelpCircle size={18} />
          </Button>
          <ThemeToggle />
        </div>

        {/* Login */}
        <Button variant="ghost" size="sm" className="nav-button">
          <LogIn size={18} />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;