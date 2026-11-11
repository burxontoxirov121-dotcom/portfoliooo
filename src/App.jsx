import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Check,
  Copy,
  CheckCircle2,
  ArrowUp,
  Send,
  Menu,
  X,
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
} from "./TechIcons";

const GITHUB = "https://github.com/burxontoxirov121-dotcom";

const NAV_KEYS = ["Hero", "About", "Skills", "Experience", "Projects", "Contact"];

const MARQUEE = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Vite",
  "Supabase",
  "Figma",
  "GitHub",
  "Claude",
  "Gemini",
  "REST API",
];

const SKILL_ITEMS = [
  { name: "React.js", category: "Frontend", icon: ReactIcon, levelKey: "advanced" },
  { name: "JavaScript (ES6+)", category: "Frontend", icon: JSIcon, levelKey: "advanced" },
  { name: "Tailwind CSS", category: "Frontend", icon: TailwindIcon, levelKey: "advanced" },
  { name: "HTML5", category: "Frontend", icon: HTMLIcon, levelKey: "proficient" },
  { name: "CSS3 / Modern UI", category: "Frontend", icon: CSSIcon, levelKey: "proficient" },
  { name: "Vite", category: "Frontend", icon: ViteIcon, levelKey: "proficient" },
  { name: "Claude AI", category: "AI", icon: ClaudeIcon, levelKey: "expert" },
  { name: "ChatGPT (OpenAI)", category: "AI", icon: ChatGPTIcon, levelKey: "expert" },
  { name: "Google Gemini", category: "AI", icon: GeminiIcon, levelKey: "daily" },
  { name: "Antigravity & AI Code", category: "AI", icon: AntigravityIcon, levelKey: "expert" },
  { name: "Supabase", category: "Database", icon: SupabaseIcon, levelKey: "proficient" },
  { name: "REST API & Axios", category: "Database", icon: APIIcon, levelKey: "advanced" },
  { name: "Git & Version Control", category: "Tools", icon: GitIcon, levelKey: "proficient" },
  { name: "GitHub", category: "Tools", icon: GitHubIcon, levelKey: "proficient" },
  { name: "Figma (UI/UX)", category: "Tools", icon: FigmaIcon, levelKey: "proficient" },
  { name: "Vercel / Netlify", category: "Tools", icon: VercelIcon, levelKey: "daily" },
];

