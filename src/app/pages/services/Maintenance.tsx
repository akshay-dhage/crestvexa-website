import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Wrench, Clock, Shield, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Maintenance() {
  const capabilities = [
    '24/7 System Monitoring',
    'Performance Optimization',
    'Security Updates & Patches',
    'Bug Fixes & Issue Resolution',
    'Feature Enhancements',
    'Database Maintenance',
    'Backup & Disaster Recovery',
    'Technical Support & Consultation',
  ];

  const problems = [
    {
      icon: Clock,
      title: 'System Downtime',
      description: 'Critical issues causing business disruption',
    },
    {
      icon: Shield,
      title: 'Security Vulnerabilities',
      description: 'Outdated dependencies and security gaps',
    },
    {
      icon: TrendingUp,
      title: 'Performance Degradation',
      description: 'Slow applications affecting user experience',
    },
  ];

  const packages = [
    {
      title: 'Essential',
      features: [
        'Business hours support',
        'Monthly security updates',
        'Performance monitoring',
        'Quarterly health checks',
      ],
    },
    {
      title: 'Professional',
      features: [
        '24/7 support coverage',
        'Weekly updates & patches',
        'Real-time monitoring',
        'Monthly optimization',
      ],
    },
    {
      title: 'Enterprise',
      features: [
        'Dedicated support team',
        'Continuous monitoring',
        'Proactive optimization',
        'Custom SLA agreements',
      ],
    },
  ];

  const techStack = [
    'Datadog, New Relic',
    'PagerDuty, Sentry',
    'AWS CloudWatch',
    'Grafana, Prometheus',
    'CircleCI, Jenkins',
    'Slack, JIRA Integration',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Wrench className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Maintenance & Managed Support</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Long-Term Technical Partnership
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                24/7 monitoring, updates, and ongoing optimization to keep your systems running at peak performance.
              </p>
              <Link to="/contact">
                <Button size="lg">Request Consultation</Button>
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="System maintenance"
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
            What We Maintain
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

      {/* Support Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Support Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={index === 1 ? 'border-primary border-2' : ''}>
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  {index === 1 && (
                    <div className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Monitoring & Tools
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

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['System Audit', 'Setup Monitoring', 'Proactive Maintenance', 'Continuous Optimization'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Let's Keep Your Systems Running Smoothly
            </h2>
            <p className="text-xl mb-8 text-[#CFCFCF]">
              Schedule a call to discuss your maintenance needs
            </p>
            <Link to="/contact">
              <Button size="lg" variant="default">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
