import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Layout = () => {
  const { user, token, setUser, setToken, role } = useContext(AppContext);
  const navigate = useNavigate()
  
  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/logout', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    const data = await res.json()

    console.log(data)

    if (res.ok) {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token')
        navigate('/')
    }

  }

  return (
    <>
      <header>
        <nav>
          {role === 'user' ? 
          
          <Link to={'/home'} className="nav-link">
            {' '}
            Beranda{' '}
          </Link>
          : 
          <>Admin</>
          }
          {user ? (
            <div className='flex items-center space-x-4'>
            <span className='text-white'>{user.email}</span>
            <form onSubmit={handleLogout}>
              <button className='nav-link'>Keluar</button>
            </form>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to={'/register'} className="nav-link">
                {' '}
                Daftar{' '}
              </Link>
              <Link to={'/login'} className="nav-link">
                {' '}
                Masuk{' '}
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
