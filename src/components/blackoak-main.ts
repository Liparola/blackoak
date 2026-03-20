import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

<<<<<<< HEAD
// @ts-ignore
import PureCounter from '@srexi/purecounterjs';


export interface Client {
  id: string;
  name: string;
  industry: string;
  service: string;
  icon: string;
  isInternational?: boolean;
}

const CLIENTS: Client[] = [
  {
    id: "1",
    name: "Du Preez Liebetrau & Co",
    industry: "Asset Management",
    service: "Strategic Client",
    icon: "corporate_fare",
  },
  {
    id: "2",
    name: "Sekhametsi Investment Consortium Ltd",
    industry: "Investment",
    service: "Governance Advisory",
    icon: "account_balance",
  },
  {
    id: "3",
    name: "Sekhametsi Property (Pty) Ltd",
    industry: "Real Estate",
    service: "Portfolio Strategy",
    icon: "domain",
  },
  {
    id: "4",
    name: "Thaba Bosiu Risk Solutions",
    industry: "Risk Management",
    service: "Compliance Counsel",
    icon: "verified_user",
  },
  {
    id: "5",
    name: "J & G Transport (Lesotho) (Pty) Ltd",
    industry: "International",
    service: "Global Infrastructure",
    icon: "local_shipping",
    isInternational: true,
  },
  {
    id: "6",
    name: "Tripharm Manufacturing (Pty) Ltd",
    industry: "Pharmaceuticals",
    service: "Operational Excellence",
    icon: "precision_manufacturing",
  },
  {
    id: "7",
    name: "TC Direct (RF) (Pty) Ltd",
    industry: "International",
    service: "Cross-Border Advisory",
    icon: "hub",
    isInternational: true,
  },
  {
    id: "8",
    name: "Agape Legal Solutions",
    industry: "Legal Services",
    service: "Strategic Counsel",
    icon: "gavel",
  },
  {
    id: "9",
    name: "Lefielo Cleaning Services (Pty) Ltd",
    industry: "Facility Management",
    service: "Institutional Support",
    icon: "clean_hands",
  },
  {
    id: "10",
    name: "Barcelos (Maputsoe) (Pty) Ltd",
    industry: "Food & Hospitality",
    service: "Operational Strategy",
    icon: "restaurant",
  },
];

@customElement('blackoak-main')
export class BlackoakMain extends LitElement {

  
  createRenderRoot() {
    // Disable Shadow DOM so Bootstrap & main.css apply globally
    return this;
  }

  firstUpdated() {
    this.initLibraries();
  }

  updated() {
    this.initLibraries();
  }

 initLibraries() {
    try {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
      const bootstrap = (window as any).bootstrap;
      if (bootstrap) {
        const collapseList = this.querySelectorAll('.collapse');
        collapseList.forEach((el: any) => {
          new bootstrap.Collapse(el, { toggle: false });
        });
      }
    } catch (error) {
      console.warn('Library initialization failed:', error);
    }
  }

  /** Renders client testimonial cards with Material Symbols */
  renderClientCard(client: Client) {
    const internationalBadge = client.isInternational 
      ? html`<span class="text-[10px] font-bold tracking-widest text-primary uppercase border-b border-primary/30 pb-0.5">International</span>`
      : html`<span class="text-[9px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">${client.industry}</span>`;

    const cardClass = client.isInternational 
      ? "group relative bg-[#151515] border border-primary/10 p-8 transition-all duration-500 hover:border-primary/50 overflow-hidden"
      : "group relative bg-surface border border-white/5 p-8 transition-all duration-500 hover:border-primary/30";

    const iconBgClass = client.isInternational 
      ? "p-3 bg-primary/5 rounded-sm group-hover:bg-primary/20 transition-colors"
      : "p-3 bg-white/5 rounded-sm group-hover:bg-primary/10 transition-colors";

    const iconClass = client.isInternational 
      ? "material-symbols-outlined text-primary"
      : "material-symbols-outlined text-primary/60 group-hover:text-primary";

    return html`
      <article class="${cardClass}">
        ${client.isInternational ? html`<div class="absolute -top-1 -right-1 w-20 h-20 bg-primary/5 blur-3xl rounded-full"></div>` : ''}
        <div class="flex flex-col h-full">
          <div class="flex justify-between items-start mb-12">
            <div class="${iconBgClass}">
              <span class="${iconClass}">${client.icon}</span>
            </div>
            ${internationalBadge}
          </div>
          <h3 class="text-3xl font-headline text-on-surface mb-6 group-hover:italic transition-all duration-500 ${client.isInternational ? 'text-small-caps' : ''}">
            ${client.name}
          </h3>
          <div class="mt-auto pt-8 border-t ${client.isInternational ? 'border-primary/10' : 'border-white/5'} flex items-center justify-between">
            <span class="text-[10px] uppercase tracking-widest ${client.isInternational ? 'text-primary/80 font-semibold' : 'text-primary/60'}">
              ${client.service}
            </span>
            <span class="material-symbols-outlined ${client.isInternational ? 'text-primary/40' : 'text-primary/20'} group-hover:translate-x-1 transition-transform">
              ${client.isInternational ? 'public' : 'arrow_forward'}
            </span>
          </div>
        </div>
      </article>
    `;
  }

