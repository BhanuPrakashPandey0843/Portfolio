// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl font-semibold">Naimur Reza</h1>
        <p className="text-gray-400 mt-4">Full Stack Developer</p>
        <a
          href="#contact"
          className="bg-primary px-6 py-2 rounded-md mt-6 inline-block font-semibold hover:bg-yellow-500">
          Contact Me
        </a>
      </div>
    </section>
  )
}
