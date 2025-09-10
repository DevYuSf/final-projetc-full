import { Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Product from "./pages/Product"
import UpdateProduct from "./components/One-time-use/updateProduct"
import AddProduct from "./pages/AddProduct"
import Cart from "./pages/Carts"
import Carts from "./pages/Carts"
import Register from "./pages/Regsiter"
import Login from "./pages/Login"

// Layout leh Header (Home, Product)
function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

// Layout leh Dashboard (Dashboard iyo Product-ka gudaha dashboard)
function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Dashboard /> {/* Sidebar-ka dashboard */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}

function App() {
  return (
    
    <Routes>
      {/* Pages leh Header */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* Dashboard iyo Product gudaha Dashboard */}
      <Route
        path="/dashboard/*"
        element={
          <DashboardLayout>
            {/* Default dashboard page */}
            <h1 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h1>
          </DashboardLayout>
        }
      />

      <Route
        path="/product"
        element={
          <DashboardLayout>
            <Product />
          </DashboardLayout>
        }
      />
    

      <Route
        path="/updateproduct/:id"
        element={
          <DashboardLayout>
            <UpdateProduct />
          </DashboardLayout>
        }
      />
      <Route
        path="/registerproduct"
        element={
          <DashboardLayout>
            <AddProduct />
          </DashboardLayout>
        }
      />
      <Route
        path="/carts"
        element={
          <MainLayout>
            <Carts />
          </MainLayout>
        }
      />
       <Route
        path="/register"
        element={
          <MainLayout>
            <Register />
          </MainLayout>
        }
      />
       <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
    </Routes>
  )
}

export default App
