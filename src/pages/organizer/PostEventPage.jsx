import React, { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle, Clock, DollarSign, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PostEventPage = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        date: '',
        time: '',
        location: '',
        description: '',
        budget: '',
        manpower: [],
    });

    const categories = [
        { id: 'marriage', label: 'Marriage / Reception', icon: '💍', roles: ['Servers', 'Decorators', 'Makeup Artists', 'Photographers'] },
        { id: 'corporate', label: 'Corporate / Office Event', icon: '🏢', roles: ['Waiters', 'Tech Staff', 'Security', 'Cleaners'] },
        { id: 'festival', label: 'Festival / Cultural', icon: '🎉', roles: ['Stage Crew', 'Volunteers', 'Performers', 'Crowd Control'] },
        { id: 'college', label: 'College Fest / Exhibition', icon: '🏫', roles: ['Coordinators', 'Anchors', 'Volunteers', 'Tech Support'] },
        { id: 'government', label: 'Government Event', icon: '🏛️', roles: ['Security', 'Logistics', 'Drivers', 'Setup Crew'] },
    ];

    const handleCategorySelect = (catId) => {
        setFormData({ ...formData, category: catId, manpower: [] });
        setStep(2);
    };

    const toggleRole = (role) => {
        const currentRoles = formData.manpower;
        if (currentRoles.includes(role)) {
            setFormData({ ...formData, manpower: currentRoles.filter(r => r !== role) });
        } else {
            setFormData({ ...formData, manpower: [...currentRoles, role] });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Event Posted Successfully! (Demo)');
        navigate('/organizer/dashboard');
    };

    const selectedCategoryData = categories.find(c => c.id === formData.category);

    if (step === 1) {
        return (
            <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)', padding: '3rem 1.5rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', textAlign: 'center' }}>Post New Event</h1>
                    <p style={{ textAlign: 'center', color: '#6B7280', marginBottom: '3rem' }}>Fill in the details to create your event listing.</p>

                    <div className="card" style={{ borderRadius: '20px', padding: '2rem', background: '#F9FAFB' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Event Category</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {categories.map(cat => (
                                <div
                                    key={cat.id}
                                    onClick={() => handleCategorySelect(cat.id)}
                                    style={{
                                        background: 'white',
                                        border: '2px solid var(--border)',
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#2A9DF4';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ fontSize: '3rem' }}>{cat.icon}</div>
                                    <span style={{ fontWeight: '600', fontSize: '1rem' }}>{cat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)', padding: '3rem 1.5rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>Event Details</h1>
                    <button
                        onClick={() => setStep(1)}
                        style={{
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <X size={18} />
                        Change Category
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="card" style={{ borderRadius: '20px', padding: '2rem', background: '#F9FAFB' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                            Event Title <span style={{ color: '#EF4444' }}>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., Corporate Annual Conference 2025"
                            required
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Description</label>
                        <textarea
                            rows="4"
                            placeholder="Provide details about your event..."
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                                Event Date <span style={{ color: '#EF4444' }}>*</span>
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                                <Calendar size={18} color="#6B7280" />
                                <input
                                    type="date"
                                    required
                                    style={{ border: 'none', outline: 'none', width: '100%' }}
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Event Time</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                                <Clock size={18} color="#6B7280" />
                                <input
                                    type="time"
                                    style={{ border: 'none', outline: 'none', width: '100%' }}
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                                Location <span style={{ color: '#EF4444' }}>*</span>
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                                <MapPin size={18} color="#6B7280" />
                                <input
                                    type="text"
                                    placeholder="e.g., Mumbai Convention Center"
                                    required
                                    style={{ border: 'none', outline: 'none', width: '100%' }}
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Total Budget</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.75rem' }}>
                                <DollarSign size={18} color="#6B7280" />
                                <input
                                    type="number"
                                    placeholder="e.g., 50000"
                                    style={{ border: 'none', outline: 'none', width: '100%' }}
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Roles (Dynamic) */}
                {formData.category && selectedCategoryData && (
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                            2. Manpower Requirements <span className="text-primary" style={{ fontSize: '0.9rem' }}>({selectedCategoryData.label})</span>
                        </h3>

                        <p className="text-muted" style={{ marginBottom: '1rem' }}>Select the roles you need for this event:</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {selectedCategoryData.roles.map(role => (
                                <div
                                    key={role}
                                    onClick={() => toggleRole(role)}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: formData.manpower.includes(role) ? '2px solid var(--secondary)' : '1px solid var(--border)',
                                        background: formData.manpower.includes(role) ? 'var(--secondary-light)' : 'transparent',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        transition: 'all 0.2s',
                                        position: 'relative'
                                    }}
                                >
                                    {formData.manpower.includes(role) && (
                                        <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
                                            <CheckCircle size={16} color="var(--secondary)" />
                                        </div>
                                    )}
                                    <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{role}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Other Requirements / Vendor Needs</label>
                            <input
                                type="text"
                                placeholder="e.g. Need 500 plates catering from Vendor"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
                            />
                        </div>
                    </div>
                )}

                <div className="flex justify-end gap-4">
                    <button type="button" className="btn btn-secondary">Cancel</button>
                    <button type="submit" className="btn btn-primary">Post Event</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default PostEventPage;
