'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, Layout, Database, Terminal, 
  Github, Linkedin, ExternalLink, Mail, ChevronRight,
  Server, Layers, MessageSquare, PenTool, Rocket, ClipboardList
} from 'lucide-react';

// --- DONNÉES VULGARISÉES POUR NOVICES ---
const skills = [
  { 
    name: "React Native (Mobile)", 
    icon: <Smartphone className="w-6 h-6" />, 
    color: "from-blue-400 to-cyan-500", 
    desc: "Créez votre application sur iPhone et Android simultanément pour optimiser votre budget." 
  },
  { 
    name: "Laravel (Backend)", 
    icon: <Server className="w-6 h-6" />, 
    color: "from-red-500 to-orange-600", 
    desc: "Un moteur sécurisé pour gérer vos utilisateurs, vos paiements et vos données confidentielles." 
  },
  { 
    name: "Next.js & SEO", 
    icon: <Layout className="w-6 h-6" />, 
    color: "from-teal-400 to-emerald-500", 
    desc: "Des sites ultra-rapides et optimisés pour atteindre les premières positions sur Google." 
  },
  { 
    name: "Bases de Données (SQL)", 
    icon: <Database className="w-6 h-6" />, 
    color: "from-indigo-500 to-purple-600", 
    desc: "Une organisation fiable et structurée pour stocker toutes vos informations professionnelles." 
  },
  { 
    name: "WordPress / E-commerce", 
    icon: <Globe className="w-6 h-6" />, 
    color: "from-blue-600 to-blue-800", 
    desc: "La solution idéale pour gérer votre contenu ou lancer une boutique en ligne rapidement." 
  },
  { 
    name: "Maintenance & Qualité", 
    icon: <Code2 className="w-6 h-6" />, 
    color: "from-yellow-400 to-yellow-600", 
    desc: "Un code testé et de haute qualité pour garantir la pérennité de votre investissement numérique." 
  },
];

const workflow = [
  { 
    step: "01", 
    title: "Discussion & Analyse", 
    icon: <MessageSquare />, 
    desc: "On échange sur votre idée. Je vous aide à affiner vos besoins pour ne rien oublier.",
    accent: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/5",
    iconColor: "text-blue-400",
    glow: "bg-blue-500/20"
  },
  { 
    step: "02", 
    title: "Architecture & Design", 
    icon: <PenTool />, 
    desc: "Je conçois le plan de votre application (maquettes, base de données) avant de commencer.",
    accent: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/5",
    iconColor: "text-purple-400",
    glow: "bg-purple-500/20"
  },
  { 
    step: "03", 
    title: "Développement", 
    icon: <Code2 />, 
    desc: "Je construis votre projet fonctionnalité par fonctionnalité, en vous tenant informé.",
    accent: "group-hover:border-emerald-500/50",
    bg: "group-hover:bg-emerald-500/5",
    iconColor: "text-emerald-400",
    glow: "bg-emerald-500/20"
  },
  { 
    step: "04", 
    title: "Lancement", 
    icon: <Rocket />, 
    desc: "Mise en ligne, tests finaux et formation pour que vous soyez autonome.",
    accent: "group-hover:border-orange-500/50",
    bg: "group-hover:bg-orange-500/5",
    iconColor: "text-orange-400",
    glow: "bg-orange-500/20"
  },
];

