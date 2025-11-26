import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { Gauge, Brain, Target, Shield, Plus, Minus, BarChart3, Image as ImageIcon } from 'lucide-react';

import Hero_Lading from "../assets/Hero_Lading.png"

const beneficios = [
  { id: 1, icono: <Gauge size={40} className="text-primary" />, titulo: "Registro en 3 segundos", descripcion: "Un flujo optimizado para capturar gastos al instante. Sin clics innecesarios. Abre, escribe, guarda." },
  { id: 2, icono: <Brain size={40} className="text-primary" />, titulo: "Contexto Emocional", descripcion: "No registres solo números. Entiende si gastas por estrés, felicidad o aburrimiento." },
  { id: 3, icono: <Target size={40} className="text-primary" />, titulo: "Metas Visuales", descripcion: "Convierte el ahorro en un juego. Visualiza tu progreso hacia ese viaje o compra especial." },
  { id: 4, icono: <Shield size={40} className="text-primary" />, titulo: "Privacidad Local", descripcion: "Tus datos son tuyos. Seguridad de grado bancario con una experiencia de usuario fluida." }
];

const testimonios = [
  { id: 1, inicial: "CR", descripcion: "Por fin una app de finanzas que no se siente como tarea escolar. El atajo Cmd+K es una genialidad.", nombre: "Carlos Rodriguez", rol: "Frontend Dev" },
  { id: 2, inicial: "SM", descripcion: "Visualmente es hermosa. Me ayudó a darme cuenta de que gasto el 30% de mi sueldo cuando tengo ansiedad.", nombre: "Sofia Martinez", rol: "Product Designer" },
  { id: 3, inicial: "JP", descripcion: "Simple, oscura y rápida. Justo lo que necesitaba para dejar de usar las notas de mi celular.", nombre: "Javi Perez", rol: "Estudiante" },
];

const planes = [
  { id: 1, nombre: "Starter", precio: "$0/mes", caracteristicas: ["Registro ilimitado", "Dashboard básico", "2 Metas de ahorro"], boton: "Comenzar gratis" },
  { id: 2, nombre: "Pro", precio: "$5/mes", destacado: true, caracteristicas: ["Todo lo de Starter", "Análisis Emocional", "Metas ilimitadas", "Modo oscuro personalizado"], boton: "Prueba 14 días gratis" },
  { id: 3, nombre: "Lifetime", precio: "$99 pago único", caracteristicas: ["Acceso de por vida", "Soporte prioritario", "Acceso anticipado", "Insignia Fundador"], boton: "Comprar licencia" },
];

const soporte = [
  { id: 1, tituloPregunta: "¿Mis datos financieros están seguros?", respuestaPregunta: "Absolutamente. Usamos encriptación de nivel bancario y tus datos se almacenan en servidores seguros. Nadie, ni siquiera nosotros, tiene acceso a tus credenciales bancarias." },
  { id: 2, tituloPregunta: "¿Es realmente gratis?", respuestaPregunta: "El plan Starter es 100% gratuito para siempre. Incluye registro ilimitado de gastos y acceso al dashboard básico." },
  { id: 3, tituloPregunta: "¿Puedo exportar mi información?", respuestaPregunta: "En cualquier momento puedes descargar un archivo CSV con todo tu historial de transacciones." },
  { id: 4, tituloPregunta: "¿Tienen app móvil?", respuestaPregunta: "FinanFlow es una PWA (Aplicación Web Progresiva). Puedes instalarla directamente desde tu navegador en iOS y Android." },
];

