import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-linear-to-r from-rose-900/30 to-gray-900 p-12 text-center">
          <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Schedule a complimentary consultation to discuss your vision and
            create your perfect bridal look
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-rose-600 px-10 py-3 font-medium text-white transition-all hover:bg-rose-700 hover:shadow-lg"
            >
              Book Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-gray-600 bg-transparent px-10 py-3 font-medium text-white transition-all hover:border-gray-500 hover:bg-white/5"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
