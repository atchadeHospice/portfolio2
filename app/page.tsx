'use client'; // Obligatoire pour les composants interactifs dans Next.js App Router

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Globe, Layout, Database, Terminal, 
  Github, Linkedin, ExternalLink, Mail, ChevronRight,
  Server, Cpu, SmartphoneIcon
} from 'lucide-react';

const skills = [
  { name: "React Native / Expo", icon: <Smartphone className="w-6 h-6" />, color: "from-blue-400 to-cyan-500", desc: "Applications mobiles natives et performantes." },
  { name: "Laravel / PHP", icon: <Server className="w-6 h-6" />, color: "from-red-500 to-orange-600", desc: "Systèmes backend robustes et APIs sécurisées." },
  { name: "Tailwind / DaisyUI", icon: <Layout className="w-6 h-6" />, color: "from-teal-400 to-emerald-500", desc: "Interfaces modernes avec une UX soignée." },
  { name: "Prisma / MySQL", icon: <Database className="w-6 h-6" />, color: "from-indigo-500 to-purple-600", desc: "Modélisation de données et performance base de données." },
  { name: "WordPress", icon: <Globe className="w-6 h-6" />, color: "from-blue-600 to-blue-800", desc: "Solutions CMS sur mesure et thèmes personnalisés." },
  { name: "JavaScript / TS", icon: <Code2 className="w-6 h-6" />, color: "from-yellow-400 to-yellow-600", desc: "Logique frontend complexe et typage fort." },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 20);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* EFFETS DE FOND (GRADIENTS & BLUR) */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[120px]" />
      </div>

      {/* BARRE DE NAVIGATION (GLASSMORPHISM) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-xl bg-black/40 border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'}`}>
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
            <a href="#expertise" className="hover:text-purple-400 transition-colors">Expertise</a>
            <a href="#projets" className="hover:text-purple-400 transition-colors">Projets</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-lg">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-48">
        
        {/* SECTION HERO */}
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
            

            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Développeur <span className="text-white font-medium">Fullstack & Mobile</span>. Je conçois des écosystèmes numériques performants avec Laravel et React Native.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-4 bg-purple-600 rounded-2xl font-bold hover:bg-purple-700 transition-all flex items-center gap-2 shadow-xl shadow-purple-900/20 active:scale-95">
                Voir mes travaux <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3 ml-2">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <button key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-slate-400 hover:text-white">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* IMAGE AVEC EFFET MIROIR/BACKDROP */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-80 h-96 md:w-[420px] md:h-[520px] bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-3xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Hospice Atchade"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-black text-white leading-tight">Expert <br/> Software Engineer</h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION EXPERTISE */}
        <section id="expertise" className="py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-white mb-4">Compétences Clés</h2>
              <p className="text-slate-400 max-w-md">Une expertise technique multidisciplinaire pour des solutions bout-en-bout.</p>
            </div>
            <div className="flex gap-2">
               <div className="w-12 h-1.5 bg-purple-600 rounded-full" />
               <div className="w-6 h-1.5 bg-purple-600/30 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all relative group overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12">
                   {React.cloneElement(skill.icon, { size: 120 })}
                </div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-8 shadow-xl text-white group-hover:scale-110 transition-transform duration-500`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION PROJET (STYLE CARTE MIROIR) */}
        <section id="projets" className="py-24">
          <div className="relative rounded-[3.5rem] p-12 md:p-20 bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] -z-10" />
            
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Projet Signature</span>
                <h2 className="text-4xl md:text-5xl font-black text-white">Application Mobile <br/> E-Commerce Pro</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Une expérience d'achat fluide développée avec React Native et un backend puissant sous Laravel, utilisant Prisma pour une réactivité maximale.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['React Native', 'Laravel', 'Prisma', 'MySQL'].map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-[400px] aspect-[4/5] bg-slate-800 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden group-hover:border-purple-500/50 transition-colors">
                 <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                    alt="Preview Projet" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-5 bg-white rounded-full text-black shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                       <ExternalLink size={24} />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 text-center max-w-3xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-black text-white">Prêt à créer <br/> de l'impact ?</h2>
          <p className="text-slate-400 text-xl">
            Collaborons pour transformer vos idées en solutions numériques d'exception.
          </p>
          <div className="pt-4">
            <button className="px-12 py-5 bg-white text-black rounded-[2rem] font-black text-lg hover:bg-purple-500 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center gap-3 mx-auto">
              Démarrer un projet <Mail className="w-6 h-6" />
            </button>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} ATCHADE ADESHINA HOSPICE • TOUS DROITS RÉSERVÉS
      </footer>
    </div>
  );
}