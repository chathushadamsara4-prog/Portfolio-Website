import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  { degree: "BA (Hons) Creative Multimedia", institution: "NIBM" },
  { degree: "Digital Photography Certification", institution: "Sri Lanka" },
  { degree: "German A1 & A2", institution: "Goethe Institute" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-sans">Education</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Qualifications</h2>
        </div>

        <div className="space-y-0">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border"
            >
              <span className="text-lg font-serif text-foreground">{item.degree}</span>
              <span className="text-sm text-muted-foreground tracking-wide font-sans mt-1 md:mt-0">
                {item.institution}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
