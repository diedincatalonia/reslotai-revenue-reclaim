
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, Users, Target, Heart, Award, Globe } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg",
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image: "/placeholder.svg",
      initials: "ER"
    },
    {
      name: "David Thompson",
      role: "Lead AI Engineer",
      image: "/placeholder.svg",
      initials: "DT"
    },
    {
      name: "Lisa Wang",
      role: "VP of Marketing",
      image: "/placeholder.svg",
      initials: "LW"
    },
    {
      name: "James Miller",
      role: "Head of Sales",
      image: "/placeholder.svg",
      initials: "JM"
    }
  ];

  const whitepapers = [
    {
      title: "The Science of Customer Recovery",
      description: "A comprehensive study on how automated follow-ups can increase customer retention by 40%",
      downloadUrl: "#"
    },
    {
      title: "AI-Powered Business Intelligence",
      description: "How machine learning transforms customer feedback into actionable business insights",
      downloadUrl: "#"
    },
    {
      title: "The ROI of Customer Feedback Systems",
      description: "Real data from 500+ businesses showing the financial impact of systematic feedback collection",
      downloadUrl: "#"
    }
  ];

  const faqs = [
    {
      question: "How does ReslotAI integrate with existing systems?",
      answer: "ReslotAI seamlessly integrates with most popular business platforms including CRM systems, email marketing tools, and POS systems through our API and pre-built connectors."
    },
    {
      question: "What makes your AI different from other feedback tools?",
      answer: "Our AI doesn't just collect feedback - it analyzes sentiment, identifies patterns, and provides actionable insights. It also automates the entire recovery process, from initial survey to follow-up actions."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most businesses see improvements in customer satisfaction within the first 30 days. Our clients typically report a 25-40% increase in customer retention within 90 days of implementation."
    },
    {
      question: "Is our customer data secure?",
      answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your customer data is never shared with third parties."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive onboarding, and ongoing training to ensure your success with our platform."
    },
    {
      question: "Can I customize the surveys and follow-up messages?",
      answer: "Yes! Our platform allows full customization of surveys, follow-up sequences, and branding to match your business needs and maintain consistency with your brand voice."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Gradient */}
      <section className="bg-gradient-hero text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              Born from frustration, built with passion
            </p>
            <div className="text-lg md:text-xl leading-relaxed space-y-6 animate-fade-in">
              <p>
                It started with a simple question: "Why do businesses lose customers they could easily save?" 
                After seeing countless restaurants, salons, and retail stores struggle with silent dissatisfaction, 
                our founders knew there had to be a better way.
              </p>
              <p>
                Traditional feedback systems were broken. Customers would leave unhappy, never to return, 
                while businesses remained completely unaware of what went wrong. We set out to bridge this gap 
                with intelligent automation that not only captures feedback but acts on it instantly.
              </p>
              <p>
                Today, ReslotAI helps thousands of businesses turn potential losses into loyal customers, 
                one intelligent interaction at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate minds behind ReslotAI, dedicated to transforming how businesses 
              connect with their customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-semibold bg-gradient-cta text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the data and research that powers our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 mb-4">{paper.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{paper.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about ReslotAI
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-cta text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using ReslotAI to recover lost customers 
            and gain valuable insights
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
