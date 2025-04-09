import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import WhyImBrokeImage from "../assets/images/whyimbroke-logo.svg"

const Projects = () => {
  const projects = [
    {
      title: "WhyImBroke - AI Expense Manager",
      description:
        "A cutting-edge personal finance solution that harnesses AI to equip college students with the insights needed for effective financial planning and decision-making.",
      details: [
        "Building scalable backend APIs to oversee user profiles, financial transactions, and budgeting frameworks, laying a strong groundwork for seamless integration of future AI-powered capabilities.",
        "Emphasizing a maintainable and adaptable application through a meticulously designed data model paired with an accessible, user-friendly interface in the initial development phase.",
        "Implementing secure authentication, data visualization, and financial insights to help users understand their spending patterns and make informed decisions.",
      ],
      technologies: ["TypeScript", "React.js", "Express.js", "Node.js", "AWS", "MongoDB", "GitHub"],
      image: WhyImBrokeImage,
      github: "https://github.com/anishgondhi04/WhyImBroke",
      demo: "https://github.com/anishgondhi04/WhyImBroke",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Here are some of the projects I've worked on. Each project represents different skills and challenges I've
            tackled.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 md:px-20 lg:px-52 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

