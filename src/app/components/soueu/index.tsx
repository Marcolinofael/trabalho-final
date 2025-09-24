import React from "react";

export function Soueu() {
  return (
    <section id="Soueu" className="flex h-screen items-center justify-center bg-black p-5">
      <div className="overflow-hidden py-10 2xl:py-16 xl:py-8">
        <div className="max-w-c-1390 mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-32 items-center">
            <div className="w-full lg:col-span-6 xl:col-span-5">

              <h1 className="py-8 text-5xl font-bold text-center lg:text-left text-lime-400 text-primary font-manrope leading-[70px]">
                Quem sou eu?
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 text-center lg:text-left">
                Sou um apaixonado por tecnologia e inovação, sempre em busca de transformar ideias em soluções reais.
                Minha missão é criar experiências digitais que simplifiquem a vida das pessoas e ajudem negócios a crescer.
                Gosto de aprender, compartilhar conhecimento e enfrentar novos desafios com criatividade e dedicação.
              </p>
            </div>
            <div className="w-full lg:col-span-6 xl:col-span-7">
              <div className="w-full sm:w-auto lg:w-[60.8125rem]">
                <img
                  src="https://www.dropbox.com/scl/fi/fks0wousb5k8r3lnuf8gg/hero-10.jpg?rlkey=9k4mwab8hj3w0cexbpiiup2pp&st=tngw1wln&raw=1"
                  alt="Hero image"
                  className="md:rounded-l-3xl object-cover shadow-xl shadow-lime-400/70 transition-transform duration-500 hover:scale-105"
                  style={{ width: "1000px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}