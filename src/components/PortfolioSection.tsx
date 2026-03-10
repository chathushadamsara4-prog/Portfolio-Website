import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import FilmSection from "./FilmSection";

import galleryFood1 from "@/assets/gallery-food-1.jpg";
import galleryFood2 from "@/assets/gallery-food-2.jpg";
import galleryFood3 from "@/assets/gallery-food-3.jpg";
import galleryFood4 from "@/assets/gallery-food-4.jpg";
import galleryFood5 from "@/assets/gallery-food-5.jpg";
import galleryFood6 from "@/assets/gallery-food-6.jpg";
import galleryFood7 from "@/assets/gallery-food-7.jpg";
import galleryFood8 from "@/assets/gallery-food-8.jpg";
import galleryFood9 from "@/assets/gallery-food-9.jpg";
import galleryFood10 from "@/assets/gallery-food-10.jpg";
import galleryProduct1 from "@/assets/gallery-product-1.jpg";
import galleryProduct2 from "@/assets/gallery-product-2.jpg";
import galleryProduct3 from "@/assets/gallery-product-3.jpg";
import galleryProduct4 from "@/assets/gallery-product-4.jpg";
import galleryProduct5 from "@/assets/gallery-product-5.jpg";
import galleryProduct6 from "@/assets/gallery-product-6.jpg";
import galleryProduct7 from "@/assets/gallery-product-7.jpg";
import galleryProduct8 from "@/assets/gallery-product-8.jpg";
import galleryProduct9 from "@/assets/gallery-product-9.jpg";
import galleryProduct10 from "@/assets/gallery-product-10.jpg";
import galleryDramatic1 from "@/assets/gallery-dramatic-1.jpg";
import galleryDramatic2 from "@/assets/gallery-dramatic-2.jpg";
import galleryDramatic3 from "@/assets/gallery-dramatic-3.jpg";
import galleryDramatic4 from "@/assets/gallery-dramatic-4.jpg";
import galleryDramatic5 from "@/assets/gallery-dramatic-5.jpg";
import galleryDramatic6 from "@/assets/gallery-dramatic-6.jpg";
import galleryDramatic7 from "@/assets/gallery-dramatic-7.jpg";
import galleryHospitality1 from "@/assets/gallery-hospitality-1.jpg";
import galleryHospitality2 from "@/assets/gallery-hospitality-2.jpg";
import galleryHospitality3 from "@/assets/gallery-hospitality-3.jpg";
import galleryHospitality4 from "@/assets/gallery-hospitality-4.jpg";
import galleryBridal1 from "@/assets/gallery-bridal-1.jpg";
import galleryBridal2 from "@/assets/gallery-bridal-2.jpg";
import galleryBridal3 from "@/assets/gallery-bridal-3.jpg";
import galleryBridal4 from "@/assets/gallery-bridal-4.jpg";
import galleryBridal5 from "@/assets/gallery-bridal-5.jpg";
import galleryBridal6 from "@/assets/gallery-bridal-6.jpg";
import galleryBridal7 from "@/assets/gallery-bridal-7.jpg";
import galleryBridal8 from "@/assets/gallery-bridal-8.jpg";
import galleryBridal9 from "@/assets/gallery-bridal-9.jpg";
import galleryBridal10 from "@/assets/gallery-bridal-10.jpg";
import galleryWedding1 from "@/assets/gallery-wedding-1.jpg";
import galleryWedding2 from "@/assets/gallery-wedding-2.jpg";
import galleryWedding3 from "@/assets/gallery-wedding-3.jpg";
import galleryWedding4 from "@/assets/gallery-wedding-4.jpg";
import gallerySpecial1 from "@/assets/gallery-special-1.jpg";
import gallerySpecial2 from "@/assets/gallery-special-2.jpg";
import gallerySpecial3 from "@/assets/gallery-special-3.jpg";
import gallerySpecial4 from "@/assets/gallery-special-4.jpg";
import gallerySpecial5 from "@/assets/gallery-special-5.jpg";
import gallerySpecial6 from "@/assets/gallery-special-6.jpg";
import gallerySpecial7 from "@/assets/gallery-special-7.jpg";
import gallerySpecial8 from "@/assets/gallery-special-8.jpg";
import gallerySpecial9 from "@/assets/gallery-special-9.jpg";
import gallerySpecial10 from "@/assets/gallery-special-10.jpg";

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  wide?: boolean;
}

interface GallerySection {
  title: string;
  subtitle: string;
  items: GalleryItem[];
}

