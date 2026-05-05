import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import jayPhoto from "@assets/jaygumbs_1778012127296.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main>
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
            >
              About
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <div className="overflow-hidden">
                <img
                  src={jayPhoto}
                  alt="Jay Gumbs"
                  className="float-left mr-8 mb-4 w-[220px] md:w-[280px] lg:w-[320px] h-auto rounded-sm border-4 border-primary"
                />

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    I'm Jay, and I handle every project personally at Zendar Digital. When you work with me, you're working directly with the person doing the work — no handoffs to junior designers, no account managers in the middle, just straightforward collaboration from start to finish.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    I run Zendar Digital without the overhead of a traditional agency, which means you get professional work at honest prices. No project managers, no committees, no confusion. I've been building online since 2007, and I bring that experience to every website, logo, and digital asset I create.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    Small businesses deserve to look credible online without paying agency rates or dealing with agency bureaucracy. That's what Zendar Digital is here for — professional digital work, direct communication, and prices that make sense.
                  </p>
                </div>
              </div>

              <div className="clear-both pt-10">
                <Button asChild size="lg" className="rounded-none h-14 px-8 text-lg font-bold group">
                  <a href="/#contact">
                    Work With Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
