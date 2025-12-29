import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, TrendingUp, Users, Bell, Plus, LogOut, MessageCircle, User as UserIcon, Zap } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const OrganizerDashboard = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = {
        totalEvents: 12,
        activeEvents: 3,
        totalWorkers: 45,
        pendingApps: 20
    };

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
                            background: '#CCFBF1',
                            color: '#14B8A6',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}>
                            Organizer
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
                        <span style={{ fontWeight: '600' }}>{user?.name || 'kashis'}</span>
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
                        Welcome back, {user?.name || 'kashis'}! 👋
                    </h1>
                    <p style={{ color: '#6B7280', fontSize: '1.1rem' }}>
                        Manage your events and hire the best professionals
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ marginBottom: '2rem' }}>
                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Events</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>12</h2>
                                <p style={{ color: '#14B8A6', fontSize: '0.85rem', fontWeight: '600' }}>+3 this month</p>
                            </div>
                            <Calendar size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Active Events</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>3</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Ongoing</p>
                            </div>
                            <TrendingUp size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Workers</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>45</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Hired</p>
                            </div>
                            <Users size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Pending Apps</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>20</h2>
                                <p style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: '600' }}>Needs review</p>
                            </div>
                            <Bell size={24} color="#2A9DF4" />
                        </div>
                    </div>
                </div>

                {/* Post New Event Button */}
                <div style={{ marginBottom: '2rem' }}>
                    <Link 
                        to="/organizer/post-event" 
                        className="btn btn-primary" 
                        style={{ 
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.875rem 1.5rem',
                            fontSize: '1rem'
                        }}
                    >
                        <Plus size={20} />
                        Post New Event
                    </Link>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    borderBottom: '2px solid var(--border)',
                    marginBottom: '2rem'
                }}>
                    {['Overview', 'Active Events', 'Completed', 'Applications'].map((tab) => (
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
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Your Events</h2>
                    <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>
                        <p>Your events will appear here. Click "Post New Event" to get started!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerDashboard;
