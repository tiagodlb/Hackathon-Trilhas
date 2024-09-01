import React from 'react';

const RepresentanteCard: React.FC = () => {
  return (
<main>
  <div className="flex items-center justify-between p-10">
    <div className="flex-1 pr-5">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Silmayra Marques"
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl">
          Silmayra Marques
        </h1>
        <p className="text-center">
          Silmayra Marques, líder visionária, guia sua equipe na estação tech com inovação e excelência.
        </p>
      </div>
    </div>
    <div className="flex-shrink-0">
    </div>
  </div>
</main>
  );
};

export default RepresentanteCard;