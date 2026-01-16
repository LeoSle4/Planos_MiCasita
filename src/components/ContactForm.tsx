

import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/planosmicasita111924@gmail.com", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const errorData = await response.json();
                console.error("Detalle del error:", errorData);
                alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            alert("Error de conexión. Por favor verifica tu internet.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="contact-success" style={{ 
                textAlign: 'center', 
                padding: '3rem 1rem',
                border: '1px solid var(--accent-wine)',
                backgroundColor: 'rgba(123, 44, 58, 0.05)'
            }}>
                <h3 style={{ color: 'var(--accent-wine)', marginBottom: '1rem' }}>¡Gracias por contactarnos!</h3>
                <p style={{ margin: 0 }}>Tu requerimiento técnico ha sido recibido. Nos comunicaremos contigo a la brevedad posible.</p>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="_honey" style={{display: 'none'}} />
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group">
                <label>SOLICITANTE</label>
                <input type="text" name="name" placeholder="Ingresa tu nombre..." required />
            </div>
            <div className="form-group">
                <label>CORREO ELECTRÓNICO</label>
                <input type="email" name="email" placeholder="ejemplo@correo.com" required />
            </div>
            <div className="form-group">
                <label>DETALLES DEL PROYECTO</label>
                <textarea name="message" rows={4} placeholder="Describe brevemente tus requerimientos..." required></textarea>
            </div>
            <button 
                type="submit" 
                className="btn-architecture" 
                disabled={isSubmitting}
                style={{ 
                    width: '100%', 
                    marginTop: '2rem', 
                    padding: '1rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
            >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR REQUERIMIENTO TÉCNICO'}
            </button>
        </form>
    );
};

export default ContactForm;
