import './ProjectCard.css'

interface ProjectCardProps{
    title:string
    description: string
    imageURL?: string | undefined
    linkToSite: string
}

export default function ProjectCard(props:ProjectCardProps) {
    let backgroundImage:string

    if (typeof(props.imageURL) === "undefined" || props.imageURL === "") {
        backgroundImage = "./images/no-image.png"
    } else {
        backgroundImage = props.imageURL
    }

    return (
        <li className="project-card">
            <div className="image-wrapper">
                <img src={backgroundImage} alt="Imagem do projeto" />
            </div>
            <div className="project-card_content">
                <h2>{props.title}</h2>
                <div className="project-card_content_details">
                    <p>{props.description}</p>
                    <ul>
                        <li><a href="" target="_blank" rel="noreferrer"><button>Github</button></a></li>
                        <li><a href="" target="_blank" rel="noreferrer"><button>Site</button></a></li>
                    </ul>
                </div>
            </div>
        </li>
    )
}
