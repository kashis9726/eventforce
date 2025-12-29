import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Calendar, Bell, DollarSign, Plus, LogOut, MessageCircle, User as UserIcon, Zap, Star, MapPin } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const VendorDashboard = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const services = [
        {
            id: 1,
            name: 'Wedding Catering Service',
            category: 'Catering',
            price: '₹500/plate',
            location: 'Ahmedabad, Vadodara',
            bookings: 12,
            rating: 4.7
        },
        {
            id: 2,
            name: 'Professional Sound System',
            category: 'Sound & Lighting',
            price: '₹15,000/day',
            location: 'Gujarat',
            bookings: 8,
            rating: 4.9
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)' }}>
            {/* Header */}
            <header style={{
                background: 'white',
                borderBottom: '1px solid var(--border)',
                padding: '1rem 0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, #14B8A6 0%, #2A9DF4 100%)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                        }}>
                            EF
                        </div>
                        <div>
                            <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>EventForce</div>
                            <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Smart Hiring Platform</div>
                        </div>
                        <div style={{
                            background: '#F3E8FF',
                            color: '#9333EA',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}>
                            Vendor
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <Bell size={20} color="#6B7280" style={{ cursor: 'pointer', position: 'relative' }}>
                            <span style={{
                                position: 'absolute',
                                top: '-4px',
                                right: '-4px',
                                background: '#EF4444',
                                color: 'white',
                                borderRadius: '50%',
                                width: '8px',
                                height: '8px'
                            }}></span>
                        </Bell>
                        <MessageCircle size={20} color="#6B7280" style={{ cursor: 'pointer' }} />
                        <UserIcon size={20} color="#6B7280" style={{ cursor: 'pointer' }} />
                        <span style={{ fontWeight: '600' }}>{user?.name || 'Demo User'}</span>
                        <button
                            onClick={handleLogout}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'white',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}
                        >
                            Logout
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </header>

            <div className="container" style={{ padding: '2rem 1.5rem' }}>
                {/* Welcome Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                        Welcome back, {user?.name || 'Demo User'}! 👋
                    </h1>
                    <p style={{ color: '#6B7280', fontSize: '1.1rem' }}>
                        Manage your services and connect with clients.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ marginBottom: '2rem' }}>
                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Services</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>2</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Active listings</p>
                            </div>
                            <Box size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Bookings</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>20</h2>
                                <p style={{ color: '#14B8A6', fontSize: '0.85rem', fontWeight: '600' }}>+5 this month</p>
                            </div>
                            <Calendar size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>New Requests</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>3</h2>
                                <p style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: '600' }}>Needs response</p>
                            </div>
                            <Bell size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Revenue</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>₹2,45,000</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>This month</p>
                            </div>
                            <DollarSign size={24} color="#2A9DF4" />
                        </div>
                    </div>
                </div>

                {/* Add New Service Button */}
                <div style={{ marginBottom: '2rem' }}>
                    <button className="btn btn-primary" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.875rem 1.5rem',
                        fontSize: '1rem'
                    }}>
                        <Plus size={20} />
                        Add New Service
                    </button>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    borderBottom: '2px solid var(--border)',
                    marginBottom: '2rem'
                }}>
                    {['Overview', 'My Services', 'New Requests', 'Confirmed Bookings', 'Payments'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === tab.toLowerCase().replace(' ', '') ? '2px solid #2A9DF4' : '2px solid transparent',
                                color: activeTab === tab.toLowerCase().replace(' ', '') ? '#2A9DF4' : '#6B7280',
                                fontWeight: activeTab === tab.toLowerCase().replace(' ', '') ? '600' : '400',
                                cursor: 'pointer',
                                marginBottom: '-2px'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                {activeTab === 'myservices' && (
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>My Services</h2>
                        {services.map(service => (
                            <div key={service.id} className="card" style={{ borderRadius: '16px', padding: '1.5rem', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>{service.name}</h3>
                                            <span style={{
                                                background: '#F3F4F6',
                                                color: '#6B7280',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600'
                                            }}>
                                                {service.category}
                                            </span>
                                        </div>
                                        <p style={{ color: '#6B7280', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <DollarSign size={16} />
                                            {service.price}
                                        </p>
                                        <p style={{ color: '#6B7280', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <MapPin size={16} />
                                            {service.location}
                                        </p>
                                        <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                            Bookings: {service.bookings} • Rating: {service.rating} <Star size={14} color="#FBBF24" fill="#FBBF24" style={{ display: 'inline', verticalAlign: 'middle' }} />
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <button className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>Edit</button>
                                        <button className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>View Stats</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'overview' && (
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Overview</h2>
                        <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>
                            <p>Your dashboard overview will appear here.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VendorDashboard;

