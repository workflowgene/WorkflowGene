import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import IndustryPathways from './components/IndustryPathways';
import WorkflowBuilder from './components/WorkflowBuilder';
import FeaturesPreview from './components/FeaturesPreview';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach(el => observer?.observe(el));

    return () => {
      scrollElements?.forEach(el => observer?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>WorkflowGene Cloud - DNA of Smart Business Automation</title>
        <meta name="description" content="Transform your business operations with intelligent workflow automation. Join 50,000+ businesses using WorkflowGene Cloud for seamless process automation across Education, Healthcare, and E-Commerce." />
        <meta name="keywords" content="workflow automation, business process automation, AI workflows, enterprise automation, SaaS platform" />
        <meta property="og:title" content="WorkflowGene Cloud - DNA of Smart Business Automation" />
        <meta property="og:description" content="Intelligent workflow automation platform that evolves with your business. Start your free trial today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://workflowgene.cloud" />
        <link rel="canonical" href="https://workflowgene.cloud" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <IndustryPathways />
        <WorkflowBuilder />
        <FeaturesPreview />
        <SocialProof />
        <CTASection />
      </main>
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-50 h-10  rounded-genetic-md flex items-center justify-center">
                  <img src="/assets/logos/WorkflowGene Logo.png" />
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                The DNA of smart business automation. Transform your operations with intelligent workflows that evolve with your business.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-muted rounded-genetic-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-genetic-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="/industries" className="hover:text-primary transition-colors">Industries</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/resources" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} WorkflowGene Cloud. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;