
import React from 'react';
import { Star, Quote } from 'lucide-react';

const DentalSocialProof = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      practice: 'Smile Family Dentistry',
      rating: 5,
      text: 'This software has recovered over $8,000 in lost revenue for us in just 3 months. The automation is incredible.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Michael Chen',
      practice: 'Downtown Dental Care',
      rating: 5,
      text: 'We went from losing 15 appointments per week to recovering 70% of them. Game changer for our practice.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Dr. Emily Rodriguez',
      practice: 'Bright Smiles Clinic',
      rating: 5,
      text: 'The ROI calculator showed me exactly how much I was losing. Now I\'m recovering $3,000+ monthly.',
      image: 'https://images.unsplash.com/photo-1594824694996-8832ce24c0c6?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            Trusted by 500+ Dental Practices
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5 average rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.practice}</div>
                  <div className="flex gap-1 mt-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Featured in:</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="font-bold text-lg">Dental Economics</div>
            <div className="font-bold text-lg">Dentistry Today</div>
            <div className="font-bold text-lg">Practice Management</div>
            <div className="font-bold text-lg">ADA News</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalSocialProof;
