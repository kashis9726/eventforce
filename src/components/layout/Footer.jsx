import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-white)', borderTop: '1px solid var(--border)', padding: '2rem 0', marginTop: 'auto' }}>
            <div className="container text-center text-muted">
                <p>&copy; {new Date().getFullYear()} EventForce. All rights reserved.</p>
                <div className="flex justify-center gap-4" style={{ marginTop: '1rem' }}>
                    <a href="#" className="text-muted">Privacy Policy</a>
                    <a href="#" className="text-muted">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
