import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Target, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About FarmConnect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between rural farmers and urban consumers through innovative technology 
            and sustainable agricultural practices.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower rural farmers by providing them direct access to urban markets while 
                ensuring consumers receive the freshest, most nutritious produce through our 
                innovative pickup-based commerce platform.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in sustainable agriculture, fair pricing for farmers, and transparent 
                supply chains that benefit everyone in the ecosystem.
              </p>
            </div>
            <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To create a world where every farmer has access to fair markets, every consumer 
                has access to fresh produce, and sustainable farming practices are the norm 
                rather than the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Community First',
                description: 'Supporting rural communities and fostering connections between farmers and consumers.'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Trust & Transparency',
                description: 'Building trust through verified farmers, transparent pricing, and quality assurance.'
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: 'Sustainability',
                description: 'Promoting eco-friendly farming practices and reducing environmental impact.'
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Social Impact',
                description: 'Creating positive change in rural economies and urban food systems.'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Quality Excellence',
                description: 'Ensuring the highest quality produce through careful selection and handling.'
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Innovation',
                description: 'Using technology to solve real problems in agriculture and commerce.'
              }
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect our commitment to rural communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '250+', label: 'Verified Farmers' },
              { number: '10,000+', label: 'Happy Customers' },
              { number: '50+', label: 'Pickup Centers' },
              { number: '₹2Cr+', label: 'Farmer Income Generated' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How FarmConnect Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to connect farms with your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Browse & Select',
                description: 'Explore fresh produce from verified farmers in your area and select what you need.'
              },
              {
                step: '02',
                title: 'Book & Confirm',
                description: 'Place your order with quantity specifications and choose your convenient pickup center.'
              },
              {
                step: '03',
                title: 'Pickup & Enjoy',
                description: 'Collect your farm-fresh produce at the designated center and enjoy the freshness!'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto">
                  <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;