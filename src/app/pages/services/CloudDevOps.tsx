import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Cloud, Server, Container, GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function CloudDevOps() {
  const capabilities = [
    'AWS/Azure/GCP Architecture',
    'Kubernetes Orchestration',
    'CI/CD Pipeline Design',
    'Infrastructure as Code (Terraform)',
    'Container Management (Docker)',
    'Serverless Architecture',
    'Load Balancing & Auto-Scaling',
    'Monitoring & Logging Solutions',
  ];

  const problems = [
    {
      icon: Server,
      title: 'Infrastructure Scalability',
      description: 'Unable to scale infrastructure to meet growing demand',
    },
    {
      icon: GitBranch,
      title: 'Slow Deployments',
      description: 'Manual deployment processes causing delays and errors',
    },
    {
      icon: Container,
      title: 'Environment Inconsistency',
      description: 'Different behaviors across dev, staging, and production',
    },
  ];

  const techStack = [
    'AWS (EC2, ECS, Lambda, S3)',
    'Azure (App Service, AKS)',
    'Google Cloud Platform',
    'Terraform, Ansible',
    'Docker, Kubernetes',
    'Jenkins, GitLab CI, GitHub Actions',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Cloud className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Cloud & DevOps Architecture</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Scalable Infrastructure on AWS, Azure, or GCP
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                CI/CD pipelines, container orchestration, and infrastructure automation for enterprise scale.
              </p>
              <Link to="/contact">
                <Button size="lg">Request Consultation</Button>
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Cloud infrastructure"
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['Infrastructure Audit', 'Architecture Design', 'Migration & Setup', 'Optimization & Monitoring'].map((step, index) => (
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
              Flexible engagement models for cloud transformation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Migration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    End-to-end migration from on-premise to cloud
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>DevOps Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Complete CI/CD pipeline implementation
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Managed Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    24/7 infrastructure monitoring and support
                  </p>
                </CardContent>
              </Card>
            </div>
            <Link to="/contact">
              <Button size="lg">
                Discuss Your Infrastructure <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
