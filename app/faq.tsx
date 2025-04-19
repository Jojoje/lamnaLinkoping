import React, { useState } from 'react';
import './FaqAccordion.css'; // You can rename or inline this if you prefer

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 5–7 business days depending on your location.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination.',
  },
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
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
