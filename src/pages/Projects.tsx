import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import cicdImage from "@/assets/project-cicd.jpg";
import k8sImage from "@/assets/project-k8s.jpg";
import cloudImage from "@/assets/project-cloud.jpg";

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Designed and implemented comprehensive CI/CD pipelines for Java microservices using Jenkins and GitHub Actions. Achieved 70% reduction in deployment time and improved code quality with automated testing stages.",
    image: cicdImage,
    tech: ["Jenkins", "GitHub Actions", "Maven", "Docker", "SonarQube"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Kubernetes Infrastructure Setup",
    description:
      "Deployed and managed production-grade Kubernetes clusters on AWS EKS and Azure AKS. Implemented Helm charts for application deployment, configured Ingress controllers, and set up monitoring with Prometheus and Grafana.",
    image: k8sImage,
    tech: ["AWS EKS", "Azure AKS", "Helm", "Terraform", "Prometheus", "Grafana"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Cloud Migration Strategy",
    description:
      "Led the migration of legacy on-premise infrastructure to AWS cloud. Utilized Infrastructure as Code with Terraform, automated deployments with Python (Boto3), and achieved 40% cost reduction through resource optimization.",
    image: cloudImage,
    tech: ["AWS", "Terraform", "Python", "Boto3", "CloudWatch", "Lambda"],
    demoLink: "#",
    githubLink: "#",
  },
   {
    title: "AWS Migration Strategy",
    description:
      "Led the migration of legacy on-premise infrastructure to AWS cloud. Utilized Infrastructure as Code with Terraform, automated deployments with Python (Boto3), and achieved 40% cost reduction through resource optimization.",
    image: cloudImage,
    tech: ["AWS", "Terraform", "Python", "Boto3", "CloudWatch", "Lambda"],
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of cloud infrastructure and DevOps automation projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:glow-primary animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-sm rounded-full border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button asChild variant="default">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
