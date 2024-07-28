import './App.css'

// imports
import { useEffect, useState } from 'react'
import { getData } from '@/services/api'
import Data from './types/Data'

// components
import Header from './components/Header'
import SocialMedia from './components/SocialMedia'
import Container from './components/Container'
import TecBadge from './components/TecBadge'
import ProjectCard from './components/ProjectCard'
import CertificateCard from './components/CertificateCard'

function App() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    (async () => {
      getData()
        .then(data => setData(data))
    })()
  })
  return (
    <>
      {data && (
        <Header
          name={data.name}
          subName={data.subName}
          imageURL={data.imageURL}
        >

          {
            data.links.map(item => {
              return (
                <SocialMedia
                  label={item.label}
                  url={item.url}
                />
              )
            })
          }

        </Header>
      )
      }

      <main>

        {
          data && (
            <Container
              title="Sobre mim"
              description={data.aboutMe}
              containerClass="about-me"
            />
          )
        }

        <Container
          title="Habilidades"
          description="Tecnologias que tenho habilidade."
          containerClass="hability"
        >

          {
            data && data.hability.map(item => {
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
            data && data.projects.map(item => {
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
            data && data.certificates.map(item => {
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
    </>
  )
}

export default App
