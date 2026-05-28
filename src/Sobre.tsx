export default function Sobre() {
  const habilidades = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS v4",
    "Node.js",
    "Git & GitHub",
    "UI/UX Design"
  ];

  return (
    // Transicionado para fundo claro (bg-slate-50) em harmonia com o App.tsx
    <section id="sobre" className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 font-sans antialiased pt-24">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        
        {/* Layout de duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Imagem/Avatar */}
          <div className="lg:col-span-5 flex justify-center relative group">
            {/* Elemento decorativo de fundo ajustado para azul translúcido */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Container da Imagem - Estilo Light Premium */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-white border border-slate-200 p-3 shadow-xl overflow-hidden">
              <div className="w-full h-full rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-7xl select-none">
                👨‍💻
              </div>
            </div>

            {/* Card Flutuante de Estatística - Light Mode com destaque em azul */}
            <div className="absolute -bottom-4 -right-4 sm:right-2 bg-white/90 border border-slate-200/80 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-3xl font-black text-blue-600">2+</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Anos de</span>
                <span className="text-[11px] text-slate-500 font-medium">Estudos & Prática</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Texto e Habilidades */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {/* Badge "Quem sou eu" em azul corporativo */}
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full w-max ring-1 ring-blue-500/10">
                Quem sou eu
              </span>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Olá, eu sou o José
              </h2>
            </div>

            <p className="text-slate-700 text-base leading-relaxed font-medium">
              Sou um desenvolvedor Front-End focado em criar interfaces digitais que unem design limpo e código altamente eficiente. Minha jornada na tecnologia é movida pela vontade de resolver problemas reais através de aplicações web modernas.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Atualmente, dedico meu tempo criando projetos robustos utilizando o ecossistema do React, explorando a tipagem inteligente do TypeScript e a velocidade de estilização do Tailwind CSS v4. Estou sempre buscando aprender novas ferramentas e boas práticas do mercado para evoluir como profissional.
            </p>

            {/* Subseção de Habilidades */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Tecnologias principais:
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {habilidades.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm text-slate-600 font-medium hover:border-blue-500/40 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="text-blue-600 text-xs">✦</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}