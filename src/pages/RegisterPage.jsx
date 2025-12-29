import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Briefcase, ShoppingBag, User, Mail, Phone, Lock, Upload, X } from 'lucide-react';
import { useUser } from '../context/UserContext';

const RegisterPage = () => {
    const [role, setRole] = useState('organizer');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        profilePhoto: null
    });
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    const { login } = useUser();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profilePhoto: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removePhoto = () => {
        setFormData({ ...formData, profilePhoto: null });
        setPreview(null);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration logic
        console.log('Registered as:', role, formData);
        
        // Store user data
        login({ 
            email: formData.email, 
            name: formData.fullName, 
            role,
            phone: formData.phone
        });
        
        // Redirect based on role
        if (role === 'organizer') navigate('/organizer/dashboard');
        else if (role === 'manpower') navigate('/manpower/dashboard');
        else navigate('/vendor/dashboard');
    };

    const roleLabels = {
        organizer: { title: 'Event Organizer', desc: 'Post events and hire professionals' },
        manpower: { title: 'Manpower / Worker', desc: 'Find jobs and grow your career' },
        vendor: { title: 'Vendor / Supplier', desc: 'Offer services to clients' }
    };

    return (
        <div style={{ 
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)',
            padding: '3rem 1.5rem'
        }}>
            <div className="container" style={{ maxWidth: '700px' }}>
                <div className="card" style={{ 
                    borderRadius: '20px',
                    padding: '2.5rem',
                    background: 'white'
                }}>
                    <h2 className="text-center" style={{ marginBottom: '0.5rem', fontSize: '1.75rem' }}>I am a...</h2>
                    <p className="text-center text-muted" style={{ marginBottom: '2rem' }}>Select your role to get started</p>

                    {/* Role Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: '2.5rem' }}>
                        <div
                            className="card flex flex-col items-center justify-center"
                            style={{
                                padding: '1.5rem',
                                border: role === 'organizer' ? '2px solid #2A9DF4' : '1px solid var(--border)',
                                background: role === 'organizer' ? '#E0F2FE' : 'var(--bg-white)',
                                cursor: 'pointer',
                                borderRadius: '16px',
                                transition: 'all 0.2s'
                            }}
                            onClick={() => setRole('organizer')}
                        >
                            <Briefcase size={32} color={role === 'organizer' ? '#2A9DF4' : '#6B7280'} />
                            <span style={{ fontSize: '0.9rem', marginTop: '0.75rem', fontWeight: '600', textAlign: 'center' }}>
                                {roleLabels.organizer.title}
                            </span>
                            <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#6B7280', textAlign: 'center' }}>
                                {roleLabels.organizer.desc}
                            </span>
                        </div>

                        <div
                            className="card flex flex-col items-center justify-center"
                            style={{
                                padding: '1.5rem',
                                border: role === 'manpower' ? '2px solid #14B8A6' : '1px solid var(--border)',
                                background: role === 'manpower' ? '#CCFBF1' : 'var(--bg-white)',
                                cursor: 'pointer',
                                borderRadius: '16px',
                                transition: 'all 0.2s'
                            }}
                            onClick={() => setRole('manpower')}
                        >
                            <Users size={32} color={role === 'manpower' ? '#14B8A6' : '#6B7280'} />
                            <span style={{ fontSize: '0.9rem', marginTop: '0.75rem', fontWeight: '600', textAlign: 'center' }}>
                                {roleLabels.manpower.title}
                            </span>
                            <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#6B7280', textAlign: 'center' }}>
                                {roleLabels.manpower.desc}
                            </span>
                        </div>

                        <div
                            className="card flex flex-col items-center justify-center"
                            style={{
                                padding: '1.5rem',
                                border: role === 'vendor' ? '2px solid #D97706' : '1px solid var(--border)',
                                background: role === 'vendor' ? '#FEF3C7' : 'var(--bg-white)',
                                cursor: 'pointer',
                                borderRadius: '16px',
                                transition: 'all 0.2s'
                            }}
                            onClick={() => setRole('vendor')}
                        >
                            <ShoppingBag size={32} color={role === 'vendor' ? '#D97706' : '#6B7280'} />
                            <span style={{ fontSize: '0.9rem', marginTop: '0.75rem', fontWeight: '600', textAlign: 'center' }}>
                                {roleLabels.vendor.title}
                            </span>
                            <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#6B7280', textAlign: 'center' }}>
                                {roleLabels.vendor.desc}
                            </span>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleRegister} className="flex flex-col gap-4">
                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                <User size={16} />
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required 
                                placeholder="Enter your full name"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} 
                            />
                        </div>

                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                <Mail size={16} />
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required 
                                placeholder="your.email@example.com"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} 
                            />
                        </div>

                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                <Phone size={16} />
                                Phone Number
                            </label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required 
                                placeholder="+91 XXXXX XXXXX"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} 
                            />
                        </div>

                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                <Lock size={16} />
                                Password
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required 
                                placeholder="Create a strong password"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} 
                            />
                        </div>

                        {/* Profile Photo Upload */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                Profile Photo (Optional)
                            </label>
                            {preview ? (
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <img 
                                        src={preview} 
                                        alt="Preview" 
                                        style={{ 
                                            width: '150px', 
                                            height: '150px', 
                                            objectFit: 'cover',
                                            borderRadius: '12px',
                                            border: '2px dashed var(--border)'
                                        }} 
                                    />
                                    <button
                                        type="button"
                                        onClick={removePhoto}
                                        style={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '-8px',
                                            background: '#EF4444',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '28px',
                                            height: '28px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <label
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '3rem',
                                        border: '2px dashed var(--border)',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        background: 'var(--bg-light)',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2A9DF4'}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                                >
                                    <Upload size={32} color="#6B7280" style={{ marginBottom: '0.5rem' }} />
                                    <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>Click to upload or drag and drop</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                </label>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '0.875rem' }}>
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
                        Already have an account? <Link to="/login" style={{ color: '#2A9DF4', fontWeight: '600' }}>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
