import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user data
        try {
            const storedUser = localStorage.getItem('eventforce_user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Error loading user from localStorage:', error);
            localStorage.removeItem('eventforce_user');
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (userData) => {
        try {
            setUser(userData);
            localStorage.setItem('eventforce_user', JSON.stringify(userData));
        } catch (error) {
            console.error('Error saving user to localStorage:', error);
        }
    };

    const logout = () => {
        try {
            setUser(null);
            localStorage.removeItem('eventforce_user');
        } catch (error) {
            console.error('Error removing user from localStorage:', error);
        }
    };

    const updateUser = (updates) => {
        try {
            const updatedUser = { ...(user || {}), ...updates };
            setUser(updatedUser);
            localStorage.setItem('eventforce_user', JSON.stringify(updatedUser));
        } catch (error) {
            console.error('Error updating user in localStorage:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

