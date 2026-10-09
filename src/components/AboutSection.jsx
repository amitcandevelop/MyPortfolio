import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return <section id='about' className='py-24 px-4 relative '>
    {" "}
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
        About <span className='text-primary' >Me</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

        <div className='space-y-6 '>
          <h3 className="text-2xl font-semibold">Passionate Web Developer </h3>

          <p className=' text-muted-foreground'>
            I'm a software developer passionate about creating modern and user-friendly web
            applications. My journey started with frontend development, and I've gradually
            expanded my interests toward backend development, databases, and system design.
            I enjoy solving problems, learning new technologies, and building projects that
            turn ideas into practical solutions. My goal is to keep growing as a developer
            and contribute to impactful software products.
          </p>
          <p className='text-muted-foreground'>
            I enjoy learning by building real-world projects and turning ideas into
            practical solutions. I’m continuously improving my skills in frontend,
            backend, databases, and cloud technologies while becoming a better
            problem solver every day.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
            <a href="#contact" className='cosmic-button'>
              Get In Touch
            </a>

            <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
              DownLoad
            </a>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6  card-hover '>
            <div className='flex items-start gap-4 ' >
              <div className='p-3 rounded-full bg-primary/10'>
                <Code className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold  text-lg '>Web Development</h4>
                <p className='text-muted-foreground'>Creating Responsive websites  and web application with modern frameworks</p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6  card-hover '>
            <div className='flex items-start gap-4 ' >
              <div className='p-3 rounded-full bg-primary/10'>
                <User className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold  text-lg '>UI/UX Design</h4>
                <p className='text-muted-foreground'>Desinging Intuitive User InterFaces and  seamless user experince </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6  card-hover '>
            <div className='flex items-start gap-4 ' >
              <div className='p-3 rounded-full bg-primary/10'>
                <Briefcase className='h-6 w-6 text-primary' />
              </div>
              <div className='text-left'>
                <h4 className='font-semibold  text-lg '>Project Management</h4>
                <p className='text-muted-foreground'>Leading projects from conceptions to completion with agile methodologies </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default AboutSection
