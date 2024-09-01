import React from 'react';
import RepresentanteCard from './ui/RepresentantesCard';

const RepresentanteSection: React.FC = () => {
  return (
        <main className="pt-4 text-center">
        <h1 className="heading lg:max-w-[45vw] mx-auto">
            Nossos <span className="text-blue">Representantes</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <RepresentanteCard />   
            <RepresentanteCard />   
            <RepresentanteCard />   
            <RepresentanteCard />   
            <RepresentanteCard />   
            <RepresentanteCard />   
            <RepresentanteCard />   
            <RepresentanteCard />  
        </div>
        </main>
  );
};

export default RepresentanteSection;