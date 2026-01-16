import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="page">
        {children}
      </main>
      <footer>
        <div className="container" style={{padding: '2rem 0', textAlign: 'center', fontSize: '0.8rem', opacity: 0.6}}>
          &copy; {new Date().getFullYear()} Planos MiCasita
        </div>
      </footer>
    </>
  );
};

export default Layout;