// Componente Placeholder para Imágenes Faltantes
const ImagePlaceholder = ({ label, height = "h-64" }) => (
  <div className={`w-full ${height} bg-surface border border-border rounded-xl flex flex-col items-center justify-center text-text-muted animate-pulse`}>
    <ImageIcon size={48} className="mb-4 opacity-50" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const LandingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary selection:text-white">
      {/* HERO SECTION  */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-left text-5xl md:text-6xl font-bold mb-6 leading-tight font-display">
              Claridad financiera a la{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                velocidad del pensamiento.
              </span>
            </h1>
            <p className="text-left text-lg text-text-muted mb-8 leading-relaxed">
              Deja de luchar con hojas de cálculo lentas. Controla tus gastos,
              metas y hábitos emocionales en una interfaz diseñada para el
              futuro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/registro"
                className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover hover:scale-105  transition shadow-lg shadow-primary/25 text-center"
              >
                Crear cuenta gratis
              </Link>
              <Link
                to="/ver-demo"
                className="px-8 py-3 rounded-lg border border-border text-text-main font-medium hover:bg-surface  hover:scale-105 transition text-center flex items-center justify-center gap-2"
              >
                <BarChart3 size={18} /> Ver demo
              </Link>
            </div>
          </div>

          {/* Imagen Hero  */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-surface border border-border rounded-xl overflow-hidden shadow-2xl">
              <img
                src={Hero_Lading}
                alt="Imagen de nuestra web "
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/*BENEFICIOS  */}
      <section id="features" className="py-24 px-6 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Todo lo que necesitas
            </h2>
            <p className="text-text-muted">
              Herramientas poderosas, diseño simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((item) => (
              <div
                key={item.id}
                className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/50 shadow-xl hover:shadow-primary-hover transition-colors duration-300 group"
              >
                <div className="mb-4 p-3 bg-background rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 border border-border">
                  {item.icono}
                </div>
                <h3 className="font-bold text-lg text-text-main mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  SECCIÓN EMOCIONES  */}
      <section className="py-24 px-6 md:px-20 border-y border-border/50 bg-surface/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Tu dinero tiene{" "}
              <span className="text-primary">sentimientos.</span>
            </h3>
            <p className="text-lg text-text-muted mb-6">
              Descubre los patrones ocultos detrás de tus compras. FinanFlow
              correlaciona tu estado de ánimo con tus gastos para darte insights
              reales.
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                Detecta gastos por ansiedad.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                Celebra tus rachas de ahorro.
              </li>
            </ul>
          </div>

          {/* GRÁFICA CSS PURA  */}
          <div className="bg-surface border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-transparent"></div>
            <div className="flex justify-between items-end h-48 gap-4">
              {/* Barra 1 */}
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition">
                  $120
                </div>
                <div className="w-full bg-border rounded-t-md h-12 group-hover:bg-primary/30 transition-all"></div>
                <span className="text-2xl">😌</span>
              </div>
              {/* Barra 2 (Alta) */}
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="text-xs text-primary font-bold">$850</div>
                <div className="w-full bg-primary rounded-t-md h-32 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <span className="text-2xl">😫</span>
              </div>
              {/* Barra 3 */}
              <div className="w-full flex flex-col items-center gap-2 group">
                <div className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition">
                  $300
                </div>
                <div className="w-full bg-border rounded-t-md h-20 group-hover:bg-primary/30 transition-all"></div>
                <span className="text-2xl">🎉</span>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-text-muted">
              Gasto por Estado de Ánimo
            </div>
          </div>
        </div>
      </section>

      {/*  PRODUCTO (CARRUSEL)  */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Más que una app, tu sistema operativo financiero.
          </h3>
          <p className="text-xl text-text-muted mb-12">
            Una experiencia unificada en móvil y escritorio.
          </p>

          {/* Placeholder para el carrusel */}
          <div className="relative">
            <ImagePlaceholder
              label="Capturas de Pantalla de la App (Carrusel)"
              height="h-96"
            />
            {/* Efecto de brillo detrás */}
            <div className="absolute -z-10 inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS  */}
      <section className="py-24 px-6 md:px-20 bg-surface/30">
        <h3 className="text-center text-3xl font-bold mb-12 font-display">
          Lo que dicen los Power Users
        </h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((user) => (
            <div
              key={user.id}
              className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 shadow-xl hover:shadow-primary-hover transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold">
                  {user.inicial}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-main">
                    {user.nombre}
                  </h4>
                  <p className="text-xs text-text-muted">{user.rol}</p>
                </div>
              </div>
              <p className="text-sm text-text-muted italic">
                "{user.descripcion}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANES  */}
      <section className="py-24 px-6 md:px-20" id="pricing">
        <h3 className="text-center text-3xl font-bold mb-12 font-display">
          Planes Simples
        </h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {planes.map((item) => (
            <div
              key={item.id}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                item.destacado
                  ? "bg-surface border-primary shadow-2xl shadow-primary/10"
                  : "bg-background border-border"
              }`}
            >
              {item.destacado && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recomendado
                </div>
              )}
              <h2 className="font-bold text-xl mb-2">{item.nombre}</h2>
              <p className="text-3xl font-bold mb-6 font-display text-text-main">
                {item.precio}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {item.caracteristicas.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-text-muted flex items-center gap-2"
                  >
                    <Plus size={14} className="text-primary" /> {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/registro"
                className={`w-full py-3 rounded-lg font-medium text-center transition ${
                  item.destacado
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "bg-surface border border-border hover:border-primary text-text-main"
                }`}
              >
                {item.boton}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SOPORTE / FAQ */}
      <section className="py-24 px-6 md:px-20" id="faq">
        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-8 font-display">
            Preguntas Frecuentes
          </h3>
          <div className="space-y-4">
            {soporte.map((pregunta, index) => (
              <div
                key={pregunta.id}
                className="border border-border rounded-lg bg-surface overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-text-main hover:bg-white/5 transition"
                >
                  {pregunta.tituloPregunta}
                  {openIndex === index ? (
                    <Minus className="text-primary" size={20} />
                  ) : (
                    <Plus className="text-muted" size={20} />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0 text-sm text-text-muted leading-relaxed border-t border-border/50 mt-2">
                    {pregunta.respuestaPregunta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL  */}
      <section className="py-24 px-6 md:px-20 border-t border-border bg-linear-to-b from-background to-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 font-display">
            Recupera el control hoy.
          </h3>
          <Link
            to="/registro"
            className="inline-block px-10 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover hover:scale-105 transition shadow-xl shadow-primary/30"
          >
            Crear cuenta en 30 segundos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;