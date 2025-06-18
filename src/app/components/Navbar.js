// src/components/Header.jsx
export default function Navbar() {
  return (
    <header className="fixed w-full z-50 px-6 py-4  flex justify-center">
      <nav className="flex items-center gap-8 bg-[#0e0e0e] rounded-full px-6 py-2 border border-gray-700/50 shadow-inner shadow-purple-500/10">
       
        <ul className="flex gap-6 items-center">
          {["Home", "Work", "About", "Blog", "More"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`relative px-2 py-1 font-medium text-sm text-gray-300 transition duration-300 hover:text-white ${
                  item === "Home" ? "text-white" : ""
                }`}
              >
                {item}
                {item === "Home" && (
                  <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 h-1 w-3/4 rounded-full bg-purple-500" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
