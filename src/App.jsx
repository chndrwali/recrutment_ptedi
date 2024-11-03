import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
import Admin from './Pages/Admin';
import { Toaster } from 'react-hot-toast';
import DetailAdmin from './Pages/detailAdmin';
import UpdateAdmin from './Pages/updateAdmin';

export default function App() {
  const { user, role } = useContext(AppContext);

  if (!user) {
    return (
      <BrowserRouter>
        <Toaster
          toastOptions={{
            success: {
              style: {
                border: '1px solid #10b981',
                padding: '8px',
                color: '#10b981',
              },
              iconTheme: {
                primary: '#10b981',
                secondary: '#E6F4EA',
              },
            },
            error: {
              style: {
                border: '1px solid red',
                color: 'red',
                padding: '8px',
              },
              iconTheme: {
                primary: 'red',
                secondary: '#FFFAEE',
              },
            },
          }}
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }

  if (role === 'admin') {
    return (
      <BrowserRouter>
        <Toaster
          toastOptions={{
            success: {
              style: {
                border: '1px solid #10b981',
                padding: '8px',
                color: '#10b981',
              },
              iconTheme: {
                primary: '#10b981',
                secondary: '#E6F4EA',
              },
            },
            error: {
              style: {
                border: '1px solid red',
                color: 'red',
                padding: '8px',
              },
              iconTheme: {
                primary: 'red',
                secondary: '#FFFAEE',
              },
            },
          }}
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Admin />} />
          </Route>
            <Route path='/admin/:id' element={<DetailAdmin />} />
            <Route path='/admin/update/:id' element={<UpdateAdmin />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          success: {
            style: {
              border: '1px solid #10b981',
              padding: '8px',
              color: '#10b981',
            },
            iconTheme: {
              primary: '#10b981',
              secondary: '#E6F4EA',
            },
          },
          error: {
            style: {
              border: '1px solid red',
              color: 'red',
              padding: '8px',
            },
            iconTheme: {
              primary: 'red',
              secondary: '#FFFAEE',
            },
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
