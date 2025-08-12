import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import "./index.css";

const Ecommerce0Home = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 shadow flex justify-between items-center bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <img
            src="/ecommerce0-logo.png"
            alt="eCommerce0 Logo"
            className="h-10"
          />
          <h1 className="text-2xl font-bold text-gray-800">eCommerce0</h1>
        </div>
        <div>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">{user?.email}</span>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto space-y-10">
        <section className="bg-blue-100 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-2">Welcome to eCommerce0</h2>
          <p className="text-gray-700">
            Your one-stop shop for electronics, clothing, gadgets, and more.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Wireless Headphones", price: "$49.99", image: "🎧" },
              { name: "Smart Watch", price: "$89.99", image: "⌚" },
              { name: "Running Shoes", price: "$59.99", image: "👟" },
              { name: "Coffee Maker", price: "$39.99", image: "☕" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg shadow p-4 flex flex-col items-center"
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-blue-600">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-yellow-100 p-4 rounded shadow text-center">
          <h3 className="text-lg font-bold">💥 Limited-Time Offer</h3>
          <p>Sign up now and get 10% off your first order!</p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500 border-t bg-gray-50">
        &copy; {new Date().getFullYear()} eCommerce0. All rights reserved.
      </footer>
    </div>
  );
};

const App = () => (
  <Auth0Provider
    domain="demo-events-25.us.auth0.com"
    clientId="8I1fXtRAtVTg9XRO4Kw5AhYtxWU2zoem"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Ecommerce0Home />
  </Auth0Provider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
