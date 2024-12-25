import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-blue-900" : "text-gray-500"}`}
            >
              Home
            </Link>
            <Link
              to="/register"
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/register" ? "text-blue-900" : "text-gray-500"}`}
            >
              Registration
            </Link>
            {isAuthenticated && (
              <Link
                to="/results"
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/results" ? "text-blue-900" : "text-gray-500"}`}
              >
                Results
              </Link>
            )}
          </div>
          <div>
            {isAuthenticated ? (
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-gray-500 hover:text-blue-900"
              >
                Logout
              </Button>
            ) : (
              <Link to="/admin/login">
                <Button
                  variant="ghost"
                  className="text-gray-500 hover:text-blue-900"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
