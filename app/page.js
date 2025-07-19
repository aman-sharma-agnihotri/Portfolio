import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aman Sharma | Portfolio</title>
      </Head>

      {/* NavBar */}
      <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white fixed w-full z-10 shadow-lg backdrop-blur-lg bg-opacity-80">
        <div className="container mx-auto flex justify-between items-center px-5 py-3">
          <h1 className="font-extrabold text-xl tracking-tight drop-shadow hover:text-yellow-300 transition-colors">Aman Sharma</h1>
          <div className="space-x-5 text-base font-medium flex justify-between items-center">
            <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
            <a href="#education" className="hover:text-yellow-300 transition-colors">Education</a>
            <a href="#skills" className="hover:text-yellow-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-yellow-300 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-yellow-300 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
            <a href="/Resume.pdf" download className="hover:text-yellow-300 transition-colors hover:border-yellow-300 flex gap-1"><img className="w-6" src="images/download.png" alt="download" />Resume</a>
            <span><a href="https://github.com/aman-sharma-agnihotri" target="_blank" className="hover:text-yellow-300 transition-colors   hover:border-yellow-300 flex gap-1"><img src="images/github.svg" alt="github" />GitHub</a></span>
            
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-purple-200 min-h-screen flex flex-col justify-center items-center text-center pt-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
          background: "radial-gradient(ellipse at 80% 20%, #f472b6 15%, transparent 60%), radial-gradient(ellipse at 10% 80%, #a78bfa 15%, transparent 70%)"
        }} />
        <img
          src="/images/profile.png"
          alt="Aman Sharma"
          className="w-40 h-40 rounded-full shadow-2xl border-4 border-pink-300 object-cover mb-6 bg-gradient-to-br from-purple-300 to-pink-200"
          style={{ boxShadow: "0 8px 32px rgba(85,0,163,0.11)" }}
        />
        <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 animate-pulse drop-shadow-lg">
          Hi, I’m Aman Sharma
        </h1>
        <p className="text-2xl mt-5 text-gray-700 font-medium drop-shadow">MERN Developer | IT Undergrad @ UIET, PU</p>
       <div className="flex items-center justify-center gap-2 mt-8 mb-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-md"> <a
          href="/Resume.pdf"
          download
          className=""
        >
          Download Resume
        </a>
        <img className="w-7" src="images/download.png" alt="download" />
        </div>
      </section>

    
      <section
  id="education"
  className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 w-full text-center py-15"
>
  <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
    Academic Journey
  </h2>
  <div className="relative w-full max-w-xl mx-auto px-6">
    {/* Vertical timeline line */}
    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-300 to-indigo-200 opacity-60" />
    <div className="flex flex-col items-center relative z-10">
      {/* 10th Point */}
      <div className="flex items-center w-full mb-12">
        <div className="w-1/2 text-right pr-6">
          <div className="font-bold text-lg text-purple-700">Class 10<sup>th</sup></div>
          <div className="text-gray-600">Shivalik Public School, Dobi,<br />Rampur Bushahr, Shimla, H.P.<br />Year: 2019<br />Score: 94.85%<br />Board: HPBoSE</div>
        </div>
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 border-4 border-white shadow-xl animate-bounce" />
        </div>
        <div className="w-1/2" />
      </div>
      {/* 12th Point */}
      <div className="flex items-center w-full mb-12">
        <div className="w-1/2" />
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-indigo-400 border-4 border-white shadow-xl animate-bounce" />
        </div>
        <div className="w-1/2 text-left pl-6">
          <div className="font-bold text-lg text-pink-700">Class 12<sup>th</sup></div>
          <div className="text-gray-600">DAV SJVN Public School, Duttnagar,<br />Rampur Bushahr, Shimla, H.P.<br />Year: 2021<br />Score: 90.20%<br />Board: CBSE</div>
        </div>
      </div>
      {/* College Point */}
      <div className="flex items-center w-full mb-12">
        <div className="w-1/2 text-right pr-6">
          <div className="font-bold text-lg text-indigo-700">BE (IT)</div>
          <div className="text-gray-600">University Institute of Engineering and Technology,<br />Panjab University SSGRC, Hoshiarpur, P.B.<br />Batch: 2022–2026<br />CGPA: 8.47 (upto 5<sup>th</sup> semester)</div>
        </div>
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 border-4 border-white shadow-xl animate-bounce" />
        </div>
        <div className="w-1/2" />
      </div>
    </div>
  </div>
