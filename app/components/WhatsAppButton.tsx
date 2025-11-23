"use client";

export default function WhatsAppButton() {
  const whatsappNumber = "2348147836943"; // Your WhatsApp number with country code (no + or spaces)
  const defaultMessage = "Hello! I found your portfolio and would like to get in touch.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl md:text-4xl" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </button>
  );
}
