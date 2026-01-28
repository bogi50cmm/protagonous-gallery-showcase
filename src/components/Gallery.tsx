import { useState } from "react";
import { X } from "lucide-react";

// Import gallery images
import beforeAfter1 from "@/assets/before-after-1.jpg";
import galleryFloor1 from "@/assets/gallery-floor-1.jpg";
import galleryFloor2 from "@/assets/gallery-floor-2.jpg";
import galleryInsulation1 from "@/assets/gallery-insulation-1.jpg";
import galleryRoof1 from "@/assets/gallery-roof-1.jpg";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";
import beforeFloor from "@/assets/before-floor.jpg";
import afterFloor from "@/assets/after-floor.jpg";
import beforeGutter from "@/assets/before-gutter.jpg";
import afterGutter from "@/assets/after-gutter.jpg";

interface BeforeAfterItem {
  before: string;
  after: string;
  title: string;
}

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

const beforeAfterItems: BeforeAfterItem[] = [
  {
    before: beforeRoof,
    after: afterRoof,
    title: "Hidroizolacija krova"
  },
  {
    before: beforeFloor,
    after: afterFloor,
    title: "Industrijski pod"
  },
  {
    before: beforeGutter,
    after: afterGutter,
    title: "Oluk i spojevi"
  }
];

const galleryItems: GalleryItem[] = [
  { src: beforeAfter1, title: "Pre i posle - Krov", category: "Krovovi" },
  { src: galleryFloor1, title: "Industrijski pod - Garaža", category: "Podovi" },
  { src: galleryFloor2, title: "Industrijski pod - Skladište", category: "Podovi" },
  { src: galleryInsulation1, title: "Termoizolacija zida", category: "Izolacija" },
  { src: galleryRoof1, title: "Ravni krov - Završen", category: "Krovovi" },
  { src: afterRoof, title: "Hidroizolacija krova", category: "Krovovi" },
];

const BeforeAfterSlider = ({ item }: { item: BeforeAfterItem }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl font-semibold text-center">{item.title}</h3>
      <div
        className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* Before Image */}
        <img
          src={item.before}
          alt="Pre"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* After Image with clip */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img
            src={item.after}
            alt="Posle"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground text-xs font-bold">↔</span>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          Pre
        </div>
        <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-foreground">
          Posle
        </div>
      </div>
    </div>
  );
};

const GalleryGrid = ({ items }: { items: GalleryItem[] }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("Sve");

  const categories = ["Sve", ...new Set(items.map(item => item.category))];
  const filteredItems = filter === "Sve" ? items : items.filter(item => item.category === filter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground/70 hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer card-hover"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-display font-semibold">{item.title}</p>
              <span className="text-xs text-primary">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display font-semibold text-lg">{selectedImage.title}</p>
            <span className="text-sm text-primary">{selectedImage.category}</span>
          </div>
        </div>
      )}
    </>
  );
};

export { BeforeAfterSlider, GalleryGrid, beforeAfterItems, galleryItems };
