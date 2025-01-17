import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, Download, ArrowRight, Server, Database, Network, Code, Newspaper, GraduationCap, BookOpen, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-semibold text-gray-900">Tre'von Herman</a>
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="flex flex-col py-2">
                <a href="#about" onClick={toggleMenu} className="px-4 py-3 text-gray-600 hover:bg-gray-50">About</a>
                <a href="#education" onClick={toggleMenu} className="px-4 py-3 text-gray-600 hover:bg-gray-50">Education</a>
                <a href="#experience" onClick={toggleMenu} className="px-4 py-3 text-gray-600 hover:bg-gray-50">Experience</a>
                <a href="#projects" onClick={toggleMenu} className="px-4 py-3 text-gray-600 hover:bg-gray-50">Projects</a>
                <a href="#contact" onClick={toggleMenu} className="px-4 py-3 text-gray-600 hover:bg-gray-50">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                IT Infrastructure.<br />
                Network Security.<br />
                <span className="text-blue-600">Tech Innovation.</span>
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
                Recent Computer Science graduate specializing in IT infrastructure and network security solutions.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors">
                  Get in touch
                </a>
                <a href="#experience" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-gray-200 text-center text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                  View experience
                </a>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3" />
                    <img 
          src="/profile.png" 
          alt="Trevon Herman's Profile (Cartoon)" 
          className="rounded-3xl shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-500 w-full"
      />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">About Me</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 md:mb-6">
                As a recent Computer Science graduate from Georgia State University, my expertise lies in enhancing technological systems and infrastructure. Our team's successful integration of a 100Gbit switch and the development of NFS failover configurations exemplify my analytical competencies and problem-solving acumen. This technical foundation was further solidified through strategic initiatives like HDD replacement strategy and JBOD enclosure procurement, ensuring robust and secure IT environments.
              </p>
              <p className="mb-4 md:mb-6">
                In a dynamic internship with the City of Atlanta's Real Time Crime Center, we advanced citywide communications by unifying live video surveillance and upgrading server storage. This role underscored the importance of practical, hands-on experience and the value of clear, effective communication in complex settings.
              </p>
              <p>
                As I step into the professional world, my goal is to contribute to innovative tech solutions that prioritize efficiency and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-16">Education</h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                degree: "Bachelor of Science",
                institution: "Georgia State University",
                year: "2024",
                field: "Computer Science",
                icon: GraduationCap
              },
              {
                degree: "Associate of Science",
                institution: "Georgia State Perimeter",
                year: "2022",
                field: "Computer Science",
                icon: BookOpen
              },
              {
                degree: "High School Diploma",
                institution: "Georgetown High School",
                year: "2019",
                field: "General Studies",
                icon: GraduationCap
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <edu.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 mt-2">{edu.institution}</p>
                <p className="text-gray-500">{edu.field}</p>
                <p className="text-gray-500 mt-1">Graduated {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-16">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200" />
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  title: "IT Support Student Assistant",
                  company: "Computer Science Department",
                  period: "August 2024 - December 2024",
                  description: "• Managed 100Gbit switch integration and NFS failover configurations\n• Sourced KVM and desktop solutions for secure iDRAC access\n• Led HDD replacement strategy and JBOD enclosure procurement\n• Documented configurations and streamlined setup processes",
                  icon: Server
                },
                {
                  title: "Real Time Crime Center Intern",
                  company: "Atlanta Police Department - City of Atlanta",
                  period: "January 2024 - March 2024",
                  description: "• Observed and documented live video from surveillance cameras\n• Cleaned up data from camera hardware and updated info for new hardware\n• Collaborated with NetPlanner for system maintenance and updates\n• Contributed to real-time crime monitoring and prevention efforts",
                  icon: Network
                },
                {
                  title: "Front of House Team Member",
                  company: "Chick-fil-A",
                  period: "2021 - 2023",
                  description: "• Maintained high standards of customer service during peak hours\n• Coordinated with team members to ensure efficient service delivery\n• Handled cash transactions and maintained accurate drawer counts\n• Trained new team members on POS systems and service procedures",
                  icon: Database
                },
                {
                  title: "Career Services Student Assistant",
                  company: "University Career Services",
                  period: "2019 - 2024",
                  description: "• Collaborated with Career Specialists on student outreach and marketing efforts\n• Assisted in organizing and working career-related events\n• Created engaging marketing materials and delivered presentations and workshops",
                  icon: Code
                },
                {
                  title: "Server",
                  company: "Pizza Hut",
                  period: "2018 - 2019",
                  description: "• Provided excellent customer service in a fast-paced environment\n• Managed multiple tables while maintaining quality service standards\n• Processed payments and handled cash transactions accurately\n• Collaborated with kitchen staff to ensure order accuracy and timely delivery",
                  icon: Server
                }
              ].map((role, index) => (
                <div key={index} className="relative flex flex-col md:block">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-4 md:-translate-x-4 mt-8">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <role.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className={`ml-24 md:ml-0 relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">{role.title}</h3>
                      <p className="text-blue-600 mt-1">{role.company}</p>
                      <p className="text-gray-500 mt-1">{role.period}</p>
                      <p className="text-gray-600 mt-4 whitespace-pre-line">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-16">Projects</h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {[
              {
                title: "Ecoris - Carbon Emissions Tracker",
                desc: "Developed a tool for individuals and businesses to track, verify, and report carbon emissions, with a focus on secure data handling and scalability. Integrated Firebase for real-time data syncing and user authentication, ensuring data consistency across platforms. Created visual reports and insights to help users monitor their environmental impact, supporting informed decision-making.",
                tech: "React, Firebase, Data Visualization, Authentication",
                image: "/windy.jpg",
                link: "https://github.com/TrevonH/EcorisWeb"
              },
              {
                title: "Future Project",
                desc: "Project description coming soon",
                tech: "Technologies to be announced",
                image: "/project1.png"
              },
              {
                title: "Future Project",
                desc: "Project description coming soon",
                tech: "Technologies to be announced",
                image: "/project2.png"
              },
              {
                title: "Future Project",
                desc: "Project description coming soon",
                tech: "Technologies to be announced",
                image: "/project3.png"
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-4 text-gray-600 text-sm md:text-base">{project.desc}</p>
                  <p className="mt-4 text-sm text-blue-600">{project.tech}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.link ? (
                      <>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium flex items-center gap-2 hover:text-blue-600">
                          <Github size={16} /> View Code
                        </a>
                        <a href="#" className="text-gray-900 font-medium flex items-center gap-2 hover:text-blue-600">
                          View Details <ArrowRight size={16} />
                        </a>
                      </>
                    ) : (
                      <span className="text-gray-400 font-medium flex items-center gap-2">
                        Coming Soon <ArrowRight size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Let's Connect</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600">
                Any recruiters looking to to hire experenced talent for your buisness? Email me!
              </p>
              <div className="mt-8 space-y-6">
                <a href="mailto:work@trevonherman.com" className="flex items-center gap-4 text-gray-600 hover:text-blue-600 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm md:text-base">work@trevonherman.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/trevonherman/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-blue-600 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm md:text-base">View Profile</p>
                  </div>
                </a>
                <a href="https://github.com/TrevonH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-blue-600 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm md:text-base">View Projects</p>
                  </div>
                </a>
                <a href="/resume.pdf" target="_blank" className="flex items-center gap-4 text-gray-600 hover:text-blue-600 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Resume</p>
                    <p className="text-sm md:text-base">Download PDF</p>
                  </div>
                </a>
              </div>
            </div>
            <form className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm md:text-base text-gray-500">
          © {new Date().getFullYear()} Trevon Herman. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;