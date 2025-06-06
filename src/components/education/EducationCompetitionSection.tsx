
import React from 'react';
import { TrendingUp, GraduationCap, Clock } from 'lucide-react';

const EducationCompetitionSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Maximize Class Attendance",
      description: "More sessions through automation",
      detail: "Increase your program efficiency by automatically filling cancelled slots with recovered students."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
      title: "Education Expertise", 
      description: "Built specifically for education providers",
      detail: "Custom-designed for tutoring centers, consulting firms, coaching programs, and online education platforms."
    },
    {
      icon: <Clock className="w-12 h-12 text-green-600" />,
      title: "Quick Implementation",
      description: "Fully integrated in under 24 hours",
      detail: "Connect to your existing learning management system and start recovering revenue immediately."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How We Help Your Education Business Outperform Competitors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Stay ahead with automated systems that work around the clock to maximize your learning sessions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4 font-inter font-semibold">
                {benefit.description}
              </p>
              <p className="text-sm text-gray-500">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCompetitionSection;