</section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100 text-center py-15"
      >
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">Skills and Tools</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
          {[
           "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js","Express.js","MongoDB",  "Git", "GitHub", "VSCode", "Postman", "Vercel", "MERN Stack"
          ].map(skill => (
            <span
              key={skill}
              className="bg-white shadow-lg px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 hover:text-purple-900 transition-colors duration-300 outline outline-1 outline-purple-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white text-center py-20">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div className="border border-pink-200 bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 backdrop-blur-md">
            <h3 className="font-bold text-xl text-purple-600 mb-2">Netflix UI Clone</h3>
            <p className="text-gray-700 text-base mb-3">Pixel-perfect clone of Netflix India page using HTML/CSS.</p>
            <div className="space-x-3 mt-2">
              <a href="#" className="text-pink-600 font-bold underline hover:text-pink-800 transition">Live</a>
              <a href="#" className="text-purple-600 font-bold underline hover:text-purple-800 transition">Code</a>
            </div>
          </div>
          <div className="border border-purple-200 bg-gradient-to-br from-white via-fuchsia-50 to-purple-50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 backdrop-blur-md">
            <h3 className="font-bold text-xl text-purple-600 mb-2">URL Shortener</h3>
            <p className="text-gray-700 text-base mb-3">Next.js app to shorten URLs with MongoDB backend.</p>
            <div className="space-x-3 mt-2">
              <a href="#" className="text-pink-600 font-bold underline hover:text-pink-800 transition">Live</a>
              <a href="#" className="text-purple-600 font-bold underline hover:text-purple-800 transition">Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-fuchsia-100 to-indigo-100 text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
          Certificates
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2 border border-purple-100 bg-white bg-opacity-80 backdrop-blur-lg"
            >
              <img src={`/images/certificate${i}.jpg`} alt={`Certificate ${i}`} className="w-full object-cover h-56"/>
              <p className="text-center bg-gradient-to-r from-white to-purple-50 py-3 text-purple-700 text-lg font-semibold">
                Certificate {i}
              </p>
            </div>
          ))}
        </div>
      </section>

{/* About */}
<section id="about" className="min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-90 text-center py-12">
        <div className="backdrop-blur-xl rounded-2xl shadow-xl px-8 py-10">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">About Me</h2>
          <p className="max-w-full text-xl text-gray-700">
          Hi, I’m Aman Sharma, a dedicated and curious full-stack web developer specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js. I'm currently pursuing a Bachelor of Engineering in Information Technology (Class of 2026) at UIET, Panjab University SSG Regional Centre, Hoshiarpur.

My journey into web development began with a fascination for how websites work behind the scenes. Since then, I’ve been building everything from responsive front-end interfaces to dynamic back-end APIs — constantly pushing myself to learn and improve. Whether it's designing sleek UI components or setting up efficient server-side logic, I enjoy the entire process of bringing ideas to life through code.</p>

<p className="max-w-full m-6 text-xl text-gray-700">
🌟 What I Bring:

A strong foundation in web development principles.

A passion for building real-world applications that are both functional and user-friendly.

Eagerness to learn, adapt, and grow in a team or individual setting.

A mindset focused on clean code, performance, and scalability.

I’ve already built several projects including a Password Manager, ToDoApp, UI clones, and dynamic apps. I’m currently exploring more advanced concepts like authentication, payment gateway, etc.
</p>
<p className="max-w-full m-6 text-xl text-gray-700">
🚀 Career Goals:

Join a product-driven or service-based tech company as a full-stack developer.

Constantly upgrade my skills to stay relevant in the fast-changing web landscape.

Let’s connect if you’re into web technologies, building cool stuff, or mentoring young developers. I’m open to collaboration, internships, freelance opportunities, and tech discussions.
          </p>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-white text-center py-20">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">Contact Me</h2>
        <form className="bg-white bg-opacity-70 p-8 rounded-xl shadow-xl max-w-md w-full border border-purple-100 backdrop-blur-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 my-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 my-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 my-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg mt-4 w-full font-semibold shadow-md transition-all hover:scale-105"
          >
            Send
          </button>
        </form>
        <p className="mt-6 text-gray-600">
          Or email me at: <a href="mailto:4contact2amansharma@gmail.com" className="text-pink-600 underline font-medium">4contact2amansharma@gmail.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer
        className="text-white text-center p-8"
        style={{
          backgroundImage: `url('/images/your-wallpaper.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-2xl mx-auto max-w-xl shadow-lg">
          <h2 className="text-xl font-bold tracking-wider mb-2">Thanks for visiting!</h2>
          <p>© {new Date().getFullYear()} Aman Sharma</p>
        </div>
      </footer>
    </>
  );
}
