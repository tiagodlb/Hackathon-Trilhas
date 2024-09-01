

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Frase e Efeito <span className="text-blue">para</span> a Estação Tech
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Lorem Ipsu Dolor Ticalacata
        </p>
      </div>  
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Estação Tech
        </p>


      </div>
    </footer>
  );
};

export default Footer;
