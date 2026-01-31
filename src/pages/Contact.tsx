import { useState, FormEvent } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { contactApi } from '@/lib/api';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Submit to backend API
            await contactApi.submitContactForm(formData);

            // Success!
            setSuccess(true);
            setFormData({ name: '', phone: '', email: '', message: '' });

            // Hide success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } catch (err: any) {
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <Navbar />

            <main>
                {/* Hero Section */}
                <div className="pt-32 pb-20 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-emerald-50/50 to-transparent blur-3xl opacity-50" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-100">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>We're here to help</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Have questions about buying, renting, or listing a property? Our team of experts is ready to assist you.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-500 mb-4">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:+919876543210" className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 block">+91 98765 43210</a>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                                <p className="text-slate-500 mb-4">We'll get back to you within 24 hours.</p>
                                <a href="mailto:hello@makemystay.ai" className="text-lg font-semibold text-blue-600 hover:text-blue-700 block">hello@makemystay.ai</a>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
                                <p className="text-slate-500 mb-4">Come say hello at our office.</p>
                                <p className="text-lg font-semibold text-slate-900">
                                    123 Tech Park, Koramangala<br />
                                    Bangalore, India 560034
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>

                                {/* Success Message */}
                                {success && (
                                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-emerald-900">Message sent successfully!</p>
                                            <p className="text-sm text-emerald-700 mt-1">We'll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-red-900">Failed to send message</p>
                                            <p className="text-sm text-red-700 mt-1">{error}</p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none resize-none"
                                            placeholder="How can we help you today?"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 text-lg rounded-xl flex items-center justify-center gap-2"
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                        <Send className="w-5 h-5" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
