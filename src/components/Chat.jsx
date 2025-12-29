import React, { useState, useRef, useEffect } from 'react';
import { Send, MoreVertical } from 'lucide-react';

const Chat = ({ recipientName = 'TechCorp Solutions', recipientAvatar = 'T' }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'organizer',
            text: 'Hi! Thank you for applying to our event.',
            time: '10:30 AM'
        },
        {
            id: 2,
            sender: 'user',
            text: 'Hello! Thank you for considering me.',
            time: '10:32 AM'
        },
        {
            id: 3,
            sender: 'organizer',
            text: 'Can you confirm your availability for March 15th?',
            time: '10:35 AM'
        },
        {
            id: 4,
            sender: 'user',
            text: 'Yes, I am available on that date. I have experience working similar events.',
            time: '10:37 AM'
        },
        {
            id: 5,
            sender: 'organizer',
            text: 'Great! Can you share any references or past work details?',
            time: '10:40 AM'
        }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, {
                id: messages.length + 1,
                sender: 'user',
                text: newMessage,
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            }]);
            setNewMessage('');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '600px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'white'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #14B8A6 0%, #2A9DF4 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                    }}>
                        {recipientAvatar}
                    </div>
                    <div>
                        <div style={{ fontWeight: '600', fontSize: '1rem' }}>{recipientName}</div>
                        <div style={{ fontSize: '0.85rem', color: '#14B8A6', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#14B8A6'
                            }}></span>
                            Online
                        </div>
                    </div>
                </div>
                <MoreVertical size={20} color="#6B7280" style={{ cursor: 'pointer' }} />
            </div>

            {/* Messages */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1.5rem',
                background: '#F9FAFB'
            }}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        style={{
                            display: 'flex',
                            justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                            marginBottom: '1rem'
                        }}
                    >
                        <div style={{
                            maxWidth: '70%',
                            padding: '0.75rem 1rem',
                            borderRadius: '16px',
                            background: message.sender === 'user' ? '#2A9DF4' : 'white',
                            color: message.sender === 'user' ? 'white' : '#1F2937',
                            boxShadow: message.sender === 'user' ? 'none' : '0 1px 2px rgba(0,0,0,0.05)',
                            border: message.sender === 'user' ? 'none' : '1px solid var(--border)'
                        }}>
                            <p style={{ margin: 0, lineHeight: '1.5' }}>{message.text}</p>
                            <p style={{
                                margin: '0.5rem 0 0 0',
                                fontSize: '0.75rem',
                                opacity: 0.7
                            }}>
                                {message.time}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                gap: '0.75rem',
                background: 'white'
            }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        borderRadius: '24px',
                        border: '1px solid var(--border)',
                        outline: 'none',
                        fontSize: '0.95rem'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: '#2A9DF4',
                        border: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <Send size={20} />
                </button>
            </form>
        </div>
    );
};

export default Chat;

