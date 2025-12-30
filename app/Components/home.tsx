import { ArrowBigDown } from "lucide-react";
import Image from "next/image";

export default function BridalHomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Mobile Image - Shows only on small screens */}
      <div className="relative h-full w-full sm:hidden">
        <Image
          src="/6.jpg" // Your mobile image
          alt="Elegant bridal makeup - mobile"
          fill
          priority
          className="object-left object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Desktop Image - Shows on medium+ screens */}
      <div className="relative hidden h-full w-full sm:block">
        <Image
          src="/9.jpg"
          alt="Elegant bridal makeup - desktop"
          fill
          priority
          className="object-cover lg:object-center"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 1400px"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* Content - Moved more to the right */}
      <div className="absolute inset-0 z-10 flex items-end pb-20 lg:items-center lg:pb-0">
        <div className="container mx-auto px-6">
          <div className="max-w-xl ml-12 lg:ml-23">
            {/* Elegant Subtitle */}
            <p className="mb-3 text-sm font-medium tracking-widest text-rose-100/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              • BRIDAL ARTISTRY •
            </p>

            {/* Main Heading */}
            <h1 className="mb-4 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              Timeless Beauty for Your
              <span className="block font-serif italic text-rose-50 mt-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
                Special Day
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg text-rose-50/80 md:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Creating breathtaking bridal looks with precision and passion.
              Your vision, brought to life with expert makeup artistry.
            </p>

            {/* CTA Button - Already has shadow from bg */}
            <button className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm px-8 py-3 text-white transition-all hover:bg-white/20 shadow-lg">
              <span className="relative z-10 flex items-center gap-2 text-sm font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                Begin Your Journey
                <ArrowBigDown className="size-4" />
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-rose-400/30 to-pink-400/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Span - Radiant effect */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-48 bg-linear-to-t from-black via-black/60 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute right-6 top-1/3 z-10 hidden lg:block">
        <div className="flex flex-col items-end gap-4 text-right">
          <div className="h-px w-16 bg-rose-200/50" />
          <p className="text-sm font-light text-rose-100/70 tracking-widest">
            EST. 2018
          </p>
        </div>
      </div>
    </section>
  );
}
