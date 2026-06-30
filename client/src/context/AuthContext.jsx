import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("bawarchi_admin");
    if (stored) setAdmin(JSON.parse(stored));
    setLoading(false);
  }, []);

  const login = (data) => {
    localStorage.setItem("bawarchi_admin", JSON.stringify(data));
    setAdmin(data);
  };

  const logout = () => {
    localStorage.removeItem("bawarchi_admin");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);