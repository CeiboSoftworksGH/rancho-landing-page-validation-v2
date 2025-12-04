import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle2, ArrowDownRight, Loader2, Linkedin } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { LINKS } from '../constants';

export const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        role: '',
        phone: '',
        email: '',
        preference: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const roles = [
        "Productores",
        "Encargados/administradores",
        "Técnicos rurales",
        "Ingenieros agrónomos",
        "Otro"
    ];

    const contactOptions = [
        { id: 'email', label: 'Email', icon: Mail },
        { id: 'call', label: 'Llamada', icon: Phone },
        { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
    ];

    const handleSubmit = (e: React.FormEvent) => {

        const webhookUrl = 'https://n8n.ceibosoftworks.com/webhook/rancho-contact';

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formState, source: 'rancho' }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormState({
                    name: '',
                    role: '',
                    phone: '',
                    email: '',
                    preference: '',
                    message: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
                setIsSubmitting(false);
                // You might want to add error handling UI here
            });
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({
                name: '',
                role: '',
                phone: '',
                email: '',
                preference: '',
                message: ''
            });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    if (isSuccess) {
        return (
            <Section id="contacto" className="bg-paper">
                <div className="max-w-2xl mx-auto text-center py-20 px-6 border border-agro-100 bg-agro-50/50">
                    <div className="w-16 h-16 bg-agro-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-agro-800" />
                    </div>
                    <h3 className="text-3xl font-serif text-stone-900 mb-4">¡Mensaje Enviado!</h3>
                    <p className="text-stone-600 mb-8 text-lg">Gracias por tu interés. Nos pondremos en contacto contigo pronto.</p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-agro-800 font-medium hover:text-agro-900 underline underline-offset-4 decoration-2"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            </Section>
        );
    }

    return (
        <Section id="contacto" className="bg-paper scroll-mt-20 border-t border-stone-200">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                <div className="lg:col-span-4">
                    <div className="sticky top-24">
                        <h2 className="text-4xl font-serif text-stone-900 mb-6">Hablemos</h2>
                        <p className="text-lg text-stone-600 font-light mb-8">
                            Estamos en etapa de construcción. Tu feedback define el producto final.
                        </p>
                        <div className="space-y-4">
                            <a href={LINKS.contactEmail} className="flex items-center gap-3 text-stone-700 hover:text-agro-800 transition-colors">
                                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center rounded-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium">contact@ceibosoftworks.com</span>
                            </a>
                            <a href={LINKS.linkedinUrl} className="flex items-center gap-3 text-stone-700 hover:text-agro-800 transition-colors">
                                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center rounded-sm">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name - Styled as 'flushed' input */}
                            <div className="space-y-2 group">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                                    Nombre <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            {/* Role */}
                            <div className="space-y-2 group">
                                <label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                                    Rol en el campo <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="role"
                                        name="role"
                                        required
                                        value={formState.role}
                                        onChange={handleChange}
                                        className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 appearance-none rounded-none"
                                    >
                                        <option value="" disabled>Selecciona una opción</option>
                                        {roles.map(role => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-stone-400">
                                        <ArrowDownRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                                    Teléfono <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formState.phone}
                                    onChange={handleChange}
                                    className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300"
                                    placeholder="+598 99 123 456"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full py-3 bg-transparent border-b border-stone-300 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300"
                                    placeholder="nombre@ejemplo.com"
                                />
                            </div>
                        </div>

                        {/* Contact Preference */}
                        <div className="space-y-3 pt-4">
                            <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                                Preferencia de contacto <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {contactOptions.map((option) => (
                                    <label
                                        key={option.id}
                                        className={`
                      relative flex items-center justify-center gap-3 px-4 py-4 border cursor-pointer transition-all
                      ${formState.preference === option.id
                                                ? 'bg-agro-900 border-agro-900 text-white'
                                                : 'border-stone-200 text-stone-600 hover:border-stone-400'}
                    `}
                                    >
                                        <input
                                            type="radio"
                                            name="preference"
                                            value={option.id}
                                            checked={formState.preference === option.id}
                                            onChange={handleChange}
                                            className="sr-only"
                                            required
                                        />
                                        <option.icon className={`w-4 h-4 ${formState.preference === option.id ? 'text-white' : 'text-stone-400'}`} />
                                        <span className="font-medium text-sm">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2 pt-4">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                                Mensaje <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full p-4 bg-stone-50 border border-stone-200 focus:border-agro-800 outline-none transition-colors text-stone-900 placeholder:text-stone-300 resize-none"
                                placeholder="¿Qué te gustaría contarnos?"
                            ></textarea>
                        </div>

                        <div className="pt-6">
                            <Button
                                type="submit"
                                variant="primary"
                                fullWidth
                                disabled={isSubmitting}
                                className={`flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    'Enviar mensaje'
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
};
