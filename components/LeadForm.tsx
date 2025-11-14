import React, { useState } from 'react';
import axios from 'axios';

interface LeadFormProps {
  universityName: string;
  pipedreamUrl?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  courseInterested: string;
  intakeYear: string;
  consent: boolean;
}

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry'
];

const courses = [
  'B.Tech Computer Science', 'B.Tech Mechanical', 'B.Tech Civil', 'B.Tech Electrical',
  'MBA', 'BBA', 'M.Tech', 'LLB', 'B.Pharma', 'B.Des', 'B.Sc Agriculture'
];

const intakeYears = ['2024', '2025', '2026'];

const LeadForm: React.FC<LeadFormProps> = ({ universityName, pipedreamUrl }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    courseInterested: '',
    intakeYear: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation (10-digit Indian number)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    // State validation
    if (!formData.state) {
      newErrors.state = 'Please select a state';
    }

    // Course validation
    if (!formData.courseInterested) {
      newErrors.courseInterested = 'Please select a course';
    }

    // Intake Year validation
    if (!formData.intakeYear) {
      newErrors.intakeYear = 'Please select an intake year';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error for this field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix all errors before submitting',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Prepare data to send
      const dataToSend = {
        ...formData,
        university: universityName,
        timestamp: new Date().toISOString(),
      };

      // Send to Pipedream (or fallback URL)
      const url = pipedreamUrl || 'https://eoxk7xj50i7b48n.m.pipedream.net'; // Replace with your Pipedream URL
      
      await axios.post(url, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your application has been submitted successfully. Our team will contact you soon.',
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        courseInterested: '',
        intakeYear: '',
        consent: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="apply" className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Apply Now</h3>
      <p className="text-gray-600 mb-6">Fill out the form below and we will get back to you soon!</p>

      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="10-digit mobile number"
            maxLength={10}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State <span className="text-red-500">*</span>
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select your state</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
        </div>

        {/* Course Interested */}
        <div>
          <label htmlFor="courseInterested" className="block text-sm font-medium text-gray-700 mb-1">
            Course Interested <span className="text-red-500">*</span>
          </label>
          <select
            id="courseInterested"
            name="courseInterested"
            value={formData.courseInterested}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.courseInterested ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.courseInterested && <p className="mt-1 text-sm text-red-500">{errors.courseInterested}</p>}
        </div>

        {/* Intake Year */}
        <div>
          <label htmlFor="intakeYear" className="block text-sm font-medium text-gray-700 mb-1">
            Intake Year <span className="text-red-500">*</span>
          </label>
          <select
            id="intakeYear"
            name="intakeYear"
            value={formData.intakeYear}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.intakeYear ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select intake year</option>
            {intakeYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.intakeYear && <p className="mt-1 text-sm text-red-500">{errors.intakeYear}</p>}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className={`mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${
              errors.consent ? 'border-red-500' : ''
            }`}
          />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
            I agree to receive information and updates from {universityName} via email, SMS, and WhatsApp. I have read and agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;

