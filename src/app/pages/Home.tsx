import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Brain, 
  Cloud, 
  Code, 
  Wrench, 
  Shield, 
  Zap, 
  FileCheck,
  Users,
  Scale,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Automation Engineering',
      description: 'Intelligent systems that scale with your business. From ML pipelines to automated workflows.',
      link: '/services/ai-automation',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Architecture',
      description: 'Scalable infrastructure on AWS, Azure, or GCP. CI/CD pipelines and container orchestration.',
      link: '/services/cloud-devops',
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Enterprise-grade applications built with modern tech stacks. Secure, scalable, maintainable.',
      link: '/services/software-development',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Managed Support',
      description: 'Long-term technical partnership. 24/7 monitoring, updates, and ongoing optimization.',
      link: '/services/maintenance',
    },
  ];

  const whyPoints = [
    { icon: Zap, text: 'Scalable Architecture' },
    { icon: Shield, text: 'Secure Systems' },
    { icon: FileCheck, text: 'Enterprise Documentation' },
    { icon: Users, text: 'Long-Term Technical Partnership' },
  ];

  const industries = [
    { icon: Scale, name: 'Legal', link: '/industries#legal' },
    { icon: Building2, name: 'FinTech', link: '/industries#fintech' },
    { icon: Cloud, name: 'Enterprise SaaS', link: '/industries#saas' },
    { icon: Briefcase, name: 'Professional Services', link: '/industries#professional' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/herosection.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Intelligent Digital Infrastructure.
            </h1>
            <p className="text-xl text-white/90 mb-8">
              AI-driven engineering, research, and enterprise-grade software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end technical solutions for modern enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary text-sm font-medium inline-flex items-center hover:underline">
                    Learn more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crestvexa */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Crestvexa</h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-ready solutions built for the long term
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold">{point.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Specialized solutions for complex sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.link}
                className="flex flex-col items-center justify-center p-6 border-2 rounded-lg hover:border-primary hover:bg-accent transition-colors"
              >
                <industry.icon className="h-10 w-10 text-primary mb-3" />
                <span className="font-medium text-sm text-center">{industry.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            Schedule a strategy call to discuss your technical needs
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Schedule a Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
