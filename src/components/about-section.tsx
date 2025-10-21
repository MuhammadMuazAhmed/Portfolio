export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate BS Software Engineering student currently in my 7th semester, 
              dedicated to building innovative web applications and exploring the fascinating 
              world of cybersecurity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across the MERN stack, Next.js, TypeScript, and Tailwind CSS. 
              I love creating user-centric applications that solve real-world problems while 
              maintaining high security standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me diving deep into ethical hacking concepts, 
              learning new cybersecurity techniques, or contributing to open-source projects.
            </p>
          </div>
          
          <div className="bg-card border border-card-border rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-semibold">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Education:</span>
                <span>BS Software Engineering</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Semester:</span>
                <span>7th Semester</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focus:</span>
                <span>Full Stack Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interest:</span>
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}