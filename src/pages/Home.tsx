import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Eye, Cloud, Server, Container, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

const skills = [
  "AWS",
  "Azure",
  "Docker",
  "Terraform",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "Linux",
];

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Decorative Icons */}
          <div className="absolute top-20 left-10 opacity-20 animate-fade-in hidden lg:block">
            <Cloud className="w-24 h-24 text-primary" />
          </div>
          <div className="absolute top-40 right-10 opacity-20 animate-fade-in hidden lg:block" style={{ animationDelay: "0.3s" }}>
            <Server className="w-20 h-20 text-secondary" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-20 animate-fade-in hidden lg:block" style={{ animationDelay: "0.5s" }}>
            <Container className="w-16 h-16 text-primary" />
          </div>

          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in inline-block">
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
    <img
  src={profileImage}
  alt="Venkata Rao Gonugunta"
  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover object-top translate-y-2 border-4 border-primary/60 shadow-2xl ring-4 ring-primary/30 mx-auto"
/>

  </div>
</div>


          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Venkata Rao Gonugunta
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Cloud & DevOps Engineer with 7+ Years of Experience
          </p>

          {/* Animated Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-500 ${
                  index === currentSkill
                    ? "border-primary bg-primary/10 text-primary scale-110 glow-primary"
                    : "border-border bg-card/50 text-muted-foreground"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Specializing in cloud infrastructure, DevOps automation, and scalable solutions 
            using AWS, Azure, Terraform, Kubernetes, and modern CI/CD pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button asChild size="lg" className="glow-primary">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="file:///E:/Downloads/Venkat_Cloud_Devops_Engineer.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="file:///E:/Downloads/Venkat_Cloud_Devops_Engineer.pdf" download>
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["AWS", "Azure", "Terraform", "Kubernetes", "Jenkins", "Linux"].map((skill, index) => (
              <div
                key={skill}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-primary transition-all duration-300 hover:glow-primary hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto p-12 bg-card border border-border rounded-2xl glow-primary">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help optimize your cloud infrastructure 
              and streamline your DevOps workflows.
            </p>
            <Button asChild size="lg" className="glow-secondary">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
