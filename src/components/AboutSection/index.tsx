import React, { useState } from 'react';
import { SectionWrapper, SectionTitle, SectionText, ToggleButton } from './styled';

const fullText = `O Colégio Souza Leão - Unidade Cordeiro oferece ensino de qualidade com foco no desenvolvimento integral do aluno. Atua da Educação Infantil ao Ensino Médio com metodologia atualizada e corpo docente qualificado.
Além disso, promove diversas atividades extracurriculares que estimulam o desenvolvimento cultural, esportivo e social dos estudantes.
Nossa infraestrutura conta com laboratórios modernos, biblioteca atualizada e espaços de convivência agradáveis.
Buscamos sempre inovar no processo educativo, valorizando o protagonismo dos alunos e a participação ativa das famílias.
Nosso compromisso é formar cidadãos preparados para os desafios do século XXI, com valores sólidos e senso crítico.`;

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const previewLength = 200;

  const toggleShowMore = () => setShowMore(prev => !prev);

  return (
    <SectionWrapper>
      <SectionTitle>Sobre a escola</SectionTitle>
      <SectionText>
        {showMore ? fullText : fullText.slice(0, previewLength) + (fullText.length > previewLength ? '...' : '')}
      </SectionText>
      {fullText.length > previewLength && (
        <ToggleButton onClick={toggleShowMore}>
          {showMore ? 'Ver menos' : 'Ver mais'}
        </ToggleButton>
      )}
    </SectionWrapper>
  );
};

export default AboutSection;
