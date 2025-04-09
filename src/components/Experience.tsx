import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer Intern",
      company: "CareOnDemand",
      period: "May 2022 – Mar 2023",
      location: "Toronto, ON, Canada",
      description: [
        "Assisted in designing and implementing CI/CD pipelines using Jenkins, Docker, and AWS CodePipeline, AWS Codebuild reducing deployment time by 40% for mobile applications with zero downtime.",
        "Managed AWS infrastructure using AWS CloudTrail, AWS Eventbridge, maintaining EC2 instances and implementing auto-scaling for cost optimization.",
        "Implemented monitoring solutions using AWS CloudWatch, creating dashboards for application performance tracking.",
      ],
      skills: [
        "Jenkins",
        "Docker",
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS CloudTrail",
        "AWS EventBridge",
        "AWS CloudWatch",
        "EC2",
        "Auto-scaling",
      ],
    },
    {
      title: "Software Engineer Co-op",
      company: "Emera Inc",
      period: "Jan 2022 – Apr 2022",
      location: "Halifax, NS, Canada",
      description: [
        "Spearheaded full-stack development of features, MongoDB data aggregation pipelines and projections, and API enhancements, leveraging Python, TypeScript, and ReactJS, while refactoring codebase and optimizing performance to improve system efficiency and developer productivity.",
        "Optimized API routing by removing redundant endpoints and minimizing data writes, applying MVC design patterns for improved structure.",
        "Integrated third-party API Providers using Adapter Design Pattern in Python, ensuring reliable data synchronization and normalization.",
      ],
      skills: ["Python", "TypeScript", "ReactJS", "MongoDB", "API Development", "MVC Pattern", "Adapter Pattern"],
    },
    {
      title: "IT Analyst Co-op",
      company: "Dalhousie University",
      period: "Jan 2023 – Apr 2023",
      location: "Halifax, NS, Canada",
      description: [
        "Maintained lab networks, implementing VLAN configurations and documenting changes.",
        "Created Python scripts for deployment tracking and machine status monitoring.",
      ],
      skills: ["Network Management", "VLAN Configuration", "Python", "Documentation", "Monitoring"],
    },
  ]

  const education = {
    degree: "Bachelor of Computer Science",
    institution: "Dalhousie University",
    location: "Halifax, NS",
    period: "Jan 2020 - Aug 2024",
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 md:order-1 md:ml-8">
                <Briefcase className="w-5 h-5" />
              </div>

              <Card className="w-full md:w-[calc(50%-4rem)] md:order-0 md:mr-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                        <span>{exp.company}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{exp.period}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {exp.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Education */}
          <div className="relative flex items-start md:justify-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 md:order-1 md:ml-8">
              <GraduationCap className="w-5 h-5" />
            </div>

            <Card className="w-full md:w-[calc(50%-4rem)] md:order-0 md:mr-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{education.degree}</CardTitle>
                    <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                      <span>{education.institution}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{education.period}</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start md:self-center">
                    {education.location}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

