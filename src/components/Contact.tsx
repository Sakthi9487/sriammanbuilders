import React from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  Facebook, 
  MessageCircle, 
  Twitter, 
  Instagram, 
  Building,
  Loader2 
} from 'lucide-react';

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });
  
  // ⚠️ REPLACE WITH YOUR ACTUAL WEB3FORMS ACCESS KEY
  const { submit: onSubmit } = useWeb3Forms({
    access_key: 'bc6421a0-9e0d-4f31-8edc-ed30153307cb',
    settings: {
      from_name: 'Sri Amman Builders Contact Form',
      subject: 'New Project Inquiry - {{name}}',
    },
    onSuccess: (message, data) => {
      reset();
      // Optional: Show success toast/notification here
      console.log('Success:', message, data);
    },
    onError: (error, data) => {
      console.error('Form submission error:', error);
    }
  });

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/groups/864475214044663/?ref=share&mibextid=NSMWBT', 
      label: 'Facebook',
      'aria-label': 'Follow us on Facebook'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/919894885441', 
      label: 'WhatsApp',
      'aria-label': 'Chat on WhatsApp'
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter',
      'aria-label': 'Follow us on Twitter'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/selvanathan351?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', 
      label: 'Instagram',
      'aria-label': 'Follow us on Instagram'
    }
  ];

  const onSubmitHandler = (data) => {
  onSubmit(data);
};

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-orange-500 font-semibold text-lg uppercase tracking-wider flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-orange-500"></div>
            Contact Us
            <div className="w-12 h-0.5 bg-orange-500"></div>
          </span>
          <h2 
            id="contact-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text"
          >
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">Together</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to our expert team today and turn your vision into reality. 
            We'll respond within 24 hours to guide you through the process.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white rounded-3xl shadow-2xl p-8 lg:p-10 h-full relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-orange-500/20 rounded-full blur-xl group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl group-hover:scale-110 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <Building className="text-orange-400 mr-4" size={28} />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Get in Touch
                  </h3>
                </div>

                <p className="text-blue-100/90 mb-10 text-lg leading-relaxed opacity-90">
                  We're always ready to discuss your construction needs. 
                  Choose the best way to connect with us.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <a 
                    href="tel:+919894885441"
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group/contact hover:scale-[1.02] hover:shadow-lg"
                    aria-label="Call Sri Amman Builders"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/contact:bg-orange-500/30 transition-colors">
                      <Phone className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className=" mb-1 text-white text-md">Phone</h4>
                      <p className="text-blue-200/95 text-lg font-medium">+91 98948 85441</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:sriammanbuilders19@gmail.com"
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group/contact hover:scale-[1.02] hover:shadow-md"
                    aria-label="Email Sri Amman Builders"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/contact:bg-orange-500/30 transition-colors">
                      <Mail className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className=" mb-1 text-white text-md">Email</h4>
                      <p className="text-blue-200/95 text-md font-medium break-all">
                        sriammanbuilders19@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group/contact hover:scale-[1.02] hover:shadow-lg">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className=" mb-1 text-white text-md">Address</h4>
                      <p className="text-blue-200/95 text-md leading-relaxed max-w-xs">
                        Teacher's Colony, Asiriyar Nagar<br />
                        Near Pachal Flyover<br />
                        Tirupattur, Tamilnadu<br />
                        India - 635601
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h5 className="text-white/80 font-semibold mb-6 flex items-center gap-2">
                    Follow Us
                  </h5>
                  <div className="flex space-x-3">
                    {socialLinks.map(({ icon: Icon, href, 'aria-label': ariaLabel }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3"
                        aria-label={ariaLabel}
                      >
                        <Icon className="text-orange-300" size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/50 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-md">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Send Us a Message</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-8" noValidate>
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      {...register("name", { 
                        required: "Full name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters"
                        }
                      })}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg placeholder-gray-400 font-medium ${
                        errors.name 
                          ? 'border-red-300 bg-red-50/50 shadow-md shadow-red-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email address"
                        }
                      })}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg placeholder-gray-400 font-medium ${
                        errors.email 
                          ? 'border-red-300 bg-red-50/50 shadow-md shadow-red-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      {...register("phone", {
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Please enter a valid Indian phone number"
                        }
                      })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg placeholder-gray-400 font-medium hover:border-gray-300"
                      placeholder="+91 98XXX XXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Required
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg font-medium hover:border-gray-300 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">🏠 Residential Construction</option>
                      <option value="commercial">🏢 Commercial Construction</option>
                      <option value="industrial">🏭 Industrial Projects</option>
                      <option value="renovation">🔧 Renovation & Remodeling</option>
                      <option value="consulting">📋 Construction Consulting</option>
                      <option value="other">📝 Other Requirements</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    autoComplete="off"
                    {...register("message", { 
                      required: "Please tell us about your project",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long"
                      }
                    })}
                    rows={6}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg placeholder-gray-400 font-medium resize-vertical ${
                      errors.message 
                        ? 'border-red-300 bg-red-50/50 shadow-md shadow-red-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us about your project requirements, budget, timeline, location, and any specific needs..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
                      <span>⚠️</span> {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:group-hover:shadow-xl h-16"
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.0844446847955!2d78.56514867376585!3d12.510561687764044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac550a9a370b15%3A0x496795991fb8906a!2sSri%20Amman%20Builder's!5e0!3m2!1sen!2sin!4v1770724133871!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Amman Builders Location"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
