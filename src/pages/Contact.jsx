import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { CONTACT_EMAIL } from '../config/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactEmail: '',
    canContactAtProvidedEmail: 'yes',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.canContactAtProvidedEmail === 'no' && !formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact email is required when you prefer to be contacted elsewhere';
    } else if (formData.canContactAtProvidedEmail === 'no' && !validateEmail(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid contact email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Create mailto link with form data
    const subject = encodeURIComponent('My Website Contact Form Submission');
    
    // Determine which email to use for contact
    const ContactEmail = formData.canContactAtProvidedEmail === 'yes' 
      ? formData.email 
      : formData.contactEmail;
    
    // Include the contact preference in the message
    const bodyContent = `Name: ${formData.name}
      Email: ${formData.email}
      Contact Preference: ${`Please contact user with: ${ContactEmail}`}
      Message: ${formData.message}
    `;
    
    const body = encodeURIComponent(bodyContent);
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Reset form and show success message
    setFormData({ 
      name: '', 
      email: '', 
      contactEmail: '',
      canContactAtProvidedEmail: 'yes',
      message: '' 
    });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Back arrow icon at top left */}
        <div className="px-4 py-4 sm:px-6 sm:py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
              <line x1="20" y1="12" x2="4" y2="12"></line>
              <polyline points="11 5 4 12 11 19"></polyline>
            </svg>
            <span className="text-sm sm:text-base">Back</span>
          </Link>
        </div>

        <section className="relative z-10 px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
                Have a project in mind or want to learn more about my services? Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. I'll respond to your message shortly.
                  </p>
                  <Link 
                    to="/"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 mb-3 text-lg">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-purple-500'}`}
                      required
                    />
                    {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 mb-3 text-lg">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-purple-500'}`}
                      required
                    />
                    {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-3 text-lg">Can we contact you at this email?</label>
                    <div className="flex space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canContactAtProvidedEmail"
                          value="yes"
                          checked={formData.canContactAtProvidedEmail === 'yes'}
                          onChange={handleInputChange}
                          className="text-purple-600 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-300 text-lg">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canContactAtProvidedEmail"
                          value="no"
                          checked={formData.canContactAtProvidedEmail === 'no'}
                          onChange={handleInputChange}
                          className="text-purple-600 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-300 text-lg">No</span>
                      </label>
                    </div>
                  </div>
                  
                  {formData.canContactAtProvidedEmail === 'no' && (
                    <div className="mb-6">
                      <label htmlFor="contactEmail" className="block text-gray-300 mb-3 text-lg">Preferred Contact Email</label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 border ${errors.contactEmail ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-purple-500'}`}
                        required
                      />
                      {errors.contactEmail && <p className="text-red-500 mt-2">{errors.contactEmail}</p>}
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-300 mb-3 text-lg">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className={`w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-purple-500'}`}
                      required
                    ></textarea>
                    {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
                  </div>
                  {submitError && (
                    <div className="text-red-400 mb-6 text-center">{submitError}</div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/"
                      className="flex-1 text-center bg-gray-700 text-white px-6 py-3 sm:py-4 rounded-full hover:bg-gray-600 transition-all duration-300 text-base sm:text-lg"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 sm:py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-base sm:text-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;