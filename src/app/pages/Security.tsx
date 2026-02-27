import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Shield, AlertTriangle } from 'lucide-react';

export function Security() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Security is not an afterthought. Every system we build follows industry best practices 
              and compliance requirements from day one.
            </p>
          </div>
        </div>
      </section>

      {/* NDA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-primary">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Confidentiality & NDA</h3>
                  <p className="text-muted-foreground mb-4">
                    We understand the sensitivity of enterprise data. Non-disclosure agreements are 
                    available for all engagements, and all team members sign confidentiality agreements.
                  </p>
                  <Link to="/contact">
                    <Button>Request NDA</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Have Specific Security Requirements?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            Let's discuss your compliance and security needs
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Contact Security Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
