import React from "react";
import { Link } from "react-router-dom";

import Hero_Lading from "../assets/Hero_Lading.png";



const LandingPage = () => {
    return (
      <>
        <section className=" py-25 px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-start text-4xl font-extrabold mb-10">
                Claridad financiera a la velocidad del pensamiento.
              </h1>
              <p className="text-start text-xl font-normal mb-6">
                Deja de luchar con hojas de cálculo lentas. Controla tus gastos,
                metas y hábitos emocionales en una interfaz diseñada para el
                futuro.
              </p>
            </div>
            {/*Imagen */}
            <div>
              <img
                src={Hero_Lading}
                alt="Imagen de nuestra web "
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="flex gap-3">
              {/*Botones de accion*/}

              <Link
                to="/registro"
                className="gap-3 mb-4 px-5 py-2 rounded-lg
            bg-primary text-black
            hover:bg-primary-hover transition
          "
              >
                Comenzar gratis
              </Link>

              <Link
                to="/ver-demo"
                className="gap-3 mb-4 px-5 py-2 rounded-lg
            border border-primary text-text-main
            hover:bg-primary-hover transition
          "
              >
                Ver demo
              </Link>
            </div>
          </div>
        </section>

        {/*Seccion 2: Beneficios*/}
      </>
    );
};
export default LandingPage;