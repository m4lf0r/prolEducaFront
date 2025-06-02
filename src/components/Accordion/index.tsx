import React, { useState } from 'react';
import {
  AccordionWrapper,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  AccordionButton,
  AccordionIcon,
  AccordionHeader,
} from './styled';
import { FaChevronDown } from 'react-icons/fa';

const accordionData = [
  {
    title: 'Estrutura escolar',
    content:
      'A escola conta com salas climatizadas, biblioteca, laboratório de ciências, quadra poliesportiva e área de convivência para os alunos.',
  },
  {
    title: 'Metodologia de ensino',
    content:
      'A metodologia é centrada no aluno, com projetos interdisciplinares, aprendizado ativo e incentivo ao pensamento crítico e à criatividade.',
  },
  {
    title: 'Sistema de ensino',
    content:
      'A instituição utiliza um sistema de ensino moderno, com material didático atualizado e suporte digital para alunos e professores.',
  },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <AccordionWrapper>
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <AccordionItem key={index}>
            <AccordionButton onClick={() => toggleItem(index)}>
              <AccordionHeader>
                <AccordionTitle>{item.title}</AccordionTitle>
                <AccordionIcon isOpen={isOpen}>
                  <FaChevronDown />
                </AccordionIcon>
              </AccordionHeader>
            </AccordionButton>
            {isOpen && <AccordionContent>{item.content}</AccordionContent>}
          </AccordionItem>
        );
      })}
    </AccordionWrapper>
  );
};

export default Accordion;
