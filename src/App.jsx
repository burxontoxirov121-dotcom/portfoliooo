import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  CodeXml,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Star,
  Rocket,
  Zap,
  Terminal,
  Palette,
  Globe,
  Layers,
  GitBranch,
  Brain,
  Cloud,
  Send,
  Monitor,
  Cpu,
  Eye,
  Sun,
  Moon,
  Check,
  Wrench,
  Database,
  Filter,
  Copy,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";
import { TRANSLATIONS } from "./translations";
import {
  ReactIcon,
  JSIcon,
  TailwindIcon,
  HTMLIcon,
  CSSIcon,
  ViteIcon,
  ClaudeIcon,
  ChatGPTIcon,
  GeminiIcon,
  AntigravityIcon,
  SupabaseIcon,
  APIIcon,
  GitIcon,
  GitHubIcon,
  FigmaIcon,
  VercelIcon,
  NetlifyIcon,
} from "./TechIcons";

/* ────────────────────────────── CONSTANTS ────────────────────────────── */
const NAV_KEYS = [
  "Hero",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

const SKILL_ITEMS = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    icon: ReactIcon,
    levelKey: "advanced",
    color: "from-cyan-500 to-blue-500",
    shadow: "hover:shadow-cyan-500/30",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    icon: JSIcon,
    levelKey: "advanced",
    color: "from-yellow-400 to-amber-500",
    shadow: "hover:shadow-amber-500/30",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: TailwindIcon,
    levelKey: "advanced",
    color: "from-sky-400 to-cyan-500",
    shadow: "hover:shadow-sky-500/30",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: HTMLIcon,
    levelKey: "proficient",
    color: "from-orange-500 to-red-500",
    shadow: "hover:shadow-orange-500/30",
  },
  {
    name: "CSS3 / Modern UI",
    category: "Frontend",
    icon: CSSIcon,
    levelKey: "proficient",
    color: "from-blue-500 to-indigo-600",
    shadow: "hover:shadow-blue-500/30",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: ViteIcon,
    levelKey: "proficient",
    color: "from-purple-500 to-pink-500",
    shadow: "hover:shadow-purple-500/30",
  },

  // AI & Smart Tools
  {
    name: "Claude AI",
    category: "AI",
    icon: ClaudeIcon,
    levelKey: "expert",
    color: "from-amber-500 to-orange-600",
    shadow: "hover:shadow-amber-500/30",
  },
  {
    name: "ChatGPT (OpenAI)",
    category: "AI",
    icon: ChatGPTIcon,
    levelKey: "expert",
    color: "from-emerald-500 to-teal-600",
    shadow: "hover:shadow-emerald-500/30",
  },
  {
    name: "Google Gemini",
    category: "AI",
    icon: GeminiIcon,
    levelKey: "daily",
    color: "from-blue-500 via-purple-500 to-pink-500",
    shadow: "hover:shadow-purple-500/30",
  },
  {
    name: "Antigravity & AI Code",
    category: "AI",
    icon: AntigravityIcon,
    levelKey: "expert",
    color: "from-indigo-500 to-purple-600",
    shadow: "hover:shadow-indigo-500/30",
  },

  // Database & API
  {
    name: "Supabase",
    category: "Database",
    icon: SupabaseIcon,
    levelKey: "proficient",
    color: "from-emerald-400 to-green-600",
    shadow: "hover:shadow-emerald-500/30",
  },
  {
    name: "REST API & Axios",
    category: "Database",
    icon: APIIcon,
    levelKey: "advanced",
    color: "from-violet-500 to-purple-600",
    shadow: "hover:shadow-violet-500/30",
  },

  // Tools & DevOps
  {
    name: "Git & Version Control",
    category: "Tools",
    icon: GitIcon,
    levelKey: "proficient",
    color: "from-orange-500 to-red-600",
    shadow: "hover:shadow-orange-500/30",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: GitHubIcon,
    levelKey: "proficient",
    color: "from-slate-700 to-slate-900",
    shadow: "hover:shadow-slate-500/30",
  },
  {
    name: "Figma (UI/UX)",
    category: "Tools",
    icon: FigmaIcon,
    levelKey: "proficient",
    color: "from-pink-500 to-rose-600",
    shadow: "hover:shadow-pink-500/30",
  },
  {
    name: "Vercel / Netlify",
    category: "Tools",
    icon: VercelIcon,
    levelKey: "daily",
    color: "from-cyan-500 to-blue-600",
    shadow: "hover:shadow-cyan-500/30",
  },
];

