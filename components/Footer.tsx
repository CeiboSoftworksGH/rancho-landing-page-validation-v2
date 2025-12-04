import React from 'react';
import { Sprout, Linkedin, Mail } from 'lucide-react';
import { LINKS } from '../constants';

export const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-6 text-paper">
                            <div className="bg-agro-800 p-1 rounded-sm">
                                <Sprout className="h-5 w-5" />
                            </div>
                            <span className="font-serif font-bold text-xl">RAN.CHO</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Simplificando la gestión del campo con tecnología útil, construida junto a quienes trabajan la tierra.
                        </p>
                        <div className="text-xs text-stone-600">
                            &copy; {new Date().getFullYear()} Proyecto de Validación Agro.
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 sm:gap-24">
                        <div>
                            <h4 className="text-paper font-serif mb-4">Proyecto</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#problemas" className="hover:text-earth-500 transition-colors">El Problema</a></li>
                                <li><a href="#vision" className="hover:text-earth-500 transition-colors">Nuestra Visión</a></li>
                                <li><a href={LINKS.surveyUrl} className="hover:text-earth-500 transition-colors">Encuesta</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-paper font-serif mb-4">Contacto</h4>
                            <div className="flex gap-4">
                                <a href={LINKS.linkedinUrl} className="hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href={LINKS.contactEmail} className="hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
