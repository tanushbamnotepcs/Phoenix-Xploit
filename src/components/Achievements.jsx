import React from "react";

const achievements = [
  { title: "Amrita inCTF 2021", description: "Secured All India Rank 103 in prestigious cybersecurity competition", image: "/trail.jpg" },
  { title: "Research Excellence", description: "Published two research papers on Packet Sniffer and Digital Forensics", image: "/trail.jpg" },
  { title: "VishwaCTF 2021", description: "Participated in national-level cybersecurity competition", image: "/trail.jpg" },
  { title: "IIT Tech Fest 2022", description: "Developed innovative Alterrain and Mesh solver bots", image: "/trail.jpg" },
  { title: "Octavester Project", description: "Designed advanced cybersecurity solutions with research paper", image: "/trail.jpg" },
  { title: "Colosseum CTF 2024", description: "Secured 2nd place in offline CTF competition", image: "/trail.jpg" },
  { title: "Trailblazzer Research", description: "Developed IP scanning tool and encryption analysis", image: "/trail.jpg" },
  { title: "AARHANT CTF 2024", description: "Phoenix-Cybersecurity Forum secured top two positions", image: "/trail.jpg" },
  { title: "Hackfusion 3.0", description: "Secured 1st place in prestigious CTF competition at G.H. Raisoni College", image: "/trail.jpg" }
];

const Achievements = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto px-6 py-8 bg-black text-white overflow-hidden">
      {/* Pulsing cyber background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(40,40,255,0.15),rgba(255,0,72,0.1),transparent_70%)] animate-pulse"></div>

      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12 tracking-wide">
        Achievements
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer 
                       hover:scale-[1.1] hover:shadow-[0_0_40px_rgba(255,0,72,0.35),0_0_60px_rgba(40,40,255,0.35)]"
          >
            {/* Animated red-blue glowing border */}
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,rgba(255,0,72,0.9),rgba(40,40,255,0.9),rgba(255,0,72,0.9))] opacity-0 
                            group-hover:opacity-100 blur-xl animate-spin-slow transition-all duration-700"></div>

            {/* Card Content */}
            <div className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between text-center">
              <div>
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-36 object-cover rounded-xl mb-4 transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{a.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{a.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom keyframes for spin */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Achievements;
