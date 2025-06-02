import React, { useState } from 'react';
import { Container, LeftSide, RightSide } from './styled';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${formData.name}\nTelefone: ${formData.phone}\nEmail: ${formData.email}`);
  };

  return (
    <Container>
      <LeftSide>
        <h2>Fique por dentro!</h2>
        <p>
          Preencha o formulário ao lado com seus dados para entrarmos em contato quando uma bolsa estiver disponível.
        </p>
      </LeftSide>
      <RightSide onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="^\+?[0-9\s\-]{7,15}$"
          title="Informe um telefone válido"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </RightSide>
    </Container>
  );
};

export default ContactForm;