const PROJECTS = [
  {
    key: "Weather APP",
    techs: ["HTML", "CSS", "JavaScript", "API"],
    color: "from-blue-500 to-cyan-400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkpuYj5wBCIKVGz7yfHA2byivg0uEt3IX7QxddEaSbtxY0fzWZRvY1Jk&s=10",
    href: "https://weatherappclaudegemini.netlify.app/",
    source: "https://github.com/burxondev/Weather-app",
  },
  {
    key: "UniNest",
    techs: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    color: "from-purple-500 to-pink-400",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    href: "https://uninestapp.netlify.app/",
    source: "https://github.com/burxondev",
  },
  {
    key: "Currency convertor",
    techs: ["React", "Tailwind CSS", "API", "JavaScript"],
    color: "from-cyan-500 to-blue-400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9295ZvynTY2GUSW1iaEyEhghBD0ILwV3Pxh3FYMumA&s=10",
    href: "https://adorable-banoffee-efa0d9.netlify.app/",
    source: "https://github.com/burxondev/Currency-convertor",
  },
  {
    key: "Portfolio site",
    techs: ["React 19", "Tailwind CSS v4", "i18n", "Vite"],
    color: "from-emerald-500 to-cyan-400",
    image: "/image.png",
    href: "#Hero",
    source: "https://github.com/burxondev",
    isSelf: true,
  },
];

const CONTACTS = [
  {
    key: "Phone",
    icon: Phone,
    value: "+998 77 777 77 77",
    href: "tel:+998777777777",
    color: "from-blue-500 to-cyan-400",
    copyable: true,
  },
  {
    key: "Email",
    icon: Mail,
    value: "burxontoxirov@gmail.com",
    href: "mailto:burxontoxirov@gmail.com",
    color: "from-purple-500 to-pink-400",
    copyable: true,
  },
  {
    key: "Telegram",
    icon: MessageCircle,
    value: "@BBB7I2",
    href: "https://t.me/BBB7I2",
    color: "from-cyan-500 to-blue-400",
  },
  {
    key: "LinkedIn",
    icon: BriefcaseBusiness,
    value: "Burxon Toxirov",
    href: "https://www.linkedin.com/in/burxontoxirov/",
    color: "from-violet-500 to-indigo-400",
  },
  {
    key: "GitHub",
    icon: CodeXml,
    value: "burxondev",
    href: "https://github.com/burxondev",
    color: "from-emerald-500 to-green-400",
  },
];

