import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Brain, Cloud, Code, Wrench, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Automation Engineering',
      description: 'Machine learning pipelines, intelligent automation, and AI-driven decision systems that transform operations.',
      link: '/services/ai-automation',
      capabilities: ['ML Pipeline Development', 'Process Automation', 'Natural Language Processing', 'Predictive Analytics'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Architecture',
      description: 'Scalable cloud infrastructure, CI/CD pipelines, and modern DevOps practices for reliable deployments.',
      link: '/services/cloud-devops',
      capabilities: ['AWS/Azure/GCP Architecture', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Alerting'],
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Enterprise applications, APIs, and systems built with modern frameworks and best practices.',
      link: '/services/software-development',
      capabilities: ['Full-Stack Development', 'API Design & Integration', 'Database Architecture', 'Security Implementation'],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Managed Support',
      description: 'Ongoing technical support, system monitoring, updates, and optimization for long-term success.',
      link: '/services/maintenance',
      capabilities: ['24/7 System Monitoring', 'Performance Optimization', 'Security Updates', 'Technical Support'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise Engineering Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              End-to-end technical solutions for modern digital infrastructure. 
              From AI systems to cloud architecture, we build and maintain enterprise-grade software.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Key Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {cap}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <Link to={service.link} className="w-full">
                        <Button className="w-full">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/contact" className="w-full">
                        <Button variant="outline" className="w-full">
                          Request Consultation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            Schedule a consultation and we'll help you find the right solution
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">Contact Our Team</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
