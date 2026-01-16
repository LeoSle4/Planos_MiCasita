import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import type { Block } from '../data/projects';
import ScrollToTop from '../components/ScrollToTop';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container" style={{padding: '5rem 0', textAlign: 'center'}}>
        <h2>Proyecto no encontrado</h2>
        <Link to="/" className="btn">Volver al Inicio</Link>
      </div>
    );
  }

  // Helper to render blocks
  const renderBlock = (block: Block, index: number) => {
    switch(block.type) {
      case 'text':
        return (
          <p key={index} className="architect-desc" style={{ marginBottom: '2.5rem' }}>
             {block.content}
          </p>
        );
      case 'image':
        return (
          <figure key={index} className="structural-frame" style={{ marginBottom: '4rem', padding: '1rem', background: '#fff' }}>
             <div className="frame-corner corner-tl"></div>
             <div className="frame-corner corner-tr"></div>
             <div className="frame-corner corner-bl"></div>
             <div className="frame-corner corner-br"></div>
             <img 
               src={block.src || project.thumbnail} 
               alt={block.caption || project.title} 
               style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.02)' }}
             />
             {block.caption && (
               <div className="dimension-line" style={{ marginTop: '1rem' }}>
                 <span className="dimension-text">{block.caption} // REF: IMG_{index+1}</span>
               </div>
             )}
          </figure>
        );
      case 'quote':
        return (
          <blockquote key={index} style={{ margin: '4rem 0', padding: '3rem', borderLeft: '2px solid var(--accent-wine)', background: 'rgba(123, 44, 58, 0.02)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '3rem', opacity: 0.1, fontFamily: 'serif' }}>"</span>
            <p style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', fontWeight: 300, color: 'var(--primary-navy)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
              {block.content}
            </p>
            {block.author && <cite className="tech-notation" style={{ fontSize: '0.7rem', opacity: 0.6 }}>— {block.author}</cite>}
          </blockquote>
        );
       case 'stats':
        return (
           <div key={index} style={{
               display: 'grid', 
               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
               gap: '3rem', 
               padding: '3rem 0',
               borderTop: '1px dashed rgba(26, 43, 75, 0.2)',
               borderBottom: '1px dashed rgba(26, 43, 75, 0.2)',
               marginBottom: '4rem'
           }}>
             {block.items?.map((item, i) => (
                 <div key={i}>
                     <span className="tech-notation" style={{ color: 'var(--accent-wine)', fontSize: '0.6rem' }}>{item.label}</span>
                     <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0.3rem 0 0 0' }}>{item.value}</p>
                 </div>
             ))}
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="project-detail">
      <ScrollToTop />
      
      {/* 1. Technical Header */}
      <section className="section blueprint-background" style={{ paddingTop: '150px', paddingBottom: '80px', position: 'relative' }}>
         {/* Grid Marks */}
         <div className="architect-grid-mark" style={{ top: '100px', left: '4vw' }}>DETALLE TÉCNICO // 04</div>
         <div className="architect-grid-mark" style={{ top: '100px', right: '4vw' }}>ID: {project.id < 10 ? `0${project.id}` : project.id}</div>
         
         <div className="container">
            <div className="structural-frame" style={{ padding: '3rem' }}>
                <div className="frame-corner corner-tl"></div>
                <div className="frame-corner corner-tr"></div>
                <div className="frame-corner corner-bl"></div>
                <div className="frame-corner corner-br"></div>
                
                <span className="tech-notation">SISTEMA DE DISEÑO // {project.category.toUpperCase()}</span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: '1rem 0', borderBottom: 'none' }}
                >
                  {project.title.toUpperCase()}
                </motion.h1>
                <div className="dimension-line">
                  <span className="dimension-text">{project.subtitle} // {project.year}</span>
                </div>
            </div>
         </div>
      </section>

      {/* 2. Content Layout */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="two-col-grid" style={{ alignItems: 'flex-start', gap: '5vw' }}>
            
            {/* Sidebar: Technical Specs */}
            <aside className="project-meta">
                <div style={{ marginBottom: '3rem' }}>
                    <span className="tech-notation">ÁREA CONSTRUIDA</span>
                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{project.area}</p>
                </div>
                
                <div className="dimension-line" style={{ width: '40px', margin: '2rem 0' }}></div>
                
                <Link to="/" className="btn-architecture" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '0.8rem' }}>
                  ← VOLVER_AL_INICIO
                </Link>
            </aside>

            {/* Main Content: Blocks */}
            <div className="project-body-content" style={{ maxWidth: '800px' }}>
              {project.blocks.map((block, index) => renderBlock(block, index))}
              
              {/* Technical Stamp at the end */}
              <div style={{ 
                marginTop: '6rem', 
                padding: '2rem', 
                border: '1px solid rgba(26, 43, 75, 0.1)', 
                display: 'inline-block',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.7rem',
                color: 'rgba(26, 43, 75, 0.4)'
              }}>
                REGISTRO: PM_ARCH_{project.id}_2024<br/>
                PLANOS MICASITA // SANTA ANITA<br/>
                DOCUMENTO TÉCNICO AUTORIZADO
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
