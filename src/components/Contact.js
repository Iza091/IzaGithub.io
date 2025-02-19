import React, { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isFormFilled, setIsFormFilled] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Verificar si algún campo tiene texto
        setIsFormFilled(Object.values({ ...formData, [name]: value }).some(val => val.trim() !== ''));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formsubmit.co/ajax/12caad11ec2019808c3e89130a656b01', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowSuccess(true);
                setFormData({
                    Name: '',
                    Email: '',
                    Subject: '',
                    Message: '',
                });
                setIsFormFilled(false);

                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-light-text dark:text-dark-text">Contacto</h2>

                {showSuccess && (
                    <div className="mb-6 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-md">
                        ¡Mensaje enviado con éxito!
                    </div>
                )}

                <div className="max-w-2xl mx-auto border border-light-secondaryBorderSubtle dark:border-dark-secondaryBorderSubtle rounded-md p-6 bg-white dark:bg-dark-body shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="Name"
                                    id="name"
                                    value={formData.Name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nombre"
                                    className="w-full px-4 py-2 border border-y-light-tertiaryBorder dark:border-y-dark-tertiaryBorder text-light-text dark:text-light-text"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="Email"
                                    id="email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Correo"
                                    className="w-full px-4 py-2 border border-y-light-tertiaryBorder dark:border-y-dark-tertiaryBorder text-light-text dark:text-light-text"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                                Asunto
                            </label>
                            <input
                                type="text"
                                name="Subject"
                                id="subject"
                                value={formData.Subject}
                                onChange={handleChange}
                                required
                                placeholder="Asunto"
                                className="w-full px-4 py-2 border border-y-light-tertiaryBorder dark:border-y-dark-tertiaryBorder text-light-text dark:text-light-text"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="Message"
                                rows="8"
                                value={formData.Message}
                                onChange={handleChange}
                                required
                                placeholder="Escribe un mensaje..."
                                className="w-full px-4 py-2 border border-y-light-tertiaryBorder dark:border-y-dark-tertiaryBorder text-light-text dark:text-light-text resize-none"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`inline-flex justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-light-link hover:bg-light-link dark:bg-dark-link dark:hover:bg-dark-link ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>
                        </div>
                    </form>

                    {/* Botón "X" para limpiar el formulario */}
                    {isFormFilled && (
                        <div className="text-center mt-4">
                            <button
                                type="button"
                                onClick={() => {
                                    setFormData({ Name: '', Email: '', Subject: '', Message: '' });
                                    setIsFormFilled(false);
                                }}
                                className="px-4 py-2 text-sm font-medium text-light-text dark:text-dark-text bg-bg-light-link:bg-dark-link hover:bg-light-link:hover:bg-dark-link rounded-md transition-all"
                            >
                                ✕ Cancelar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