  /** Renders architectural stats cards */
  renderStat(value: string, label: string) {
    return html`
      <div class="text-center md:text-left">
        <span class="block text-5xl font-headline italic text-primary mb-4">${value}</span>
        <p class="text-[11px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">${label}</p>
      </div>
    `;
  }

  render() {
    return html`
      <style>
          .hero {
  padding: 0;
}

.hero .carousel {
  width: 100%;
  min-height: 70vh;
  padding: 0;
  margin: 0;
  background-color: var(--background-color);
  position: relative;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero .carousel-item {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden; 
}

.hero .carousel-item:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 30%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .carousel-item::before {
  content: "";
  background-color: color-mix(in srgb, var(--background-color), transparent 30%);
  position: absolute;
  inset: 0;
}

.hero .carousel-container {
  position: absolute;
 
  inset: 90px 64px 64px 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
}

.hero h2 {
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
  animation: fadeInDown 1s both;
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 30px;
  }
}

.hero p {
  animation: fadeInDown 1s both 0.2s;
}

@media (min-width: 1024px) {

  .hero h2,
  .hero p {
    max-width: 60%;
  }
}

.hero .btn-get-started {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 32px;
  border-radius: 4px;
  transition: 0.5s;
  margin: 10px;
  animation: fadeInUp 1s both 0.4s;
}

.hero .btn-get-started:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.hero .carousel-control-prev,
.hero .carousel-control-next {
  width: 10%;
  transition: 0.3s;
  opacity: 0.5;
}

.hero .carousel-control-prev:focus,
.hero .carousel-control-next:focus {
  opacity: 0.5;
}

.hero .carousel-control-prev:hover,
.hero .carousel-control-next:hover {
  opacity: 0.9;
}

@media (min-width: 1024px) {

  .hero .carousel-control-prev,
  .hero .carousel-control-next {
    width: 5%;
  }
}

.hero .carousel-control-next-icon,
.hero .carousel-control-prev-icon {
  background: none;
  font-size: 32px;
  line-height: 1;
}

.hero .carousel-indicators {
  list-style: none;
}

.hero .carousel-indicators li {
  cursor: pointer;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>

  
<main class="main pt-24 pb-32 bg-background text-on-surface">
=======
@customElement('blackoak-main')
export class BlackoakMain extends LitElement {
  // We disable shadow DOM so it inherits global CSS cleanly
  createRenderRoot() {
    return this;
  }

  toggleFaq(e: Event) {
    const target = e.currentTarget as HTMLElement;
    const faqItem = target.closest('.faq-item');
    if (faqItem) {
      faqItem.classList.toggle('faq-active');
    }
  }

  render() {
    return html`
<main class="main">
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4

    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <div class="carousel-item active">
          <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt="">
          <div class="carousel-container">
<<<<<<< HEAD
            <h2>Welcome to Black Oak Consultancy</h2>
            <p>Your Strategic Partner in Corporate Excellence<br>Streamlining Governance, Securing Growth</p>
            <a href="#services" class="btn btn-light btn-lg px-4">Learn More</a>
=======
            <h2>Welcome to Black Oak Consultancy<br></h2>
            <p class="lead mb-4 text-white">Your Strategic Partner in Corporate Excellence<br>Streamlining Governance, Securing Growth</p>
      <a href="#services" class="btn btn-primary btn-lg px-4">Learn More</a>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
          </div>
        </div><!-- End Carousel Item -->

        <div class="carousel-item">
          <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="">
          <div class="carousel-container">
<<<<<<< HEAD
            
            <p>From compliance to contracts, governance to IP — we manage complexity so you can focus on growth</p>
=======
            <h2 class="display-4 mb-3">Why Choose Us?</h2>
            <p class="lead mb-4">From compliance to contracts, governance to IP — we manage complexity so you can focus on growth</p>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
            <a href="#services" class="btn btn-outline-light btn-lg px-4">Explore Our Services</a>
          </div>
        </div><!-- End Carousel Item -->

        <div class="carousel-item">
          <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="">
          <div class="carousel-container">
<<<<<<< HEAD
            <h2>Why Choose Us?</h2>
            <p>✓ Integrated, end-to-end solutions<br>
        ✓ Industry expertise across sectors<br>
        ✓ Technology-driven tracking & reporting<br>
        ✓ Scalable support for startups to enterprises
</p>
=======
            <h2>Temporibus autem quibusdam</h2>
            <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
            <a href="#featured-services" class="btn-get-started">Get Started</a>
          </div>
        </div><!-- End Carousel Item -->

<<<<<<< HEAD
        <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  </section><!-- /Hero Section -->
=======
        <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

        <ol class="carousel-indicators"></ol>

      </div>

    </section><!-- /Hero Section -->
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
    
    <!-- About Section -->
<section id="about" class="about section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <span class="subtitle">About</span>
    <h2>About Us</h2>
    <p>Your Strategic Governance Partner</p>
  </div><!-- End Section Title -->

  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row align-items-center">
      
      <!-- Text Content -->
      <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
        <div class="content">
          <p class="lead">At Black Oak Consultancy we provide comprehensive corporate solutions that blend legal precision with strategic insight. We help businesses navigate regulatory landscapes, protect intellectual assets, and establish robust governance frameworks.</p>
          
<<<<<<< HEAD
      
            <div class="stats-wrapper mt-4">
=======
          <div class="stats-wrapper mt-4">
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
            <div class="stat-item d-flex flex-column align-items-center text-center mb-4">
              <span class="number purecounter h2 mb-1 fw-bold" data-purecounter-start="0" data-purecounter-end="9" data-purecounter-duration="2">0</span>
              <span class="label fw-semibold text-muted">Years of Experience</span>
            </div>
            
<<<<<<< HEAD
            <div class="stat-item text-center">
              <span class="number h4 fw-bold text-primary mb-2 d-block">120</span>
              <span class="label fw-semibold text-muted d-block">Clients Served</span>
              
            </div>

=======
            <div class="stat-item d-flex flex-column align-items-center text-center mb-4">
              <span class="number purecounter h2 mb-1 fw-bold" data-purecounter-start="0" data-purecounter-end="120" data-purecounter-duration="2">0</span>
              <span class="label fw-semibold text-muted">Clients Served</span>
            </div>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
            
            <div class="stat-item text-center">
              <span class="number h4 fw-bold text-primary mb-2 d-block">4</span>
              <span class="label fw-semibold text-muted d-block">Industries Covered</span>
              <div class="industries-list small text-dark mt-2">
                Financial Services • Manufacturing<br>
                Investment & Asset Management • Property Development
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Content - MOVED HERE -->
      <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
        <div class="image-wrapper">
          <img src="assets/img/about/about-1.webp" alt="About us" class="img-fluid">
          <div class="floating-element">
            <div class="quote-content">
              <blockquote>
                "Governance shouldn't hinder growth — it should enable it."
              </blockquote>
              <cite>— Black Oak Consultancy</cite>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</section><!-- /About Section -->


<!-- Why Choose Us Section -->
<section id="why-us" class="why-us section bg-light">

  <div class="container" data-aos="fade-up">
    
    <div class="section-title text-center mb-5">
      <span class="subtitle">Why Choose Us</span>
      <h2>WHY PARTNER WITH US?</h2>
    </div>

    <div class="row gy-4">

      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="why-box text-center p-4 shadow-sm h-100">
          <i class="bi bi-diagram-3 fs-1 mb-3 text-primary"></i>
          <h5>Integrated Approach</h5>
          <p>Single point of contact for all corporate needs, eliminating departmental silos.
</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="150">
        <div class="why-box text-center p-4 shadow-sm h-100">
          <i class="bi bi-cpu fs-1 mb-3 text-primary"></i>
          <h5>Technology Advantage</h5>
          <p>Access to our proprietary compliance tracking platform and document management system.</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
        <div class="why-box text-center p-4 shadow-sm h-100">
          <i class="bi bi-shield-check fs-1 mb-3 text-primary"></i>
          <h5>Industry Expertise</h5>
          <p>Specialized knowledge across finance, technology, healthcare, manufacturing, and retail sectors.
</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="250">
        <div class="why-box text-center p-4 shadow-sm h-100">
          <i class="bi bi-graph-up-arrow fs-1 mb-3 text-primary"></i>
          <h5>Scalable Solutions</h5>
          <p>Services that grow with your business, from startup to enterprise
</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="250">
        <div class="why-box text-center p-4 shadow-sm h-100">
          <i class="bi bi-graph-up-arrow fs-1 mb-3 text-primary"></i>
          <h5>Proactive Strategy</h5>
          <p>We don't just react—we anticipate regulatory changes and market shifts.
</p>
</div>
</div>

    </div>

  </div>

</section>


   <!-- Services Section -->
<section id="services" class="services section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <span class="subtitle">Services</span>
    <h2>Our Services</h2>
    <p>Corporate Solutions for Modern Businesses</p>
  </div><!-- End Section Title -->

<<<<<<< HEAD
   <div class="container" data-aos="fade-up" data-aos-delay="100">
=======
  <div class="container" data-aos="fade-up" data-aos-delay="100">
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
    <div class="services-showcase mt-5">
      <div class="row">
        <!-- LEFT COLUMN - 3 Services -->
        <div class="col-lg-6">
          <div class="services-list">
            <div class="service-item" data-aos="fade-left" data-aos-delay="100">
              <div class="service-icon">
<<<<<<< HEAD
                <i class="bi bi-shield-check"></i>
=======
                <i class="bi bi-palette"></i>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
              </div>
              <div class="service-content">
                <h4><a href="service-details.html">COMPLIANCE MANAGEMENT</a></h4>
                <p>
                  Regulatory tracking & updates<br>
Risk assessment & mitigation<br>
Audit preparation & support<br>
Policy development
                </p>
              </div>
            </div>

            <div class="service-item" data-aos="fade-left" data-aos-delay="200">
              <div class="service-icon">
<<<<<<< HEAD
                <i class="bi bi-file-earmark-text"></i>
=======
                <i class="bi bi-code-slash"></i>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
              </div>
              <div class="service-content">
                <h4><a href="service-details.html">CORPORATE SECRETARIAL SERVICES</a></h4>
                <p>
                  Company incorporation<br>
Statutory filings & registers<br>
Board meeting support<br>
Shareholder management
                </p>
              </div>
            </div>

            <div class="service-item" data-aos="fade-left" data-aos-delay="300">
              <div class="service-icon">
<<<<<<< HEAD
                <i class="bi bi-people-fill"></i>
=======
                <i class="bi bi-graph-up-arrow"></i>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
              </div>
              <div class="service-content">
                <h4><a href="service-details.html">CORPORATE GOVERNANCE</a></h4>
                <p>
                  Board advisory & training<br>
ESG framework development<br>
Governance policy creation<br>
Stakeholder communication
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN - 3 Services -->
        <div class="col-lg-6">
          <div class="services-list">
            <div class="service-item" data-aos="fade-left" data-aos-delay="100">
              <div class="service-icon">
<<<<<<< HEAD
                <i class="bi bi-lightbulb"></i>
=======
                <i class="bi bi-palette"></i>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
              </div>
              <div class="service-content">
                <h4><a href="service-details.html">INTELLECTUAL PROPERTY MANAGEMENT</a></h4>
                <p>
                  Trademark & patent registration<br>
IP portfolio strategy<br>
Licensing agreements<br>
IP enforcement support
                </p>
              </div>
            </div>

            <div class="service-item" data-aos="fade-left" data-aos-delay="200">
              <div class="service-icon">
<<<<<<< HEAD
                <i class="bi bi-file-text"></i>
=======
                <i class="bi bi-code-slash"></i>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
              </div>
              <div class="service-content">
                <h4><a href="service-details.html">CONTRACTS MANAGEMENT</a></h4>
                <p>
                  Drafting & review<br>
Negotiation support<br>
Lifecycle management<br>
Template creation

                </p>
              </div>
            </div>

            <div class="service-item" data-aos="fade-left" data-aos-delay="300">
              <div class="service-icon">
<<<<<<< HEAD
                <i class="bi bi-briefcase"></i>
=======
                <i class="bi bi-graph-up-arrow"></i>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
              </div>
              <div class="service-content">
                <h4><a href="service-details.html">CONSULTANCY SERVICES</a></h4>
                <p>
                  Operational efficiency review<br>
Regulatory strategy<br>
Growth scaling advisory<br>
Custom solution design

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> <!-- End container for services -->

  <!-- Our Approach Section -->
  <div class="container pt-5 mt-5"> <!-- Added pt-5 and mt-5 to separate it visually -->
    <div class="section-title text-center mb-5">
      <span class="subtitle">Our Approach</span>
      <h2>The Black Oak Consultancy Advantage</h2>
    </div>

    <div class="row g-4">
      <div class="col-lg-3 col-md-6">
        <div class="approach-box text-center p-4 h-100 border rounded-4 shadow-sm hover-lift">
          <i class="bi bi-diagram-3 text-primary fs-1 mb-3"></i>
          <h5 class="fw-bold mb-3">Integrated Solutions</h5>
          <p class="small">Seamless service coordination eliminates silos and reduces overhead.</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="approach-box text-center p-4 h-100 border rounded-4 shadow-sm hover-lift">
          <i class="bi bi-cpu text-primary fs-1 mb-3"></i>
          <h5 class="fw-bold mb-3">Technology-Enabled</h5>
          <p class="small">Real-time tracking, automated reminders, and secure document management.</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="approach-box text-center p-4 h-100 border rounded-4 shadow-sm hover-lift">
          <i class="bi bi-briefcase text-primary fs-1 mb-3"></i>
          <h5 class="fw-bold mb-3">Industry-Specific Expertise</h5>
          <p class="small">Tailored approaches for finance, tech, healthcare, manufacturing, and more.</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="approach-box text-center p-4 h-100 border rounded-4 shadow-sm hover-lift">
          <i class="bi bi-graph-up-arrow text-primary fs-1 mb-3"></i>
          <h5 class="fw-bold mb-3">Scalable Support</h5>
          <p class="small">From startup packages to enterprise-level solutions.</p>
        </div>
      </div>
    </div>
  </div>

</section><!-- /Services Section -->


    <!-- Pricing Section --> 
<section id="pricing" class="pricing section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <span class="subtitle">Pricing</span>
    <h2>Pricing</h2>
    <p>Choose the perfect package for your business - scalable solutions from startup to enterprise</p>
  </div><!-- End Section Title -->

  <div class="container">

    <div class="row gy-4">

      <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
        <div class="pricing-item">
          <h3>Essential Package</h3>
          <p class="description">For startups and small businesses</p>
          <h4><sup>M</sup>499<span> / month</span></h4>
          <a href="#contact" class="cta-btn">Get Started</a>
          <p class="text-center small">Free initial assessment</p>
          <ul>
            <li><i class="bi bi-check"></i> <span>Basic compliance monitoring</span></li>
            <li><i class="bi bi-check"></i> <span>Annual statutory filings</span></li>
            <li><i class="bi bi-check"></i> <span>Standard contract templates</span></li>
            <li><i class="bi bi-check"></i> <span>Quarterly governance check-ins</span></li>
          </ul>
        </div>
      </div><!-- End Pricing Item -->

      <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
        <div class="pricing-item featured">
          <p class="popular">Most Popular</p>
          <h3>Growth Package</h3>
          <p class="description">For scaling businesses</p>
          <h4><sup>M</sup>1,299<span> / month</span></h4>
          <a href="#contact" class="cta-btn">Get Started</a>
          <p class="text-center small">Free initial assessment</p>
          <ul>
            <li><i class="bi bi-check"></i> <span>Full compliance management</span></li>
            <li><i class="bi bi-check"></i> <span>Monthly secretarial support</span></li>
            <li><i class="bi bi-check"></i> <span>IP registration & monitoring</span></li>
            <li><i class="bi bi-check"></i> <span>Contract review (up to 5/month)</span></li>
            <li><i class="bi bi-check"></i> <span>Bi-monthly consultancy</span></li>
            <li><i class="bi bi-check"></i> <span>Technology platform access</span></li>
            
          </ul>
        </div>
      </div><!-- End Pricing Item -->

      <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
        <div class="pricing-item">
          <h3>Enterprise Package</h3>
          <p class="description">For established organizations</p>
          <h4><sup>M</sup>Custom<span> Pricing</span></h4>
          <a href="#contact" class="cta-btn">Request Quote</a>
          <p class="text-center small">Tailored solutions</p>
          <ul>
            <li><i class="bi bi-check"></i> <span>Dedicated account manager</span></li>
            <li><i class="bi bi-check"></i> <span>Comprehensive governance framework</span></li>
            <li><i class="bi bi-check"></i> <span>Full IP portfolio management</span></li>
            <li><i class="bi bi-check"></i> <span>Unlimited contract support</span></li>
            <li><i class="bi bi-check"></i> <span>Strategic consultancy partnership</span></li>
            <li><i class="bi bi-check"></i> <span>Custom reporting & analytics</span></li>
            <li><i class="bi bi-check"></i> <span>Custom pricing</span></li>
          </ul>
        </div>
      </div><!-- End Pricing Item -->

    </div>

<!-- À La Carte Services - 3x2 Grid (2,2,2) -->
<div class="row gy-4 mt-5">
  <div class="col-12">
    <h4 class="text-center mb-4">À La Carte Services</h4>
    
    <!-- Row 1: 3 columns -->
    <div class="row g-3 mb-4">
      <div class="col-md-4 col-sm-6">
        <div class="text-center p-3 border rounded">
          <h6>Compliance Audit</h6>
          <h5>M2,500</h5>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="text-center p-3 border rounded">
          <h6>IP Registration</h6>
          <h5>M800/class</h5>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="text-center p-3 border rounded">
          <h6>Contract Drafting</h6>
          <h5>M650/doc</h5>
        </div>
      </div>
    </div>

    <!-- Row 2: 3 columns -->
    <div class="row g-3">
      <div class="col-md-4 col-sm-6">
        <div class="text-center p-3 border rounded">
          <h6>Governance Assessment</h6>
          <h5>M3,500+</h5>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="text-center p-3 border rounded">
          <h6>Training Workshops</h6>
          <h5>M1,500+/hr</h5>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="text-center p-3 border rounded">
          <h6>Custom Projects</h6>
          <h5>Quoted</h5>
        </div>
      </div>
    </div>

    <div class="text-center mt-4">
      <a href="#contact" class="btn btn-primary">Schedule Free Assessment</a>
    </div>
  </div>
</div>

  </div>

</section><!-- /Pricing Section -->

<!-- FAQ Section --> 
<section id="faq" class="faq section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <span class="subtitle">F.A.Q</span>
    <h2>Frequently Asked Questions</h2>
    <p>Everything you need to know about our corporate services and packages</p>
  </div><!-- End Section Title -->

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row justify-content-center">
      <div class="col-lg-9">

        <div class="faq-wrapper">

          <!-- PROCESS QUESTIONS -->
          <div class="faq-item faq-active" data-aos="fade-up" data-aos-delay="150">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">01</span>
              <h4>How long does onboarding take?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Onboarding is completed within 48 hours. You'll receive portal access, dedicated account manager assignment, and initial compliance health check during this time.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <div class="faq-item" data-aos="fade-up" data-aos-delay="200">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">02</span>
              <h4>What’s included in the free assessment?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>30-minute consultation includes compliance health check, IP portfolio review, governance structure evaluation, and preliminary recommendations tailored to your business.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <!-- PRICING QUESTIONS -->
          <div class="faq-item" data-aos="fade-up" data-aos-delay="250">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">03</span>
              <h4>How is monthly billing handled?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Billing is monthly via bank transfer or EFT. First month prorated based on onboarding date. Annual prepayment discount available for Essential and Growth packages.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">04</span>
              <h4>Can I upgrade/downgrade packages?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Yes, packages can be adjusted anytime with 14 days notice. Pro-rated credits applied to next month. Enterprise clients have custom upgrade paths with dedicated manager.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <!-- SERVICES QUESTIONS -->
          <div class="faq-item" data-aos="fade-up" data-aos-delay="350">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">05</span>
              <h4>What services are in Essential package?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Essential includes basic compliance monitoring, annual statutory filings, standard contract templates, and quarterly governance check-ins. Perfect for startups.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">06</span>
              <h4>Do you handle Lesotho-specific compliance?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Yes, we specialize in Lesotho regulatory requirements including CIPC filings, Companies Act compliance, tax authority submissions, and local statutory obligations.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <div class="faq-item" data-aos="fade-up" data-aos-delay="450">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">07</span>
              <h4>What's your response time for urgent issues?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Compliance emergencies: 2 hours. Contract review: 24 hours. Statutory filings: 48 hours. Enterprise clients receive priority 24/7 phone support.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

          <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-header" @click=${this.toggleFaq}>
              <span class="faq-number">08</span>
              <h4>Do you serve international clients?</h4>
              <div class="faq-toggle">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
              </div>
            </div>
            <div class="faq-content">
              <div class="content-inner">
                <p>Yes, we support Lesotho-registered companies operating internationally with cross-border compliance, IP protection in multiple jurisdictions, and multinational contract management.</p>
              </div>
            </div>
          </div><!-- End FAQ Item -->

        </div>

      </div>
    </div>

  </div>

</section><!-- /FAQ Section -->


    <!-- Testimonials Section -->
<section id="testimonials" class="testimonials section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <span class="subtitle">Testimonials</span>
    <h2>What They Say About Us</h2>
  </div><!-- End Section Title -->

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="swiper init-swiper" data-speed="600" data-delay="5000" data-breakpoints='{"320": {"slidesPerView": 1, "spaceBetween": 40}, "1200": {"slidesPerView": 3, "spaceBetween": 40}}'>
      <script type="application/json" class="swiper-config">
        {
          "loop": true,
          "speed": 600,
          "autoplay": {
            "delay": 5000
          },
          "slidesPerView": 1,
          "spaceBetween": 40,
          "pagination": {
            "el": ".swiper-pagination",
            "type": "bullets",
            "clickable": true
          },
          "breakpoints": {
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 40
            },
            "1200": {
              "slidesPerView": 3,
              "spaceBetween": 40
            }
          }
        }
      </script>
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <div class="testimonial-item">
            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              <span>Their compliance framework helped us secure Series B funding in record time.</span>
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/person/bloackoak.jpeg" class="testimonial-img" alt="">
            <h3>FinTech Startup</h3>
            
