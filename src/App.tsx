import { useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  Brush,
  Camera,
  Compass,
  Goal,
  Home,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Video,
  Wand2,
} from 'lucide-react';

type RailItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

type Service = {
  title: string;
  text: string;
  Icon: LucideIcon;
  tone: string;
};

type Milestone = {
  year: string;
  title: string;
  text: string;
  Icon: LucideIcon;
};

const railItems: RailItem[] = [
  { label: 'Home', href: '#home', Icon: Home },
  { label: 'Services', href: '#services', Icon: Layers3 },
  { label: 'About', href: '#about', Icon: Users },
  { label: 'Work', href: '#story', Icon: Goal },
  { label: 'Strategy', href: '#vision', Icon: TrendingUp },
  { label: 'Contact', href: '#contact', Icon: Mail },
];

const services: Service[] = [
  {
    title: 'Social Media Management',
    text: 'Platform strategy, content calendars, community care, and monthly brand rhythm.',
    Icon: Share2,
    tone: 'gold',
  },
  {
    title: 'Graphic Designing',
    text: 'Campaign creatives, carousels, ad visuals, print layouts, and brand collateral.',
    Icon: PenTool,
    tone: 'rose',
  },
  {
    title: 'Performance Marketing',
    text: 'Paid campaigns that connect audience insights with measurable conversion goals.',
    Icon: TrendingUp,
    tone: 'green',
  },
  {
    title: 'Content Creation',
    text: 'Short-form ideas, reels, product stories, and thumb-stopping visual direction.',
    Icon: Camera,
    tone: 'blue',
  },
  {
    title: 'SEO Optimization',
    text: 'Search planning, page structure, content intent, and local discovery improvements.',
    Icon: Search,
    tone: 'gold',
  },
  {
    title: 'Brand Identity',
    text: 'Logo systems, color direction, voice, and repeatable assets for growing brands.',
    Icon: Palette,
    tone: 'rose',
  },
  {
    title: 'Web Design',
    text: 'Modern landing pages and responsive website experiences that support action.',
    Icon: MonitorSmartphone,
    tone: 'blue',
  },
  {
    title: 'Lead Generation',
    text: 'Funnels, forms, landing pages, and campaign paths built around qualified leads.',
    Icon: Target,
    tone: 'green',
  },
  {
    title: 'Video Editing',
    text: 'Reels, social cuts, product videos, subtitles, and polished launch edits.',
    Icon: Video,
    tone: 'gold',
  },
  {
    title: 'Creative Strategy',
    text: 'Positioning, campaign concepts, and launch roadmaps shaped for business growth.',
    Icon: Compass,
    tone: 'blue',
  },
];

const milestones: Milestone[] = [
  {
    year: '2023',
    title: 'The Beginning',
    text: 'Building the creative foundation with modern design excellence.',
    Icon: Sparkles,
  },
  {
    year: '2024',
    title: 'Service Expansion',
    text: 'Expanding into modern digital marketing solutions and media planning.',
    Icon: Megaphone,
  },
  {
    year: '2025',
    title: 'Performance Marketing',
    text: 'Driving growth through performance campaigns and data-backed strategy.',
    Icon: BarChart3,
  },
  {
    year: '2026',
    title: 'Digital Growth Partner',
    text: 'Becoming a complete digital growth and branding agency.',
    Icon: Rocket,
  },
];

const pillars = [
  {
    title: 'Performance Marketing',
    text: 'Campaigns structured around outcomes, learning cycles, and scale.',
    Icon: BarChart3,
  },
  {
    title: 'Strategic Innovation',
    text: 'Fresh ideas grounded in research, audience behavior, and creative testing.',
    Icon: Wand2,
  },
  {
    title: 'Creative Branding',
    text: 'Visual systems and brand stories that feel consistent everywhere.',
    Icon: Brush,
  },
  {
    title: 'Sustainable Growth',
    text: 'Long-term marketing habits that keep compounding after launch.',
    Icon: Goal,
  },
];

const aboutFeatures = [
  {
    title: 'Digital Marketing',
    text: 'Strategic campaigns, social media management, ads, and measurable digital growth.',
    Icon: TrendingUp,
  },
  {
    title: 'Graphic Designing',
    text: 'Creative brand visuals, premium layouts, campaign designs, and modern identity systems.',
    Icon: PenTool,
  },
  {
    title: 'Creative Strategy',
    text: 'Content direction, audience planning, and campaign ideas that connect with real goals.',
    Icon: Wand2,
  },
  {
    title: 'Business Growth',
    text: 'Lead generation, conversion planning, and long-term systems for scalable progress.',
    Icon: Rocket,
  },
];

