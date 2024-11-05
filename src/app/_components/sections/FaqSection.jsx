'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const FaqSection = ({ faqData }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    // Set the active index to the clicked one or null if it's already active
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <>
      <span className="mil-suptitle mil-upper mil-dark mil-up mil-mb-30">{faqData.subtitle}</span>
      <h2 className="mil-upper mil-up mil-mb-60">{faqData.title}</h2>

      <div className="mil-mb-60">
        {faqData.items.map((item, key) => (
          <div className="mil-accordion-group mil-dark mil-up" key={`faq-item-${key}`}>
            <div 
              className="mil-accordion-menu"
              onClick={() => toggleFaq(key)} // Toggle answer visibility on question click
              style={{ cursor: 'pointer' }}
            >
              <div className="mil-symbol mil-dark mil-thin mil-h3">
                <div className={`mil-plus ${activeFaqIndex === key ? 'hidden' : ''}`}>+</div>
                <div className={`mil-minus ${activeFaqIndex === key ? '' : 'hidden'}`}>-</div>
              </div>
              <h6 className="mil-upper">{item.label}</h6>
            </div>
            {/* Hide content by default; show it only if the index matches the active one */}
            <div 
              className={`mil-dark-soft ${activeFaqIndex === key ? '' : 'hidden'}`} 
              style={{ display: activeFaqIndex === key ? 'block' : 'none' }} // Alternative to hidden class
              dangerouslySetInnerHTML={{ __html: item.content }} 
            />
          </div>
        ))}
      </div>

      <Link href={faqData.button.link} className="mil-button mil-up mil-mb-60">
        {faqData.button.label}
      </Link>
    </>
  );
};

export default FaqSection;