/* ──────────────────────────── SPACE BACKGROUND ──────────────────────────── */
function SpaceBackground({ isDark }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, dpr;
    const stars = [],
      shooters = [],
      particles = [];
    let lastShoot = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      resize();
      stars.length = 0;
      const count = Math.min(Math.floor((W * H) / 2800), 1200);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.2,
          baseA: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.003 + 0.001,
          phase: Math.random() * Math.PI * 2,
          hue:
            Math.random() < 0.15
              ? 200 + Math.random() * 40
              : Math.random() < 0.1
                ? 270 + Math.random() * 30
                : 0,
          sat: Math.random() < 0.25 ? 40 + Math.random() * 40 : 0,
          dx: (Math.random() - 0.5) * 0.08,
          dy: (Math.random() - 0.5) * 0.08,
        });
      }
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2 + 0.5,
          a: Math.random() * 0.15 + 0.05,
          dx: (Math.random() - 0.5) * 0.15,
          dy: (Math.random() - 0.5) * 0.15,
          hue: 200 + Math.random() * 80,
        });
      }
    }

    function drawAurora(t) {
      const g1 = ctx.createRadialGradient(
        W * 0.2 + Math.sin(t * 0.0002) * 100,
        H * 0.15,
        0,
        W * 0.2,
        H * 0.15,
        W * 0.5,
      );
      if (isDark) {
        g1.addColorStop(0, "rgba(59,130,246,0.04)");
        g1.addColorStop(0.5, "rgba(139,92,246,0.02)");
        g1.addColorStop(1, "rgba(0,0,0,0)");
      } else {
        g1.addColorStop(0, "rgba(59,130,246,0.08)");
        g1.addColorStop(0.5, "rgba(139,92,246,0.04)");
        g1.addColorStop(1, "rgba(255,255,255,0)");
      }
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(
        W * 0.8 + Math.cos(t * 0.00015) * 80,
        H * 0.25,
        0,
        W * 0.8,
        H * 0.25,
        W * 0.45,
      );
      if (isDark) {
        g2.addColorStop(0, "rgba(139,92,246,0.035)");
        g2.addColorStop(0.5, "rgba(6,182,212,0.015)");
        g2.addColorStop(1, "rgba(0,0,0,0)");
      } else {
        g2.addColorStop(0, "rgba(139,92,246,0.07)");
        g2.addColorStop(0.5, "rgba(6,182,212,0.03)");
        g2.addColorStop(1, "rgba(255,255,255,0)");
      }
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      const g3 = ctx.createRadialGradient(
        W * 0.5 + Math.sin(t * 0.0001) * 120,
        H * 0.7,
        0,
        W * 0.5,
        H * 0.7,
        W * 0.6,
      );
      if (isDark) {
        g3.addColorStop(0, "rgba(6,182,212,0.025)");
        g3.addColorStop(1, "rgba(0,0,0,0)");
      } else {
        g3.addColorStop(0, "rgba(6,182,212,0.05)");
        g3.addColorStop(1, "rgba(255,255,255,0)");
      }
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, W, H);
    }

    function drawStars(t) {
      for (const s of stars) {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < -5) s.x = W + 5;
        if (s.x > W + 5) s.x = -5;
        if (s.y < -5) s.y = H + 5;
        if (s.y > H + 5) s.y = -5;

        const twinkle = Math.sin(t * s.speed + s.phase) * 0.5 + 0.5;
        const a = s.baseA * (0.4 + twinkle * 0.6);
        if (isDark) {
          if (s.sat > 0) {
            ctx.fillStyle = `hsla(${s.hue},${s.sat}%,75%,${a})`;
          } else {
            ctx.fillStyle = `rgba(255,255,255,${a})`;
          }
        } else {
          if (s.sat > 0) {
            ctx.fillStyle = `hsla(${s.hue},${s.sat}%,40%,${a * 0.6})`;
          } else {
            ctx.fillStyle = `rgba(71,85,105,${a * 0.6})`;
          }
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (s.r > 1.1 && a > 0.5) {
          ctx.fillStyle = isDark
            ? `rgba(255,255,255,${a * 0.08})`
            : `rgba(99,102,241,${a * 0.08})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function drawParticles(t) {
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        const pulse = Math.sin(t * 0.002 + p.x) * 0.5 + 0.5;
        ctx.fillStyle = isDark
          ? `hsla(${p.hue},60%,65%,${p.a * (0.5 + pulse * 0.5)})`
          : `hsla(${p.hue},60%,45%,${p.a * (0.6 + pulse * 0.4)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawShootingStars(t) {
      if (t - lastShoot > 2000 + Math.random() * 4000) {
        lastShoot = t;
        const angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.2;
        shooters.push({
          x: Math.random() * W * 0.8,
          y: Math.random() * H * 0.3,
          len: 80 + Math.random() * 120,
          speed: 6 + Math.random() * 6,
          angle,
          life: 1,
          decay: 0.008 + Math.random() * 0.008,
        });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= s.decay;
        if (s.life <= 0) {
          shooters.splice(i, 1);
          continue;
        }

        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const grad = ctx.createLinearGradient(s.x, s.y, tx, ty);
        if (isDark) {
          grad.addColorStop(0, `rgba(255,255,255,${s.life * 0.9})`);
          grad.addColorStop(0.3, `rgba(147,197,253,${s.life * 0.5})`);
          grad.addColorStop(1, "rgba(147,197,253,0)");
        } else {
          grad.addColorStop(0, `rgba(99,102,241,${s.life * 0.9})`);
          grad.addColorStop(0.3, `rgba(168,85,247,${s.life * 0.5})`);
          grad.addColorStop(1, "rgba(168,85,247,0)");
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${s.life})`
          : `rgba(99,102,241,${s.life})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(t) {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate((mx - W / 2) * 0.015, (my - H / 2) * 0.015);
      drawAurora(t);
      drawStars(t);
      drawParticles(t);
      drawShootingStars(t);
      ctx.restore();
      frameRef.current = requestAnimationFrame(loop);
    }

    init();
    frameRef.current = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    const onMove = (e) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let rafMouse;
    function smoothMouse() {
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;
      rafMouse = requestAnimationFrame(smoothMouse);
    }
    rafMouse = requestAnimationFrame(smoothMouse);

    return () => {
      cancelAnimationFrame(frameRef.current);
      cancelAnimationFrame(rafMouse);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-all duration-700"
      style={{
        background: isDark
          ? "linear-gradient(160deg, #030712 0%, #050816 30%, #0a0f24 60%, #060b1a 100%)"
          : "linear-gradient(160deg, #f8fafc 0%, #f1f5f9 30%, #e2e8f0 60%, #f8fafc 100%)",
      }}
    />
  );
}

/* ─────────────────────── ANIMATED SECTION WRAPPER ─────────────────────── */
function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        filter: visible ? "blur(0)" : "blur(6px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────── MAGNETIC BUTTON ──────────────────────────── */
function MagneticBtn({ children, className = "", ...props }) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    el.style.transition = "transform 0.15s ease-out";
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.4s ease-out";
  }, []);

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────── GRADIENT TEXT ─────────────────────────── */
function GradientText({ children, className = "" }) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 ${className}`}
    >
      {children}
    </span>
  );
}

/* ═══════════════════════════ MAIN APP ═══════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [skillCategory, setSkillCategory] = useState("ALL");
  const [toastMsg, setToastMsg] = useState("");

  /* Language state (uz, ru, en) */
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "uz";
  });

  /* Dark mode state */
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return saved ? saved === "dark" : true;
  });

  const t = TRANSLATIONS[lang] || TRANSLATIONS.uz;

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
    setLangOpen(false);
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("portfolio_theme", newDark ? "dark" : "light");
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  /* Track scroll for navbar & active section & Back-To-Top button */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          const sections = NAV_KEYS.map((id) =>
            document.getElementById(id),
          ).filter(Boolean);
          let current = "Hero";
          for (const sec of sections) {
            if (sec.getBoundingClientRect().top <= 200) current = sec.id;
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* Close language dropdown when clicking outside */
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ──────────── NAVBAR ──────────── */
  const Navbar = (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 rounded-2xl transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-lg shadow-black/20"
              : "bg-white/80 backdrop-blur-2xl border border-slate-200 shadow-md shadow-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => scrollTo("Hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
              <CodeXml size={16} className="text-white" />
            </div>
            <span
              className={`font-bold text-sm tracking-wide hidden sm:block ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Burxon<span className="text-blue-500">.dev</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_KEYS.map((key) => {
              const label = t.nav[key] || key;
              const isActive = activeSection === key;
              return (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? "text-white"
                        : "text-blue-600"
                      : isDark
                        ? "text-white/40 hover:text-white/80"
                        : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <span
                      className={`absolute inset-0 rounded-xl border ${
                        isDark
                          ? "bg-white/[0.06] border-white/[0.08]"
                          : "bg-blue-50 border-blue-100 shadow-sm"
                      }`}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Controls & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "bg-white/[0.05] border-white/[0.1] text-white/80 hover:bg-white/[0.1]"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 shadow-sm"
                }`}
              >
                <Globe size={14} className="text-blue-500" />
                <span className="uppercase">{lang}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langOpen && (
                <div
                  className={`absolute right-0 mt-2 w-36 py-1.5 rounded-2xl border shadow-xl backdrop-blur-2xl z-50 transition-all ${
                    isDark
                      ? "bg-[#090d20]/95 border-white/10 text-white"
                      : "bg-white/95 border-slate-200 text-slate-800 shadow-slate-200/50"
                  }`}
                >
                  {[
                    { code: "uz", label: "O'zbekcha" },
                    { code: "ru", label: "Русский" },
                    { code: "en", label: "English" },
                  ].map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLang(l.code)}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors ${
                        lang === l.code
                          ? isDark
                            ? "bg-blue-500/20 text-blue-400 font-semibold"
                            : "bg-blue-50 text-blue-600 font-semibold"
                          : isDark
                            ? "hover:bg-white/5 text-white/70"
                            : "hover:bg-slate-100 text-slate-600"
                      }`}
                    >
                      <span>{l.label}</span>
                      {lang === l.code && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 ${
                isDark
                  ? "bg-white/[0.05] border-white/[0.1] text-amber-400 hover:bg-white/[0.1] hover:scale-105"
                  : "bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200 hover:scale-105 shadow-sm"
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Contact CTA */}
            <MagneticBtn
              onClick={() => scrollTo("Contact")}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300"
            >
              <Send size={13} />
              {t.nav.Contact}
            </MagneticBtn>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 flex items-center justify-center rounded-xl border ${
                isDark
                  ? "bg-white/[0.05] border-white/[0.08] text-white/70"
                  : "bg-slate-100 border-slate-200 text-slate-700"
              }`}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-80 pb-4" : "max-h-0"}`}
        >
          <div
            className={`flex flex-col gap-1 pt-3 border-t ${
              isDark ? "border-white/[0.06]" : "border-slate-200"
            }`}
          >
            {NAV_KEYS.map((key) => {
              const label = t.nav[key] || key;
              const isActive = activeSection === key;
              return (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? "text-white bg-white/[0.06]"
                        : "text-blue-600 bg-blue-50 font-semibold"
                      : isDark
                        ? "text-white/40 hover:text-white/80 hover:bg-white/[0.03]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );

  /* ──────────── HERO ──────────── */
  const Hero = (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative blobs */}
      <div
        className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse ${
          isDark ? "bg-blue-500/[0.07]" : "bg-blue-400/[0.12]"
        }`}
        style={{ animationDuration: "8s" }}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse ${
          isDark ? "bg-purple-500/[0.06]" : "bg-purple-400/[0.10]"
        }`}
        style={{ animationDuration: "10s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Availability Badge */}
        <RevealSection delay={0}>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-6">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-sm ${
                isDark
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-semibold tracking-wide">
                {t.hero.availableBadge}
              </span>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm ${
                isDark
                  ? "bg-white/[0.04] border-white/[0.08]"
                  : "bg-blue-50/80 border-blue-200/80 shadow-sm"
              }`}
            >
              <Sparkles size={14} className="text-blue-500" />
              <span
                className={`text-xs font-semibold tracking-wide ${
                  isDark ? "text-white/70" : "text-slate-700"
                }`}
              >
                {t.hero.badge}
              </span>
            </div>
          </div>
        </RevealSection>

        {/* Name */}
        <RevealSection delay={100}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6">
            <span className={isDark ? "text-white" : "text-slate-900"}>
              {t.hero.titleFirstName}
            </span>{" "}
            <GradientText>{t.hero.titleLastName}</GradientText>
          </h1>
        </RevealSection>

        {/* Subtitle */}
        <RevealSection delay={200}>
          <p
            className={`text-lg sm:text-xl md:text-2xl font-light mb-4 tracking-wide ${
              isDark ? "text-white/50" : "text-slate-600"
            }`}
          >
            {t.hero.subtitle}
          </p>
        </RevealSection>

        {/* Description */}
        <RevealSection delay={300}>
          <p
            className={`text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed ${
              isDark ? "text-white/40" : "text-slate-600"
            }`}
          >
            {t.hero.desc}
          </p>
        </RevealSection>

        {/* Buttons */}
        <RevealSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <MagneticBtn
              onClick={() => scrollTo("Projects")}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
              {t.hero.viewProjects}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </MagneticBtn>
            <MagneticBtn
              onClick={() => scrollTo("Contact")}
              className={`group flex items-center gap-3 px-8 py-4 border font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                isDark
                  ? "bg-white/[0.04] border-white/[0.1] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.15]"
                  : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-md shadow-slate-200/50"
              }`}
            >
              {t.hero.contactMe}
              <Mail
                size={16}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </MagneticBtn>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: CodeXml, href: "https://github.com/burxondev", label: "GitHub" },
              { icon: MessageCircle, href: "https://t.me/BBB7I2", label: "Telegram" },
              { icon: Mail, href: "mailto:burxontoxirov@gmail.com", label: "Email" },
              { icon: BriefcaseBusiness, href: "https://www.linkedin.com/in/burxontoxirov/", label: "LinkedIn" },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "bg-white/[0.04] border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.08]"
                    : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 shadow-sm"
                }`}
              >
                <soc.icon size={16} />
              </a>
            ))}
          </div>
        </RevealSection>

        {/* Scroll indicator */}
        <RevealSection delay={600}>
          <div className="mt-14 flex flex-col items-center gap-2">
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${
                isDark ? "text-white/20" : "text-slate-400"
              }`}
            >
              {t.hero.scroll}
            </span>
            <ChevronDown
              size={16}
              className={`animate-bounce ${isDark ? "text-white/30" : "text-slate-400"}`}
            />
          </div>
        </RevealSection>
      </div>
    </section>
  );

  /* ──────────── ABOUT ──────────── */
  const highlightIcons = [Palette, Zap, Sparkles, CodeXml];
  const About = (
    <section id="About" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
              {t.about.tag}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-16 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.about.title1}
            <br />
            <GradientText>{t.about.title2}</GradientText>
          </h2>
        </RevealSection>

        {/* Top Grid: Bio & Quote */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Main Bio Glass Card */}
          <RevealSection delay={100} className="lg:col-span-7">
            <div className="relative group h-full">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              <div
                className={`relative h-full p-8 sm:p-10 backdrop-blur-xl rounded-3xl border transition-all duration-500 flex flex-col justify-between ${
                  isDark
                    ? "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]"
                    : "bg-white/90 border-slate-200 hover:border-slate-300 shadow-xl shadow-slate-200/50"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Zap size={20} className="text-white" />
                    </div>
                    <h3
                      className={`text-xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t.about.whoIAm}
                    </h3>
                  </div>

                  {/* Quote Banner */}
                  <div
                    className={`p-4 sm:p-5 rounded-2xl border-l-4 border-blue-500 mb-6 font-medium italic text-sm sm:text-base leading-relaxed ${
                      isDark
                        ? "bg-blue-500/10 border-white/5 text-blue-300"
                        : "bg-blue-50/80 border-slate-200 text-blue-950 shadow-sm"
                    }`}
                  >
                    "{t.about.quote}"
                  </div>

                  <p
                    className={`leading-relaxed text-[15px] sm:text-base mb-4 font-normal ${
                      isDark ? "text-white/70" : "text-slate-700"
                    }`}
                  >
                    {t.about.bioP1}
                  </p>
                  <p
                    className={`leading-relaxed text-[15px] sm:text-base font-normal ${
                      isDark ? "text-white/70" : "text-slate-700"
                    }`}
                  >
                    {t.about.bioP2}
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Stats 2x2 Grid */}
          <RevealSection delay={200} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 h-full">
              {[
                {
                  value: "16",
                  labelKey: "yearsOld",
                  icon: Star,
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  value: "1",
                  labelKey: "yearExperience",
                  icon: Rocket,
                  color: "from-purple-500 to-pink-400",
                },
                {
                  value: "5+",
                  labelKey: "technologies",
                  icon: Layers,
                  color: "from-cyan-500 to-blue-400",
                },
                {
                  value: "6+",
                  labelKey: "projectsBuilt",
                  icon: Terminal,
                  color: "from-violet-500 to-purple-400",
                },
              ].map((stat, i) => (
                <div key={stat.labelKey} className="relative group h-full">
                  <div
                    className={`absolute -inset-[1px] bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}
                  />
                  <div
                    className={`relative h-full p-6 backdrop-blur-xl rounded-2xl border transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 ${
                      isDark
                        ? "bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12]"
                        : "bg-white/80 border-slate-200/80 hover:border-slate-300 shadow-md shadow-slate-200/40"
                    }`}
                  >
                    <stat.icon
                      size={22}
                      className={isDark ? "text-white/40 mb-4" : "text-slate-500 mb-4"}
                    />
                    <div>
                      <div
                        className={`text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isDark ? "text-white/50" : "text-slate-600"
                        }`}
                      >
                        {t.about.stats[stat.labelKey]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>

        {/* Highlights Row (4 Core Pillars) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.about.highlights?.map((h, index) => {
            const HIcon = highlightIcons[index % highlightIcons.length];
            return (
              <RevealSection key={h.title} delay={250 + index * 60}>
                <div className="relative group h-full">
                  <div
                    className={`relative h-full p-5 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.12]"
                        : "bg-white/70 border-slate-200/60 hover:bg-white hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                      <HIcon size={18} className="text-blue-500" />
                    </div>
                    <h4
                      className={`text-sm font-bold mb-1 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {h.title}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isDark ? "text-white/40" : "text-slate-500"
                      }`}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ──────────── SKILLS (PROFESSIONAL & AI UPGRADED) ──────────── */
  const filteredSkills =
    skillCategory === "ALL"
      ? SKILL_ITEMS
      : SKILL_ITEMS.filter((item) => item.category === skillCategory);

  const Skills = (
    <section id="Skills" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
              {t.skills.tag}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t.skills.title1}{" "}
                <GradientText>{t.skills.title2}</GradientText>
              </h2>
              <p
                className={`text-sm mt-3 max-w-xl ${
                  isDark ? "text-white/50" : "text-slate-600"
                }`}
              >
                {t.skills.desc}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { cat: "ALL", label: t.skills.filterAll },
                { cat: "Frontend", label: t.skills.categories.Frontend },
                { cat: "AI", label: t.skills.categories.AI },
                { cat: "Database", label: t.skills.categories.Database },
                { cat: "Tools", label: t.skills.categories.Tools },
              ].map((tab) => {
                const isActive = skillCategory === tab.cat;
                return (
                  <button
                    key={tab.cat}
                    onClick={() => setSkillCategory(tab.cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20"
                        : isDark
                          ? "bg-white/[0.03] border-white/[0.06] text-white/50 hover:bg-white/[0.08] hover:text-white"
                          : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealSection>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((item, index) => {
            const IconComp = item.icon;
            const levelLabel = t.skills.levels[item.levelKey] || item.levelKey;
            return (
              <RevealSection key={item.name} delay={index * 50}>
                <div className={`group relative h-full rounded-2xl transition-all duration-500 hover:-translate-y-1.5 ${item.shadow}`}>
                  <div
                    className={`absolute -inset-[1px] bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}
                  />
                  <div
                    className={`relative h-full p-5 sm:p-6 backdrop-blur-xl rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
                      isDark
                        ? "bg-white/[0.03] border-white/[0.06] group-hover:border-white/[0.15]"
                        : "bg-white/80 border-slate-200/80 group-hover:border-slate-300 shadow-md shadow-slate-200/40"
                    }`}
                  >
                    <div>
                      {/* Icon header */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 border border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComp className="w-full h-full object-contain" />
                        </div>
                        {item.category === "AI" && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20">
                            <Sparkles size={10} /> AI
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <h3
                        className={`text-base font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.color} transition-all duration-300 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>

                    {/* Level badge */}
                    <div className="mt-4 pt-3 border-t border-white/[0.04]">
                      <span
                        className={`text-[11px] font-semibold tracking-wide ${
                          isDark ? "text-white/40" : "text-slate-500"
                        }`}
                      >
                        {levelLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ──────────── EXPERIENCE ──────────── */
  const Experience = (
    <section id="Experience" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
              {t.experience.tag}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.experience.title1}
            <br />
            <GradientText>{t.experience.title2}</GradientText>
          </h2>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="relative max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

            {/* Timeline Item */}
            <div className="relative pl-14 pb-2">
              {/* Dot */}
              <div
                className={`absolute left-[11px] top-2 w-[17px] h-[17px] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-[3px] shadow-lg shadow-blue-500/30 ${
                  isDark ? "border-[#050816]" : "border-slate-100"
                }`}
              />

              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div
                  className={`relative p-7 sm:p-8 backdrop-blur-xl rounded-2xl border transition-all duration-500 ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.06] group-hover:border-white/[0.12]"
                      : "bg-white/80 border-slate-200/80 group-hover:border-slate-300 shadow-md shadow-slate-200/40"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      {t.experience.duration}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isDark ? "text-white/40" : "text-slate-400"
                      }`}
                    >
                      {t.experience.status}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {t.experience.school}
                  </h3>
                  <p className="text-sm text-purple-500 font-semibold mb-4">
                    {t.experience.role}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-white/50" : "text-slate-600"
                    }`}
                  >
                    {t.experience.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Tailwind CSS",
                      "Git",
                      "GitHub",
                      "Figma",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${
                          isDark
                            ? "text-white/60 bg-white/[0.03] border-white/[0.05]"
                            : "text-slate-700 bg-slate-100 border-slate-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );

  /* ──────────── PROJECTS ──────────── */
  const Projects = (
    <section id="Projects" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
              {t.projects.tag}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.projects.title1}
            <br />
            <GradientText>{t.projects.title2}</GradientText>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, pi) => {
            const projectData = t.projects.items[proj.key] || {};
            const translatedProject = {
              ...proj,
              name: projectData.name || proj.key,
              desc: projectData.desc || "",
              badge: projectData.badge || "",
            };
            return (
              <RevealSection key={proj.key} delay={pi * 80}>
                <ProjectCard
                  project={translatedProject}
                  index={pi}
                  isDark={isDark}
                  t={t}
                  showToast={showToast}
                  scrollTo={scrollTo}
                />
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ──────────── CONTACT ──────────── */
  const Contact = (
    <section id="Contact" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                {t.contact.tag}
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t.contact.title1} <GradientText>{t.contact.title2}</GradientText>
            </h2>
            <p
              className={`text-sm max-w-md mx-auto ${
                isDark ? "text-white/40" : "text-slate-600"
              }`}
            >
              {t.contact.desc}
            </p>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {CONTACTS.map((c, ci) => {
            const labelText = t.contact.labels[c.key] || c.key;
            return (
              <RevealSection key={c.key} delay={ci * 80}>
                <div
                  onClick={() => {
                    if (c.copyable) {
                      navigator.clipboard?.writeText(c.value);
                      showToast(`${labelText}: ${t.contact.copiedToast}`);
                    }
                  }}
                  className="group relative block cursor-pointer"
                >
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={(e) => {
                      if (c.copyable) {
                        // Allow clicking mailto/tel but also trigger copy notification
                      }
                    }}
                  >
                    <div
                      className={`absolute -inset-[1px] bg-gradient-to-br ${c.color} rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 blur-sm`}
                    />
                    <div
                      className={`relative p-6 backdrop-blur-xl rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                        isDark
                          ? "bg-white/[0.03] border-white/[0.06] group-hover:border-white/[0.12]"
                          : "bg-white/80 border-slate-200/80 group-hover:border-slate-300 shadow-md shadow-slate-200/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <c.icon
                            size={18}
                            className={isDark ? "text-white/80" : "text-slate-800"}
                          />
                        </div>
                        {c.copyable && (
                          <Copy
                            size={14}
                            className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                              isDark ? "text-white/40" : "text-slate-400"
                            }`}
                          />
                        )}
                      </div>
                      <div
                        className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                          isDark ? "text-white/40" : "text-slate-400"
                        }`}
                      >
                        {labelText}
                      </div>
                      <div
                        className={`text-sm font-semibold transition-colors duration-300 ${
                          isDark
                            ? "text-white/80 group-hover:text-white"
                            : "text-slate-700 group-hover:text-slate-950"
                        }`}
                      >
                        {c.value}
                      </div>
                    </div>
                  </a>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );

  /* ──────────── FOOTER ──────────── */
  const Footer = (
    <footer
      className={`relative py-10 border-t ${
        isDark ? "border-white/[0.04]" : "border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <CodeXml size={12} className="text-white" />
            </div>
            <span
              className={`text-xs ${
                isDark ? "text-white/40" : "text-slate-500"
              }`}
            >
              {t.footer.copy}
            </span>
          </div>
          <p
            className={`text-xs ${
              isDark ? "text-white/30" : "text-slate-500"
            }`}
          >
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );

  /* ═══════════════════════════ RENDER ═══════════════════════════ */
  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 antialiased ${
        isDark ? "bg-[#030712] text-white" : "bg-[#f8fafc] text-slate-900"
      }`}
      style={{
        fontFamily:
          "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <SpaceBackground isDark={isDark} />

      {/* Floating Back-To-Top Button */}
      {scrolled && (
        <button
          onClick={() => scrollTo("Hero")}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/90 text-white border border-slate-700 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 text-xs font-semibold animate-bounce">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="relative z-10">
        {Navbar}
        {Hero}
        {About}
        {Skills}
        {Experience}
        {Projects}
        {Contact}
        {Footer}
      </div>
    </div>
  );
}

/* ──────────────────── PROJECT CARD ──────────────────── */
function ProjectCard({ project, index, isDark, t, showToast, scrollTo }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease-out";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    card.style.transition = "transform 0.5s ease-out";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow border on hover */}
      <div
        className={`absolute -inset-[1px] bg-gradient-to-br ${project.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm`}
      />

      <div
        className={`relative h-full backdrop-blur-xl rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
          isDark
            ? "bg-white/[0.03] border-white/[0.06] group-hover:border-white/[0.12]"
            : "bg-white/80 border-slate-200/80 group-hover:border-slate-300 shadow-lg shadow-slate-200/50"
        }`}
      >
        <div>
          <div className="relative overflow-hidden">
            <img
              className="h-[200px] w-[100%] object-cover group-hover:scale-105 transition-transform duration-500"
              src={project.image}
              alt={project.name}
            />
            {project.badge && (
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                {project.badge}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              className={`text-base font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                isDark ? "text-white/50" : "text-slate-600"
              }`}
            >
              {project.desc}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-0.5 text-[10px] font-semibold rounded-md border ${
                    isDark
                      ? "text-white/60 bg-white/[0.04] border-white/[0.05]"
                      : "text-slate-700 bg-slate-100 border-slate-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-6 pt-0 flex items-center gap-3">
          {project.isSelf ? (
            <button
              onClick={() => {
                scrollTo("Hero");
                showToast(t.projects.copiedToast);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 ${
                isDark
                  ? "text-white bg-white/[0.06] border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15]"
                  : "text-white bg-slate-900 border-slate-900 hover:bg-slate-800 shadow-sm"
              }`}
            >
              <ExternalLink size={12} />
              {t.projects.liveDemo}
            </button>
          ) : (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 ${
                isDark
                  ? "text-white bg-white/[0.06] border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15]"
                  : "text-white bg-slate-900 border-slate-900 hover:bg-slate-800 shadow-sm"
              }`}
            >
              <ExternalLink size={12} />
              {t.projects.liveDemo}
            </a>
          )}

          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 ${
                isDark
                  ? "text-white/60 bg-transparent border-white/[0.06] hover:bg-white/[0.04] hover:text-white hover:border-white/[0.12]"
                  : "text-slate-700 bg-slate-100 border-slate-200 hover:bg-slate-200 hover:text-slate-950 shadow-sm"
              }`}
            >
              <CodeXml size={12} />
              {t.projects.source}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
