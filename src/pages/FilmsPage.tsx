import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Film {
  title: string;
  youtubeId: string;
  thumbnail: string;
}

const films: Film[] = [
  {
    title: "Colombo International Theatre Festival 2025 Official Video",
    youtubeId: "2ExniAjoNX4",
    thumbnail: "https://img.youtube.com/vi/2ExniAjoNX4/maxresdefault.jpg",
  },
  {
    title: "Feather Short Film Directed by M.Sharaf",
    youtubeId: "jGBBrhVMzrE",
    thumbnail: "https://img.youtube.com/vi/jGBBrhVMzrE/maxresdefault.jpg",
  },
  {
    title: "Re Creation of Fight Club Movie Scene",
    youtubeId: "Xd8UZZSpSqA",
    thumbnail: "https://img.youtube.com/vi/Xd8UZZSpSqA/maxresdefault.jpg",
  },
  {
    title: "MAHAAN Tamil Film Re Creation",
    youtubeId: "px28_X6V99A",
    thumbnail: "https://img.youtube.com/vi/px28_X6V99A/maxresdefault.jpg",
  },
  {
    title: "Re Creation of Zero Dark Thirsty Movie",
    youtubeId: "O0he8_aXFUE",
    thumbnail: "https://img.youtube.com/vi/O0he8_aXFUE/maxresdefault.jpg",
  },
  {
    title: "Apita Koheda Valentine",
    youtubeId: "rWsfGgM2zqo",
    thumbnail: "https://img.youtube.com/vi/rWsfGgM2zqo/maxresdefault.jpg",
  },
  {
    title: "Re Creation of John Wick Movie Scene",
    youtubeId: "2VB5UhEp2NI",
    thumbnail: "https://img.youtube.com/vi/2VB5UhEp2NI/maxresdefault.jpg",
  },
  {
    title: "Snap Re make of a Short Film",   
    youtubeId: "34qiHB5cYCU",
    thumbnail: "https://img.youtube.com/vi/34qiHB5cYCU/maxresdefault.jpg",
  },
];


const FilmsPage = () => {
  const navigate = useNavigate();
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center h-16 md:h-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm tracking-[0.15em] uppercase"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-sans">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Film & Cinematography
            </h1>
            <p className="text-sm text-muted-foreground mt-4 tracking-wide max-w-lg mx-auto">
              A collection of short films & cinematic works showcasing storytelling through motion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {films.map((film, idx) => (
              <motion.div
                key={film.youtubeId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {playingId === film.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${film.youtubeId}?autoplay=1`}
                      title={film.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setPlayingId(film.youtubeId)}
                    >
                      <img
                        src={film.thumbnail}
                        alt={film.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-all duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play size={28} className="text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1 font-sans">Film</p>
                  <p className="text-lg font-serif text-foreground">{film.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FilmsPage;
