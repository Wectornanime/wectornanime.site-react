import './SocialMedia.css'

interface SocialMediaProps {
    label:string
    url:string
}

export default function SocialMedia(props:SocialMediaProps) {
    return (
        <li className="social-media">
            <a href={props.url} target="_blank" rel="noreferrer">{props.label}</a>
        </li>
    )
}
