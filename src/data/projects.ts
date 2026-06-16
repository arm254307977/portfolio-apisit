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
  icon: string;
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
    demo: "https://weather-by-arm.vercel.app/",
    color: "#3b82f6",
    icon: "weather",
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
    demo: "https://birthday-kf.netlify.app/",
    color: "#ec4899",
    icon: "heart",
  },
  {
    id: 3,
    titleTh: "Test Old Man",
    titleEn: "Test Old Man",
    descTh: "โปรเจกต์ทดสอบการตอบสนองของผู้สูงอายุ พัฒนาเพื่อให้มหาวิทยาลัยนำไปทดลองใช้",
    descEn: "A response-testing application for elderly users, developed for university research.",
    language: "JavaScript",
    tags: ["UX Research", "Accessibility", "University"],
    github: "https://github.com/arm254307977/arm-test-oldMan",
    demo: "https://test-old-man.netlify.app/",
    color: "#f59e0b",
    icon: "chart",
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
    demo: "https://connon-maps-up.netlify.app/",
    color: "#10b981",
    icon: "map",
  },
];

export default projects;
