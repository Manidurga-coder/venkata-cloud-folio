import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";
import awsCert from "@/assets/cert-aws.png";
import ckaCert from "@/assets/cert-cka.png";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    image: awsCert,
    description:
      "Validates expertise in designing distributed systems on AWS, including compute, networking, storage, and database services.",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    image: ckaCert,
    description:
      "Demonstrates ability to perform responsibilities of Kubernetes administrators, including installation, configuration, and management of production-grade Kubernetes clusters.",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cloud technologies and DevOps practices
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:glow-primary animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge Image */}
              <div className="relative bg-muted p-8 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-48 h-48 object-contain hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <CardTitle className="text-xl leading-tight">{cert.name}</CardTitle>
                </div>
                <CardDescription className="text-base font-medium text-foreground">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.date}</span>
                </div>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-card border border-border rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
            <p className="text-muted-foreground max-w-2xl">
              I'm committed to staying current with the latest cloud technologies and DevOps practices. 
              Currently pursuing additional certifications in Azure and advanced Kubernetes specializations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