const storyCapabilities = [
  {
    title: 'Digital Marketing',
    text: 'Strategic campaigns, social media planning, and performance-led growth.',
    Icon: TrendingUp,
  },
  {
    title: 'Graphic Designing',
    text: 'Premium creatives, brand visuals, layouts, and identity design.',
    Icon: PenTool,
  },
];

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function App() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));
    const isInView = (item: HTMLElement) => {
      const rect = item.getBoundingClientRect();

      return rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
    };

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.16,
      },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 6) * 70}ms`);
    });

    requestAnimationFrame(() => {
      revealItems.forEach((item) => {
        if (isInView(item)) {
          item.classList.add('is-visible');
          return;
        }

        observer.observe(item);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <DigiSideRail />

      <main className="site-main">
        <section className="hero section-band" id="home">
          <div className="hero-inner content-wrap">
            <a className="wordmark" href="#home" aria-label="DigiGraphics home">
              Digi.Graphics
            </a>

            <div className="corner-mark" aria-hidden="true">
              <i />
              <span />
            </div>

            <div className="hero-copy" data-animate="fade-right">
              <div className="google-rating" aria-label="Google rating 4.5 out of 5">
                <span className="google-word" aria-hidden="true">
                  <b className="g-blue">G</b>
                  <b className="g-red">o</b>
                  <b className="g-yellow">o</b>
                  <b className="g-blue">g</b>
                  <b className="g-green">l</b>
                  <b className="g-red">e</b>
                </span>
                <strong>4.5/5</strong>
                <small>
                  Reviews
                  <span className="rating-stars" aria-hidden="true">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </span>
                  (30K + Reviews)
                </small>
              </div>
              <h1>
                Creative <span>Digital Marketing</span> Solutions for Modern Brands
              </h1>
              <p className="hero-lede">
                Grow your business with strategic digital marketing, premium branding, engaging visuals, and
                performance-focused creative solutions.
              </p>
              <div className="hero-actions">
                <a className="btn btn-secondary" href="#services">
                  Explore Works
                </a>
                <a className="btn btn-primary" href="#contact">
                  Contact US
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-art hero-scene" aria-label="Animated digital marketing illustration" data-animate="fade-left">
              <img className="hero-image" src={assetUrl('assets/hero-art.png')} alt="" />
              <span className="graph-line-eraser" aria-hidden="true" />
              <svg className="graph-line-motion" viewBox="0 0 190 70" aria-hidden="true" focusable="false">
                <path className="graph-line graph-line-muted" d="M4 44 L27 42 L49 46 L70 32 L91 42 L113 35 L137 29 L162 23 L186 18" />
                <path className="graph-line graph-line-gold" d="M4 51 L27 36 L49 40 L70 23 L91 38 L113 28 L137 18 L162 12 L186 5" />
                <path className="graph-line graph-line-blue" d="M4 59 L27 53 L49 55 L70 43 L91 49 L113 38 L137 31 L162 23 L186 14" />
              </svg>
              <div className="post-tile-covers" aria-hidden="true">
                {Array.from({ length: 12 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>
              <span className="post-cover post-cover-large" aria-hidden="true" />
              <span className="post-cover post-cover-phone" aria-hidden="true" />
              <span className="post-cover post-cover-mid" aria-hidden="true" />
              <div className="post-hit-grid" aria-hidden="true">
                {Array.from({ length: 12 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>
              <span className="post-hover-zone post-hover-large" aria-hidden="true" />
              <span className="post-hover-zone post-hover-phone" aria-hidden="true" />
              <span className="post-hover-zone post-hover-mid" aria-hidden="true" />
              <img className="typing-hand" src={assetUrl('assets/typing-hand.png')} alt="" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="services section-band" id="services">
          <div className="content-wrap">
            <div data-animate="fade-up">
              <SectionHeading
              kicker="Our Premium Services"
              title="Our Premium Services"
              text="Complete creative and digital marketing solutions designed to elevate your brand, generate quality leads, and grow your business digitally."
              />
            </div>
            <div className="services-grid">
              {services.map(({ title, text, Icon, tone }) => (
                <article className={`service-card tone-${tone}`} key={title} data-animate="zoom">
                  <div className="icon-box">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-band" id="about">
          <div className="content-wrap about-layout">
            <div className="about-copy" data-animate="fade-right">
              <h2>
                About
                <span>DigiGraphics</span>
              </h2>
              <p>
                DigiGraphics is a creative digital marketing and graphic designing agency offering complete marketing
                solutions under one brand. We help businesses grow through innovative digital marketing strategies,
                premium creative designs, content creation, and data-driven campaigns that deliver measurable results.
              </p>
              <p>
                Our expertise includes social media management, Meta Ads management, content creation, reel production,
                branding, campaign strategy, lead generation, UI/UX design, and modern business growth solutions.
              </p>
              <div className="about-features">
                {aboutFeatures.map(({ title, text, Icon }) => (
                  <article className="about-feature" key={title} data-animate="fade-up">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="about-art" aria-hidden="true" data-animate="fade-left">
              <img src={assetUrl('assets/about-visual.png')} alt="" />
            </div>
          </div>
        </section>

        <section className="vision section-band" id="vision">
          <div className="content-wrap">
            <div data-animate="fade-up">
              <SectionHeading
              kicker="Mission & Vision"
              title="Our Mission & Vision"
              text="Empowering businesses through creativity, strategy, innovation, and performance-driven digital solutions."
              />
            </div>
            <div className="vision-grid">
              <article className="statement-card" data-animate="fade-right">
                <div className="statement-icon">
                  <TrendingUp aria-hidden="true" />
                </div>
                <h3>Driving Brands Toward Digital Growth</h3>
                <p>
                  Our mission is to help businesses establish a powerful presence through innovative marketing,
                  premium design, and performance-focused campaigns.
                </p>
              </article>
              <article className="statement-card" data-animate="fade-left">
                <div className="statement-icon">
                  <Rocket aria-hidden="true" />
                </div>
                <h3>Building the Future of Digital Marketing</h3>
                <p>
                  Our vision is to become a trusted, result-driven digital marketing partner recognized for creative
                  excellence and sustainable business growth.
                </p>
              </article>
            </div>
            <div className="pillar-row">
              {pillars.map(({ title, text, Icon }) => (
                <div className="pillar" key={title} data-animate="fade-up">
                  <Icon aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story section-band" id="story">
          <div className="content-wrap story-grid">
            <div className="story-copy" data-animate="fade-right">
              <h2>
                The <span>DigiGraphics</span> Growth Story
              </h2>
              <h3>Our Creative Journey of Growth & Innovation</h3>
              <p>
                DigiGraphics began with a simple vision: to help brands grow through creativity, strategy, and impactful
                digital experiences. Over the years, we evolved from a creative graphic design studio into a complete
                digital growth partner delivering branding, social media management, performance marketing, UI/UX
                solutions, and lead generation systems for modern businesses.
              </p>
              <div className="story-capabilities">
                {storyCapabilities.map(({ title, text, Icon }) => (
                  <article key={title} data-animate="fade-up">
                    <Icon aria-hidden="true" />
                    <div>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="timeline" aria-label="DigiGraphics growth timeline">
              {milestones.map(({ year, title, text, Icon }) => (
                <article className="timeline-item" key={year} data-animate="fade-left">
                  <div className="timeline-year">{year}</div>
                  <div className="timeline-card">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-band" id="contact">
          <div className="content-wrap contact-panel" data-animate="fade-up">
            <div>
              <p className="eyebrow">Start a Project</p>
              <h2>Ready to turn your brand into a stronger digital presence?</h2>
              <p>
                Share your business goal and DigiGraphics can shape the content, campaigns, and design system around it.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:hello@digigraphics.in">
                <Mail aria-hidden="true" />
                hello@digigraphics.in
              </a>
              <a className="btn btn-secondary" href="tel:+919999999999">
                <Phone aria-hidden="true" />
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="content-wrap footer-inner">
          <a className="brand" href="#home" aria-label="DigiGraphics home">
            <span>DG</span>
            DigiGraphics
          </a>
          <div className="footer-meta">
            <span>
              <MapPin aria-hidden="true" />
              Creative digital marketing studio
            </span>
            <a href="#home">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DigiSideRail() {
  return (
    <aside className="side-rail" aria-label="Section shortcuts">
      <a className="rail-logo" href="#home" aria-label="DigiGraphics home">
        DG
      </a>
      <div className="rail-links">
        <span className="rail-indicator" aria-hidden="true" />
        {railItems.map(({ label, href, Icon }) => (
          <a href={href} key={href} aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  );
}

type SectionHeadingProps = {
  kicker: string;
  title: string;
  text: string;
};

function SectionHeading({ kicker, title, text }: SectionHeadingProps) {
  const heading =
    title === 'Our Premium Services' ? (
      <>
        Our Premium <span>Services</span>
      </>
    ) : title === 'Our Mission & Vision' ? (
      <>
        Our <span>Mission & Vision</span>
      </>
    ) : (
      title
    );

  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;
