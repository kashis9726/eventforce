import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, ShoppingBag, ArrowRight, Zap, Star } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="landing-page" style={{ 
            background: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)',
            minHeight: '100vh'
        }}>
            {/* Hero Section */}
            <section className="hero-section text-center" style={{ padding: '6rem 1.5rem 4rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '0.75rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #14B8A6 0%, #2A9DF4 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Zap size={24} color="white" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0, color: '#1F2937' }}>
                                EventForce
                            </h1>
                            <p style={{ fontSize: '0.9rem', color: '#6B7280', margin: 0 }}>Smart Hiring Platform</p>
                        </div>
                    </div>

                    <p style={{ 
                        fontSize: '1.25rem', 
                        maxWidth: '800px', 
                        margin: '0 auto 3rem',
                        color: '#374151',
                        lineHeight: '1.8'
                    }}>
                        Bridge the gap between event organizers and skilled professionals. Find verified workers, connect with vendors, and manage everything in one powerful platform.
                    </p>

                    <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
                        <Link to="/register" className="btn btn-primary" style={{ 
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            background: 'linear-gradient(135deg, #14B8A6 0%, #2A9DF4 100%)',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none'
                        }}>
                            <Zap size={20} />
                            Start Your Journey
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/login" className="btn btn-secondary" style={{ 
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            textDecoration: 'none'
                        }}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>

            {/* Roles Section */}
            <section className="roles-section" style={{ padding: '4rem 1.5rem' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Organizer Card */}
                        <div className="card text-center flex flex-col items-center" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(42, 157, 244, 0.2)',
                            background: 'white',
                            transition: 'all 0.3s'
                        }}>
                            <div style={{ 
                                background: 'linear-gradient(135deg, #E0F2FE 0%, #BFDBFE 100%)', 
                                padding: '1.5rem', 
                                borderRadius: '16px', 
                                marginBottom: '1.5rem',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Briefcase size={36} color="#2A9DF4" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>I'm an Organizer</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                Post events and hire trusted professionals instantly
                            </p>
                            <Link to="/register" className="btn btn-secondary" style={{ 
                                width: '100%', 
                                marginTop: 'auto',
                                textDecoration: 'none',
                                borderColor: '#2A9DF4',
                                color: '#2A9DF4'
                            }}>
                                Start Hiring
                            </Link>
                        </div>

                        {/* Manpower Card - Highlighted */}
                        <div className="card text-center flex flex-col items-center" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            border: '2px solid #14B8A6',
                            background: 'white',
                            boxShadow: '0 8px 24px rgba(20, 184, 166, 0.2)',
                            transform: 'scale(1.05)',
                            transition: 'all 0.3s'
                        }}>
                            <div style={{ 
                                background: 'linear-gradient(135deg, #CCFBF1 0%, #A7F3D0 100%)', 
                                padding: '1.5rem', 
                                borderRadius: '16px', 
                                marginBottom: '1.5rem',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Users size={36} color="#14B8A6" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>I'm Manpower</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                Find event jobs and grow your professional career
                            </p>
                            <Link to="/register" className="btn btn-primary" style={{ 
                                width: '100%', 
                                marginTop: 'auto',
                                textDecoration: 'none',
                                background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}>
                                Find Jobs
                                <Star size={16} />
                            </Link>
                        </div>

                        {/* Vendor Card */}
                        <div className="card text-center flex flex-col items-center" style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(217, 119, 6, 0.2)',
                            background: 'white',
                            transition: 'all 0.3s'
                        }}>
                            <div style={{ 
                                background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', 
                                padding: '1.5rem', 
                                borderRadius: '16px', 
                                marginBottom: '1.5rem',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ShoppingBag size={36} color="#D97706" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>I'm a Vendor</h3>
                            <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                Offer services and connect with premium clients
                            </p>
                            <Link to="/register" className="btn btn-secondary" style={{ 
                                width: '100%', 
                                marginTop: 'auto',
                                textDecoration: 'none',
                                borderColor: '#D97706',
                                color: '#D97706'
                            }}>
                                Start Selling
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '4rem 1.5rem', background: 'rgba(255, 255, 255, 0.6)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#2A9DF4', marginBottom: '0.5rem' }}>500+</h2>
                            <p className="text-muted" style={{ fontSize: '1.1rem' }}>Verified Professionals</p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#14B8A6', marginBottom: '0.5rem' }}>120+</h2>
                            <p className="text-muted" style={{ fontSize: '1.1rem' }}>Successful Events</p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#2A9DF4', marginBottom: '0.5rem' }}>4.8/5</h2>
                            <p className="text-muted" style={{ fontSize: '1.1rem' }}>Average Rating</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
