import React from 'react';

const Sobre: React.FC = () => {
  return (
    <main className="pt-32">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '40px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          {/* <h1 className="text-2xl">
          Nossa <span className="text-[#81B7FF]">História</span>
          </h1> */}
          <p>
           Lorel Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Nunc Vel Nunc Malesuada Tincidunt. Nulla Facilisi. Nulla Tempor, 
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img src="./img.png" alt="Sobre nós" style={{ maxWidth: '550px', height: '360px' }} />
        </div>
      </div>
    </main>
  );
};

export default Sobre;