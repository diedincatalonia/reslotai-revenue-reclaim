
import React from 'react';
import { DollarSign, Clock, Phone, TrendingDown } from 'lucide-react';

const DentalPainPoints = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'Revenue Loss',
      description: 'Dental clinics lose over $30K/year due to no-shows and cancellations',
      stat: '$30,000+',
      statLabel: 'Annual Loss'
    },
    {
      icon: Clock,
      title: 'Time Wasted',
      description: 'Hours spent manually calling patients to reschedule appointments',
      stat: '15-20',
      statLabel: 'Hours/Week'
    },
    {
      icon: Phone,
      title: 'Missed Follow-ups',
      description: 'Canceled patients slip through the cracks without proper follow-up',
      stat: '60%',
      statLabel: 'Never Return'
    },
    {
      icon: TrendingDown,
      title: 'Schedule Gaps',
      description: 'Last-minute cancellations leave expensive time slots empty',
      stat: '25%',
      statLabel: 'Unfilled Slots'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            The Hidden Cost of Canceled Appointments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every canceled appointment isn't just a lost slot—it's lost revenue, wasted time, and missed opportunities to serve patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">{point.stat}</div>
              <div className="text-sm text-gray-500 mb-3">{point.statLabel}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-800 mb-2">The Real Impact</h3>
            <p className="text-red-700">
              A single unfilled appointment slot can cost your practice $150-$500 in lost revenue. 
              With our automation, you can recover 60-70% of these losses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalPainPoints;
