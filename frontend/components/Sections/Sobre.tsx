import React from 'react';

const Sobre: React.FC = () => {
  return (
    <main className="pt-32">
      <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
        <div className="flex-1 md:pr-5">
          {/* <h1 className="text-2xl">
          Nossa <span className="text-[#81B7FF]">História</span>
          </h1> */}
         <div style={{ flex: 1, paddingRight: '20px' }}>
          <p className="text-2xl animate-fadeInUp text-left font-mono">
          A <b className="text-[#81B7FF]">IntegraTech</b> é uma equipe dedicada à tecnologia, formada
            durante o hackathon do Trilhas Inova. Nosso objetivo é mobilizar pessoas para as Estações
            Tech. Promovemos essas estações como espaços de inclusão digital e desenvolvimento.
            </p>
        </div>
        </div>
        <div className="flex-shrink-0 mt-10 md:mt-0">
          <img src="./img.png" alt="Sobre nós" className="max-w-full md:max-w-lg h-auto" />
        </div>
      </div>
    </main>
  );
};


export default Sobre;