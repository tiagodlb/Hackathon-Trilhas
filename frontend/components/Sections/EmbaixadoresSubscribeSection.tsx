import React from 'react';
import EmbaixadorBeneficiosCard from '../EmbaixadorBeneficiosCard';
import SubscribeEmbaixadorForms from '../SubscribeEmbaixadorForms';

const EmbaixadoresSubscribeSection: React.FC = () => {
  return (
    <main className="pt-20">
        <h1 className="heading pb-6">Embaixador <span className="text-[#81B7FF]">Tech</span></h1>
         <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Pessoas que atuam como agentes de transformação social oferecem à comunidade oportunidades para aprender sobre cultura e novas tecnologias.
          </p>
        <EmbaixadorBeneficiosCard />
        <SubscribeEmbaixadorForms />
    </main>
  );
};

export default EmbaixadoresSubscribeSection;