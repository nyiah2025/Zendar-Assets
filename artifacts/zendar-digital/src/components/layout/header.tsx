import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIconPath from "@assets/zendar-digital-logo-icon.png";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Approach", href: "/#approach" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function close() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={logoIconPath} alt="Zendar Digital" className="h-8 w-auto" />
          <span className="font-bold text-xl tracking-tight">Zendar Digital</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <Button asChild variant="default" className="rounded-none font-semibold">
            <a href="/#contact">Get Started</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="py-3 px-2 text-lg font-medium border-b border-border/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button asChild variant="default" className="w-full rounded-none font-semibold h-12 text-base">
                  <a href="/#contact" onClick={close}>Get Started</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
