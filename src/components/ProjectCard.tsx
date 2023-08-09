import './ProjectCard.css'

interface ProjectCardProps{
    title:string
    description: string
    imageURL?: string | undefined
    linkToSite: string
}

export default function ProjectCard(props:ProjectCardProps) {
    let backgroundImage:string

    if (typeof(props.imageURL) === "undefined") {
        backgroundImage = "./images/default_project_background.jpg"
    } else {
        backgroundImage = props.imageURL
    }

    return (
        <li className="project-card">
            <a href={props.linkToSite} target="_blank" rel="noreferrer">
                <div className="image-wrapper">
                    <img src={backgroundImage} alt="Imagem do projeto" />
                </div>
                <div className="project-card_content">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </a>
        </li>
    )
}
