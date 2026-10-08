"use client";

import Image from "next/image";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Our Cars", href: "#car" },
  { label: "Departments", href: "#departments" },
  { label: "Insights", href: "#insights" },
  { label: "Gallery", href: "#gallery" },
  { label: "Achievements", href: "#achievements" },
  { label: "Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Carbon fiber accent */}
      <div className="h-1 gradient-red" />

      <div className="bg-vulcan-dark">
        <div className="container-racing py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Tagline */}
            <div>
              <button
                onClick={() => scrollTo("#hero")}
                aria-label="Back to top"
                className="flex items-center gap-3 mb-4 group"
              >
                <div className="relative w-32 h-12 overflow-hidden">
                  <Image
                    src="/vulcan-logo.png"
                    alt="Vulcan Racing"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </button>
              <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-xs">
                Engineering Speed. Building Legacies. The official Formula Student
                team of DSATM, Bangalore.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/vulcanracing_/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-[#E4405F] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/vulcan-racing-dsatm/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-[#0077B5] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-racing text-xs font-bold tracking-[0.2em] text-white/60 uppercase mb-6">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-sm text-white/30 hover:text-racing-red transition-colors py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter / Contact */}
            <div>
              <h4 className="font-racing text-xs font-bold tracking-[0.2em] text-white/60 uppercase mb-6">
                Stay Updated
              </h4>
              <p className="text-white/30 text-sm mb-4">
                Follow us on social media for the latest updates from the workshop and track.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-secondary !py-2 !px-4 !text-[0.6rem]"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.05] py-6">
          <div className="container-racing flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-racing tracking-wider">
              © {new Date().getFullYear()} VULCAN RACING — DSATM, BANGALORE
            </p>
            <p className="text-white/10 text-xs">
              Engineering Speed. Building Legacies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
