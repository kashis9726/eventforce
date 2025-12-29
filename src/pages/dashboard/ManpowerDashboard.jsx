import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, CheckCircle, Star, DollarSign, Bell, MessageCircle, User as UserIcon, LogOut, Zap, Award, Target } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const ManpowerDashboard = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const stats = {
        jobsApplied: 24,
        completed: 18,
        avgRating: 4.8,
        totalEarned: 28500,
        xp: 750,
        nextLevelXp: 1000,
        level: 7
    };

    const xpProgress = (stats.xp / stats.nextLevelXp) * 100;

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #CCFBF1 0%, #E0F2FE 100%)' }}>
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
                            justifyContent: 'center'
                        }}>
                            <Zap size={20} color="white" />
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
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                        }}>
                            <UserIcon size={12} />
                            Manpower
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <Bell size={20} color="#6B7280" style={{ cursor: 'pointer' }} />
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
                        Welcome back, {user?.name || 'kashis'}! 💬
                    </h1>
                    <p style={{ color: '#6B7280', fontSize: '1.1rem' }}>
                        Discover amazing opportunities waiting for you.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem', marginBottom: '2rem' }}>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="card" style={{ borderRadius: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Jobs Applied</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>24</h2>
                                    <Link to="/manpower/applications" style={{ color: '#2A9DF4', fontSize: '0.85rem', textDecoration: 'none' }}>
                                        All time applications →
                                    </Link>
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#E0F2FE',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TrendingUp size={24} color="#2A9DF4" />
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ borderRadius: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Completed</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>18</h2>
                                    <p style={{ color: '#14B8A6', fontSize: '0.85rem', fontWeight: '600' }}>
                                        75% success rate 🎯
                                    </p>
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#CCFBF1',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircle size={24} color="#14B8A6" />
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ borderRadius: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Avg Rating</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        4.8 <Star size={20} color="#FBBF24" fill="#FBBF24" />
                                    </h2>
                                    <p style={{ color: '#EF4444', fontSize: '0.85rem' }}>From 15 reviews</p>
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#FEF3C7',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Star size={24} color="#F59E0B" />
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ borderRadius: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Earned</p>
                                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>₹28,500</h2>
                                    <p style={{ color: '#EC4899', fontSize: '0.85rem' }}>This month 💰</p>
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#FCE7F3',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <DollarSign size={24} color="#EC4899" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Level Progress Card */}
                    <div className="card" style={{
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #14B8A6 0%, #2A9DF4 100%)',
                        color: 'white',
                        padding: '2rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Award size={32} color="white" />
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Level {stats.level} Pro</h3>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    background: '#F59E0B',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    marginTop: '0.25rem'
                                }}>
                                    <Star size={12} fill="white" color="white" />
                                    Verified Expert
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>{stats.xp} XP</span>
                                <span>{stats.nextLevelXp} XP</span>
                            </div>
                            <div style={{
                                width: '100%',
                                height: '12px',
                                background: 'rgba(255,255,255,0.3)',
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: `${xpProgress}%`,
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 100%)',
                                    borderRadius: '10px',
                                    transition: 'width 0.3s'
                                }}></div>
                            </div>
                        </div>

                        <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: 0 }}>
                            {stats.nextLevelXp - stats.xp} XP to reach Level {stats.level + 1}
                        </p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div style={{ marginTop: '2rem' }}>
                    <Link 
                        to="/manpower/browse-jobs" 
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
                        Browse Available Jobs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManpowerDashboard;
