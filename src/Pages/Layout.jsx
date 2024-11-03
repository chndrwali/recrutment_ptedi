import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Layout = () => {
  const { user, token, setUser, setToken } = useContext(AppContext);
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
          <Link to={'/'} className="nav-link">
            {' '}
            Beranda{' '}
          </Link>
          {user ? (
            <div className='flex items-center space-x-4'>
            <div>{user.email}</div>
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
