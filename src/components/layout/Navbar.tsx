import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const navItems = [
  { label: "Home", katakana: "ホーム", links: "/" },
  { label: "About Us", katakana: "アバウト・アス", links: "/aboutus" },
  { label: "Events", katakana: "イベンツ", links: "/events" },
  { label: "Contact", katakana: "コンタクト", links: "/contact" },
];

export default function Navbar() {
  const [navShow, setNavShow] = useState(1);
  const [navColor, setNavColor] = useState("#7a0707ff");
  const [time, setTime] = useState(new Date());
  const lastScrollY = useRef(0);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hide/show navbar on scroll
  useEffect(() => {
    let ticking = false;
    const threshold = 20;

    const isPhone = () =>
      window.matchMedia("(max-width: 1200px) and (max-aspect-ratio: 1.45)")
        .matches;

    const handleScroll = () => {
      if (isPhone()) {
        setNavShow(1);
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const diff = currentY - lastScrollY.current;

          if (diff > threshold && currentY > 80) {
            setNavShow(0);
          } else if (diff < 9 - threshold) {
            setNavShow(1);
          }

          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    const handleResize = () => {
      if (isPhone()) {
        setNavShow(1);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startScroll = window.innerHeight * 1.5;
      const endScroll = window.innerHeight * 2;
      
      if (scrollY < startScroll) {
        setNavColor("#000000ff");
      } else if (scrollY > endScroll) {
        setNavColor("#c0b063");
      } else {
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        const r = Math.round(255 + (192 - 255) * progress);
        const g = Math.round(223 + (176 - 223) * progress);
        const b = Math.round(208 + (99 - 208) * progress);
        setNavColor(`rgb(${r}, ${g}, ${b})`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  const handleNavClick = (link: string) => {
    console.log("Navigate to:", link);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: navShow ? 0 : -120 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-8 pt-11 z-[1000] select-none"
    >
      {/* Timer on the left */}
      <div 
        className="text-2xl font-bold tracking-wider"
        style={{ 
          color: navColor,
          filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.25))"
        }}
      >
        {formatTime(time)}
      </div>

      {/* Nav items in the center-right */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-12">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="group cursor-pointer flex items-center justify-center w-[150px] h-[40px]"
            onClick={() => handleNavClick(item.links)}
          >
            <div className="flex flex-col items-center justify-center transition-all duration-300">
              <div
                className="transition-all duration-300 group-hover:text-xs group-hover:opacity-70"
                style={{
                  color: navColor,
                  filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.25))",
                  fontSize: "1.25rem"
                }}
              >
                {item.label}
              </div>
              <div
                className="font-bold text-[0rem] h-fit transition-all duration-300 group-hover:text-base"
                style={{
                  color: navColor,
                  filter: "drop-shadow(0 5px 1px rgba(0, 0, 0, 0.25))"
                }}
              >
                {item.katakana}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Home icon on the rightmost */}
      <div 
        className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition-all duration-300"
        onClick={() => handleNavClick("/")}
        style={{ color: navColor }}
      >
        <Home size={32} strokeWidth={2} style={{ filter: "drop-shadow(0 3px 3px rgba(0, 0, 0, 0.25))" }} />
      </div>

      {/* Mobile menu button (optional) */}
      <div className="md:hidden">
        <button 
          className="p-2"
          style={{ color: navColor }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}