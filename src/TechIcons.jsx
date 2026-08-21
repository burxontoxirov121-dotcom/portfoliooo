import React from "react";

export function ReactIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="10" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(120 50 50)" />
    </svg>
  );
}

export function JSIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="16" fill="#F7DF1E" />
      <path
        d="M67 75c3.2 5.5 8 9.3 14.8 9.3 6.1 0 10.2-3 10.2-7.4 0-5.2-4.1-7.1-11-10l-3.8-1.7c-11-4.7-18.1-10.5-18.1-23 0-11.5 9.1-20.3 23-20.3 9.8 0 16.7 3.5 21.3 11.5l-10.5 6.7c-2.7-4.8-6.1-6.8-10.8-6.8-4.4 0-7.3 2.7-7.3 6.1 0 4.3 2.8 6.1 9.4 8.9l3.8 1.6c13.2 5.6 19.8 11.3 19.8 23.7 0 13.7-10.7 21.2-25.7 21.2-13.8 0-22.5-6.5-27-15.6L67 75zM22.5 75.8c2.5 4.3 5.9 7.4 11.3 7.4 5.2 0 8.5-2.6 8.5-12.7V23h14.7v48.1c0 17.5-10.1 25-24.8 25-11.4 0-19.4-5.8-23.2-14l13.5-6.3z"
        fill="#000000"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M25 35c4.2-8.3 10.4-12.5 18.7-12.5 12.5 0 15.6 9.4 21.9 9.4 4.2 0 7.3-2.1 9.4-6.3 4.2 8.3 10.4 12.5 18.7 12.5 12.5 0 15.6-9.4 21.9-9.4 4.2 0 7.3 2.1 9.4 6.3-4.2 8.3-10.4 12.5-18.7 12.5-12.5 0-15.6 9.4-21.9 9.4-4.2 0-7.3-2.1-9.4-6.3-4.2-8.3-10.4-12.5-18.7-12.5-12.5 0-15.6 9.4-21.9 9.4-4.2 0-7.3-2.1-9.4-6.3z"
        transform="scale(0.8) translate(12, 18)"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function HTMLIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d="M10 10L18 85L50 94L82 85L90 10H10Z" fill="#E44D26" />
      <path d="M50 87L75.5 80L82.5 17H50V87Z" fill="#F16529" />
      <path d="M50 48H32.5L31.5 35H50V24H19.5L22.5 59H50V48Z" fill="#E6E6E6" />
      <path d="M50 78.5L50.2 78.6L67 74L68.8 54H57.7L56.7 64.7L50 66.5V78.5Z" fill="#FFFFFF" />
      <path d="M50 48V35H80.5L79.5 48H50Z" fill="#FFFFFF" />
    </svg>
  );
}

export function CSSIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d="M10 10L18 85L50 94L82 85L90 10H10Z" fill="#264DE4" />
      <path d="M50 87L75.5 80L82.5 17H50V87Z" fill="#2965F1" />
      <path d="M50 48H32.5L31.5 35H50V24H19.5L22.5 59H50V48Z" fill="#E6E6E6" />
      <path d="M50 78.5L50.2 78.6L67 74L68.8 54H57.7L56.7 64.7L50 66.5V78.5Z" fill="#FFFFFF" />
      <path d="M50 48V35H80.5L79.5 48H50Z" fill="#FFFFFF" />
    </svg>
  );
}

export function ViteIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d="M92 16L53 88C52 90 48 90 47 88L8 16C7 14 9 12 11 12H89C91 12 93 14 92 16Z" fill="url(#viteGrad)" />
      <path d="M64 12L34 50H50L36 84L70 42H52L64 12Z" fill="#FFD42A" />
      <defs>
        <linearGradient id="viteGrad" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ClaudeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="#D97706" />
      <path d="M35 30H65M50 30V70M35 70H65" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      <circle cx="50" cy="50" r="8" fill="#FDE68A" />
    </svg>
  );
}

export function ChatGPTIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="24" fill="#10A37F" />
      <path
        d="M74 46c1-5-1-10-5-14-3-4-8-6-13-5-2-4-7-7-12-7-6 0-11 4-13 9-5 0-9 3-11 7-3 5-2 10 1 15-1 5 1 10 5 13 3 4 8 6 13 5 2 4 7 7 12 7 6 0 11-4 13-9 5 0 9-3 11-7 3-5 2-10-1-14z"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
    </svg>
  );
}

