export default function Footer() {
    return (
      <footer className="w-full bg-gray-100 text-gray-600 text-sm py-10 px-12">
        <div className="max-w-screen-xl mx-auto flex justify-between flex-wrap gap-10">
          
          {/* Linker Bereich */}
          <div>
            <a href="mailto:hi@cursor.com" className="hover:text-gray-900 transition duration-200">
              hi@cursor.com <span className="inline-block ml-1">↗</span>
            </a>
            <div className="flex space-x-4 mt-5">
              <a href="#">X</a>
              <a href="#">GitHub</a>
              <a href="#">Discord</a>
              <a href="#">YouTube</a>
            </div>
            <p className="mt-6 text-xs">© 2025 Made by Anysphere</p>
          </div>
  
          {/* Mittlerer Bereich */}
          <div className="grid grid-cols-4 gap-x-12 gap-y-8">
            <div>
              <h5 className="font-semibold mb-2">Product</h5>
              <ul className="space-y-1">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Students</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Resources</h5>
              <ul className="space-y-1">
                <li><a href="#">Docs</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-1">
                <li><a href="#">Anysphere</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Legal</h5>
              <ul className="space-y-1">
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
  
          {/* Rechter Bereich */}
          <div className="flex flex-col space-y-4">
            <select className="border rounded px-2 py-1 text-gray-700">
              <option>English</option>
              <option>Deutsch</option>
            </select>
            <div className="flex space-x-3">
              <button>🌞</button>
              <button>🌜</button>
            </div>
            <span className="border px-2 py-1 rounded text-xs text-center">
              SOC 2 Certified
            </span>
          </div>
  
        </div>
      </footer>
    );
  }
  