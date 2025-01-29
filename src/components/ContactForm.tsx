import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;
    if (userID) {
      emailjs.init(userID);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
  
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    try {
      const userID = import.meta.env.VITE_EMAILJS_USER_ID;
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const toEmail = import.meta.env.VITE_TO_EMAIL;
  
      if (!userID || !serviceID || !templateID || !toEmail) {
        throw new Error('Missing EmailJS credentials');
      }
  
      // Send the email using EmailJS
      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: toEmail
      });
  
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Rest of your form JSX remains the same */}
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition-all`}
          placeholder="Your Name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition-all`}
          placeholder="youremail@gmail.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition-all`}
          rows={4}
          placeholder="Your message here..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 dark:bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}