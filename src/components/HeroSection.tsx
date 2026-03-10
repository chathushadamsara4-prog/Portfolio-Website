import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={profileImg}
          alt="Mohomed Sharaf - Photographer & Cinematographer"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4 font-sans">
            Photographer · Cinematographer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.9] mb-6 text-foreground">
            MOHOMED
            <br />
            SHARAF
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mb-8 font-sans font-light leading-relaxed">
            Capturing cinematic moments with emotion & depth
          </p>

          <div className="flex gap-4">
            <a
              href="#work"
              className="px-8 py-3 border border-primary text-primary text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary/80 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
