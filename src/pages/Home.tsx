import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

import serviceVivienda from '../assets/service-vivienda.png';
import serviceRemodelacion from '../assets/service-remodelacion.png';
import serviceTramites from '../assets/service-tramites.png';
import serviceLicencias from '../assets/service-licencias.png';
import serviceSupervision from '../assets/service-supervision.png';
import heroImage from '../assets/hero-image.png';

import logo from '../assets/logo.png';
import '../App.css'; 

const Home = () => {
  const containerRef = useRef(null);

  const services = [
    { title: "Proyectos de Viviendas", img: serviceVivienda },
    { title: "Ampliaciones y Remodelaciones", img: serviceRemodelacion },
    { title: "Trámites Registrales", img: serviceTramites },
    { title: "Licencias Municipales", img: serviceLicencias },
    { title: "Supervisión de Obra", img: serviceSupervision },
  ];

  return (
    <div ref={containerRef} className="page">
      
      {/* 1. REVOLUTIONARY HERO (Split Screen) */}
      <section id="home" className="hero-split">
          <div className="container hero-text-block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.99] }}
            >
              <p style={{
                  color: 'var(--accent-wine)', 
                  letterSpacing: '8px', 
                  fontSize: '1rem', 
                  marginBottom: '1rem', 
                  fontWeight: 600,
                  textTransform: 'uppercase'
              }}>BIENVENIDOS A</p>
              <h1 style={{mixBlendMode: 'difference', zIndex: 10, fontSize: 'clamp(3rem, 8vw, 10rem)', lineHeight: '0.9'}}>PLANOS<br/>MiCasita</h1>
              <div style={{height: '4px', width: '100px', background: 'var(--accent-wine)', margin: '2rem 0'}}></div>
              <h3 style={{letterSpacing: '5px', fontSize: '1.5rem'}}>DISEÑA & CONSTRUYE</h3>
            </motion.div>
          </div>
          <div className="hero-image-block" style={{overflow: 'hidden'}}>
             <motion.img 
                src={heroImage} 
                alt="Arquitectura"
                initial={{ scale: 1.3, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                whileHover={{ scale: 1.05 }} // Interactive Hover
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
          </div>
      </section>

      {/* 2. SOBRE NOSOTROS (Technical Architectural Redesign) */}
      <section id="about" className="section content-section blueprint-background" style={{overflow: 'hidden'}}>
        {/* Architectural Grid Corner Marks */}
        <div className="architect-grid-mark" style={{top: '20px', left: '20px'}}>COOR: A-101</div>
        <div className="architect-grid-mark" style={{top: '20px', right: '20px'}}>ESCALA: 1:50</div>
        <div className="architect-grid-mark" style={{bottom: '20px', left: '20px'}}>REF: MiCasita_G1</div>
        <div className="architect-grid-mark" style={{bottom: '20px', right: '20px'}}>VER: 2026.01</div>

        <div className="container two-col-grid" style={{alignItems: 'center', zIndex: 1}}>
            {/* Column 1: Technical Text Block */}
            <div className="about-text structural-frame">
                <div className="frame-corner corner-tl"></div>
                <div className="frame-corner corner-tr"></div>
                <div className="frame-corner corner-bl"></div>
                <div className="frame-corner corner-br"></div>

                <span className="tech-notation">ESPECIFICACIONES TÉCNICAS // 02</span>
                <motion.h2
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem', borderBottom: 'none' }}
                >
                  QUIÉNES<br/>SOMOS.
                </motion.h2>

                <div className="dimension-line">
                    <span className="dimension-text">L = 550mm</span>
                </div>

                <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                >
                  <p className="architect-desc">
                    En <b style={{color: 'var(--primary-navy)', fontWeight: 600}}>Planos MiCasita</b> desarrollamos soluciones integrales en arquitectura, orientadas al diseño funcional, la correcta aplicación normativa y la optimización técnica de cada proyecto.
                  </p>
                  <p className="architect-desc">
                    Nuestro enfoque se basa en comprender las necesidades específicas de cada cliente para traducirlas en propuestas arquitectónicas claras, eficientes y coherentes.
                  </p>
                  <p className="architect-desc" style={{marginBottom: '3rem'}}>
                    <b style={{color: 'var(--primary-navy)', fontWeight: 600}}>Planos MiCasita</b> es un estudio dedicado a la arquitectura e ingeniería desde <b>Santa Anita</b>, especializado en documentación técnica y asesorías.
                  </p>
                </motion.div>
                
                <div style={{marginTop: '2rem'}}>
                    <a href="#projects" className="btn-architecture" style={{textDecoration: 'none'}}>VER PROYECTOS →</a>
                </div>
            </div>

            {/* Column 2: Structural Logo Detail */}
            <div className="about-logo-wrapper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: '0', right: '10%', opacity: 0.1}}>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
                        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
                
                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   style={{
                       background: 'white', 
                       padding: '2rem', 
                       boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                       border: '1px solid rgba(26, 43, 75, 0.05)'
                   }}
                >
                   <img 
                      src={logo} 
                      alt="Planos MiCasita Logo" 
                      style={{
                          width: '100%',
                          maxWidth: '400px', 
                          display: 'block', 
                          mixBlendMode: 'multiply',
                          filter: 'contrast(1.05)' 
                      }} 
                   />
                   <div style={{
                       marginTop: '1rem', 
                       paddingTop: '1rem', 
                       borderTop: '1px dashed rgba(26, 43, 75, 0.2)',
                       textAlign: 'center',
                       fontFamily: 'Space Mono, monospace',
                       fontSize: '0.6rem',
                       color: 'rgba(26, 43, 75, 0.4)'
                   }}>
                       SELLO: APROBADO POR PM // SISTEMA_DISEÑO_V4
                   </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. SERVICIOS (Blueprint Technical Grid) */}
      <section id="services" className="section content-section blueprint-background" style={{overflow: 'hidden'}}>
        {/* Architectural Grid Corner Marks */}
        <div className="architect-grid-mark" style={{top: '20px', left: '20px'}}>COOR: S-202</div>
        <div className="architect-grid-mark" style={{top: '20px', right: '20px'}}>ESCALA: 1:20</div>
        <div className="architect-grid-mark" style={{bottom: '20px', left: '20px'}}>DOC: PLANO_SERVICIOS</div>
        
        <div className="container">
          <div className="structural-frame" style={{marginBottom: '4rem', padding: '2rem'}}>
             <div className="frame-corner corner-tl"></div>
             <div className="frame-corner corner-tr"></div>
             <div className="frame-corner corner-bl"></div>
             <div className="frame-corner corner-br"></div>
             
             <span className="tech-notation">CATÁLOGO DE SERVICIOS // 03</span>
             <h2 style={{maxWidth: '800px', fontSize: 'clamp(2rem, 4vw, 2.5rem)', borderBottom: 'none', margin: 0}}>SERVICIOS INTEGRALES.</h2>
             
             <div className="dimension-line" style={{margin: '1.5rem 0'}}>
                <span className="dimension-text">ANCHO = 100%</span>
             </div>
          </div>
          
          <div className="services-grid">
             {services.map((service, index) => (
                <ServiceCard 
                   key={index}
                   title={service.title} 
                   image={service.img} 
                   delay={index * 0.1}
                />
             ))}
          </div>
        </div>
      </section>

      {/* 4. PROYECTOS (Blueprint Technical Grid) */}
      <section id="projects" className="section content-section blueprint-background" style={{overflow: 'hidden'}}>
        {/* Architectural Grid Corner Marks */}
        <div className="architect-grid-mark" style={{top: '20px', left: '20px'}}>COOR: P-501</div>
        <div className="architect-grid-mark" style={{top: '20px', right: '20px'}}>ESCALA: 1:100</div>
        <div className="architect-grid-mark" style={{bottom: '20px', left: '40%'}}>LÁMINA: PL-04</div>
        <div className="architect-grid-mark" style={{bottom: '20px', right: '20px'}}>REF: MiCasita_G4</div>

        <div className="container">
           <div className="structural-frame" style={{marginBottom: '4rem', padding: '2rem'}}>
              <div className="frame-corner corner-tl"></div>
              <div className="frame-corner corner-tr"></div>
              <div className="frame-corner corner-bl"></div>
              <div className="frame-corner corner-br"></div>
              
              <span className="tech-notation">REGISTRO DE PROYECTOS // 04</span>
              <h2 style={{marginBottom: '1rem', borderBottom: 'none', fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)'}}>PROYECTOS.</h2>
              
              <div className="dimension-line" style={{margin: '1.5rem 0'}}>
                 <span className="dimension-text">ANCHURA = 100% (LÁMINA COMPLETA)</span>
              </div>
           </div>

           <div className="project-grid">
              {projects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                     <ProjectCard project={project} />
                  </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. CONTACTO (Architectural White Overhaul) */}
      <section id="contact" className="contact-section-white">
         {/* Grid Coordinates */}
         <div className="architect-grid-mark" style={{ top: '30px', left: '30px' }}>COORD: W-104 // Z-901</div>
         <div className="architect-grid-mark" style={{ top: '30px', right: '30px' }}>STATION: PERU_HO</div>
         
         <div className="container">
            <div className="contact-white-grid">
               {/* Header Column */}
               <div className="contact-header-white">
                  <div className="structural-frame" style={{ border: 'none', padding: 0 }}>
                     <span className="contact-label-tag" style={{ color: 'var(--accent-wine)', fontSize: '0.65rem', letterSpacing: '4px', fontWeight: 700 }}>
                        CANAL DE REQUERIMIENTOS_05
                     </span>
                     <h2 className="contact-title-massive">
                        INICIA TU<br/>PROYECTO.
                     </h2>
                  </div>
                  
                  <div style={{ marginTop: '3rem', maxWidth: '400px' }}>
                     <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(26, 43, 75, 0.7)', marginBottom: '2.5rem' }}>
                        Estamos listos para materializar tus ideas. Conéctate directamente con nuestro equipo técnico para una asesoría especializada.
                     </p>
                     
                     <div className="contact-cta-white">
                        <a 
                           href="https://wa.me/51960574693?text=Hola,%20quisiera%20solicitar%20una%20asesoría%20técnica." 
                           target="_blank" 
                           className="btn-whatsapp-arch"
                        >
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.558 3.7-.969zm11.387-5.477c-.31-.156-1.834-.905-2.112-1.006-.277-.101-.48-.151-.68.151-.2.302-.777 1.006-.951 1.208-.174.201-.347.227-.657.071-.31-.156-1.309-.483-2.493-1.539-.921-.821-1.543-1.835-1.724-2.147-.181-.312-.019-.481.136-.636.14-.139.31-.362.466-.544.156-.181.208-.312.312-.52.104-.208.052-.389-.026-.544-.078-.156-.68-1.64-.932-2.247-.245-.591-.493-.51-.68-.52l-.58-.01c-.2 0-.525.075-.8.376-.274.302-1.045 1.021-1.045 2.491 0 1.47 1.07 2.89 1.22 3.09.151.2 2.107 3.216 5.104 4.51.714.308 1.271.492 1.705.631.717.227 1.37.195 1.885.118.574-.086 1.834-.751 2.091-1.47.257-.719.257-1.335.18-1.47-.078-.136-.28-.217-.59-.373z"/>
                           </svg>
                           SOLICITAR ASESORÍA VÍA WHATSAPP
                        </a>
                     </div>
                  </div>
               </div>

               {/* Form Column */}
               <div className="contact-form-premium-white">
                   <div className="frame-corner corner-tl" style={{ width: '20px', height: '20px' }}></div>
                   <div className="frame-corner corner-br" style={{ width: '20px', height: '20px' }}></div>
                   
                   <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(26,43,75,0.3)', display: 'block', marginBottom: '2rem' }}>
                     DATOS_ENTRADA: FORMULARIO_V2
                   </span>
                   <ContactForm />
               </div>
            </div>

            {/* Architectural Footer */}
            <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(26, 43, 75, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', gap: '3rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <span style={{ fontSize: '0.55rem', color: 'rgba(26,43,75,0.4)', fontFamily: 'Space Mono, monospace' }}>UBICACIÓN_</span>
                     <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>SANTA ANITA, LIMA, PERÚ</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <span style={{ fontSize: '0.55rem', color: 'rgba(26,43,75,0.4)', fontFamily: 'Space Mono, monospace' }}>ESTADO_</span>
                     <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#25D366' }}>● EN LÍNEA</span>
                  </div>
               </div>
               
               <div style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', color: 'rgba(26,43,75,0.3)' }}>
                     © {new Date().getFullYear()} PLANOS MICASITA
                  </span>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
