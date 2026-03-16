import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FilmSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mb-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            FILM & CINEMATOGRAPHY WORKS
          </h3>
          <p className="text-sm text-muted-foreground mt-2 tracking-wide">
            Fat Crab Restaurant Promotion Video
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden bg-muted group">
            {isPlaying ? (
              <video
                src="/videos/featured-film.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <video
                  src="/videos/featured-film.mp4"
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-all duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={36} className="text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <button
                          onClick={() => navigate("/films")}
                          className="px-10 py-3 border border-primary text-primary text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          More Videos
              </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FilmSection;
