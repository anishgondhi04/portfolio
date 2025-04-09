import { Card, CardContent } from "./ui/card"
import Portfolio from "../assets/images/portfolio_picture.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-auto">
          <div className="mb-5 pb-5 rounded-full max-w-lg">
            <Card className="max-w-lg border-none shadow-lg rounded-full ">
              <CardContent className="p-0">
                <img src={Portfolio || "/placeholder.svg"} alt="Anish Gondhi" className="w-auto h-auto rounded-full" />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              DevOps Engineer & Software Developer specializing in cloud infrastructure and full-stack development
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate DevOps Engineer and Software Developer with experience in designing and implementing
              CI/CD pipelines, managing cloud infrastructure, and developing full-stack applications using modern
              technologies.
            </p>

            <p className="text-muted-foreground">
              With a background in Computer Science from Dalhousie University, I've worked on various projects ranging
              from optimizing deployment processes to building scalable backend APIs. I enjoy tackling complex problems
              and continuously learning new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium mb-2">Name:</h4>
                <p className="text-muted-foreground">Anish Gondhi</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email:</h4>
                <p className="text-muted-foreground">anishgondhi@outlook.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location:</h4>
                <p className="text-muted-foreground">Halifax, NS, Canada</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

