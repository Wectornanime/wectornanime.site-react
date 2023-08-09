import './App.css'

import Container from './components/Container'
import ProjectCard from './components/ProjectCard'
import CertificateCard from './components/CertificateCard'
import TecBadge from './components/TecBadge'

function App() {

  return (
    <main>

      <Container
      title="Habilidades"
      description="Tecnologias que tenho alguma habilidade."
      containerClass="hability"
      >
        <TecBadge
        name="HTML5"
        deviconClass="devicon-html5-plain"
        />

        <TecBadge
        name="CSS3"
        deviconClass="devicon-css3-plain"
        />

        <TecBadge
        name="JavaScript"
        deviconClass="devicon-javascript-plain"
        />

        <TecBadge
        name="TypeScript"
        deviconClass="devicon-typescript-plain"
        />

        <TecBadge
        name="Angular"
        deviconClass="devicon-angularjs-plain"
        />

        <TecBadge
        name="React"
        deviconClass="devicon-react-plain"
        />

        <TecBadge
        name="Python"
        deviconClass="devicon-python-plain"
        />

        <TecBadge
        name="Flask"
        deviconClass="devicon-flask-plain"
        />

        <TecBadge
        name="MySQL"
        deviconClass="devicon-mysql-plain"
        />

      </Container>

      <Container
      title="Meu projetos"
      description="Projetos que desenvolvi."
      containerClass="projects"
      >
        <ProjectCard 
        title="CadastroIdoso"
        description="O projeto é uma aplicação web completa com front, back e banco de dados, para cadastro de idosos e remédios que podem ser associados ao idoso."
        linkToSite="https://github.com/Wectornanime/cadastroIdoso"
        />

        <ProjectCard 
        title="BuzzFeed-Clone"
        description='Desafio de projeto proposto pela DIO (Digital Innovation One) no bootcamp "Potencial Tech Angular Developer - powered by iFood". No projeto foi posposto, desenvolver um clone do BuzzFeed utilizando Angular. Nele foi montado um pequeno teste simples, com o intuito de revelar se você é um "vilão", ou um "herói".'
        linkToSite="https://github.com/Wectornanime/DIO-desafio_de_projeto-Angular-BuzzFeed-Clone"
        />

        <ProjectCard 
        title="Blog em Angular"
        description='Desafio de projeto proposto pela DIO (Digital Innovation One) no bootcamp "Potencial Tech Angular Developer - powered by iFood".'
        linkToSite="https://github.com/Wectornanime/DIO-desafio_de_projeto-Angular-Blog"
        />

      </Container>

      <Container
        containerClass="certificates"
        title="Meus Certificados"
        description="Certificados que conquistei durante o caminho."
      >
        <CertificateCard
          description="Certificado de Angular"
          imageURL="https://hermes.digitalinnovation.one/certificates/cover/E9CBE57B.jpg"
        />

        <CertificateCard
          description="Certificado de Angular"
          imageURL="https://hermes.digitalinnovation.one/certificates/cover/E9CBE57B.jpg"
        />

        <CertificateCard
          description="Certificado de Angular"
          imageURL="https://hermes.digitalinnovation.one/certificates/cover/E9CBE57B.jpg"
        />

      </Container>



    </main>
  )
}

export default App
