import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, Code, TrendingUp, Shield } from 'lucide-react';

export function Resources() {
  const blogPosts = [
    {
      category: 'AI & Machine Learning',
      title: 'Building Production-Ready ML Pipelines: Best Practices for 2026',
      excerpt: 'A comprehensive guide to deploying machine learning models at scale with proper monitoring and versioning.',
      date: 'February 15, 2026',
      readTime: '8 min read',
      icon: Code,
    },
    {
      category: 'Cloud Architecture',
      title: 'Multi-Cloud Strategy: When and How to Implement',
      excerpt: 'Exploring the benefits and challenges of multi-cloud architectures for enterprise applications.',
      date: 'February 10, 2026',
      readTime: '6 min read',
      icon: TrendingUp,
    },
    {
      category: 'Security',
      title: 'Zero Trust Architecture for Modern Applications',
      excerpt: 'Implementing zero trust security principles in cloud-native applications and microservices.',
      date: 'February 5, 2026',
      readTime: '10 min read',
      icon: Shield,
    },
    {
      category: 'DevOps',
      title: 'GitOps and Kubernetes: The Future of Infrastructure Management',
      excerpt: 'How GitOps principles are transforming the way we manage and deploy infrastructure.',
      date: 'January 28, 2026',
      readTime: '7 min read',
      icon: Code,
    },
    {
      category: 'Software Engineering',
      title: 'Microservices vs Monoliths: Making the Right Choice in 2026',
      excerpt: 'An honest comparison of architectural patterns and when to use each approach.',
      date: 'January 20, 2026',
      readTime: '12 min read',
      icon: BookOpen,
    },
    {
      category: 'AI & Machine Learning',
      title: 'Fine-Tuning Large Language Models for Enterprise Use Cases',
      excerpt: 'Practical strategies for customizing LLMs to solve specific business problems.',
      date: 'January 15, 2026',
      readTime: '9 min read',
      icon: Code,
    },
  ];

  const whitepapers = [
    {
      title: 'Enterprise AI Implementation Framework',
      description: 'A comprehensive guide for CTOs and technical leaders on implementing AI solutions at scale.',
      pages: '45 pages',
    },
    {
      title: 'Cloud Migration Playbook for Financial Services',
      description: 'Step-by-step strategies for migrating legacy systems to cloud infrastructure while maintaining compliance.',
      pages: '32 pages',
    },
    {
      title: 'Security Best Practices for SaaS Applications',
      description: 'Essential security measures for building and maintaining enterprise SaaS platforms.',
      pages: '28 pages',
    },
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Architecture', 'DevOps', 'Security', 'Software Engineering'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical articles, whitepapers, and industry insights from our engineering team
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <post.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to="#" className="text-primary text-sm font-medium inline-flex items-center hover:underline">
                    Read more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Whitepapers & Research</h2>
            <p className="text-muted-foreground">
              In-depth technical documentation and research papers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whitepapers.map((paper, index) => (
              <Card key={index}>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">{paper.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{paper.pages}</span>
                    <Link to="#" className="text-primary text-sm font-medium inline-flex items-center hover:underline">
                      Download <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-primary/5 p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get monthly insights on AI, cloud architecture, and software engineering delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
