import './App.css'
import data from './assets/data.json'

import Container from './components/Container'
import ProjectCard from './components/ProjectCard'
import CertificateCard from './components/CertificateCard'
import TecBadge from './components/TecBadge'

function App() {

  return (
    <main>

      <Container
      title="Sobre mim"
      description={data.aboutMe}
      containerClass="about-me"
      />

      <Container
        title="Habilidades"
        description="Tecnologias que tenho alguma habilidade."
        containerClass="hability"
      >

        {
          data.hability.map(item => {
            return (
              <TecBadge
              name={item.name}
              deviconClass={item.deviconClass}
              />
            )
          })
        }

      </Container>

      <Container
        title="Projetos"
        description="Projetos que desenvolvi ao longo do tempo."
        containerClass="projects"
      >
        
        {
          data.projects.map(item => {
            return (
              <ProjectCard
              title={item.title}
              description={item.description}
              imageURL={item.imageURL}
              links={item.links}
              />
            )
          })
        }

      </Container>

      <Container
        containerClass="certificates"
        title="Certificados"
        description="Certificados que conquistei durante o caminho."
      >
        
        {
          data.certificates.map(item => {
            return (
              <CertificateCard
              description={item.description}
              imageURL={item.imageURL}
              link={item.link}
              />
            )
          })
        }

      </Container>
      
    </main>
  )
}

export default App