const PROJECTS = [
  {
    key: "Zolvi",
    techs: ["React", "Next.js", "TypeScript", "AI"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    href: "https://zolvi.uz",
    domain: "zolvi.uz",
  },
  {
    key: "Formo",
    techs: ["React", "Next.js", "E-commerce", "UI"],
    image: "https://formo-v4.vercel.app/og.png",
    href: "https://formo.uz",
    domain: "formo.uz",
  },
];

const CONTACTS = [
  {
    key: "Phone",
    icon: Phone,
    value: "+998 90 809 00 04",
    href: "tel:+998908090004",
    copyable: true,
  },
  {
    key: "Email",
    icon: Mail,
    value: "burxontoxirov121@gmail.com",
    href: "mailto:burxontoxirov121@gmail.com",
    copyable: true,
  },
  {
    key: "Telegram",
    icon: MessageCircle,
    value: "@BBB7I2",
    href: "https://t.me/BBB7I2",
  },
  {
    key: "LinkedIn",
    icon: BriefcaseBusiness,
    value: "Burxon Toxirov",
    href: "https://www.linkedin.com/in/burxontoxirov/",
  },
];

function Atmosphere({ isDark }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let raf = 0;
    const dots = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      dots.length = 0;
      const count = Math.min(70, Math.floor((w * h) / 22000));
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + 0.2,
          v: Math.random() * 0.18 + 0.03,
          a: Math.random() * 0.45 + 0.15,
        });
      }
    };

    const frame = (t) => {
      ctx.clearRect(0, 0, w, h);
      const orbs = isDark
        ? [
            [0.18, 0.22, 460, "rgba(214,255,74,0.09)"],
            [0.82, 0.12, 340, "rgba(255,255,255,0.045)"],
            [0.72, 0.86, 500, "rgba(214,255,74,0.05)"],
          ]
        : [
            [0.16, 0.2, 420, "rgba(190,214,40,0.2)"],
            [0.84, 0.18, 320, "rgba(20,20,20,0.04)"],
            [0.6, 0.85, 460, "rgba(190,214,40,0.12)"],
          ];

      for (const [px, py, rad, color] of orbs) {
        const ox = w * px + Math.sin(t * 0.0002) * 36;
        const oy = h * py + Math.cos(t * 0.00016) * 28;
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, rad);
        g.addColorStop(0, color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.fillStyle = isDark ? "rgba(255,255,255,0.7)" : "rgba(20,20,20,0.45)";
      for (const dot of dots) {
        dot.y -= dot.v;
        if (dot.y < -4) dot.y = h + 4;
        ctx.globalAlpha = dot.a;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    init();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return <canvas ref={ref} className="atmosphere" aria-hidden="true" />;
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !window.IntersectionObserver) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.02, rootMargin: "0px 0px -20px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function GithubMark({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 3.87c.68 0 1.36.09 2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [skillCategory, setSkillCategory] = useState("ALL");
  const [toastMsg, setToastMsg] = useState("");
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio_lang") || "uz");
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return saved ? saved === "dark" : true;
  });
  const glowRef = useRef(null);
  const dropdownRef = useRef(null);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.uz;

  const changeLang = (code) => {
    setLang(code);
    localStorage.setItem("portfolio_lang", code);
    setLangOpen(false);
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("portfolio_theme", next ? "dark" : "light");
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    window.setTimeout(() => setToastMsg(""), 2400);
  };

  const scrollTo = (id) => {
    setMobileOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 15);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 12);
        setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
        let current = "Hero";
        for (const id of NAV_KEYS) {
          const sec = document.getElementById(id);
          if (sec && sec.getBoundingClientRect().top <= 160) current = id;
        }
        setActiveSection(current);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 230}px, ${e.clientY - 230}px)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const filteredSkills =
    skillCategory === "ALL"
      ? SKILL_ITEMS
      : SKILL_ITEMS.filter((item) => item.category === skillCategory);

  const loop = [...MARQUEE, ...MARQUEE];

  return (
    <div className="site" data-theme={isDark ? "dark" : "light"}>
      <Atmosphere isDark={isDark} />
      <svg className="noise" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div className="progress" style={{ width: `${progress}%` }} />

      <div className="shell">
        <header className={`nav ${scrolled || mobileOpen ? "scrolled is-open" : ""}`}>
          <div className="nav-inner">
            <button className="logo" onClick={() => scrollTo("Hero")}>
              <span className="mark">BT</span>
              <span className="wordmark">
                Burxon<span>.dev</span>
              </span>
            </button>

            <nav className="nav-links">
              {NAV_KEYS.map((key) => (
                <button
                  key={key}
                  className="nav-link"
                  data-active={activeSection === key}
                  onClick={() => scrollTo(key)}
                >
                  {t.nav[key]}
                </button>
              ))}
            </nav>

            <div className="nav-actions">
              <div className="relative" ref={dropdownRef}>
                <button className="lang-btn" onClick={() => setLangOpen((v) => !v)}>
                  <Globe size={13} />
                  {lang.toUpperCase()}
                  <ChevronDown size={12} />
                </button>
                {langOpen && (
                  <div className="menu">
                    {[
                      { code: "uz", label: "O'zbekcha" },
                      { code: "ru", label: "Русский" },
                      { code: "en", label: "English" },
                    ].map((item) => (
                      <button
                        key={item.code}
                        data-on={lang === item.code}
                        onClick={() => changeLang(item.code)}
                      >
                        {item.label}
                        {lang === item.code && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a className="btn btn-lime desktop-only" href="https://t.me/BBB7I2" target="_blank" rel="noreferrer">
                <Send size={15} />
                Telegram
              </a>
              <button
                className="icon-btn mobile-only"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className="mobile-panel">
              {NAV_KEYS.map((key) => (
                <button
                  key={key}
                  data-active={activeSection === key}
                  onClick={() => scrollTo(key)}
                >
                  <span>{t.nav[key]}</span>
                  <ArrowRight size={14} style={{ opacity: activeSection === key ? 1 : 0.35 }} />
                </button>
              ))}
              <a
                className="mobile-panel-cta"
                href="https://t.me/BBB7I2"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <Send size={15} />
                Telegram
              </a>
            </div>
          )}
        </header>

        <section className="hero" id="Hero">
          <div className="hero-grid" />
          <div className="hero-wrap">
            <div>
              <Reveal>
                <div className="eyebrow">
                  <span className="pulse" />
                  {t.hero.availableBadge}
                </div>
              </Reveal>
              <h1 className="display">
                <span className="stroke">{t.hero.titleFirstName}</span>
                <span className="fill">{t.hero.titleLastName}</span>
              </h1>
              <p className="lede">
                {t.hero.subtitle}. {t.hero.desc}
              </p>
              <div className="hero-actions">
                <button className="btn btn-lime" onClick={() => scrollTo("Projects")}>
                  {t.hero.viewProjects}
                  <ArrowRight size={16} />
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo("Contact")}>
                  {t.hero.contactMe}
                </button>
              </div>
              <div className="socials">
                <a className="github-hot" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubMark />
                </a>
                <a href="https://t.me/BBB7I2" target="_blank" rel="noreferrer" aria-label="Telegram">
                  <MessageCircle size={16} />
                </a>
                <a href="mailto:burxontoxirov121@gmail.com" aria-label="Email">
                  <Mail size={16} />
                </a>
                <a href="https://www.linkedin.com/in/burxontoxirov/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <BriefcaseBusiness size={16} />
                </a>
              </div>
            </div>

            <Reveal delay={120}>
              <aside className="dossier">
                <div className="dossier-in">
                  <div className="dossier-top">
                    <span>BT</span>
                    <span>2026</span>
                  </div>
                  <h2>{t.hero.subtitle}</h2>
                  <p>{t.hero.location}</p>
                  <div className="dossier-stats">
                    <div>
                      <strong>16</strong>
                      <span>{t.about.stats.yearsOld}</span>
                    </div>
                    <div>
                      <strong>3</strong>
                      <span>{t.about.stats.yearExperience}</span>
                    </div>
                    <div>
                      <strong>8+</strong>
                      <span>{t.about.stats.projectsBuilt}</span>
                    </div>
                  </div>
                  <a className="btn btn-lime" href={GITHUB} target="_blank" rel="noreferrer">
                    <GithubMark size={15} />
                    {t.contact.githubAction}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
          <div className="side-index">BURXON.DEV — {t.hero.location}</div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {loop.map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <i />
              </span>
            ))}
          </div>
        </div>

        <section className="section" id="About">
          <div className="wrap">
            <Reveal>
              <div className="kicker">{t.about.tag}</div>
              <h2 className="h2">
                {t.about.title1}
                <br />
                <span className="serif">{t.about.title2}</span>
              </h2>
            </Reveal>
            <div className="about-grid">
              <Reveal>
                <article className="panel">
                  <p className="quote">“{t.about.quote}”</p>
                  <p className="bio">{t.about.bioP1}</p>
                  <p className="bio">{t.about.bioP2}</p>
                </article>
              </Reveal>
              <div className="stat-grid">
                {[
                  ["16", "yearsOld"],
                  ["3", "yearExperience"],
                  ["5+", "technologies"],
                  ["8+", "projectsBuilt"],
                ].map(([value, key], i) => (
                  <Reveal key={key} delay={i * 70}>
                    <article className="stat">
                      <b>{value}</b>
                      <span>{t.about.stats[key]}</span>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="pillars">
              {t.about.highlights?.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <article className="panel pillar">
                    <div className="kicker">0{i + 1}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="Skills" style={{ paddingTop: 40 }}>
          <div className="wrap">
            <Reveal>
              <div className="kicker">{t.skills.tag}</div>
              <h2 className="h2">
                {t.skills.title1} <span className="serif">{t.skills.title2}</span>
              </h2>
              <p className="lede" style={{ marginTop: 16 }}>
                {t.skills.desc}
              </p>
              <div className="filters">
                {[
                  ["ALL", t.skills.filterAll],
                  ["Frontend", t.skills.categories.Frontend],
                  ["AI", t.skills.categories.AI],
                  ["Database", t.skills.categories.Database],
                  ["Tools", t.skills.categories.Tools],
                ].map(([cat, label]) => (
                  <button
                    key={cat}
                    className="chip"
                    data-on={skillCategory === cat}
                    onClick={() => setSkillCategory(cat)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Reveal>
            <div className="skills">
              {filteredSkills.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="skill" key={item.name}>
                    <div className="skill-ico">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <small>{t.skills.levels[item.levelKey]}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="Experience">
          <div className="wrap">
            <Reveal>
              <div className="kicker">{t.experience.tag}</div>
              <h2 className="h2">
                {t.experience.title1} <span className="serif">{t.experience.title2}</span>
              </h2>
            </Reveal>
            <div className="timeline">
              <article className="panel job">
                <div className="meta">
                  <span className="badge">{t.experience.duration}</span>
                  <span>{t.experience.status}</span>
                </div>
                <h3>{t.experience.school}</h3>
                <p className="role">{t.experience.role}</p>
                <p className="bio" style={{ marginTop: 14 }}>
                  {t.experience.desc}
                </p>
                <div className="tags">
                  {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "GitHub", "Figma"].map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="Projects">
          <div className="wrap">
            <Reveal>
              <div className="kicker">{t.projects.tag}</div>
              <h2 className="h2">
                {t.projects.title1} <span className="serif">{t.projects.title2}</span>
              </h2>
            </Reveal>
            <div className="projects">
              {PROJECTS.map((proj, index) => (
                <ProjectCard
                  key={proj.key}
                  project={{ ...proj, ...(t.projects.items[proj.key] || {}) }}
                  index={index}
                  liveLabel={t.projects.liveDemo}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="Contact">
          <div className="wrap">
            <Reveal>
              <div className="kicker">{t.contact.tag}</div>
              <h2 className="h2">
                {t.contact.title1} <span className="serif">{t.contact.title2}</span>
              </h2>
              <p className="lede" style={{ marginTop: 16 }}>
                {t.contact.desc}
              </p>
            </Reveal>

            <a className="github-banner" href={GITHUB} target="_blank" rel="noreferrer">
              <div>
                <div className="kicker" style={{ color: "#12160a" }}>
                  GitHub
                </div>
                <strong>burxontoxirov121-dotcom</strong>
                <p>{t.contact.githubDesc}</p>
              </div>
              <span className="btn">
                {t.contact.githubAction}
                <ArrowUpRight size={16} />
              </span>
            </a>

            <div className="contacts">
              {CONTACTS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    className="contact"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    onClick={() => {
                      if (!item.copyable) return;
                      navigator.clipboard?.writeText(item.value);
                      showToast(`${t.contact.labels[item.key]}: ${t.contact.copiedToast}`);
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <Icon size={18} />
                      {item.copyable && <Copy size={14} />}
                    </div>
                    <small>{t.contact.labels[item.key]}</small>
                    <b>{item.value}</b>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <footer className="foot">
          <span>{t.footer.copy}</span>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            {t.footer.madeWith}
          </a>
        </footer>
      </div>

      {scrolled && (
        <button className="top-btn" onClick={() => scrollTo("Hero")} aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      )}
      {toastMsg && (
        <div className="toast">
          <CheckCircle2 size={16} />
          {toastMsg}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, liveLabel }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.setProperty("--x", `${(x / r.width) * 100}%`);
    card.style.setProperty("--y", `${(y / r.height) * 100}%`);
    const rotX = ((y - r.height / 2) / r.height) * -4;
    const rotY = ((x - r.width / 2) / r.width) * 5;
    card.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }, []);
  const onLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "none";
  }, []);

  return (
    <a
      ref={ref}
      className="project"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <img src={project.image} alt={project.name || project.key} />
      <div className="project-shade" />
      <div className="project-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span className="num">{String(index + 1).padStart(2, "0")}</span>
          {project.badge && <span className="domain">{project.badge}</span>}
        </div>
        <div>
          <div className="domain">
            <u />
            {project.domain}
          </div>
          <h3>{project.name || project.key}</h3>
          <p>{project.desc}</p>
          <div className="tags">
            {project.techs.map((tech) => (
              <span className="tech" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <span className="go">
            {liveLabel}
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}