          </div>
        </div><!-- End testimonial item -->

        <div class="swiper-slide">
          <div class="testimonial-item">
            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              <span>IP strategy protected our innovations across 3 continents.</span>
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/person/bloackoak.jpeg" class="testimonial-img" alt="">
            <h3> Manufacturing Company</h3>
            
          </div>
        </div><!-- End testimonial item -->

        <div class="swiper-slide">
          <div class="testimonial-item">
            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              <span> Governance restructuring improved our board efficiency by 40%.</span>
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
            <img src="assets/img/person/bloackoak.jpeg" class="testimonial-img" alt="">
            <h3> Healthcare Provider</h3>
            
          </div>
        </div><!-- End testimonial item -->

      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>

</section><!-- /Testimonials Section -->

<<<<<<< HEAD
<!-- Call To Action Section -->
    <section id="call-to-action" class="call-to-action section dark-background">

      <img src="/assets/img/cta-bg.jpg" alt="">

      <div class="container">
        <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-xl-10">
            <div class="text-center">
              <h3>Call To Action</h3>
              <p>"Let’s streamline your success." <br>
Schedule a consultation today!
</p>
              <a class="cta-btn" href="#">Call To Action</a>
            </div>
          </div>
        </div>
      </div>

    </section><!-- /Call To Action Section -->


  
  
