import React from 'react';

export const WhySection = () => {
    return (
        <div className="bg-stone-900 py-24 text-paper relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                            ¿Por qué estamos <br /> construyendo esto?
                        </h2>
                        <div className="w-16 h-1 bg-earth-500 mb-8"></div>
                    </div>
                    <div>
                        <p className="text-xl font-light text-stone-300 leading-relaxed mb-6">
                            Quienes trabajan el campo lo saben: los datos están dispersos, los reportes llevan tiempo y muchas decisiones se toman sin ver el impacto real en productividad o margen.
                        </p>
                        <p className="text-xl font-medium text-paper leading-relaxed">
                            Queremos entender — con quienes lo viven — qué problemas son críticos antes de seguir construyendo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
