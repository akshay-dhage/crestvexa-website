import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Zap, FileCheck, Users } from 'lucide-react';

export function Process() {
  const principles = [
    {
      title: 'Quality First',
      description: 'Code reviews, automated testing, and adherence to industry best practices.',
      icon: Zap,
    },
    {
      title: 'Security by Design',
      description: 'Security considerations integrated from day one, not as an afterthought.',
      icon: Shield,
    },
    {
      title: 'Clear Communication',
      description: 'Regular updates, open communication, and complete visibility into progress.',
      icon: Users,
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation for maintainability and knowledge transfer.',
      icon: FileCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Development Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured, transparent approach to building enterprise-grade software solutions
          </p>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Our Development Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Consult</h3>
                <p className="text-sm text-muted-foreground">We discuss your needs and goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Build</h3>
                <p className="text-sm text-muted-foreground">We develop your solution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">We maintain and optimize</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            Let's discuss how we can bring your vision to life
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Schedule a Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
