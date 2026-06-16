export interface Project {
  id: number;
  titleTh: string;
  titleEn: string;
  descTh: string;
  descEn: string;
  language: string;
  tags: string[];
  github: string;
  demo?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleTh: "Weather App",
    titleEn: "Weather App",
    descTh: "แอปพยากรณ์อากาศที่สร้างด้วย TypeScript แสดงข้อมูลสภาพอากาศแบบ real-time",
    descEn: "A weather forecast app built with TypeScript displaying real-time weather data.",
    language: "TypeScript",
    tags: ["API Integration", "Real-time Data", "Responsive"],
    github: "https://github.com/arm254307977/Weather",
    demo: "https://weather-phi-lovat.vercel.app",
    color: "#3b82f6",
  },
  {
    id: 2,
    titleTh: "HBD KF",
    titleEn: "HBD KF",
    descTh: "โปรเจกต์พิเศษที่สร้างด้วย TypeScript สำหรับการอวยพร",
    descEn: "A special TypeScript project crafted as a personalized birthday greeting.",
    language: "TypeScript",
    tags: ["Creative UI", "Animation", "Personal"],
    github: "https://github.com/arm254307977/HBD_KF",
    color: "#ec4899",
  },
  {
    id: 3,
    titleTh: "Test StockRadars",
    titleEn: "Test StockRadars",
    descTh: "โปรเจกต์ทดสอบที่พัฒนาสำหรับ StockRadars โดยใช้ JavaScript",
    descEn: "A test project developed for StockRadars technical assessment using JavaScript.",
    language: "JavaScript",
    tags: ["Technical Test", "Data Display", "Clean Code"],
    github: "https://github.com/arm254307977/Test_StockRadars_Apisit",
    color: "#f59e0b",
  },
  {
    id: 4,
    titleTh: "Cannon Maps",
    titleEn: "Cannon Maps",
    descTh: "แอปแผนที่เชิงโต้ตอบที่สร้างด้วย JavaScript",
    descEn: "An interactive maps application built with JavaScript.",
    language: "JavaScript",
    tags: ["Maps API", "Interactive", "Geolocation"],
    github: "https://github.com/arm254307977/cannon-maps",
    color: "#10b981",
  },
];

export default projects;
