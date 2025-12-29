import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate role-based redirect for demo
        // In a real app, this would come from the backend response
        let role = 'organizer';
        let name = 'User';
        
        if (email.includes('organizer')) {
            role = 'organizer';
            navigate('/organizer/dashboard');
        } else if (email.includes('worker') || email.includes('manpower')) {
            role = 'manpower';
            navigate('/manpower/dashboard');
        } else if (email.includes('vendor')) {
            role = 'vendor';
            navigate('/vendor/dashboard');
        } else {
            navigate('/organizer/dashboard'); // Default
        }

        // Store user data
        login({ email, name, role });
    };

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '500px' }}>
            <div className="card">
                <h2 className="text-center" style={{ marginBottom: '2rem' }}>Welcome Back</h2>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="e.g., organizer@eventforce.com"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} 
                        />
                    </div>

                    <div className="flex justify-between items-center" style={{ fontSize: '0.9rem' }}>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="text-primary">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Sign In</button>
                </form>

                <p className="text-center text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    Don't have an account? <Link to="/register">Create Account</Link>
                </p>

                <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                    <p className="text-muted text-center"><strong>Demo Credentials Hint:</strong></p>
                    <p className="text-center">Email containing "organizer" &rarr; Organizer Dashboard</p>
                    <p className="text-center">Email containing "worker" &rarr; Manpower Dashboard</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
