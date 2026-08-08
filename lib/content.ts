export const socialLinks = [
  { label: "GitHub", href: "https://github.com/trffnsec" },
  { label: "X", href: "https://x.com/trffnsec" },
  { label: "Medium", href: "https://medium.com/@trffnsec" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/trffnsec" },
  { label: "Instagram", href: "https://instagram.com/trff.in" },
  { label: "YouTube", href: "https://youtube.com/c/trffnsec" },
];

export const posts = [
  {
    title: "How a YouTube Video Led Me to $650 - My Host Header Injection Adventure",
    excerpt: "A real-world bug bounty story where a simple YouTube video sparked a successful Host Header Injection discovery - from mindset and testing to a $650 reward.",
    date: "2024",
    tag: "BUG BOUNTY / WEB SECURITY",
    href: "https://medium.com/@trffnsec/how-a-youtube-video-led-me-to-650-my-host-header-injection-adventure-696fd82b2886",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/TrffnSec-reward-card-2025_12_14_00_25_59.png",
  },
  {
    title: "How a Lazy Bug Bounty Hunter got a place on NASA HOF (An XSS Story)",
    excerpt: "How a laid-back afternoon on NASA subdomains turned into an XSS finding and a place in NASA's Hall of Fame - including recon, payloads, and reporting lessons.",
    date: "NOV 22, 2025",
    tag: "XSS / FIELD NOTE",
    href: "https://medium.com/@trffnsec/how-a-lazy-bug-bounty-hunter-got-a-place-on-nasa-hof-an-xss-story-e14fccc326e2",
    image: "https://i.makeagif.com/media/11-30-2015/JoHJug.gif",
  },
  {
    title: "How I Found a 100€ Bug at DCU - From Not Applicable to Cashing In",
    excerpt: "A Medium-severity finding at DCU that moved from Not Applicable to a successful reward, with the research methodology and reporting process behind it.",
    date: "OCT 15, 2025",
    tag: "METHODOLOGY / REPORTING",
    href: "https://medium.com/@trffnsec/how-i-found-a-100-bug-at-dcu-from-not-applicable-to-cashing-in-2e58699a8faa",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/IMG_9731.jpg.webp",
  },
];

export const certifications = [
  {
    title: "Android Bug Bounty Hunting",
    issuer: "CodeRed / EC-Council",
    description: "Completed “Android Bug Bounty Hunting: Hunt Like a Rat”, focused on identifying, analysing, and exploiting real-world Android application vulnerabilities and mobile attack surfaces.",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/Android_Bug_Hunting.png",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    description: "Completed Google's Crash Course on Python, building a foundation in Python programming, core concepts, and practical problem-solving for real-world applications.",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/Coursera%209VVAG3SXYABV_page-0001.jpg",
  },
  {
    title: "Hall of Fame from NASA",
    issuer: "NASA",
    description: "Received an official certificate of acknowledgement from NASA for responsibly reporting a security vulnerability on their domain.",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/VDP-cropped.jpg",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    description: "Earned the Certified Ethical Hacker certification, demonstrating knowledge of ethical hacking techniques, cybersecurity fundamentals, and real-world attack and defence methodologies.",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/ECC-CEH-Certificate_page-0001.jpg",
  },
  {
    title: "Acknowledgements from Apple",
    issuer: "Apple",
    description: "Received five acknowledgements from Apple for responsibly reporting five different web application security vulnerabilities.",
    image: "https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/Screenshot%202025-12-14%20at%2020.11.01.png",
  },
];

export const acknowledgements = [
  ["APPLE", "Five web server security acknowledgements for responsibly disclosed vulnerabilities."],
  ["NASA", "Acknowledged for identifying and responsibly reporting a security issue on a NASA domain."],
  ["TRIVAGO", "Recognition for responsibly disclosing a security vulnerability."],
  ["HARMAN", "Acknowledged for reporting a valid security issue through responsible disclosure."],
  ["DCU", "Official acknowledgement from Dublin City University for identifying multiple security vulnerabilities."],
  ["FLYNAS", "Acknowledged for responsibly reporting a security issue affecting the platform."],
  ["ZAIN", "Recognition from the Zain mobile application for discovering and responsibly disclosing a vulnerability."],
] as const;

export const companiesCrawled = ["APPLE", "AMAZON", "LYFT", "YAHOO", "META", "TIKTOK", "NETFLIX", "RED BULL", "AIRBNB", "ZOOM"];

export const videoIds = ["1ve-YrLOE7E", "evyxNUzl-HA", "2IZYwRQ43zw", "Ifo1vIdfyhg", "OIP-kflO8SI", "YMt-UVPE7UI", "W5Fp7poQbmQ", "fUhBiIpv61Y"];

export const books = [
  ["Real-World Bug Hunting: A Field Guide to Web Hacking", "https://amzn.to/2yYHzUj"],
  ["The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws", "https://amzn.to/2zbieqx"],
  ["Black Hat GraphQL: Attacking Next Generation APIs", "https://amzn.to/4gfwGzJ"],
  ["Hacking APIs: Breaking Web Application Programming Interfaces", "https://amzn.to/40rgNQQ"],
  ["Black Hat Go: Go Programming For Hackers and Pentesters", "https://amzn.to/3WAI1n8"],
  ["Linux Basics for Hackers: Getting Started with Networking, Scripting, and Security in Kali", "https://amzn.to/42vGan2"],
] as const;

export const learningLinks = [
  ["HTTP fundamentals", "Methods, headers, cookies, status codes, and the request/response model.", "https://www.tutorialspoint.com/http/index.htm"],
  ["Networking basics", "TCP/IP, UDP, ports, the OSI model, firewalls, proxies, and VPNs.", "https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols"],
  ["DNS", "Lookups, records, resolution, subdomains, and the role DNS plays in attack surface discovery.", "https://www.cloudflare.com/learning/dns/what-is-dns/"],
  ["PortSwigger Academy", "Free hands-on labs for web application vulnerabilities.", "https://portswigger.net/web-security"],
  ["OWASP Top 10", "A useful map of common web application security risks.", "https://owasp.org/Top10/"],
  ["OverTheWire Bandit", "Interactive practice for Linux and command-line fundamentals.", "https://overthewire.org/wargames/bandit/"],
] as const;

export const additionalResources = [
  ["HackingHub.io", "Realistic security practice", "https://hhub.io/nahamsec"],
  ["PentesterLab", "Hands-on web app security labs", "https://pentesterlab.com/"],
  ["Hack The Box", "Virtual machines and challenges", "https://hackthebox.com"],
  ["TryHackMe", "Guided learning rooms", "https://tryhackme.com"],
  ["Critical Thinking", "A bug bounty podcast", "https://www.criticalthinkingpodcast.io/"],
  ["Bug Bounty Explained", "Clear bug bounty explanations", "https://www.bugbountyexplained.com/"],
  ["HackerOne Hacktivity", "Publicly disclosed bounty reports", "https://hackerone.com/hacktivity/overview"],
] as const;
