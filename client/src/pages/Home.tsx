import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronRight, AlertCircle, Zap, Users, Trophy, Flame, Mail, Instagram } from "lucide-react";
import Lottie from "lottie-react";

/**
 * ZEROBELOW - ENHANCED GLITCH MODE
 * 
 * Press Start 2P font throughout
 * Chaotic glitch effects, scanlines, color shifts
 * Enhanced hero, creative schedule, entertaining stats
 * Raw, chaotic, authentic hacker aesthetic
 */

// Lottie icon component with creative animations
const LottieIcon = ({ type, color }: { type: string; color: string }) => {
  const iconMap: Record<string, string> = {
    clock: "https://lottie.host/f5f5f5f5-f5f5-f5f5-f5f5-f5f5f5f5f5f5/clock.json",
    people: "https://lottie.host/a1a1a1a1-a1a1-a1a1-a1a1-a1a1a1a1a1a1/people.json",
    medal: "https://lottie.host/b2b2b2b2-b2b2-b2b2-b2b2-b2b2b2b2b2b2/medal.json",
    fire: "https://lottie.host/c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3/fire.json",
  };

  // Fallback SVG icons if Lottie fails
  const svgMap: Record<string, React.ReactNode> = {
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    people: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    medal: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    fire: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 12 12.5a2.5 2.5 0 1 1 0-5c1.38 0 2.74.5 3.85 1.75M12.5 21H7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2z" />
      </svg>
    ),
  };

  const colorClass =
    color === "accent" ? "text-accent" : color === "secondary" ? "text-secondary" : "text-foreground";

  return <div className={`w-full h-full ${colorClass}`}>{svgMap[type]}</div>;
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="border-b-4 border-foreground fixed top-0 w-full z-50 bg-background">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504151316/U7CN9EhqQWVdrFxfSfe9oc/ChatGPTImageApr4,2026,05_58_05PM_6a47fdf4.png" 
              alt="Zerobelow" 
              className="h-10 md:h-14 w-auto" 
            />
            <span className="text-[10px] md:text-xs font-black tracking-widest text-accent whitespace-nowrap" style={{ fontFamily: '"Press Start 2P", cursive' }}>ZERO BELOW</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest">
            <a href="#about" className="hover:text-secondary transition-colors hover:animate-pulse">
              ABOUT
            </a>
            <a href="#schedule" className="hover:text-accent transition-colors hover:animate-pulse">
              SCHEDULE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b-4 border-foreground p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200">
            <a 
              href="#about" 
              className="text-sm font-black tracking-widest hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              &gt; ABOUT
            </a>
            <a 
              href="#schedule" 
              className="text-sm font-black tracking-widest hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              &gt; SCHEDULE
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section - ENHANCED */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663504151316/U7CN9EhqQWVdrFxfSfe9oc/zerobelow-hero-brutal-D4ykDKRdNLbwgPdhXF5LaN.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "screen-flicker 0.15s infinite",
          }}
        />
        <div className="absolute inset-0 bg-background/85" />

        <div className="container relative z-10">
          <div className="max-w-5xl">
            {/* Triple glitch text effect - ENHANCED */}
            <div className="relative mb-6 md:mb-8 h-20 md:h-32 flex items-center">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-foreground relative">
                ZERO
              </h1>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-secondary absolute top-1 md:top-2 left-1 md:left-2 opacity-60">
                ZERO
              </h1>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-accent absolute -top-1 md:-top-2 -left-1 md:-left-2 opacity-40">
                ZERO
              </h1>
            </div>

            <div className="relative mb-8 md:mb-12 h-20 md:h-32 flex items-center">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-foreground relative">
                BELOW
              </h1>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-accent absolute top-1 md:top-2 left-1 md:left-2 opacity-60">
                BELOW
              </h1>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-secondary absolute -top-1 md:-top-2 -left-1 md:-left-2 opacity-40">
                BELOW
              </h1>
            </div>

              <p className="text-xs md:text-sm max-w-3xl mb-8 leading-relaxed tracking-wider">
              &gt;&gt;&gt; 24+ HOURS. INFINITE POSSIBILITIES. SRINAGAR, KASHMIR. &lt;&lt;&lt;
            </p>

            <p className="text-xs md:text-sm max-w-4xl mb-12 leading-relaxed">
              [SYSTEM ALERT] BUILD. CODE. CREATE. COMPETE. JOIN THE MOST INTENSE HACKATHON IN KASHMIR. PUSH YOUR LIMITS. INNOVATE. MAKE SOMETHING REAL. 24+ HOURS OF PURE CREATION. [END ALERT]
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 px-6 py-4 border-3 border-accent bg-accent/10 animate-pulse">
                <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-xs font-bold tracking-widest">REGISTRATIONS OPENING SOON</span>
              </div>
              <a href="#about">
                <Button
                  size="lg"
                  className="bg-secondary text-background hover:bg-accent border-3 border-foreground font-black tracking-widest text-xs h-14 transition-all hover:shadow-lg hover:translate-x-1 hover:-translate-y-1"
                >
                  &gt;&gt; LEARN MORE
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Glitch diagonal accents */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 transform rotate-45 translate-x-48 translate-y-48 border-2 border-secondary/50" />
        <div className="absolute top-20 left-0 w-64 h-64 border-3 border-accent/30 transform -rotate-45" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 border-t-4 border-b-4 border-foreground bg-background relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663504151316/U7CN9EhqQWVdrFxfSfe9oc/zerobelow-pattern-brutal-3uBAvSqyszFuRTbJDdAEKY.webp')`,
          backgroundSize: "200px",
        }} />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tighter leading-none">
                WHAT IS <br />
                <span className="text-accent animate-pulse">&gt;&gt; ZEROBELOW &lt;&lt;</span>?
              </h2>

              <p className="text-xs md:text-sm leading-relaxed mb-4">
                [CLASSIFIED] ZEROBELOW IS A 48-HOUR HACKATHON IN SRINAGAR, KASHMIR. WHERE HACKERS, BUILDERS, AND CREATORS COME TOGETHER TO PUSH BOUNDARIES AND BUILD THE FUTURE. [END CLASSIFIED]
              </p>

              <p className="text-xs md:text-sm leading-relaxed mb-4">
                FOCUSED ON INNOVATION AND COLLABORATION. WHERE BUILDERS, CODERS, AND CREATORS UNITE TO DEVELOP SOLUTIONS THAT PUSH BOUNDARIES. EXPERIENCE GENUINE COMPETITION AND THE OPPORTUNITY TO CREATE SOMETHING MEANINGFUL.
              </p>

              <p className="text-xs md:text-sm leading-relaxed mb-6 text-secondary">
                &gt;&gt; AI IS WELCOME. PERSONAL CODE IS ENCOURAGED. USE WHAT YOU KNOW. BUILD WHAT YOU DREAM.
              </p>

              <div className="space-y-3">
                <div className="border-l-4 border-accent pl-3 bg-accent/5 p-3">
                  <p className="font-black text-xs tracking-widest mb-1 text-accent">&gt;&gt; DURATION</p>
                  <p className="text-xs">24+ HOURS NON-STOP</p>
                </div>
                <div className="border-l-4 border-secondary pl-3 bg-secondary/5 p-3">
                  <p className="font-black text-xs tracking-widest mb-1 text-secondary">&gt;&gt; LOCATION</p>
                  <p className="text-xs">SRINAGAR, KASHMIR</p>
                </div>
                <div className="border-l-4 border-foreground pl-3 bg-foreground/5 p-3">
                  <p className="font-black text-xs tracking-widest mb-1">&gt;&gt; PARTICIPANTS</p>
                  <p className="text-xs">ALL SKILL LEVELS WELCOME</p>
                </div>
              </div>

              {/* Code Frame */}
              <div className="mt-6 border-3 border-accent p-4 bg-accent/5 font-mono text-xs leading-relaxed">
                <div className="text-accent mb-2">&gt; $ BUILD_SOMETHING_AMAZING()</div>
                <div className="text-secondary">const zerobelow = &#123;</div>
                <div className="ml-4 text-foreground">code: <span className="text-accent">"any language"</span>,</div>
                <div className="ml-4 text-foreground">ai: <span className="text-accent">"allowed"</span>,</div>
                <div className="ml-4 text-foreground">creativity: <span className="text-secondary">"unlimited"</span>,</div>
                <div className="text-secondary">&#125;;</div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504151316/U7CN9EhqQWVdrFxfSfe9oc/zerobelow-pattern-brutal-3uBAvSqyszFuRTbJDdAEKY.webp"
                alt="Glitch pattern"
                className="w-full border-4 border-foreground transform hover:scale-105 transition-transform"
                style={{
                  filter: "contrast(1.2) brightness(1.1)",
                }}
              />
              <div className="absolute -top-3 -right-3 w-32 h-32 border-3 border-accent" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-3 border-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - CREATIVE */}
      <section id="schedule" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black mb-16 tracking-tighter">
            &gt;&gt; SCHEDULE &lt;&lt;
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                day: "DAY 1",
                date: "DATE REVEAL SOON!",
                color: "accent",
                icon: "clock",
                events: ["11:00 AM - CHECK-IN", "12:00 PM - THEME REVEAL & HACKATHON STARTS", "2:00 PM - LUNCH", "3:00 PM - DEPARTURE"],
              },
              {
                day: "DAY 2 (FINAL)",
                date: "NEXT DAY",
                color: "secondary",
                icon: "fire",
                events: ["11:00 AM - ARRIVAL", "2:00 PM - LUNCH", "3:00 PM - SUBMISSIONS & PRESENTATIONS", "AWARDS CEREMONY"],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative transition-all hover:shadow-lg transform hover:rotate-1 cursor-pointer group"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Rotated card design */}
                <div className="relative" style={{
                  transform: typeof window !== 'undefined' && window.innerWidth > 768 ? "perspective(1000px) rotateY(-5deg)" : "none",
                }}>
                  <div 
                    className="p-6 border-4 relative"
                    style={{
                      borderColor: item.color === "accent" ? "#00FFFF" : item.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                      backgroundColor: item.color === "accent" ? "rgba(0, 255, 255, 0.08)" : item.color === "secondary" ? "rgba(255, 0, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
                      borderStyle: hoveredCard === idx ? "dashed" : "solid",
                    }}
                  >
                    <div className="w-16 h-16 mb-4 transform hover:scale-125 transition-transform" style={{
                      color: item.color === "accent" ? "#00FFFF" : item.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                      filter: `drop-shadow(0 0 8px ${item.color === "accent" ? "#00FFFF" : "#FF00FF"})`,
                    }}>
                      <LottieIcon type={item.icon} color={item.color} />
                    </div>
                    
                    <h3 className="font-black text-lg tracking-widest mb-1" style={{
                      color: item.color === "accent" ? "#00FFFF" : item.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                      fontFamily: '"Press Start 2P", cursive',
                    }}>
                      {item.day}
                    </h3>
                    <p className="text-xs tracking-widest mb-6 opacity-70" style={{
                      fontFamily: '"Press Start 2P", cursive',
                    }}>{item.date}</p>
                    
                    <div className="space-y-2 text-xs" style={{
                      fontFamily: '"Press Start 2P", cursive',
                    }}>
                      {item.events.map((event, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span style={{
                            color: item.color === "accent" ? "#00FFFF" : item.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                          }}>
                            ▸
                          </span>
                          <span>{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2" style={{
                  borderColor: item.color === "accent" ? "#00FFFF" : item.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                }} />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2" style={{
                  borderColor: item.color === "accent" ? "#00FFFF" : item.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - REDESIGNED */}
      <section className="py-16 md:py-24 border-t-4 border-b-4 border-foreground bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "HOURS", value: "24+", color: "accent", icon: "clock", desc: "NON-STOP" },
              { label: "TEAMS", value: "25+", color: "secondary", icon: "people", desc: "COMPETING" },
              { label: "PRIZES", value: "∞", color: "foreground", icon: "medal", desc: "UNLIMITED" },
              { label: "ENERGY", value: "MAX", color: "accent", icon: "fire", desc: "CHAOS" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative transition-all hover:shadow-lg transform hover:-translate-y-3 cursor-pointer group"
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Diagonal design */}
                <div className="relative overflow-hidden" style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                }}>
                  <div 
                    className="p-8 pt-12 pb-16 border-3 relative"
                    style={{
                      borderColor: stat.color === "accent" ? "#00FFFF" : stat.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                      backgroundColor: stat.color === "accent" ? "rgba(0, 255, 255, 0.1)" : stat.color === "secondary" ? "rgba(255, 0, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div className="w-12 h-12 mb-3">
                  <LottieIcon type={stat.icon} color={stat.color} />
                </div>
                    <p className="text-2xl md:text-3xl font-black tracking-tighter mb-2" style={{
                      color: stat.color === "accent" ? "#00FFFF" : stat.color === "secondary" ? "#FF00FF" : "#FFFFFF",
                    }}>
                      {stat.value}
                    </p>
                    <p className="text-xs font-black tracking-widest opacity-70">{stat.label}</p>
                    <p className="text-xs opacity-50 mt-2">{stat.desc}</p>
                  </div>
                </div>
                
                {/* Glitch effect on hover */}
                {hoveredStat === idx && (
                  <div className="absolute inset-0 border-3 pointer-events-none" style={{
                    borderColor: stat.color === "accent" ? "#FF00FF" : "#00FFFF",
                    animation: "glitch-chaos 0.3s infinite",
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - ENHANCED */}
      <footer className="border-t-4 border-foreground bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            <div className="border-l-4 border-accent pl-4">
              <p className="font-black text-lg tracking-widest mb-4 text-accent drop-shadow-[0_0_8px_#00FFFF]">&gt;&gt; ZEROBELOW</p>
              <p className="text-[10px] md:text-xs leading-relaxed opacity-80">
                A 48-HOUR HACKATHON IN SRINAGAR, KASHMIR. WHERE INNOVATION MEETS INTENSITY. BUILD SOMETHING REAL.
              </p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <p className="font-black text-xs tracking-widest mb-4 text-secondary drop-shadow-[0_0_8px_#FF00FF]">&gt;&gt; CONTACT</p>
              <div className="space-y-3 text-[10px] md:text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="mailto:zerobeloww001@gmail.com" className="hover:text-accent transition-colors">
                    zerobeloww001@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a href="https://www.instagram.com/zero_.below/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    @zero_.below
                  </a>
                </div>
                <p>| SRINAGAR, KASHMIR</p>
              </div>
            </div>
            <div className="border-l-4 border-foreground pl-4">
              <p className="font-black text-xs tracking-widest mb-4">&gt;&gt; STATUS</p>
              <ul className="space-y-2 text-[10px] md:text-xs">
                <li className="text-accent drop-shadow-[0_0_5px_#00FFFF]">| REGISTRATIONS: COMING SOON</li>
                <li className="text-secondary drop-shadow-[0_0_5px_#FF00FF]">| VENUE: REVEAL PENDING</li>
                <li className="text-foreground">| YEAR: 2026</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-3 border-foreground pt-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-70 gap-4">
            <p>© 2026 ZEROBELOW</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
