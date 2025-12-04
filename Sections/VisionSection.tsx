import React from 'react';
import { Sprout, MapPin } from 'lucide-react';
import { TEXT_CONTENT } from '../constants';

export const VisionSection = () => {
    return (
        <div id="vision" className="bg-stone-100 py-24 border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="bg-paper p-8 md:p-10 shadow-sm border border-stone-200/50">
                        <Sprout className="w-8 h-8 text-agro-600 mb-6" />
                        <h3 className="text-2xl font-serif text-stone-900 mb-4">{TEXT_CONTENT.vision.title}</h3>
                        <p className="text-stone-600 leading-relaxed">
                            {TEXT_CONTENT.vision.body}
                        </p>
                    </div>
                    <div className="bg-paper p-8 md:p-10 shadow-sm border border-stone-200/50">
                        <MapPin className="w-8 h-8 text-earth-600 mb-6" />
                        <h3 className="text-2xl font-serif text-stone-900 mb-4">{TEXT_CONTENT.origin.title}</h3>
                        <p className="text-stone-600 leading-relaxed">
                            {TEXT_CONTENT.origin.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
