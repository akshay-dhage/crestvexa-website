import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Code, Smartphone, Globe, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function SoftwareDevelopment() {
  const capabilities = [
    'Full-Stack Web Applications',
    'Mobile App Development (iOS/Android)',
    'API Development & Integration',
    'Database Design & Optimization',
    'Microservices Architecture',
    'Progressive Web Apps (PWA)',
    'Enterprise Software Solutions',
    'Legacy System Modernization',
  ];

  const problems = [
    {
      icon: Code,
      title: 'Technical Debt',
      description: 'Outdated systems slowing down business growth',
    },
    {
      icon: Database,
      title: 'Scalability Issues',
      description: 'Applications unable to handle increased user load',
    },
    {
      icon: Globe,
      title: 'Integration Challenges',
      description: 'Disconnected systems with poor data flow',
    },
  ];

  const techStack = [
    'React, Next.js, TypeScript',
    'Node.js, Python, Go',
    'PostgreSQL, MongoDB, Redis',
    'GraphQL, REST APIs',
    'React Native, Flutter',
    'AWS, Azure, Docker',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Custom Software Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Enterprise-Grade Applications Built With Modern Tech
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Secure, scalable, and maintainable software solutions tailored to your business needs.
              </p>
              <Link to="/contact">
                <Button size="lg">Request Consultation</Button>
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Software development"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Business Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardHeader>
                  <problem.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Implementation Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {['Requirements Analysis', 'Technical Architecture', 'Agile Development', 'Testing & QA', 'Deployment & Support'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-sm">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Engagement Model
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the model that fits your project:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Fixed Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Well-defined scope with fixed timeline and budget
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Time & Material</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Flexible scope with hourly or monthly rates
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dedicated Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fully dedicated engineers for long-term projects
                  </p>
                </CardContent>
              </Card>
            </div>
            <Link to="/contact">
              <Button size="lg">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
