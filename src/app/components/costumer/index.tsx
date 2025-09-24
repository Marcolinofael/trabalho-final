import React from "react";


const services = [
  {
    logo: <img src="/EcoClean.png" alt="EcoClean Logo" className="w-100 h-50 object-contain mb-4" />,
  },
  {
    logo: <img src="/BookHive.png" alt="Service 2 Logo" className="w-100 h-50 object-contain mb-4" />,
  },
  {
    logo: <img src="/GreenFitt.png" alt="Service 3 Logo" className="w-100 h-50 object-contain mb-4" />,
  },
  {
    logo: <img src="/LojaCasaCor.png" alt="Service 4 Logo" className="w-100 h-50 object-contain mb-4" />,
  },
  {
    logo: <img src="/SafeSecure.png" alt="Service 5 Logo" className="w-100 h-50 object-contain mb-4" />,
  },
  {
    logo: <img src="/SublimArte.png" alt="Service 6 Logo" className="w-100 h-50 object-contain mb-4" />,
  },
];

function Costumer() {
  return (
    <section id="costumer" className="flex h-screen items-center justify-center bg-black p-5">
      <div className="w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4">Nossos Parceiros</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex"
            >
              <div className="card bg-lime-400 rounded-lg shadow-xl p-8 flex flex-col items-center w-full transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-lime-400/100">
                {service.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Costumer };