   <!-- Hero Section -->
        <section class="relative px-6 py-12 md:py-24 overflow-hidden hero-pattern">
          <div class="max-w-5xl mx-auto relative z-10">
            <div class="inline-flex items-center gap-2 mb-8">
              <div class="h-[1px] w-8 bg-primary"></div>
              <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Established Portfolio</span>
            </div>
            <h2 class="text-5xl md:text-7xl font-headline leading-[1.1] mb-8 max-w-3xl">
              Architecting the <span class="italic text-primary">Future</span> of African Enterprise.
            </h2>
            
              <div class="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-primary/20 to-transparent mt-4"></div>
            </div>
          </div>
          <div class="absolute -right-20 top-0 w-96 h-96 border border-primary/5 rounded-full pointer-events-none"></div>
          <div class="absolute -right-10 top-10 w-96 h-96 border border-primary/5 rounded-full pointer-events-none"></div>
        </section>

        <!-- Clients Section -->
        <section id="clients" class="bg-black text-white py-24">
  <div class="px-6 max-w-7xl mx-auto">
            
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            ${CLIENTS.map(client => this.renderClientCard(client))}
          </div>
        </section>
          

        <!-- Stats Section -->
        <section class="border-y border-white/5 py-24 bg-surface/30">
          <div class="max-w-5xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              ${this.renderStat('15+', 'Years of Strategic Advisory')}
              ${this.renderStat('Pan-African', 'Cross-Border Influence')}
              ${this.renderStat('Institutional', 'Governance Frameworks')}
            </div>
          </div>
        </section>


    
    
