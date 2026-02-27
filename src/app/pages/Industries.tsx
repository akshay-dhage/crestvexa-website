import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Scale, Building2, Cloud, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      id: 'legal',
      icon: Scale,
      name: 'Legal',
      challenges: [
        'Document analysis at scale',
        'Compliance and regulatory requirements',
        'Secure client data management',
        'Case management automation',
      ],
      solutions: [
        'AI-powered document review systems',
        'Secure cloud infrastructure',
        'Practice management software',
        'E-discovery platforms',
      ],
      techStack: ['Python', 'NLP/ML', 'PostgreSQL', 'AWS', 'Encryption'],
      compliance: 'Attorney-client privilege, Data sovereignty, GDPR',
    },
    {
      id: 'fintech',
      icon: Building2,
      name: 'FinTech',
      challenges: [
        'Real-time transaction processing',
        'Fraud detection and prevention',
        'Regulatory compliance',
        'High availability requirements',
      ],
      solutions: [
        'Payment processing systems',
        'ML-based fraud detection',
        'Automated compliance reporting',
        'High-performance trading platforms',
      ],
      techStack: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
      compliance: 'PCI-DSS, SOC 2, GDPR, Financial regulations',
    },
    {
      id: 'saas',
      icon: Cloud,
      name: 'Enterprise SaaS',
      challenges: [
        'Multi-tenant architecture',
        'Scalability and performance',
        'Feature complexity',
        'Integration requirements',
      ],
      solutions: [
        'Scalable cloud architecture',
        'API-first design',
        'Advanced analytics',
        'Enterprise SSO integration',
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS/Azure', 'Docker'],
      compliance: 'SOC 2, ISO 27001, GDPR',
    },
    {
      id: 'professional',
      icon: Briefcase,
      name: 'Professional Services',
      challenges: [
        'Project and resource management',
        'Time tracking and billing',
        'Client collaboration',
        'Knowledge management',
      ],
      solutions: [
        'Custom ERP systems',
        'Client portals',
        'Workflow automation',
        'Business intelligence dashboards',
      ],
      techStack: ['React', 'Python', 'PostgreSQL', 'Cloud infrastructure'],
      compliance: 'Data protection, Client confidentiality',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep expertise in complex, regulated industries. 
              We understand your unique challenges and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={industry.id} id={industry.id} className="scroll-mt-20">
                <Card className="border-2">
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                      {/* Header */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                            <industry.icon className="h-8 w-8 text-white" />
                          </div>
                          <h2 className="text-3xl font-bold">{industry.name}</h2>
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h3 className="font-bold mb-4">Industry Challenges</h3>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div>
                        <h3 className="font-bold mb-4">Our Solutions</h3>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech & Compliance */}
                      <div>
                        <div className="mb-6">
                          <h3 className="font-bold mb-4">Tech Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {industry.techStack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-accent text-sm rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">Compliance</h3>
                          <p className="text-sm text-muted-foreground">{industry.compliance}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="lg:col-span-3 pt-6 border-t flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                          <Button>
                            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Don't See Your Industry?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            We work across many sector. Contact us to discuss your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
