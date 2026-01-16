import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Leonardo Sle",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Maria Aris",
    role: "Senior Partner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  }
];

const TeamSection = () => {
  return (
    <section id="team" style={{ padding: '5rem 0' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          Valued Partners
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ 
                width: '100%', 
                height: '350px', 
                overflow: 'hidden', 
                marginBottom: '1rem',
                backgroundColor: '#eee'
              }}>
                <motion.img 
                  src={member.image} 
                  alt={member.name}
                  whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'grayscale(100%)', // Default B&W
                    transition: 'filter 0.5s ease' 
                  }}
                />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{member.name}</h3>
              <p style={{ color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