   <!-- Testimonials Section -->
<section id="calendar" class="testimonials section">

  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <span class="subtitle">Calendar</span>
    <h2>Social Media Calendar</h2>
=======
    <!-- Testimonials Section -->
<section id="calendar" class="testimonials section light-background">


  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <h2>Social Media Calendar</h2>
    <div><span>Weekly Content</span> <span class="description-title">Schedule</span></div>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
  </div><!-- End Section Title -->

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <!-- Calendar Box Container -->
    <div class="row justify-content-center">
      <div class="col-lg-8 col-xl-6">
        <div class="calendar-box p-3 p-md-4 border rounded-3 shadow-sm bg-white d-flex flex-column" style="border-color: #e9ecef !important; min-height: 400px;">
          
<div class="container" data-aos="fade-up" data-aos-delay="100">

    
          <div class="swiper init-swiper flex-grow-1 d-flex flex-column">
            <script type="application/json" class="swiper-config">
              
              {
                            "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "1200": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                }
              }
            }
            </script>
             <div class="swiper-wrapper flex-grow-1">

              <div class="swiper-slide flex-grow-1 d-flex flex-column justify-content-center">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center">
                    <h3 class="text-primary mb-2 fw-bold fs-4">Monday</h3>
                    <h4 class="mb-3 fs-5">Compliance Tips</h4>
                    <p class="flex-grow-1 mb-0 small">
                      New regulation alerts, compliance checklists, and audit preparation tips to keep your audience informed.
                    </p>
                  </div>
                </div>
              </div>

              <div class="swiper-slide h-100">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center">
                    <h3 class="text-primary mb-2 fw-bold fs-4">Tuesday</h3>
                    <h4 class="mb-3 fs-4">Governance Best Practices</h4>
                    <p class="flex-grow-1 mb-0 small">
                      Director training tips, ESG framework basics, and meeting efficiency hacks for boardroom excellence.
                    </p>
                  </div>
                </div>
              </div>

             <div class="swiper-slide flex-grow-1 d-flex flex-column justify-content-center">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center px-3">
                    <h3 class="text-primary mb-2 fw-bold fs-4">Wednesday</h3>
                    <h4 class="mb-3 fs-5">IP Protection Insights</h4>
                    <p class="flex-grow-1 mb-0 small">
                      Trademark tips, patent strategies, and trade secret protection best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div class="swiper-slide h-100">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center">
                    <h3 class="text-primary mb-2 fw-bold fs-4">Thursday</h3>
                    <h4 class="mb-3 fs-4">Client Success Stories</h4>
                    <p class="flex-grow-1 mb-0 small">
                      Case studies, testimonials, and before/after metrics showcasing real results.
                    </p>
                  </div>
                </div>
              </div>

              <div class="swiper-slide h-100">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center">
                   <h3 class="text-primary mb-2 fw-bold fs-4">Friday</h3>
                    <h4 class="mb-3 fs-4">Industry News Roundup</h4>
                    <p class="flex-grow-1 mb-0 small">
                      Weekly digest with key headlines, market analysis, and business implications.
                    </p>
                  </div>
                </div>
              </div>

              <div class="swiper-slide h-100">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center">
                   <h3 class="text-primary mb-2 fw-bold fs-4">Saturday</h3>
                    <h4 class="mb-3 fs-4">Rest & Engage</h4>
                    <p class="flex-grow-1 mb-0 small">
                      Light engagement: Repost top content, stories highlights, audience polls.
                    </p>
                  </div>
                </div>
              </div>

              <div class="swiper-slide h-100">
                <div class="testimonial-wrap h-100">
                  <div class="testimonial-item h-100 d-flex flex-column justify-content-center">
                                        <h3 class="text-primary mb-3 fw-bold">Sunday</h3>
                    <h4 class="mb-4">Thought Leadership</h4>
                    
                    <p class="flex-grow-1">
                      
                      Long-form articles, expert opinions, employee spotlights, and company culture content.
                    
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="swiper-pagination mt-4"></div>
          </div>

        </div>
      </div>
    </div>

  </div>

