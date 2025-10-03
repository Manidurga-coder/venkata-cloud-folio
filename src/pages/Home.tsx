import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Mail, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const roles = [
  "AWS Solutions Architect",
  "Azure Cloud Engineer",
  "Terraform Expert",
  "Kubernetes Administrator",
  "Jenkins CI/CD Specialist",
  "Linux Systems Engineer",
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text gradient-primary">
              Venkata Rao Gonugunta
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Cloud & DevOps Engineer with 7+ Years of Experience
          </p>

          <div className="h-12 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-primary font-medium transition-opacity duration-500">
              {roles[currentRole]}
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Specializing in cloud infrastructure, DevOps automation, and scalable solutions 
            using AWS, Azure, Terraform, Kubernetes, and modern CI/CD pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button asChild size="lg" className="glow-primary">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" download>
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["AWS", "Azure", "Terraform", "Kubernetes", "Jenkins", "Linux"].map((skill, index) => (
              <div
                key={skill}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-primary transition-all duration-300 hover:glow-primary animate-slide-up"
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
