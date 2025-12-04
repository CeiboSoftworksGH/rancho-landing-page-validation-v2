import React from 'react';
import { ClipboardList, TrendingUp, FileText, Database, MessageSquare } from 'lucide-react';
import { Section } from '../components/Section';
import { TEXT_CONTENT } from '../constants';

export const ProblemsSection = () => {
    const icons = [ClipboardList, TrendingUp, FileText, Database, MessageSquare];

    return (
        <Section id="problemas" className="bg-paper">
            <div className="max-w-3xl mb-20">
                <h2 className="text-4xl font-serif text-stone-900 mb-6">{TEXT_CONTENT.problems.title}</h2>
                <p className="text-xl text-stone-600 font-light border-l-4 border-agro-200 pl-6">
                    {TEXT_CONTENT.problems.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {TEXT_CONTENT.problems.items.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <div key={index} className="group relative pl-8 border-l border-stone-300 hover:border-earth-500 transition-colors duration-300">
                            <div className="absolute -left-[17px] top-0 bg-paper">
                                <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 group-hover:bg-earth-100 group-hover:border-earth-300 flex items-center justify-center transition-colors">
                                    <span className="text-xs font-bold text-stone-500 group-hover:text-earth-700">0{index + 1}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <Icon className="h-6 w-6 text-stone-400 group-hover:text-agro-800 transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3 group-hover:text-agro-900">{item.title}</h3>
                            <p className="text-stone-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
