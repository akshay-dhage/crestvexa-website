import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Briefcase, Mail, Linkedin, Github, Globe } from 'lucide-react';
import { useState } from 'react';
import { submitCareerApplication, FormSubmissionError, isOnline } from '../../lib/supabase';

export function Careers() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedinUrl: '',
    portfolioUrl: '',
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Check online status before submitting
    if (!isOnline()) {
      setErrorMessage('You appear to be offline. Please check your internet connection and try again.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      await submitCareerApplication({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        position: formData.position || undefined,
        linkedin_url: formData.linkedinUrl || undefined,
        portfolio_url: formData.portfolioUrl || undefined,
        cover_letter: formData.coverLetter || undefined,
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        linkedinUrl: '',
        portfolioUrl: '',
        coverLetter: '',
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      
      if (error instanceof FormSubmissionError) {
        setErrorMessage(error.message);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Engineering Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Work on challenging enterprise problems with cutting-edge technology. 
              Build systems that power organizations around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions - Currently None */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-2 border-accent">
              <CardContent className="p-12">
                <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Currently No Open Positions</h2>
                <p className="text-muted-foreground mb-8">
                  We don't have any open positions at this time. Please check back later 
                  or send us your resume for future opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* General Application Form */}
      {!showForm ? (
        /* CTA */
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Don't see the right role?
            </h2>
            <p className="text-xl mb-8 text-[#CFCFCF]">
              Send us your resume.
            </p>
            <Button size="lg" variant="default" onClick={() => setShowForm(true)}>
              <Mail className="mr-2 h-4 w-4" />
              General Application
            </Button>
          </div>
        </section>
      ) : (
        /* Application Form */
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">General Application</h2>
                    <Button variant="ghost" onClick={() => setShowForm(false)}>
                      Close
                    </Button>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center mb-6">
                      Thank you for your interest! We'll be in touch if there's a suitable position.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center mb-6">
                      {errorMessage || 'There was an error submitting your application. Please try again.'}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="Enter your phone number (optional)"
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position of Interest</Label>
                        <Select value={formData.position} onValueChange={(value) => handleChange('position', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="software-engineer">Software Engineer</SelectItem>
                            <SelectItem value="senior-engineer">Senior Software Engineer</SelectItem>
                            <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                            <SelectItem value="cloud-architect">Cloud Architect</SelectItem>
                            <SelectItem value="ai-engineer">AI/ML Engineer</SelectItem>
                            <SelectItem value="fullstack-developer">Full Stack Developer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="linkedinUrl">
                        <Linkedin className="h-4 w-4 inline mr-1" /> LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedinUrl"
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                        placeholder="https://linkedin.com/in/yourprofile "
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolioUrl">
                        <Globe className="h-4 w-4 inline mr-1" /> Portfolio / GitHub
                      </Label>
                      <Input
                        id="portfolioUrl"
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                        placeholder="https://github.com/yourusername "
                      />
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        value={formData.coverLetter}
                        onChange={(e) => handleChange('coverLetter', e.target.value)}
                        placeholder="Write a short introduction about yourself (optional)"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA - Show again if form is visible */}
      {showForm && (
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Don't see the right role?
            </h2>
            <p className="text-xl mb-8 text-[#CFCFCF]">
              Send us your resume.
            </p>
            <Button size="lg" variant="default" onClick={() => setShowForm(true)} disabled={showForm}>
              <Mail className="mr-2 h-4 w-4" />
              General Application
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
