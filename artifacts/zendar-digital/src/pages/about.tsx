import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import jayPhoto from "@assets/jaygumbs_1778012127296.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />

      <main>
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-16"
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About</h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12 max-w-5xl"
            >
              <motion.div variants={fadeInUp} className="flex-shrink-0 w-full max-w-[300px] mx-auto md:mx-0 md:w-[280px] lg:w-[320px]">
                <img
                  src={jayPhoto}
                  alt="Jay Gumbs"
                  className="w-full h-auto rounded-sm border-4 border-primary"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="flex-1 space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  I'm Jay, and I handle every project personally at Zendar Digital. When you work with me, you're working directly with the person doing the work — no handoffs to junior designers, no account managers in the middle, just straightforward collaboration from start to finish.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  I run Zendar Digital without the overhead of a traditional agency, which means you get professional work at honest prices. No project managers, no committees, no confusion. I've been building online since 2007, and I bring that experience to every website, logo, and digital asset I create.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Small businesses deserve to look credible online without paying agency rates or dealing with agency bureaucracy. That's what Zendar Digital is here for — professional digital work, direct communication, and prices that make sense.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