const gallerySections: GallerySection[] = [
  {
    title: "FOOD PHOTOGRAPHY",
    subtitle: "Capturing culinary art with vibrant colors & textures",
    items: [
      { src: galleryFood1, title: "Sprinkle Delight", category: "Food" },
      { src: galleryFood2, title: "Donut Platter", category: "Food", wide: true },
      { src: galleryFood3, title: "Chocolate Sprinkles", category: "Food" },
      { src: galleryFood4, title: "Sweet Collection", category: "Food", wide: true },
      { src: galleryFood5, title: "Colorful Donuts", category: "Food", wide: true },
      { src: galleryFood6, title: "Traditional Plating", category: "Food" },
      { src: galleryFood7, title: "Banana Leaf Cuisine", category: "Food", wide: true },
      { src: galleryFood8, title: "Sri Lankan Rice", category: "Food" },
      { src: galleryFood9, title: "Dinner Setting", category: "Food" },
      { src: galleryFood10, title: "Moody Plating", category: "Food", wide: true },
    ],
  },
  {
    title: "PRODUCT SHOOT",
    subtitle: "Elegant product photography with dramatic lighting & styling",
    items: [
      { src: galleryProduct1, title: "Avon Far Away", category: "Product Shoot" },
      { src: galleryProduct2, title: "Perfume Elegance", category: "Product Shoot", wide: true },
      { src: galleryProduct3, title: "Warm Tones", category: "Product Shoot" },
      { src: galleryProduct4, title: "Desert Glow", category: "Product Shoot", wide: true },
      { src: galleryProduct5, title: "Sand & Stone", category: "Product Shoot" },
      { src: galleryProduct6, title: "Garnier Vitamin C", category: "Product Shoot" },
      { src: galleryProduct7, title: "Face Wash Duo", category: "Product Shoot", wide: true },
      { src: galleryProduct8, title: "Fresh Droplets", category: "Product Shoot" },
      { src: galleryProduct9, title: "Bright Complete", category: "Product Shoot" },
      { src: galleryProduct10, title: "Citrus Splash", category: "Product Shoot", wide: true },
    ],
  },
  {
    title: "DRAMATIC",
    subtitle: "Bold cinematic portraits with dramatic lighting & emotion",
    items: [
      { src: galleryDramatic1, title: "Backstage Duo", category: "Dramatic" },
      { src: galleryDramatic2, title: "The Gentleman", category: "Dramatic", wide: true },
      { src: galleryDramatic3, title: "Leaning In", category: "Dramatic" },
      { src: galleryDramatic4, title: "Expressive Act", category: "Dramatic" },
      { src: galleryDramatic5, title: "Graceful Pose", category: "Dramatic", wide: true },
      { src: galleryDramatic6, title: "The Look", category: "Dramatic" },
      { src: galleryDramatic7, title: "Red Intensity", category: "Dramatic", wide: true },
    ],
  },
  {
    title: "HOSPITALITY",
    subtitle: "Intimate & artistic hospitality photography with cinematic mood",
    items: [
      { src: galleryHospitality1, title: "Golden Hour Bath", category: "Hospitality", wide: true },
      { src: galleryHospitality2, title: "Monochrome Gaze", category: "Hospitality" },
      { src: galleryHospitality3, title: "Sepia Intimacy", category: "Hospitality" },
      { src: galleryHospitality4, title: "Candlelit Evening", category: "Hospitality", wide: true },
    ],
  },
  {
    title: "BRIDAL",
    subtitle: "Elegant bridal portraits capturing timeless beauty & tradition",
    items: [
      { src: galleryBridal1, title: "Royal Red Bride", category: "Bridal" },
      { src: galleryBridal2, title: "Bridal Elegance", category: "Bridal", wide: true },
      { src: galleryBridal3, title: "Blue Gown Grace", category: "Bridal" },
      { src: galleryBridal4, title: "Midnight Sparkle", category: "Bridal" },
      { src: galleryBridal5, title: "Crimson Beauty", category: "Bridal", wide: true },
      { src: galleryBridal6, title: "Golden Gaze", category: "Bridal" },
      { src: galleryBridal7, title: "Mirror Reflection", category: "Bridal" },
      { src: galleryBridal8, title: "Traditional Grace", category: "Bridal", wide: true },
      { src: galleryBridal9, title: "Bouquet Portrait", category: "Bridal" },
      { src: galleryBridal10, title: "Bridal Glow", category: "Bridal", wide: true },
    ],
  },
  {
    title: "WEDDING",
    subtitle: "Capturing the magic of love stories & celebrations",
    items: [
      { src: galleryWedding1, title: "Evening Vows", category: "Wedding", wide: true },
      { src: galleryWedding2, title: "Bridal Grace", category: "Wedding" },
      { src: galleryWedding3, title: "Together Forever", category: "Wedding" },
      { src: galleryWedding4, title: "Sunset Romance", category: "Wedding", wide: true },
    ],
  },
  {
    title: "OTHER SPECIAL EVENTS",
    subtitle: "Cultural shows, parties, convocations & creative concepts",
    items: [
      { src: gallerySpecial1, title: "Nurawee Live Concert", category: "Special Event" },
      { src: gallerySpecial2, title: "Stage Performance", category: "Special Event", wide: true },
      { src: gallerySpecial3, title: "Gangarama Drummers", category: "Special Event", wide: true },
      { src: gallerySpecial4, title: "Backstage Setup", category: "Special Event" },
      { src: gallerySpecial5, title: "DJ Atmosphere", category: "Special Event" },
      { src: gallerySpecial6, title: "Live Vocals", category: "Special Event" },
      { src: gallerySpecial7, title: "Concert Energy", category: "Special Event" },
      { src: gallerySpecial8, title: "Traditional Performance", category: "Special Event", wide: true },
      { src: gallerySpecial9, title: "Sundown Party", category: "Special Event", wide: true },
      { src: gallerySpecial10, title: "Sundown Banner", category: "Special Event", wide: true },
    ],
  },
];

const GalleryCard = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`relative group cursor-pointer overflow-hidden ${
        item.wide ? "md:col-span-2" : ""
      }`}
      onClick={onClick}
    >
      <div className={`${item.category === "Bridal" ? "aspect-[3/4]" : "aspect-[16/10]"} overflow-hidden`}>
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end p-6 md:p-8">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1 font-sans">{item.category}</p>
          <p className="text-lg md:text-xl font-serif text-foreground">{item.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="work" className="py-24 md:py-36 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-sans">Portfolio</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground">SELECTED WORKS</h2>
          </div>

          <FilmSection />

          {gallerySections.map((section, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{section.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 tracking-wide">{section.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                {section.items.map((item, i) => (
                  <GalleryCard key={i} item={item} onClick={() => setLightbox(item.src)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </>
  );
};

export default PortfolioSection;
