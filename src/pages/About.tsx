import { Cloud, Server, Container, GitBranch, Shield, Terminal } from "lucide-react";

const skills = [
  { icon: Cloud, name: "AWS & Azure", description: "Cloud architecture & solutions" },
  { icon: Container, name: "Docker & K8s", description: "Container orchestration" },
  { icon: GitBranch, name: "CI/CD", description: "Jenkins, GitHub Actions" },
  { icon: Server, name: "IaC", description: "Terraform, Ansible, CloudFormation" },
  { icon: Terminal, name: "Linux", description: "System administration & scripting" },
  { icon: Shield, name: "Security", description: "DevSecOps practices" },
];

const timeline = [
  {
    year: "2017-2019",
    role: "Linux Administrator",
    description: "Started with system administration, server management, and shell scripting",
  },
  {
    year: "2019-2021",
    role: "DevOps Engineer",
    description: "Transitioned to DevOps, implementing CI/CD pipelines and automation",
  },
  {
    year: "2021-Present",
    role: "DevOps Cloud Engineer",
    description: "Leading cloud migrations, infrastructure automation, and Kubernetes deployments",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Professional Summary */}
        <section className="mb-20 animate-slide-up">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Professional Summary
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With over 7 years of comprehensive experience in Cloud and DevOps engineering, 
              I specialize in designing, implementing, and managing scalable cloud infrastructure 
              solutions. My expertise spans across AWS and Azure cloud platforms, with deep knowledge 
              in containerization, orchestration, and Infrastructure as Code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about automation, continuous improvement, and building robust CI/CD 
              pipelines that enable teams to deliver high-quality software faster and more reliably. 
              My approach combines technical expertise with strong problem-solving skills to tackle 
              complex infrastructure challenges.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:glow-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Career Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-1 md:w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary"></div>

                  {/* Content */}
                  <div className="flex-1 md:w-1/2 ml-8 md:ml-0">
                    <div
                      className={`bg-card border border-border rounded-xl p-6 ${
                        index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                      }`}
                    >
                      <span className="text-primary font-semibold">{item.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{item.role}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
