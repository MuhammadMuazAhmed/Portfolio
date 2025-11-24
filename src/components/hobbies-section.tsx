import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Code } from "lucide-react";
import { motion } from "framer-motion";
import cricketIcon from "@/assets/cricket-icon.png";
import badmintonIcon from "@/assets/badminton-icon.png";

const CricketImage = () => <img src={cricketIcon} alt="Cricket" className="w-full h-full object-cover" />;
const BadmintonImage = () => <img src={badmintonIcon} alt="Badminton" className="w-full h-full object-cover" />;

const hobbies = [
  {
    title: "Cricket",
    icon: CricketImage,
    description: "Teamwork & Strategy",
    details: "Playing cricket teaches me the value of teamwork, strategic planning under pressure, and patience.",
    tags: ["Teamwork", "Strategy", "Patience"],
  },
  {
    title: "Badminton",
    icon: BadmintonImage,
    description: "Agility & Focus",
    details: "Badminton requires quick reflexes and sharp focus. It helps me maintain physical agility and mental alertness.",
    tags: ["Agility", "Focus", "Reflexes"],
  },
  {
    title: "Books",
    icon: BookOpen,
    description: "Continuous Learning",
    details: "Reading expands my perspective and fuels my curiosity. It enhances my vocabulary and critical thinking abilities.",
    tags: ["Learning", "Curiosity", "Perspective"],
  },
  {
    title: "Coding",
    icon: Code,
    description: "Problem Solving",
    details: "Coding allows me to create, solve complex problems, and continuously build things that make a difference.",
    tags: ["Problem Solving", "Logic", "Creativity"],
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 font-heading">Hobbies & Interests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond the code, I engage in activities that keep me balanced and sharpen my soft skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="text-center pb-2 flex-grow">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 overflow-hidden border border-primary/20 text-primary">
                    <hobby.icon className={hobby.icon === BookOpen || hobby.icon === Code ? "w-8 h-8" : "w-full h-full object-cover"} />
                  </div>
                  <CardTitle className="text-xl font-heading mb-2">{hobby.title}</CardTitle>
                  <p className="text-sm text-primary font-medium mb-2">{hobby.description}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {hobby.details}
                  </CardDescription>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {hobby.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
