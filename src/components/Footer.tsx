import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, InstagramLogo, Heart } from 'phosphor-react';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current?.children || [], {
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%"
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative py-16 px-6 border-t border-border/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Building modern, high-performance web experiences through elegant design, clean code, and the latest technologies.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/SivaAbinesh07" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow-primary transition-all duration-300 hover:scale-110">
                <GithubLogo size={18} className="text-primary-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/siva-abinesh-s-961425332" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center hover:shadow-glow-secondary transition-all duration-300 hover:scale-110">
                <LinkedinLogo size={18} className="text-secondary-foreground" />
              </a>
              <a href="https://www.instagram.com/__itz__me__siva__07" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow-primary transition-all duration-300 hover:scale-110">
                <InstagramLogo size={18} className="text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('hero')} className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('projects')} className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300">Contact</button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="text-primary-glow">Email:</span><br />
                sivaabinesh096@gmail.com
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary-glow">Location:</span><br />
                Trichy, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 Siva Abinesh. All rights reserved.
          </p>

          <button onClick={scrollToTop} className="px-4 py-2 gap-2 flex items-center bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105 text-sm">
            Back to Top <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary opacity-10 blur-3xl" />
    </footer>
  );
};

export default Footer;