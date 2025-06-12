
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly does ReslotAI start recovering customers?",
      answer: "ReslotAI begins working immediately after a cancellation is detected. Most recovery messages are sent within 5 minutes, and we typically see first responses within 30 minutes."
    },
    {
      question: "What's your average recovery rate?",
      answer: "Our average recovery rate is 68% across all industries. However, this varies by business type, with some seeing rates as high as 85% in service-based businesses."
    },
    {
      question: "Do you integrate with my existing booking system?",
      answer: "Yes! ReslotAI integrates with over 50+ popular booking platforms including Calendly, Acuity, Square, and many practice management systems. Setup typically takes less than 10 minutes."
    },
    {
      question: "How do you personalize the recovery messages?",
      answer: "Our AI analyzes customer behavior, appointment history, cancellation patterns, and business-specific factors to create personalized messages that resonate with each individual customer."
    },
    {
      question: "Can I customize the messages and offers?",
      answer: "Absolutely! You have full control over message templates, discount amounts, survey questions, and objection handling strategies. Everything can be customized to match your brand voice."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No contracts required! You can cancel anytime with 30 days notice. We're confident you'll see results, which is why we offer a 30-day money-back guarantee."
    },
    {
      question: "How do you handle customer privacy and data?",
      answer: "We're HIPAA compliant and follow strict data protection protocols. Customer data is encrypted and never shared with third parties. You maintain full ownership of your customer data."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, dedicated onboarding, ongoing optimization consultations, and access to our customer success team to help maximize your recovery rates."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Everything you need to know about ReslotAI
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Our team is here to help you get started</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule a Demo
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
