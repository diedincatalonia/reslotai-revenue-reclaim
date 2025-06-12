
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const DataInsightsSection = () => {
  const recoveryData = [
    { month: 'Jan', recovered: 65, lost: 35 },
    { month: 'Feb', recovered: 68, lost: 32 },
    { month: 'Mar', recovered: 72, lost: 28 },
    { month: 'Apr', recovered: 75, lost: 25 },
    { month: 'May', recovered: 78, lost: 22 },
    { month: 'Jun', recovered: 82, lost: 18 }
  ];

  const reasonsData = [
    { name: 'Scheduling', value: 35, color: '#8884d8' },
    { name: 'Price', value: 25, color: '#82ca9d' },
    { name: 'Location', value: 20, color: '#ffc658' },
    { name: 'Service', value: 15, color: '#ff7c7c' },
    { name: 'Other', value: 5, color: '#8dd1e1' }
  ];

  const timeData = [
    { hour: '9AM', cancellations: 5 },
    { hour: '11AM', cancellations: 12 },
    { hour: '1PM', cancellations: 18 },
    { hour: '3PM', cancellations: 15 },
    { hour: '5PM', cancellations: 8 },
    { hour: '7PM', cancellations: 3 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Data-Driven Recovery Insights
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Real analytics to optimize your customer recovery strategy
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">82%</div>
                <div className="text-sm text-gray-600">Recovery Rate</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">247</div>
                <div className="text-sm text-gray-600">Customers Won Back</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">2.3</div>
                <div className="text-sm text-gray-600">Avg Hours to Recovery</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">$47K</div>
                <div className="text-sm text-gray-600">Monthly Recovery</div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Recovery Rate Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={recoveryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="recovered" fill="#10b981" name="Recovered %" />
                    <Bar dataKey="lost" fill="#ef4444" name="Lost %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cancellation Reasons</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={reasonsData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {reasonsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Peak Cancellation Times</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cancellations" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataInsightsSection;
