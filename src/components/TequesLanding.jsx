import React from "react";
import {
  Waves,
  Dices,
  Users,
  Zap,
  Check,
  Sun,
  MapPin,
  CreditCard,
  Hash,
  MessageCircle,
  Phone,
  ChevronDown,
  Star,
  ArrowRight,
  Brain,
} from "lucide-react";

const POOL_BLUE = "#0EA5E9";
const SUN_YELLOW = "#FCD34D";
const TURQUOISE = "#5EEAD4";
const CORAL = "#F97316";
const DEEP_BLUE = "#0C4A6E";

export default function TequesLanding() {
  return (
    <div className="font-sans bg-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Paytone+One&family=Nunito:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; }

        .font-display { font-family: 'Paytone One', sans-serif; }
        .font-body { font-family: 'Nunito', sans-serif; }

        .hero-bg {
          background: linear-gradient(160deg, #0369A1 0%, #0EA5E9 35%, #06B6D4 65%, #14B8A6 100%);
          position: relative;
        }

        .hero-overlay {
          background: linear-gradient(to bottom, rgba(3,105,161,0.55) 0%, rgba(14,165,233,0.25) 60%, rgba(20,184,166,0.4) 100%);
        }

        .wave-top {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
        }

        .sun-pulse {
          animation: sunPulse 3s ease-in-out infinite;
        }
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }

        .float-card {
          animation: floatCard 4s ease-in-out infinite;
        }
        .float-card:nth-child(2) { animation-delay: 0.5s; }
        .float-card:nth-child(3) { animation-delay: 1s; }
        .float-card:nth-child(4) { animation-delay: 1.5s; }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          animation: bubble 8s ease-in-out infinite;
        }
        @keyframes bubble {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.3; }
        }

        .cta-btn {
          background: linear-gradient(135deg, #F97316, #EF4444);
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(249,115,22,0.45);
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 35px rgba(249,115,22,0.55);
        }

        .price-card {
          background: linear-gradient(145deg, #0EA5E9, #0369A1);
          box-shadow: 0 20px 60px rgba(14,165,233,0.35);
        }

        .gallery-item {
          background: linear-gradient(135deg, #E0F2FE 0%, #CCFBF1 100%);
          border: 2px dashed #BAE6FD;
          transition: all 0.3s ease;
        }
        .gallery-item:hover {
          border-color: #0EA5E9;
          transform: scale(1.02);
        }

        .section-wave {
          background: linear-gradient(135deg, #F0F9FF 0%, #ECFDF5 100%);
        }

        .mensa-badge {
          background: linear-gradient(135deg, #FCD34D, #F97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .input-field {
          border: 2px solid #BAE6FD;
          transition: all 0.2s ease;
          font-family: 'Nunito', sans-serif;
        }
        .input-field:focus {
          border-color: #0EA5E9;
          box-shadow: 0 0 0 3px rgba(14,165,233,0.15);
          outline: none;
        }

        .why-card {
          background: linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%);
        }

        .shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="hero-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-body">
        {/* Decorative bubbles */}
        <div
          className="bubble w-24 h-24 top-16 left-8"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="bubble w-16 h-16 top-32 right-16"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="bubble w-10 h-10 bottom-40 left-24"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="bubble w-20 h-20 bottom-24 right-12"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="bubble w-8 h-8 top-1/2 left-4"
          style={{ animationDelay: "3s" }}
        />

        {/* Sun decoration */}
        <div className="sun-pulse absolute top-12 right-12 md:top-16 md:right-24 z-10">
          <div
            className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, #FCD34D 30%, #F97316 100%)",
              boxShadow: "0 0 60px rgba(252,211,77,0.6)",
            }}
          >
            <Sun size={48} color="#fff" strokeWidth={1.5} />
          </div>
        </div>

        {/* Floating water waves decoration */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px"
              style={{
                top: `${20 + i * 15}%`,
                background: "rgba(255,255,255,0.6)",
                transform: `scaleX(${0.5 + i * 0.1})`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white border-opacity-30">
            <Brain size={16} color="#FCD34D" />
            <span className="text-sm font-semibold tracking-widest uppercase">
              Mensa Youth México
            </span>
            <Brain size={16} color="#FCD34D" />
          </div>
          {/* Main title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-2xl">
            <img
              src="/assets/teques-v-logo-square.png"
              alt="Teques Logo"
              className="w-64 md:w-80 lg:w-96 mx-auto mb-1"
            />
            <span style={{ color: SUN_YELLOW }} className="drop-shadow-lg">
              El mejor fin de semana
            </span>
            <br />
            del año
          </h1>
          {/* Subtitle */}
          <div className="text-white max-w-2xl mx-auto mb-10 mt-4">
            <p
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              Del 31 de Julio al 3 de Agosto.
            </p>
            <p
              className="text-lg md:text-xl font-semibold leading-relaxed opacity-95"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              Convive, juega y relájate con la comunidad Mensa Youth México
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="cta-btn font-display text-white text-xl md:text-2xl px-10 py-5 rounded-full inline-flex items-center gap-3"
            onClick={() =>
              document
                .getElementById("registro")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            ¡Aparta tu lugar!
            <ArrowRight size={24} />
          </button>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center opacity-70 animate-bounce">
            <span className="text-white text-xs tracking-widest uppercase mb-1">
              Descubre más
            </span>
            <ChevronDown size={24} color="white" />
          </div>
        </div>

        {/* Wave SVG */}
        <svg
          className="wave-top"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </section>

      {/* ═══════════════════════════════════════
          SECCIÓN "EL PLAN"
      ═══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white font-body">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: CORAL }}
            >
              El Plan
            </span>
            <h2
              className="font-display text-4xl md:text-5xl mt-2"
              style={{ color: DEEP_BLUE }}
            >
              ¿Qué vamos a hacer?
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
              Un fin de semana lleno de sol, risas y conexiones que duran para
              siempre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Waves size={36} />,
                title: "Alberca & Sol",
                desc: "Sumérgete, relájate y disfruta del calor oaxtepecano con la crew más inteligente del país.",
                color: POOL_BLUE,
                bg: "#E0F2FE",
                delay: "0s",
              },
              {
                icon: <Dices size={36} />,
                title: "Juegos de Mesa",
                desc: "Estrategia, bluff y risas interminables. Las noches en Oaxtepec nunca se olvidan.",
                color: CORAL,
                bg: "#FFF7ED",
                delay: "0.15s",
              },
              {
                icon: <Users size={36} />,
                title: "Convivencia Legendaria",
                desc: "Conoce a otras mentes brillantes en un ambiente relajado, sin presiones ni formalidades.",
                color: "#8B5CF6",
                bg: "#F5F3FF",
                delay: "0.3s",
              },
              {
                icon: <Zap size={36} />,
                title: "Atmósfera de Parque Acuático",
                desc: "A pasos de Six Flags Hurricane Harbor. ¡Adrenalina opcional, diversión garantizada!",
                color: "#10B981",
                bg: "#ECFDF5",
                delay: "0.45s",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="float-card rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ background: card.bg, animationDelay: card.delay }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                  style={{ background: card.color + "22", color: card.color }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-display text-lg mb-3"
                  style={{ color: DEEP_BLUE }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALERÍA AIRBNB
      ═══════════════════════════════════════ */}
      <section className="py-24 px-6 section-wave font-body">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: POOL_BLUE }}
            >
              La sede
            </span>
            <h2
              className="font-display text-4xl md:text-5xl mt-2"
              style={{ color: DEEP_BLUE }}
            >
              Para este año rentaremos un espectacular airbnb en Oaxtepec
            </h2>
            <p className="text-gray-500 mt-3 text-lg flex items-center justify-center gap-2">
              <MapPin size={16} style={{ color: CORAL }} />
              Oaxtepec, Morelos. unas cuadras de Six Flags Hurricane Harbor
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Large featured image - Alberca Principal con 1.jpg */}
            <div className="gallery-item col-span-2 row-span-2 rounded-3xl h-80 md:h-96 overflow-hidden relative group cursor-pointer">
              <img
                src="/assets/1.jpg"
                alt="Alberca Principal"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Waves size={18} style={{ color: "#BAE6FD" }} />
                  </div>
                  <span className="font-display text-white text-lg">
                    Fachada y Alberca
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen 2 - Áreas Comunes */}
            <div className="gallery-item rounded-2xl h-36 md:h-44 overflow-hidden relative group cursor-pointer">
              <img
                src="/assets/2.jpg"
                alt="Áreas Comunes"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Users size={14} style={{ color: "#FED7AA" }} />
                  </div>
                  <span className="font-semibold text-white text-xs">
                    Áreas Comunes
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen 3 - Habitaciones */}
            <div className="gallery-item rounded-2xl h-36 md:h-44 overflow-hidden relative group cursor-pointer">
              <img
                src="/assets/3.jpg"
                alt="Habitaciones"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Star size={14} style={{ color: "#EDE9FE" }} />
                  </div>
                  <span className="font-semibold text-white text-xs">
                    Habitaciones
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen 4 - Jardín & Sombra */}
            <div className="gallery-item rounded-2xl h-36 md:h-44 overflow-hidden relative group cursor-pointer">
              <img
                src="/assets/4.jpg"
                alt="Jardín & Sombra"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Sun size={14} style={{ color: "#D1FAE5" }} />
                  </div>
                  <span className="font-semibold text-white text-xs">
                    Comedor & Sombra
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen sixflags.jpg - Cocina Compartida (ocupará el espacio que antes era "Foto próximamente") */}
            <div className="gallery-item rounded-2xl h-36 md:h-44 overflow-hidden relative group cursor-pointer">
              <img
                src="/assets/sixflags.png"
                alt="Six Flags"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Zap size={14} style={{ color: "#FEF3C7" }} />
                  </div>
                  <span className="font-semibold text-white text-xs">
                    Six Flags
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECCIÓN DE COSTOS
      ═══════════════════════════════════════ */}
      <section
        className="py-24 px-6 font-body"
        style={{
          background:
            "linear-gradient(135deg, #0C4A6E 0%, #0369A1 60%, #0284C7 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: SUN_YELLOW }}
          >
            Inversión
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 text-white mb-10">
            ¿Cuánto cuesta?
          </h2>

          <div className="price-card rounded-3xl p-10 border border-white border-opacity-20 relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="shimmer absolute inset-0 pointer-events-none" />

            {/* Price */}
            <div className="mb-8">
              <span className="font-display text-7xl md:text-8xl text-white drop-shadow-lg">
                $1,850
              </span>
              <span className="text-white text-2xl font-semibold opacity-80">
                {" "}
                MXN
              </span>
              <p className="text-white opacity-70 mt-1 text-lg font-semibold">
                por persona
              </p>
            </div>

            {/* Includes */}
            <div className="text-left space-y-4 mb-8">
              {[
                "3 Noches de Hospedaje (31 de Julio - 3 de Agosto)",
                "Alimentos Incluidos (Desayuno, Comida, Cena)",
                "Acceso a todas las actividades en la casa",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: SUN_YELLOW }}
                  >
                    <Check size={16} color={DEEP_BLUE} strokeWidth={3} />
                  </div>
                  <span className="text-white text-lg font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="cta-btn font-display text-white text-xl px-10 py-4 rounded-full inline-flex items-center gap-3 w-full justify-center"
              onClick={() =>
                document
                  .getElementById("registro")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              ¡Aparta tu lugar con $650!
              <ArrowRight size={22} />
            </button>

            {/* Nota */}
            <p className="text-white opacity-50 text-xs mt-6 italic">
              * Costo de entrada a Six Flags Hurricane Harbor no incluido.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ¿POR QUÉ VENIR?
      ═══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white font-body">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: CORAL }}
            >
              ¿Por qué venir?
            </span>
            <h2
              className="font-display text-4xl md:text-5xl mt-2"
              style={{ color: DEEP_BLUE }}
            >
              Más que un fin de semana.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🧠",
                title: "Mentes que conectan",
                desc: "No tienes que explicar por qué piensas diferente. Aquí todos lo entienden. Convive con jóvenes brillantes que comparten tu forma de ver el mundo.",
                accent: POOL_BLUE,
              },
              {
                emoji: "🌊",
                title: "Relájate de verdad",
                desc: "Olvidate del estrés, los proyectos y las fechas de entrega. Tres días para ser tú mismo, sin presiones, solo con sol, agua y buena vibra.",
                accent: TURQUOISE,
              },
              {
                emoji: "✨",
                title: "Recuerdos para siempre",
                desc: "Las amistades que se forman en los eventos Mensa Youth duran años. Este fin de semana puede cambiar tu perspectiva y tu círculo social para siempre.",
                accent: CORAL,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: card.accent + "44",
                  background: card.accent + "08",
                }}
              >
                <div className="text-5xl mb-4">{card.emoji}</div>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: DEEP_BLUE }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REGISTRO
      ═══════════════════════════════════════ */}
      <section id="registro" className="py-24 px-6 section-wave font-body">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: POOL_BLUE }}
            >
              Aparta tu lugar
            </span>
            <h2
              className="font-display text-4xl md:text-5xl mt-2"
              style={{ color: DEEP_BLUE }}
            >
              ¡Nos vemos en Teques!
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Sigue estos pasos para apartar tu lugar en el fin de semana.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-50">
            {/* Depósito Inicial */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 rounded-full px-6 py-3 mb-4">
                <span className="font-display text-2xl md:text-3xl text-white">
                  $650 MXN
                </span>
              </div>
              <p className="text-gray-600 text-lg">
                Depósito inicial para apartar tu lugar
              </p>
            </div>

            <div className="space-y-8">
              {/* Información Bancaria */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3
                  className="font-display text-xl mb-4 flex items-center gap-2"
                  style={{ color: DEEP_BLUE }}
                >
                  <CreditCard size={24} style={{ color: POOL_BLUE }} />
                  Información para el Pago
                </h3>
                <p className="text-gray-600 mb-3">
                  Realiza tu transferencia bancaria a la siguiente cuenta:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-bold">Banco:</span> BBVA
                  </p>
                  <p>
                    <span className="font-bold">Cuenta Clabe:</span>{" "}
                    <span className="font-mono bg-white px-3 py-1 rounded-lg text-sm">
                      012225015344232703
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">Nombre del Titular:</span> Aldo
                    Iván López
                  </p>
                </div>
              </div>

              {/* Concepto */}
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3
                  className="font-display text-xl mb-3 flex items-center gap-2"
                  style={{ color: DEEP_BLUE }}
                >
                  <Hash size={24} style={{ color: "#F59E0B" }} />
                  Concepto
                </h3>
                <p className="text-gray-600 mb-2">
                  Al realizar tu pago, utiliza el concepto:
                </p>
                <div className="bg-white p-4 rounded-xl border-2 border-amber-200">
                  <p
                    className="font-mono font-bold text-lg text-center"
                    style={{ color: DEEP_BLUE }}
                  >
                    Teques 5 + Tu nombre
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 italic">
                  Ejemplo: Teques 5 Juan Pérez
                </p>
              </div>

              {/* Confirmación WhatsApp */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3
                  className="font-display text-xl mb-3 flex items-center gap-2"
                  style={{ color: DEEP_BLUE }}
                >
                  <MessageCircle size={24} style={{ color: "#10B981" }} />
                  Confirmación de Pago
                </h3>
                <p className="text-gray-600 mb-3">
                  Una vez realizado el pago, envíame un mensaje por WhatsApp con
                  la captura de la transferencia:
                </p>
                <a
                  href="https://wa.me/524773170288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <MessageCircle size={20} />
                  477 317 0288
                </a>
              </div>

              {/* Contacto */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3
                  className="font-display text-xl mb-3 flex items-center gap-2"
                  style={{ color: DEEP_BLUE }}
                >
                  <Phone size={24} style={{ color: "#8B5CF6" }} />
                  Número de Contacto
                </h3>
                <p className="text-gray-600 mb-2">
                  ¿Tienes dudas o necesitas aclaraciones? Llámanos:
                </p>
                <a
                  href="tel:+524773170288"
                  className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone size={20} />
                  477 317 0288
                </a>
              </div>

              {/* Nota adicional */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  ⏰ Una vez confirmado tu pago, recibirás toda la información
                  del evento y el itinerario completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="font-body py-8 px-6" style={{ background: DEEP_BLUE }}>
        <div className="max-w-4xl mx-auto">
          <div className="pt-8 text-center">
            {/* Logos */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/MYM-logo-blanco-horizontal.png"
                  alt="Mensa Youth"
                  className="h-15"
                />
              </div>
            </div>

            <p className="text-blue-300 text-sm mb-1">
              Weekend 2026: Teques 5 — Evento organizado por Mensa Youth México
            </p>
            <p className="text-blue-400 text-xs opacity-60">
              © 2026 Mensa Youth México · Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
