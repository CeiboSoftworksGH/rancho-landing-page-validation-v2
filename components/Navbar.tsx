import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { Button } from './Button';
import { LINKS } from '../constants';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-paper/90 backdrop-blur-md z-50 border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="bg-agro-900 p-1.5 rounded-sm">
                            <Sprout className="h-5 w-5 text-paper" />
                        </div>
                        <span className="font-serif font-bold text-xl text-stone-900 tracking-tight">RAN.CHO</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#problemas" className="text-stone-600 hover:text-agro-800 text-sm font-medium transition-colors">Problemas</a>
                        <a href="#vision" className="text-stone-600 hover:text-agro-800 text-sm font-medium transition-colors">Visión</a>
                        <a href="#contacto" className="text-stone-600 hover:text-agro-800 text-sm font-medium transition-colors">Contacto</a>
                        <Button variant="primary" size="sm" href={LINKS.surveyUrl} className="!rounded-sm">
                            Participar
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 hover:text-stone-900 p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-paper border-b border-stone-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#problemas" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif text-stone-800 border-b border-stone-100">Problemas</a>
                        <a href="#vision" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif text-stone-800 border-b border-stone-100">Visión</a>
                        <a href="#contacto" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-serif text-stone-800 border-b border-stone-100">Contacto</a>
                    </div>
                </div>
            )}
        </nav>
    );
};
