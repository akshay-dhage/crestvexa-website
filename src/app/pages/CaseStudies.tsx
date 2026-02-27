import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Building2, TrendingUp, Clock, Users } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      client: 'Global Law Firm',
      industry: 'Legal',
      problem: 'Manual document review process consuming 1000+ attorney hours monthly. Inconsistent analysis across teams.',
      solution: 'Built AI-powered document analysis system with custom NLP models. Integrated with existing case management platform. Implemented secure cloud infrastructure with role-based access.',
      timeline: '6 months (MVP in 3 months)',
      results: [
        '75% reduction in document review time',
        '95% accuracy in contract clause identification',
        '$2M annual cost savings',
        'Deployed across 12 offices globally',
      ],
      tech: ['Python', 'TensorFlow', 'PostgreSQL', 'AWS', 'React'],
    },
    {
      client: 'FinTech Payment Platform',
      industry: 'FinTech',
      problem: 'Fraud detection system had high false positive rate (40%). Real-time processing requirements. Legacy monolithic architecture limiting scalability.',
      solution: 'Designed microservices architecture with event-driven fraud detection. Implemented ML models for anomaly detection. Built real-time processing pipeline with sub-100ms latency.',
      timeline: '8 months',
      results: [
        'Reduced false positives from 40% to 8%',
        'Processing 50K transactions/second',
        '99.99% uptime achieved',
        'PCI-DSS Level 1 certification obtained',
      ],
      tech: ['Go', 'Kafka', 'Redis', 'Kubernetes', 'PostgreSQL'],
    },
    {
      client: 'Healthcare Analytics SaaS',
      industry: 'Healthcare',
      problem: 'Multi-tenant platform struggling with performance at scale. HIPAA compliance gaps. Complex integration requirements with hospital systems.',
      solution: 'Re-architected database layer for multi-tenancy. Implemented HIPAA-compliant infrastructure with encryption and audit logging. Built HL7/FHIR integration layer.',
      timeline: '10 months',
      results: [
        '10x improvement in query performance',
        'HIPAA audit passed with zero findings',
        'Integrated with 150+ hospital systems',
        'Scaled to 500K daily active users',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'FHIR', 'AWS'],
    },
    {
      client: 'Enterprise SaaS Platform',
      industry: 'SaaS',
      problem: 'Growing technical debt limiting feature velocity. Deployment process taking 4+ hours. No automated testing strategy.',
      solution: 'Implemented comprehensive CI/CD pipeline. Built automated testing framework with 80% coverage. Refactored critical modules with zero downtime migrations.',
      timeline: '5 months (ongoing)',
      results: [
        'Deployment time reduced from 4 hours to 15 minutes',
        'Release frequency increased from monthly to daily',
        '60% reduction in production bugs',
        'Developer velocity increased 3x',
      ],
      tech: ['TypeScript', 'React', 'Node.js', 'Docker', 'GitHub Actions'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real problems solved. Measurable results delivered. 
              See how we've helped enterprises transform their technical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{study.industry}</span>
                      </div>
                      <h2 className="text-2xl font-bold">{study.client}</h2>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {study.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-bold mb-3">Problem</h3>
                      <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-3">Solution Architecture</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="font-bold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      Measurable Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start space-x-2 bg-accent p-3 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t">
                    <h3 className="font-bold mb-3">Technology Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
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
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            Let's discuss how we can solve your technical challenges
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
