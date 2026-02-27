import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm, FormSubmissionError, isOnline, isNetworkError, getNetworkErrorDetails } from '../../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    projectScope: '',
    timeline: '',
    message: '',
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
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        company_size: formData.companySize || undefined,
        industry: formData.industry || undefined,
        project_scope: formData.projectScope,
        timeline: formData.timeline || undefined,
        message: formData.message || undefined,
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        projectScope: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Check for network errors first
      if (isNetworkError(error)) {
        const networkDetails = getNetworkErrorDetails();
        setErrorMessage('Unable to connect to the server. ' + networkDetails);
      } else if (error instanceof FormSubmissionError) {
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
              Let's Build Something Great
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll schedule a consultation to discuss 
              how we can help transform your digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@crestvexa.com" className="text-muted-foreground hover:text-primary">
                        info@crestvexa.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-muted-foreground">
                        Sector No 7, Indrayani Nagar<br />
                        Bhosari, Pune 411026<br />
                        Maharashtra, India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-accent border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 48 hours during business days.
                  </p>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="bg-muted border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    Information provided on this website is for general informational purposes only. 
                    We reserve the right to modify, update, or discontinue any content at any time 
                    without prior notice. All projects and services are subject to separate terms and conditions.
                  </p>
                </CardContent>
              </Card>

              {/* Privacy Policy Link */}
              <div>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  View Privacy Policy
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
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
                        <Label htmlFor="phone">Phone *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="companySize">Company Size</Label>
                        <Select value={formData.companySize} onValueChange={(value) => handleChange('companySize', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-1000">201-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleChange('industry', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="legal">Legal</SelectItem>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="saas">Enterprise SaaS</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (1-2 months)</SelectItem>
                            <SelectItem value="normal">Normal (3-6 months)</SelectItem>
                            <SelectItem value="flexible">Flexible (6+ months)</SelectItem>
                            <SelectItem value="exploratory">Exploratory</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="projectScope">Project Scope *</Label>
                      <Textarea
                        id="projectScope"
                        required
                        value={formData.projectScope}
                        onChange={(e) => handleChange('projectScope', e.target.value)}
                        placeholder="Describe your project requirements"
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Any additional details (optional)"
                        rows={3}
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                        Thank you! We will contact you within 24 hours.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                        {errorMessage || 'There was an error submitting your request. Please try again or email us directly.'}
                      </div>
                    )}
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our <a href="/privacy" className="font-bold underline hover:text-primary">Privacy Policy</a>. We will only use your information to respond to your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
