import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { LINKS } from '../constants';

export const RecruitingSection = () => {
    return (
        <Section className="bg-paper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-stone-900 translate-x-3 translate-y-3 rounded-sm"></div>
                    <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-stone-900">
                        <img
                            src="https://images.unsplash.com/photo-1639077378540-d353fef50694?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 580w"
                            alt="Reunión en el campo"
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                        <div className="absolute inset-0 bg-agro-900/20 mix-blend-multiply"></div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-earth-500"></div>
                        <span className="text-earth-600 font-semibold tracking-wider text-sm uppercase">Feedback Directo</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
                        Buscamos referentes <br /> para conversar.
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                        Si tenés experiencia gestionando campo o asesorás productores, podemos coordinar una charla rápida para intercambiar sobre necesidades, ideas y validación del MVP.
                    </p>

                    <div className="flex items-start gap-4">
                        <div className="flex-1 border-t border-stone-200 pt-6">
                            <Button href={LINKS.whatsappUrl} variant="outline" className="group">
                                Conversar <ArrowDownRight className="ml-2 w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
