import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Search from "./pages/search";
import Movie from "./pages/movie";
import { SearchProvider } from "./context/searchContext";
import { MovieProvider } from "./context/movieContext";
import type { RootState } from "./store/store";
import { useSelector } from "react-redux";
import { ProtectedRouteProps } from "./types/loginType";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  isLogin,
  children,
}) => {
  if (isLogin) {
    return user ? <Navigate to="/home" /> : <>{children}</>;
  } else return user ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  const isLogged = useSelector((state: RootState) => state.isLogged.value);

  return (
    <SearchProvider>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute user={isLogged} isLogin={true}>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute user={isLogged} isLogin={true}>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute user={isLogged} isLogin={false}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute user={isLogged} isLogin={false}>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute user={isLogged} isLogin={false}>
                  <Movie />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </SearchProvider>
  );
}

export default App;
