import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    image: string;
    delay?: number;
    index?: number;
}

const ServiceCard = ({ title, image, delay = 0 }: ServiceCardProps) => {
    return (
        <motion.div 
            className="service-tech-card vertical-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -10 }}
        >
             {/* Architectural Corner Markers */}
             <div className="frame-corner corner-tl" style={{ width: '10px', height: '10px', top: '10px', left: '10px' }}></div>
             <div className="frame-corner corner-tr" style={{ width: '10px', height: '10px', top: '10px', right: '10px' }}></div>
             
            {/* Top: Image Panoramic Crop */}
            <div className="service-image-blueprint centered-image panoramic-crop">
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Technical Overlay Lines */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'rgba(123, 44, 58, 0.1)'
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '1px',
                    height: '100%',
                    background: 'rgba(123, 44, 58, 0.1)'
                }} />
                
                {/* Tech ID Label (Subtle) */}
                <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '10px',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.5rem',
                    color: 'var(--accent-wine)',
                    opacity: 0.6
                }}>
                    SC-MOD.01
                </div>
            </div>

            {/* Bottom: Title Centered */}
            <div className="service-info-wrap" style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                <h3 className="service-title-tech" style={{ fontSize: '1.1rem', fontWeight: 500 }}>{title}</h3>
            </div>
            
            <div className="architect-grid-mark" style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.45rem', opacity: 0.3 }}>
                ALINEAR: CENTRO // REF: ARCH_01
            </div>
        </motion.div>
    );
};

export default ServiceCard;
