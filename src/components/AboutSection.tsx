import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-sans">About</p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-foreground">Visual Storyteller</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-light">
          I'm Mohomed Sharaf — creative photographer and cinematographer from Sri Lanka. 
          I craft cinematic visuals with emotion, light, and intentional storytelling. 
          My work spans portraits, events, bridal photography, and film-style motion sequences.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
