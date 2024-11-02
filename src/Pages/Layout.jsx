import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={'/'} className="nav-link">
            {' '}
            Beranda{' '}
          </Link>
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
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
