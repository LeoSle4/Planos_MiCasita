import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div 
        className="project-architect-card"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Technical Header */}
        <div className="project-tech-header">
           <span>LÁMINA PROYECTO: {project.id === 1 ? 'PL-01' : project.id === 2 ? 'PL-02' : 'PL-03'}</span>
           <span>COOR: X-420 // Y-101</span>
        </div>

        {/* Structural Frame Corners */}
        <div className="frame-corner corner-tl" style={{width: '10px', height: '10px'}}></div>
        <div className="frame-corner corner-tr" style={{width: '10px', height: '10px'}}></div>
        <div className="frame-corner corner-bl" style={{width: '10px', height: '10px'}}></div>
        <div className="frame-corner corner-br" style={{width: '10px', height: '10px'}}></div>

        <div className="project-card-image-wrap">
            {/* Project Seal / Stamp */}
            <div className="arch-stamp">
                VISTO<br/>BUENO
            </div>

            <motion.img 
                src={project.thumbnail} 
                alt={project.title}
                variants={{
                    rest: { scale: 1, filter: 'grayscale(100%) contrast(1.1)' },
                    hover: { scale: 1.05, filter: 'grayscale(0%) contrast(1)' }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            
            {/* Hover Indicator / Crosshair */}
            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 0.2 }
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                background: `
                  linear-gradient(90deg, var(--accent-wine) 1px, transparent 1px) 50% 50% / 20px 100%,
                  linear-gradient(var(--accent-wine) 1px, transparent 1px) 50% 50% / 100% 20px
                `,
                backgroundRepeat: 'no-repeat'
              }}
            />
        </div>

        {/* Footer Info */}
        <div className="project-footer-tech">
            <span className="project-meta-label">DETALLE DE OBRA_</span>
            <h3 className="project-title-arch">{project.title}</h3>
            
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.5rem'}}>
                <span style={{
                    fontFamily: 'Space Mono, monospace', 
                    fontSize: '0.6rem', 
                    color: 'rgba(26, 43, 75, 0.4)',
                    textTransform: 'uppercase'
                }}>
                    CATEGORÍA: {project.category}
                </span>
                <span style={{
                    fontFamily: 'Space Mono, monospace', 
                    fontSize: '0.6rem', 
                    color: 'var(--accent-wine)',
                    fontWeight: 600
                }}>
                    [ VER FICHA ]
                </span>
            </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
