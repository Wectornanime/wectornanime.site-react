import './SocialMedia.css'

interface SocialMediaProps {
    icon:string
    url:string
}

export default function SocialMedia(props:SocialMediaProps) {
    return (
        <li>
            <a href={props.url} target="_blank" rel="noreferrer">
                <ion-icon name={props.icon}></ion-icon>
            </a>
        </li>
    )
}
