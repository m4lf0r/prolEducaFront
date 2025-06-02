import styled from 'styled-components';

interface IconProps {
  isOpen: boolean;
}

export const AccordionWrapper = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #ccc;
  margin-bottom: 2.5rem;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ccc;
`;

export const AccordionButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #364055;
`;

export const AccordionIcon = styled.div<IconProps>`
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
  color: #364055;
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  background-color: #fafafa;
  color: #444;
  font-size: 0.95rem;
  line-height: 1.5;
`;
