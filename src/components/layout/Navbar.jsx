import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
    const { user } = useUser();
    
    return (
        <nav style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
            <div className="container flex justify-between items-center" style={{ height: '70px' }}>
                {/* Logo */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    EventForce
                </Link>

                {/* Desktop Menu */}
                <div className="flex items-center gap-8" style={{ display: 'none' }}>
                    <Link to="/" className="text-muted" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Home</Link>
                    <Link to="/features" className="text-muted" style={{ textDecoration: 'none' }}>Features</Link>
                    <Link to="/about" className="text-muted" style={{ textDecoration: 'none' }}>About</Link>
                    <Link to="/contact" className="text-muted" style={{ textDecoration: 'none' }}>Contact</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {user && user.role ? (
                        <Link to={`/${user.role}/dashboard`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>Login</Link>
                            <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>Get Started</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