</section><!-- /Testimonials Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <span class="subtitle">Contact</span>
        <h2>Contact Us</h2>
             </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-stretch">
          <div class="col-lg-7 order-lg-1 order-2" data-aos="fade-right" data-aos-delay="200">
            <div class="contact-form-container">
              <div class="form-intro">
                <h2>Schedule a Consultation</h2>
                <p>Share your requirements and we will respond promptly.</p>
              </div>

              <form action="forms/contact.php" method="post" class="php-email-form contact-form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-field">
                      <input type="text" name="name" class="form-input" id="userName" placeholder="Your Name" required="">
                      <label for="userName" class="field-label">Name</label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-field">
                      <input type="email" class="form-input" name="email" id="userEmail" placeholder="Your Email" required="">
                      <label for="userEmail" class="field-label">Email</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-field">
                      <input type="tel" class="form-input" name="phone" id="userPhone" placeholder="Your Phone">
                      <label for="userPhone" class="field-label">Phone</label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-field">
                      <input type="text" class="form-input" name="subject" id="messageSubject" placeholder="Subject" required="">
                      <label for="messageSubject" class="field-label">Subject</label>
                    </div>
                  </div>
                </div>

                <div class="form-field message-field">
                  <textarea class="form-input message-input" name="message" id="userMessage" rows="5" placeholder="Describe your compliance, governance, or consultancy requirements" required=""></textarea>
                  <label for="userMessage" class="field-label">Message</label>
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <button type="submit" class="send-button">
                  Send Message
                  <span class="button-arrow">→</span>
                </button>
              </form>
            </div>
          </div>

          <div class="col-lg-5 order-lg-2 order-1" data-aos="fade-left" data-aos-delay="300">
            <div class="contact-sidebar">
              <div class="contact-header">
                <h3>Contact Black Oak Consultancy</h3>
