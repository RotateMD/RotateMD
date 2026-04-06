export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 py-10 sm:py-12 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-accent" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white/80">Rotate</span>
              <span className="text-blue-light/80 ml-1">MD</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="mailto:rotatemdapp@gmail.com" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} RotateMD. All rights reserved. Built for medical students, by medical students.
        </div>
      </div>
    </footer>
  );
}
