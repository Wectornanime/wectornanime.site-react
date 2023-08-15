import './ProjectCard.css'
import default_image from '../assets/images/no-image.png'

interface ProjectCardProps{
    title:string
    description:string
    imageURL?:string | undefined
    links:itemLink[]
}

interface itemLink {
    label:string
    url:string
}

export default function ProjectCard(props:ProjectCardProps) {
    let backgroundImage:string

    if (typeof(props.imageURL) === "undefined" || props.imageURL === "") {
        backgroundImage = default_image
    } else {
        backgroundImage = props.imageURL
    }

    return (
        <li className="project-card">
            <div className="project-card_image">
                <div className="image-wrapper">
                    <img src={backgroundImage} alt="Imagem do projeto" />
                </div>
            </div>
            <div className="project-card_content">
                <h2>{props.title}</h2>

                <p>{props.description}</p>
                <ul>
                    {
                        props.links.map(item => {
                            return (
                                <li><a href={item.url} target="_blank" rel="noreferrer"><button>{item.label}</button></a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </li>
    )
}