export function GeminiIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z"
        fill="url(#geminiGrad)"
      />
      <defs>
        <linearGradient id="geminiGrad" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#1E88E5" />
          <stop offset="0.5" stopColor="#9C27B0" />
          <stop offset="1" stopColor="#E91E63" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AntigravityIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="24" fill="url(#agGrad)" />
      <path d="M50 20L75 75H25L50 20Z" stroke="#FFFFFF" strokeWidth="7" strokeLinejoin="round" />
      <circle cx="50" cy="52" r="8" fill="#38BDF8" />
      <defs>
        <linearGradient id="agGrad" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SupabaseIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M57.4 92.6C54.7 96 49.3 94 49.5 89.7L52.7 54H12.9C8.3 54 5.6 48.8 8.4 45.1L42.6 7.4C45.3 4 50.7 6 50.5 10.3L47.3 46H87.1C91.7 46 94.4 51.2 91.6 54.9L57.4 92.6Z"
        fill="url(#supaGrad)"
      />
      <defs>
        <linearGradient id="supaGrad" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#30B275" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function APIIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="#8B5CF6" />
      <path d="M30 50H70M50 30V70" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      <circle cx="30" cy="50" r="8" fill="#F472B6" />
      <circle cx="70" cy="50" r="8" fill="#38BDF8" />
      <circle cx="50" cy="30" r="8" fill="#4ADE80" />
      <circle cx="50" cy="70" r="8" fill="#FBBF24" />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M93 45L55 7C53 5 48 5 46 7L7 46C5 48 5 53 7 55L45 93C47 95 52 95 54 93L93 54C95 52 95 47 93 45Z"
        fill="#F05032"
      />
      <path
        d="M68 47C65 47 62 49 61 52L46 37V35C49 34 51 31 51 28C51 24 47 20 43 20C38 20 35 24 35 28C35 31 37 34 40 35V61C37 62 35 65 35 68C35 72 38 76 43 76C47 76 51 72 51 68C51 65 49 63 47 61L61 47Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GitHubIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 0C22.4 0 0 22.4 0 50c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2-.1-5.2-.1-9.5-12.8 2.3-16.1-3.1-17.1-5.9-.6-1.5-3.1-5.9-5.3-7.1-1.8-1-4.4-3.4-.1-3.5 4.1-.1 7 3.8 8 5.4 4.7 7.9 12.2 5.7 15.2 4.3.5-3.4 1.8-5.7 3.3-7-11.1-1.3-22.8-5.5-22.8-24.7 0-5.5 1.9-9.9 5.2-13.4-.5-1.3-2.3-6.4.5-13.3 0 0 4.2-1.3 13.7 5.1 4-1.1 8.3-1.7 12.5-1.7s8.5.6 12.5 1.7c9.5-6.4 13.7-5.1 13.7-5.1 2.8 6.9 1 12 .5 13.3 3.3 3.5 5.2 7.9 5.2 13.4 0 19.3-11.7 23.4-22.9 24.6 1.8 1.6 3.4 4.6 3.4 9.3 0 6.7-.1 12.1-.1 13.8 0 1.3.9 2.9 3.4 2.4C85.7 90.8 100 72.1 100 50 100 22.4 77.6 0 50 0z"
      />
    </svg>
  );
}

export function FigmaIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="33" cy="20" r="16" fill="#F24E1E" />
      <circle cx="67" cy="20" r="16" fill="#FF7262" />
      <circle cx="33" cy="50" r="16" fill="#A259FF" />
      <circle cx="67" cy="50" r="16" fill="#1ABCFE" />
      <path
        d="M49 80C49 88.8 41.8 96 33 96C24.2 96 17 88.8 17 80C17 71.2 24.2 64 33 64H49V80Z"
        fill="#0ACF83"
      />
    </svg>
  );
}

export function VercelIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <polygon points="50,10 95,88 5,88" fill="currentColor" />
    </svg>
  );
}

export function NetlifyIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M45 10L10 45L45 80L80 45L45 10Z"
        fill="#25C7B7"
      />
      <circle cx="45" cy="45" r="15" fill="#00C7B7" />
    </svg>
  );
}
