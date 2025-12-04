import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { LINKS, TEXT_CONTENT } from '../constants';

export const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-paper">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-agro-50/50 -skew-x-12 transform origin-top translate-x-32 z-0 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 text-left mb-16 lg:mb-0">
                        <div className="inline-flex items-center gap-2 mb-8 border-l-2 border-earth-500 pl-4">
                            <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase">Fase de Descubrimiento</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 tracking-tight mb-8 leading-[1.1]">
                            Gestión agrícola <br />
                            <span className="text-agro-600 italic">realmente</span> simple.
                        </h1>

                        <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl font-light">
                            Construyendo una solución para productores y administradores rurales. Sin adornos, basada en datos reales y nuevas tecnologías.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button href={LINKS.surveyUrl} icon variant="primary" size="lg" className="shadow-xl shadow-agro-900/10">
                                {TEXT_CONTENT.hero.ctaPrimary}
                            </Button>
                            <Button href={LINKS.whatsappUrl} variant="outline" size="lg">
                                {TEXT_CONTENT.hero.ctaSecondary}
                            </Button>
                        </div>

                        {/* <div className="mt-12 flex items-center gap-4 text-sm text-stone-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-stone-200 border-2 border-paper flex items-center justify-center text-[10px] font-bold text-stone-400">
                                        user
                                    </div>
                                ))}
                            </div>
                            <p>Únete a otros productores en la validación</p>
                        </div> */}
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative z-10">
                            {/* Image Frame */}
                            <div className="relative">
                                <div className="absolute inset-0 border-2 border-stone-900 translate-x-4 translate-y-4 rounded-sm z-0"></div>
                                <div className="relative bg-stone-200 aspect-[4/5] overflow-hidden rounded-sm border border-stone-900 grayscale hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                                        alt="Productor usando tablet en campo"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-stone-200 p-6 backdrop-blur-sm">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Dato Clave</p>
                                                <p className="font-serif text-xl text-stone-900">Eficiencia de Riego</p>
                                            </div>
                                            <TrendingUp className="text-earth-500 w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
