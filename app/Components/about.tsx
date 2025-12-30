import { CheckCircle, Heart, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-light tracking-tight md:text-7xl">
              Our <span className="italic text-rose-400">Story</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300 md:text-2xl">
              Passionate artistry meets timeless elegance in every bridal
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-8 text-3xl font-light text-white md:text-4xl">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded in 2018, we are dedicated to creating unforgettable
                  bridal experiences through exceptional makeup artistry. Our
                  mission is to enhance your natural beauty and ensure you feel
                  confident, radiant, and completely yourself on your wedding
                  day.
                </p>
                <p>
                  {`We believe that every bride deserves personalized attention 
                  and a customized approach to beauty. Our team of certified 
                  artists combines technical expertise with artistic vision 
                  to deliver flawless results that last from "I do" to the 
                  final dance.`}
                </p>
                <p>
                  {`With over 200 weddings and countless happy brides, we've 
                  perfected the art of creating looks that are both timeless 
                  and modern, elegant and authentic.`}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-light text-rose-400">
                Why Choose Us
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-900/30">
                      <CheckCircle className="h-5 w-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              The principles that guide every brushstroke and every consultation
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8  lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-900/50 p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-900/20">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20  bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light text-rose-400 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "Certified Professionals",
    description:
      "All artists are professionally trained and certified in bridal makeup techniques.",
  },
  {
    title: "Premium Products",
    description:
      "We use only high-quality, long-wear, and skin-friendly products.",
  },
  {
    title: "Customized Approach",
    description:
      "Every look is tailored to your features, style, and wedding theme.",
  },
  {
    title: "Stress-Free Experience",
    description:
      "We handle all details so you can relax and enjoy your special day.",
  },
];

const values = [
  {
    icon: <Heart className="h-8 w-8 text-rose-400" />,
    title: "Passion",
    description: "Love for beauty and dedication to every bride",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-rose-400" />,
    title: "Excellence",
    description: "Commitment to flawless execution and results",
  },
  {
    icon: <Shield className="h-8 w-8 text-rose-400" />,
    title: "Trust",
    description: "Building lasting relationships through reliability",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-rose-400" />,
    title: "Precision",
    description: "Attention to every detail and perfect finish",
  },
];

const stats = [
  { value: "200+", label: "Weddings" },
  { value: "5", label: "Certified Artists" },
  { value: "6", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
];
