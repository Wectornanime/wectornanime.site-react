import { useState } from 'react'
import './ProjectCard.css'

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
    const [error, setErro] = useState(false)

    const handleImageError = () => {
        setErro(true)
    }

    return (
        <li className="project-card">
            <div className="project-card_image">
                <div className="image-wrapper">
                    {
                        error ? (<img src="../images/no-image.png" alt="Imagem do projeto" />) : (<img src={props.imageURL} alt="Imagem do projeto" onError={handleImageError} />)
                    }
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
