import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Calendar, DollarSign, CheckCircle, Flame, Sparkles, Briefcase, Clock, Bookmark, Target } from 'lucide-react';

const BrowseJobsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeTab, setActiveTab] = useState('available');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const cities = ['All Cities', 'Mumbai', 'Ahmedabad', 'Vadodara', 'Surat', 'Gandhinagar'];
    const categories = ['All Categories', 'Corporate Event', 'Wedding', 'Festival', 'College Fest', 'Government'];

    // Sample event data
    const events = [
        {
            id: 1,
            title: 'Grand Navratri Celebration 2025',
            organizer: 'Gujarat Cultural Society',
            rating: 4.7,
            category: 'Festival / Cultural',
            role: 'Security Personnel',
            date: '10/10/2025',
            duration: '9 days',
            location: 'Ahmedabad',
            payment: '₹1,000/day',
            verified: true,
            urgent: true,
            description: 'Security staff needed for 9-day Navratri event. Experience in crowd management essential.',
            requirements: ['Physical fitness', 'Crowd management skills', '12-hour shifts'],
            benefits: ['Meals provided', 'Uniform provided', 'Bonus on completion']
        }
    ];

    const applications = [
        {
            id: 1,
            title: 'College Tech Fest',
            organizer: 'IIT Gandhinagar',
            role: 'Stage Crew',
            payment: '₹600/day',
            appliedDate: '1/10/2025',
            eventDate: '2/15/2025',
            status: 'accepted'
        },
        {
            id: 2,
            title: 'Corporate Seminar',
            organizer: 'Infosys Ltd',
            role: 'Tech Support',
            payment: '₹1,000/day',
            appliedDate: '1/12/2025',
            eventDate: '2/20/2025',
            status: 'pending'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #CCFBF1 0%, #E0F2FE 100%)', padding: '2rem 1.5rem' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                {/* Search and Filters */}
                <div className="card" style={{ borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                            <Search size={20} color="#6B7280" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Search events by title, role, or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border)',
                                    fontSize: '0.95rem'
                                }}
                            />
                        </div>
                        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Filter size={18} />
                            Advanced Filters
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border)',
                                background: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            {cities.map(city => (
                                <option key={city} value={city.toLowerCase().replace(' ', '-')}>{city}</option>
                            ))}
                        </select>

                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Festival
                                <span style={{ fontSize: '0.75rem' }}>▼</span>
                            </button>
                            {showCategoryDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    marginTop: '0.5rem',
                                    background: 'white',
                                    border: '1px solid var(--border)',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    zIndex: 10,
                                    minWidth: '200px',
                                    padding: '0.5rem'
                                }}>
                                    {categories.map((cat, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                setSelectedCategory(cat.toLowerCase().replace(' ', '-'));
                                                setShowCategoryDropdown(false);
                                            }}
                                            style={{
                                                padding: '0.75rem 1rem',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                background: cat === 'Festival' ? '#F3F4F6' : 'transparent',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <span>{cat}</span>
                                            {cat === 'Festival' && <CheckCircle size={16} color="#14B8A6" />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#FEF3C7',
                            color: '#D97706',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '600'
                        }}>
                            💰 High Pay
                        </button>

                        <button style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#FCE7F3',
                            color: '#EC4899',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '600'
                        }}>
                            🔥 Urgent
                        </button>

                        <button style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#CCFBF1',
                            color: '#14B8A6',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '600'
                        }}>
                            ✓ Verified
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap'
                }}>
                    {[
                        { id: 'available', label: 'Available', icon: Briefcase, count: 1 },
                        { id: 'applications', label: 'Applications', icon: CheckCircle, count: 2 },
                        { id: 'upcoming', label: 'Upcoming', icon: Calendar },
                        { id: 'history', label: 'History', icon: Bookmark }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: activeTab === tab.id ? '#14B8A6' : 'white',
                                color: activeTab === tab.id ? 'white' : '#6B7280',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <tab.icon size={18} />
                            {tab.label} {tab.count && `(${tab.count})`}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {activeTab === 'available' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <p style={{ color: '#6B7280' }}>Showing 1 amazing opportunity</p>
                            <div style={{ position: 'relative' }}>
                                <button style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border)',
                                    background: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Sparkles size={16} />
                                    Recommended
                                </button>
                            </div>
                        </div>

                        {events.map(event => (
                            <div key={event.id} className="card" style={{ borderRadius: '16px', padding: '2rem', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        background: 'linear-gradient(135deg, #14B8A6 0%, #2A9DF4 100%)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '1.5rem'
                                    }}>
                                        🏛️
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>{event.title}</h2>
                                            {event.verified && (
                                                <span style={{
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
                                                    <CheckCircle size={12} />
                                                    Verified
                                                </span>
                                            )}
                                            {event.urgent && (
                                                <span style={{
                                                    background: '#FCE7F3',
                                                    color: '#EC4899',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.25rem'
                                                }}>
                                                    <Flame size={12} />
                                                    Urgent
                                                </span>
                                            )}
                                        </div>
                                        <p style={{ color: '#6B7280', marginBottom: '0.5rem' }}>
                                            {event.organizer} <Star size={14} color="#FBBF24" fill="#FBBF24" style={{ display: 'inline', verticalAlign: 'middle' }} /> {event.rating}
                                        </p>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            <span style={{
                                                background: '#E0F2FE',
                                                color: '#2A9DF4',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem'
                                            }}>
                                                👤 {event.role}
                                            </span>
                                            <span style={{
                                                background: '#FCE7F3',
                                                color: '#EC4899',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem'
                                            }}>
                                                {event.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p style={{ color: '#374151', marginBottom: '1.5rem', lineHeight: '1.6' }}>{event.description}</p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ background: '#E0F2FE', padding: '1rem', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <Calendar size={18} color="#2A9DF4" />
                                            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Date</span>
                                        </div>
                                        <p style={{ fontWeight: '600', margin: 0 }}>{event.date}</p>
                                    </div>
                                    <div style={{ background: '#F3E8FF', padding: '1rem', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <Clock size={18} color="#9333EA" />
                                            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Duration</span>
                                        </div>
                                        <p style={{ fontWeight: '600', margin: 0 }}>{event.duration}</p>
                                    </div>
                                    <div style={{ background: '#FEF3C7', padding: '1rem', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <MapPin size={18} color="#D97706" />
                                            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Location</span>
                                        </div>
                                        <p style={{ fontWeight: '600', margin: 0 }}>{event.location}</p>
                                    </div>
                                    <div style={{ background: '#CCFBF1', padding: '1rem', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <DollarSign size={18} color="#14B8A6" />
                                            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Payment</span>
                                        </div>
                                        <p style={{ fontWeight: '600', margin: 0 }}>{event.payment}</p>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '1rem' }}>
                                        <Target size={18} color="#6B7280" />
                                        Requirements
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {event.requirements.map((req, idx) => (
                                            <li key={idx} style={{ color: '#6B7280', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                                <span style={{ position: 'absolute', left: 0 }}>•</span> {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '1rem' }}>
                                        <Sparkles size={18} color="#6B7280" />
                                        Benefits
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {event.benefits.map((benefit, idx) => (
                                            <li key={idx} style={{ color: '#14B8A6', marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <CheckCircle size={16} color="#14B8A6" style={{ position: 'absolute', left: 0 }} />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                                    <Link to={`/manpower/event/${event.id}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
                                        Apply Now
                                    </Link>
                                    <button className="btn btn-secondary">
                                        Save for Later
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'applications' && (
                    <div>
                        {applications.map(app => (
                            <div key={app.id} className="card" style={{ borderRadius: '16px', padding: '1.5rem', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>{app.title}</h3>
                                            <span style={{
                                                background: app.status === 'accepted' ? '#CCFBF1' : '#FEF3C7',
                                                color: app.status === 'accepted' ? '#14B8A6' : '#D97706',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600'
                                            }}>
                                                {app.status === 'accepted' ? 'Accepted' : 'Pending'}
                                            </span>
                                        </div>
                                        <p style={{ color: '#6B7280', marginBottom: '0.5rem' }}>
                                            {app.organizer} • {app.role} • {app.payment}
                                        </p>
                                        <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                            Applied: {app.appliedDate} • Event Date: {app.eventDate}
                                        </p>
                                    </div>
                                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MessageCircle size={18} />
                                        Chat
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseJobsPage;