<p>We provide integrated compliance, governance, intellectual property, and contract management solutions tailored to modern businesses.</p>
              </div>

              <div class="contact-methods">
                <div class="contact-method" data-aos="fade-in" data-aos-delay="350">
                  <div class="contact-icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div class="contact-details">
                    <span class="method-label">Address</span>
                    <p>Moshoeshoe 2, Khasu’s Flats<br>Maseru, Lesotho</p>
                  </div>
                </div>

                <div class="contact-method" data-aos="fade-in" data-aos-delay="400">
                  <div class="contact-icon">
                    <i class="bi bi-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <span class="method-label">Email</span>
                    <p>thato@blackoak.co.ls<br>info@blackoak.co.ls</p>
                  </div>
                </div>

                <div class="contact-method" data-aos="fade-in" data-aos-delay="450">
                  <div class="contact-icon">
                    <i class="bi bi-telephone"></i>
                  </div>
                  <div class="contact-details">
                    <span class="method-label">Phone</span>
                    <p>+266 58416725<br>+266 63876283</p>
                  </div>
                </div>

                <div class="contact-method" data-aos="fade-in" data-aos-delay="500">
                  <div class="contact-icon">
                    <i class="bi bi-clock"></i>
                  </div>
                  <div class="contact-details">
                    <span class="method-label">Hours</span>
                   <p>Monday - Friday: 8:00 AM - 17:00 PM (CAT)<br>Closed on Weekends</p>
                  </div>
                </div>
              </div>

              <div class="connect-section" data-aos="fade-up" data-aos-delay="550">
                <span class="connect-label">Follow Us</span>
                <div class="social-links">
                  <a href="#" class="social-link">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /Contact Section -->

<<<<<<< HEAD

        
  </main>
    `;
  }

=======
  </main>
    `;
  }
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
}
