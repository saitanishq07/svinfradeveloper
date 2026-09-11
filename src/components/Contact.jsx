import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Clock, Building2 } from 'lucide-react';
import { companyData } from '../data/companyData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: 'Control Blasting',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Project message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          serviceRequired: 'Control Blasting',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 mb-3">
            <Mail className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Direct Business Inquiry
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-logo-graphite mb-4">
            Contact <span className="text-logo-blue">SV Infra Developers</span> in Hyderabad
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Connect with our engineering team for rock blasting, demolition earthworks, road construction, and canal projects in Hyderabad, Telangana.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-logo-graphite mb-6 border-b border-slate-100 pb-4">
                Headquarter Contact Info
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-logo-blue flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Corporate Office Address
                  </h4>
                  <p className="text-slate-900 font-medium text-base mt-1">
                    {companyData.address}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-logo-blue flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Direct Phone Numbers
                  </h4>
                  <div className="mt-1 space-y-1">
                    {companyData.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone}`}
                        className="block text-logo-blue hover:underline font-bold text-base transition"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-logo-blue flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="block text-logo-blue hover:underline font-bold text-base mt-1 transition break-all"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 pt-2">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-logo-blue flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business Hours
                  </h4>
                  <p className="text-slate-900 font-medium text-sm mt-1">
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center space-x-4 shadow-sm">
              <div className="p-3 bg-logo-blue text-white rounded-xl font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-logo-blue uppercase">Managing Director</div>
                <div className="text-base font-bold text-slate-900">{companyData.founder}</div>
                <div className="text-xs text-slate-500">{companyData.name}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Light Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative">
              <h3 className="text-2xl font-bold text-logo-graphite mb-2">
                Submit Project Enquiry
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the technical inquiry details below and our team will respond within 24 hours.
              </p>

              {/* Success Notification Alert */}
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
                  <p className="text-slate-600 text-sm">
                    Thank you for reaching out to SV Infra Developers. Our engineering consultation team will review your specifications and contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-emerald-700 transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.name ? 'border-red-500' : 'border-slate-300 focus:border-logo-blue'
                        } rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition shadow-sm`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Infrastructure Partner Ltd"
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-logo-blue rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.phone ? 'border-red-500' : 'border-slate-300 focus:border-logo-blue'
                        } rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition shadow-sm`}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@company.com"
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.email ? 'border-red-500' : 'border-slate-300 focus:border-logo-blue'
                        } rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition shadow-sm`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Service Required
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-logo-blue rounded-xl text-slate-900 text-sm focus:outline-none transition shadow-sm"
                    >
                      <option value="Control Blasting">01 — Control Blasting</option>
                      <option value="Open Blasting">02 — Open Blasting</option>
                      <option value="Chemical Blasting">03 — Chemical Blasting</option>
                      <option value="Earthwork Excavations">04 — Earthwork Excavations</option>
                      <option value="Road Works">05 — Road Works</option>
                      <option value="Canal Works">06 — Canal Works</option>
                      <option value="General Infrastructure Inquiry">General Infrastructure Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Specifications / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe project scope, location, and estimated timeline..."
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.message ? 'border-red-500' : 'border-slate-300 focus:border-logo-blue'
                      } rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition shadow-sm`}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-logo-blue hover:bg-logo-graphite text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 ml-1 text-logo-cyan" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
