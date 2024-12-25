import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center text-white py-12">
          <h1 className="text-5xl font-bold mb-6">
            Empowering Youth, Inspiring Greatness
          </h1>
          <p className="text-xl mb-12 text-blue-100">
            Register your child for our soccer program and be part of something
            extraordinary
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
