// src/EmailSender.tsx
import React, { useState } from 'react';
import { sendEmail } from './gmail';

const EmailSender: React.FC = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    await sendEmail(to, subject, message);
  };

  return (
    <div>
      <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Recipient" />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default EmailSender;
