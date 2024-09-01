import React from 'react';

const Sobre: React.FC = () => {
  return (
    <main className="pt-32">
      <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
        <div className="flex-1 md:pr-5">
          {/* <h1 className="text-2xl">
          Nossa <span className="text-[#81B7FF]">História</span>
          </h1> */}
          <p>
            Lorel Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Nunc Vel Nunc Malesuada Tincidunt. Nulla Facilisi. Nulla Tempor,
          </p>
        </div>
        <div className="flex-shrink-0 mt-10 md:mt-0">
          <img src="./img.png" alt="Sobre nós" className="max-w-full md:max-w-lg h-auto" />
        </div>
      </div>
    </main>
  );
};


export default Sobre;