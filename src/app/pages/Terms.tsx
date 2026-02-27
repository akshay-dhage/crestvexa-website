import { Card, CardContent } from '../components/ui/card';

export function Terms() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 21, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using Crestvexa's services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground mb-4">
                  Crestvexa provides digital engineering, AI solutions, cloud architecture, and software development 
                  services to enterprise clients. Specific terms for each engagement are defined in individual 
                  service agreements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Unless otherwise specified in writing, all deliverables and intellectual property created 
                  under our services remain the property of the client upon full payment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                <p className="text-muted-foreground mb-4">
                  Both parties agree to maintain confidentiality of proprietary information shared during 
                  the course of the engagement, as detailed in our standard NDA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Crestvexa's liability is limited as specified in individual service agreements. 
                  We maintain professional liability insurance for all engagements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at info@crestvexa.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