const projects = [
  {
    id: 1,
    type: "Projet Personnel",
    category: "Architecture & Data",
    title: "Dashboard SaaS Next.js",
    description: "Une application de service client intelligent.",
    tags: ["Next.js", "Prisma ORM", "Base de Données", "Tailwind" , "N8n"],
    image: "smartclient.png",
    link: "#",
    isExternal: false
  },
  {
    id: 2,
    type: "Projet Client",
    category: "E-Commerce",
    title: "Seteff.com - Boutique Pro",
    description: "Boutique en ligne clé-en-main. Boutique de ventes de tableaux en perles",
    tags: ["WordPress", "WooCommerce", "Paiement Sécurisé"],
    image: "./seteff1.png",
    link: "https://seteff.com",
    isExternal: true
  },
  {
    id: 3,
    type: "Projet Personnel",
    category: "Innovation",
    title: "Application de collecte automatique des prospects linkedin ", 
    description: "Une solution sur mesure développée pour simplifier la collecte des propects . Interface intuitive permettant aux propriétaires de collecter et d'enrichir les leads .",
    tags: ["Nextjs", "Apify Api", "agent IA", "Application web"],
    image: "./leads.png", 
    link: "#",
    isExternal: false
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-xl bg-black/40 shadow-2xl' : 'py-6 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Terminal className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              HOSPICE.dev
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#processus" className="hover:text-purple-400 transition-colors">Ma Méthode</a>
            <a href="#expertise" className="hover:text-purple-400 transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-purple-400 transition-colors">Réalisations</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-lg">
             <a 
              href="https://wa.me/22990643364"
              target="_blank"

            >
              Démarrer la discussion 
            </a>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-48">
        
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-16 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-purple-400 uppercase tracking-widest backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Disponible pour de nouveaux défis
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-white">
              ATCHADE <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                Hospice.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed ">
              <span className="font-bold text-white">Développeur Full-Stack</span>, j'accompagne les entreprises et porteurs de projets pour transformer une idée complexe en un outil numérique <span className="text-white">simple, rentable et performant</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projets" className="group px-8 py-4 bg-purple-600 rounded-2xl font-bold hover:bg-purple-700 transition-all flex items-center gap-2 shadow-xl shadow-purple-900/20 active:scale-95 text-white">
                Voir mes travaux <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-80 h-96 md:w-[420px] md:h-[520px] bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-3xl">
              <img 
                src="./image_hospice.png" 
                alt="Hospice Atchade"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-xl font-black backdrop-blur-xl rounded-full text-white leading-tight">Développeur Full-Stack</h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION : PROCESSUS DE TRAVAIL AVEC VARIATIONS DE COULEURS */}
        <section id="processus" className="py-24 border-t border-white/5">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-white">Comment ça marche ?</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((item, i) => (
                <div 
                  key={i} 
                  className={`relative p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 group overflow-hidden ${item.accent} ${item.bg}`}
                >
                   {/* Effet de Halo au survol */}
                   <div className={`absolute -inset-24 ${item.glow} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                   
                   <div className="relative z-10">
                     <div className="absolute -top-10 -left-6 text-7xl font-black text-white/5 select-none transition-transform group-hover:scale-110 duration-500">
                        {item.step}
                     </div>
                     <div className={`w-14 h-14 bg-white/5 ${item.iconColor} rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                        {React.cloneElement(item.icon, { size: 28 })}
                     </div>
                     <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                     <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* SECTION EXPERTISE SIMPLIFIÉE */}
        <section id="expertise" className="py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-white mb-4">Mes Outils & Compétences</h2>
              <p className="text-slate-400 max-w-xl">
                Je privilégie les <span className="text-white font-medium italic underline decoration-purple-500/50 underline-offset-4">technologies modernes</span> les plus performantes pour garantir la rapidité, la sécurité et l'évolutivité de vos projets digitaux.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  borderColor: "rgba(168, 85, 247, 0.4)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md transition-colors group relative overflow-hidden"
              >
                {/* Animation de fond au hover spécifique aux outils */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 relative z-10">{skill.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION PROJETS */}
        <section id="projets" className="py-24">
          <div className="flex flex-col gap-2 mb-16">
            <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Réalisations Concrètes</h2>
            <p className="text-slate-400">Une sélection de projets clients et de développements personnels.</p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 group relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-500/20 to-blue-500/20' : 'from-emerald-500/20 to-teal-500/20'} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700`} />
                  <div className="relative aspect-[16/10] bg-[#0f172a] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                     />
                     <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                       {project.type}
                     </div>
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <a 
                          href={project.link} 
                          target={project.isExternal ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="px-6 py-3 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-purple-500 hover:text-white transition-all"
                        >
                          Voir le projet <ExternalLink size={18} />
                        </a>
                     </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <span className="text-xs font-mono text-purple-400 tracking-widest uppercase flex items-center gap-2">
                    <Layers size={14} /> {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white">{project.title}</h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 text-center max-w-3xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-black text-white">Un projet en tête ?</h2>
          <p className="text-slate-400 text-xl">
            Discutons de vos besoins sur WhatsApp. C'est simple, rapide et sans engagement.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/22990643364"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-black rounded-[2rem] font-black text-lg hover:bg-purple-500 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center gap-3 mx-auto w-fit"
            >
              Démarrer la discussion <MessageSquare className="w-6 h-6" />
            </a>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} ATCHADE ADECHINA HOSPICE • TOUS DROITS RÉSERVÉS
      </footer>
    </div>
  );
}