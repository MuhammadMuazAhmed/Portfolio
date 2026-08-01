import { BookOpen, Code } from "lucide-react";
import cricketIcon from "@/assets/cricket-icon.png";
import badmintonIcon from "@/assets/badminton-icon.png";

const CricketImage = () => <img src={cricketIcon} alt="Cricket" className="w-full h-full object-cover" />;
const BadmintonImage = () => <img src={badmintonIcon} alt="Badminton" className="w-full h-full object-cover" />;

const hobbies = [
  {
    title: "Cricket",
    icon: CricketImage,
    description: "Teamwork & Strategy",
    details: "Teaches teamwork, strategic execution under pressure, and endurance.",
    tags: ["Teamwork", "Strategy", "Focus"],
  },
  {
    title: "Badminton",
    icon: BadmintonImage,
    description: "Agility & Reflexes",
    details: "Sharpens rapid decision making, physical agility, and mental alertness.",
    tags: ["Agility", "Reflexes", "Alertness"],
  },
  {
    title: "Books",
    icon: BookOpen,
    description: "Continuous Learning",
    details: "Expands mental models, fuels curiosity, and sharpens analytical thinking.",
    tags: ["Analysis", "Curiosity", "Growth"],
  },
  {
    title: "Coding",
    icon: Code,
    description: "Problem Solving",
    details: "Building tools, breaking down complex logic, and continuous creation.",
    tags: ["Logic", "Architecture", "Craft"],
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-12">
        {/* SECTION HEADER */}
        <div>
          <div className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
            07 // INTERESTS
          </div>
          <h2 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Off-Duty Discipline
          </h2>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            STRATEGIC PURSUITS & CONTINUOUS GROWTH
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="p-5 border border-border bg-card hover:border-primary transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3 text-center">
                <div className="mx-auto w-12 h-12 rounded-full border border-border bg-muted/30 flex items-center justify-center overflow-hidden text-primary">
                  <hobby.icon className={hobby.icon === BookOpen || hobby.icon === Code ? "w-6 h-6" : "w-full h-full object-cover"} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-foreground">
                    {hobby.title}
                  </h3>
                  <div className="text-[11px] font-mono text-primary font-semibold mt-0.5">
                    {hobby.description}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  {hobby.details}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5 pt-4 mt-4 border-t border-border font-mono">
                {hobby.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
