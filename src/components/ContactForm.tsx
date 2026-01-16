

const ContactForm = () => {
    return (
        <form 
            className="contact-form" 
            action="https://formsubmit.co/planosmicasita111924@gmail.com" 
            method="POST"
        >
            {/* Honeypot for spam protection */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Success Page */}
            <input type="hidden" name="_next" value={window.location.origin} /> 

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
            <button type="submit" className="btn-architecture" style={{ width: '100%', marginTop: '2rem', padding: '1rem' }}>ENVIAR REQUERIMIENTO TÉCNICO</button>
        </form>
    );
};

export default ContactForm;
