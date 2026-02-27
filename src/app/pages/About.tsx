import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Users, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    { icon: Target, title: 'Technical Excellence', desc: 'We build systems that last and scale' },
    { icon: CheckCircle2, title: 'Enterprise Quality', desc: 'Production-ready from day one' },
    { icon: Users, title: 'Long-Term Partnership', desc: 'Your success is our success' },
    { icon: TrendingUp, title: 'Continuous Innovation', desc: 'Always evolving with technology' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Building the Future of Enterprise Technology
            </h1>
            <p className="text-xl text-muted-foreground">
              We're not just a development shop. We're a technical partner committed 
              to building intelligent, scalable systems that power modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To deliver enterprise-grade digital infrastructure that empowers organizations 
                  to innovate faster, operate more efficiently, and scale with confidence. 
                  We combine AI-driven automation with proven engineering practices to build 
                  systems that solve real business problems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  To be the trusted technical partner for enterprises navigating digital 
                  transformation. We envision a future where intelligent systems handle 
                  complexity, freeing organizations to focus on innovation and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Engineering Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented engineers, architects, and technical leaders 
                  who want to work on challenging enterprise problems.
                </p>
                <Link to="/careers">
                  <Button size="lg">
                    View Open Positions
                  </Button>
                </Link>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518730037-a16581a040e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Professional team meeting"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-[#CFCFCF]">
            Let's discuss how we can help build your digital future
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
