import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-gray-400 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 font-semibold">
            Sai Manikanta Madhavarapu
          </span>
          . All rights reserved.
        </p>

        {/* Scroll to Top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:shadow-pink-500/40 transition-transform transform hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};
