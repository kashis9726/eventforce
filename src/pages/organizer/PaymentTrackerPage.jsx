import React, { useState } from 'react';
import { Search, CheckCircle, AlertCircle, Clock, DollarSign, FileText } from 'lucide-react';

const PaymentTrackerPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const stats = {
        totalAmount: 10800,
        paid: 5500,
        pending: 3800,
        paymentRate: 51
    };

    const payments = [
        {
            id: 1,
            event: 'Corporate Annual Conference 2025',
            worker: 'Ramesh Kumar',
            role: 'Waiter',
            amount: 2000,
            date: '3/15/2025',
            dueDate: '3/20/2025',
            status: 'pending'
        },
        {
            id: 2,
            event: 'Wedding Reception',
            worker: 'Aarti Sharma',
            role: 'Decorator',
            amount: 3000,
            date: '2/10/2025',
            paidDate: '2/12/2025',
            status: 'paid'
        },
        {
            id: 3,
            event: 'Diwali Community Festival',
            worker: 'Vijay Patel',
            role: 'Security',
            amount: 1500,
            date: '10/23/2025',
            status: 'in-progress'
        },
        {
            id: 4,
            event: 'Corporate Seminar',
            worker: 'Priya Singh',
            role: 'Tech Support',
            amount: 2500,
            date: '1/15/2025',
            paidDate: '1/18/2025',
            status: 'paid'
        },
        {
            id: 5,
            event: 'College Tech Fest',
            worker: 'Amit Desai',
            role: 'Volunteer Coordinator',
            amount: 1800,
            date: '2/20/2025',
            status: 'pending'
        }
    ];

    const filteredPayments = payments.filter(payment => {
        if (activeFilter === 'all') return true;
        return payment.status === activeFilter;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'paid':
                return { bg: '#CCFBF1', color: '#14B8A6', dot: '#14B8A6' };
            case 'pending':
                return { bg: '#FEE2E2', color: '#EF4444', dot: '#EF4444' };
            case 'in-progress':
                return { bg: '#FEF3C7', color: '#D97706', dot: '#D97706' };
            default:
                return { bg: '#F3F4F6', color: '#6B7280', dot: '#6B7280' };
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%)', padding: '2rem 1.5rem' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Payment Tracker</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ marginBottom: '2rem' }}>
                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Amount</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>₹{stats.totalAmount.toLocaleString()}</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>All payments</p>
                            </div>
                            <DollarSign size={24} color="#2A9DF4" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Paid</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>₹{stats.paid.toLocaleString()}</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Completed</p>
                            </div>
                            <CheckCircle size={24} color="#14B8A6" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Pending</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>₹{stats.pending.toLocaleString()}</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>To be paid</p>
                            </div>
                            <AlertCircle size={24} color="#EF4444" />
                        </div>
                    </div>

                    <div className="card" style={{ borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Payment Rate</p>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.25rem' }}>{stats.paymentRate}%</h2>
                                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>On-time payments</p>
                            </div>
                            <CheckCircle size={24} color="#2A9DF4" />
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                            <Search size={20} color="#6B7280" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Search by event, worker name, or role..."
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
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {['All Payments', 'Pending', 'Paid', 'In Progress'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter.toLowerCase().replace(' ', '-'))}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: activeFilter === filter.toLowerCase().replace(' ', '-') ? '#2A9DF4' : 'white',
                                    color: activeFilter === filter.toLowerCase().replace(' ', '-') ? 'white' : '#6B7280',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    border: activeFilter !== filter.toLowerCase().replace(' ', '-') ? '1px solid var(--border)' : 'none'
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Payments Table */}
                <div className="card" style={{ borderRadius: '16px', padding: '1.5rem', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Event</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Worker</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Role</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Amount</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Date</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#6B7280' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPayments.map((payment) => {
                                const statusStyle = getStatusColor(payment.status);
                                return (
                                    <tr key={payment.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ fontWeight: '600' }}>{payment.event}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ fontWeight: '500' }}>{payment.worker}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                background: '#F3F4F6',
                                                color: '#6B7280',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                fontWeight: '500'
                                            }}>
                                                {payment.role}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>₹{payment.amount.toLocaleString()}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ fontWeight: '500' }}>{payment.date}</div>
                                            {payment.dueDate && (
                                                <div style={{ fontSize: '0.85rem', color: '#EF4444' }}>Due: {payment.dueDate}</div>
                                            )}
                                            {payment.paidDate && (
                                                <div style={{ fontSize: '0.85rem', color: '#14B8A6' }}>Paid: {payment.paidDate}</div>
                                            )}
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: statusStyle.dot
                                                }}></span>
                                                <span style={{
                                                    background: statusStyle.bg,
                                                    color: statusStyle.color,
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.25rem'
                                                }}>
                                                    {payment.status === 'paid' && <CheckCircle size={12} />}
                                                    {payment.status === 'pending' && <AlertCircle size={12} />}
                                                    {payment.status === 'in-progress' && <Clock size={12} />}
                                                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1).replace('-', ' ')}
                                                </span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            {payment.status === 'pending' ? (
                                                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                                                    Mark as Paid
                                                </button>
                                            ) : (
                                                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <FileText size={14} />
                                                    View Receipt
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentTrackerPage;

