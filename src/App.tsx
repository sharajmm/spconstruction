import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDetailsForm from "./pages/UserDetailsForm";
import AdminView from "./pages/AdminView";

function App() {
  // ...existing code...
  // Import UserDetailsForm
  // import UserDetailsForm from './pages/UserDetailsForm';
  // For demonstration, always show form after login/signup
  // Custom ProtectedRoute component
  const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { user } = useAuth();
    return user ? element : <Login />;
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Protected routes */}
              <Route
                path="/about"
                element={<ProtectedRoute element={<About />} />}
              />
              <Route
                path="/services"
                element={<ProtectedRoute element={<Services />} />}
              />
              <Route
                path="/projects"
                element={<ProtectedRoute element={<Projects />} />}
              />
              <Route
                path="/contact"
                element={<ProtectedRoute element={<Contact />} />}
              />
              <Route
                path="/user-details"
                element={<ProtectedRoute element={<UserDetailsForm />} />}
              />
              <Route
                path="/admin-view"
                element={<ProtectedRoute element={<AdminView />} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
