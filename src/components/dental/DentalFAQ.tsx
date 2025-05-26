
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DentalFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is the software HIPAA compliant?',
      answer: 'Yes, absolutely. We maintain strict HIPAA compliance with end-to-end encryption, secure data storage, and regular security audits. All patient data is protected according to healthcare privacy regulations.'
    },
    {
      question: 'How does the integration work with my existing software?',
      answer: 'Our software integrates seamlessly with popular practice management systems like Dentrix, Eaglesoft, Open Dental, and others through secure API connections. Setup typically takes less than 5 minutes.'
    },
    {
      question: 'What if my staff isn\'t tech-savvy?',
      answer: 'No technical knowledge required! Our software runs automatically in the background. We provide free onboarding and training, plus 24/7 support. Most practices are up and running in under an hour.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most practices see their first recovered appointments within 48 hours of activation. Full ROI is typically achieved within the first month as the automation optimizes based on your practice\'s patterns.'
    },
    {
      question: 'What if patients don\'t respond to the automated messages?',
      answer: 'Our system uses intelligent sequencing and multiple touchpoints (email, SMS, voice) to maximize response rates. We achieve an average 65% recovery rate, but even recovering just 2-3 appointments per month covers the software cost.'
    },
    {
      question: 'Can I customize the messages sent to patients?',
      answer: 'Yes, all messages can be fully customized to match your practice\'s tone and branding. You can set different messages for different types of appointments and personalize based on patient history.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about security, integration, and ease of use
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg mb-4 shadow-sm border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DentalFAQ;
