import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, ArrowRight, Monitor, PenTool, LayoutTemplate, MapPin } from "lucide-react";
import logoIconPath from "@assets/zendar-digital-logo-icon.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIconPath} alt="Zendar Digital" className="h-8 w-auto" />
            <span className="font-bold text-xl tracking-tight">Zendar Digital</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#approach" className="hover:text-primary transition-colors">Our Approach</a>
            <Button asChild variant="default" className="rounded-none font-semibold">
              <a href="#contact">Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(${import.meta.env.BASE_URL}hero-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-white">
                Look the part.<br />
                <span className="text-primary">Online.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed font-medium">
                We help small businesses show up professionally in the digital world. No agency fluff, just sharp execution.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg font-bold group">
                  <a href="#contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-black">
                  <a href="#services">See Services</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What We Do</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">Targeted digital solutions that establish credibility and drive results.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Website Design",
                  description: "Custom websites that make your business look credible and professional from day one.",
                  icon: Monitor
                },
                {
                  title: "Logo & Branding",
                  description: "Distinctive visual identities that help your business stand out and be remembered.",
                  icon: PenTool
                },
                {
                  title: "Social Media Graphics",
                  description: "Professional graphics that keep your social presence consistent and on-brand.",
                  icon: LayoutTemplate
                },
                {
                  title: "Google Business Profile Setup",
                  description: "Get found locally with a complete, optimized Google Business Profile that builds trust.",
                  icon: MapPin
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="group bg-card p-8 md:p-12 border border-border border-l-[6px] border-l-primary hover:border-r-primary transition-all duration-300 flex flex-col"
                >
                  <service.icon className="h-12 w-12 text-primary mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-24 md:py-32 border-y border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                  Our Approach
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                  We work hands-on with small businesses that want to look credible online without the agency price tag. Honest work, clear communication, and designs that actually serve your business goals.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
                  No fluff. No templates. Just professional digital work that helps you show up with confidence.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-square bg-secondary rounded-none flex items-center justify-center p-12 relative"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="text-center text-secondary-foreground z-10">
                  <div className="text-8xl font-black mb-4 tracking-tighter">100%</div>
                  <div className="text-2xl font-medium tracking-wide uppercase">Focused on Your Success</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to upgrade your presence?</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Send us a message and let's talk about how we can help your business.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-bold mb-6">Reach out directly</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Prefer to chat on WhatsApp? Click the button below to start a conversation with our team right away.
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto h-14 bg-[#25D366] hover:bg-[#1da851] text-white rounded-none font-bold text-lg border-none"
                  >
                    <a href="https://wa.me/17845262562" target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6 bg-white/5 p-8 border border-white/10">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="rounded-none bg-white/5 border-white/20 text-white h-12 focus-visible:ring-primary focus-visible:border-primary" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="rounded-none bg-white/5 border-white/20 text-white h-12 focus-visible:ring-primary focus-visible:border-primary" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        className="rounded-none bg-white/5 border-white/20 text-white min-h-[120px] focus-visible:ring-primary focus-visible:border-primary resize-none" 
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-none h-14 font-bold text-lg bg-primary text-white hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium">© 2026 Zendar Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
