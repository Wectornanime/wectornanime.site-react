import './App.css'

import Container from './components/Container'
import ProjectCard from './components/ProjectCard'
import CertificateCard from './components/CertificateCard'
import TecBadge from './components/TecBadge'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Data from '@/types/Data'

function App() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(import.meta.env.VITE_API_URL)
      console.log(resp.data);
      setData(resp.data)
      
    }

    getData();
  })
  return (
    <main>

      <Container
        title="Sobre mim"
        description=''
        containerClass="about-me"
      />

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
