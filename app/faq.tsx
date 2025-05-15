import React, { useState } from 'react';
import './FaqAccordion.css';

export type FAQItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FAQItem[];
};

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {items.map((item, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleItem(index)}>
            {item.question}
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          <div className="faq-answer">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};