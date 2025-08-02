import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Ministry of Economy and Finance Madagascar",
      position: "Software Developer Intern",
      duration: "April 2025 - July 2025",
      achievements: [
        "Create frontend components for the private platform of the Ministry of Economy and Finance Madagascar",
        "Integrated RESTful APIs to enhance data retrieval and user interaction on the platform",
        "Integration API Models AI to generate code."
      ]
    },
    {
      company: "42 School Madagascar",
      position: "Piscine Discovery Python Participant",
      duration: "March 2025 - March 2025",
      achievements: [
        "Completed a discovery 1-week intensive coding bootcamp focused on Python programming",
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-ocean-primary" />
            <h2 className="text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey building amazing web experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-wave transition-all duration-300 border-ocean-light/20">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-ocean-deep">{exp.company}</CardTitle>
                    <p className="text-ocean-primary font-semibold">{exp.position}</p>
                  </div>
                  <Badge variant="outline" className="w-fit border-ocean-primary text-ocean-primary">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-ocean-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;