// components/WhatsAppButton.jsx
import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "+94776103470"; // Replace with your number
  const message = "Hello! I'm interested in your bridal makeup services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <div className="relative h-14 w-14 md:h-16 md:w-16 animate-pulse">
          <Image
            src="/whatsapp-icon1.png"
            alt="WhatsApp"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 56px, 64px"
          />
        </div>
      </Link>
    </div>
  );
}
