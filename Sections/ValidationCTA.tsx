import React from 'react';
import { Sprout, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { LINKS, TEXT_CONTENT } from '../constants';

export const ValidationCTA = () => {
    return (
        <div className="py-20 bg-agro-50 border-y border-agro-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-16 rounded-sm shadow-xl shadow-agro-900/5 border border-agro-100 relative overflow-hidden">
                    {/* Abstract pattern */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10">
                        <Sprout size={400} />
                    </div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif text-agro-900 mb-6">
                            {TEXT_CONTENT.validation.title}
                        </h2>
                        <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-light">
                            {TEXT_CONTENT.validation.body}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <Button href={LINKS.surveyUrl} variant="primary" size="lg" className="min-w-[240px]">
                                {TEXT_CONTENT.validation.cta}
                            </Button>
                            <div className="flex items-center gap-2 text-stone-500 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-earth-500" />
                                <span>7 minutos</span>
                                <span className="w-1 h-1 bg-stone-300 rounded-full mx-1"></span>
                                <span>Confidencial</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
