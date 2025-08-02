import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Adobe After Effects",
      organization: "Orange Digital Center Madagascar",
      date: "March 2025",
      type: "Course Completion"
    },
    {
      title: "Figma for UX/UI Design",
      organization: "Orange Digital Center Madagascar",
      date: "February 2024",
      type: "Course Completion"
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-ocean-mist/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-ocean-primary" />
            <h2 className="text-4xl font-bold text-foreground">Certificates & Trainings</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-wave transition-all duration-300 border-ocean-light/20 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-ocean-deep leading-tight">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-ocean-primary font-semibold">
                  {cert.organization}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-ocean-primary text-ocean-primary">
                    {cert.date}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {cert.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;