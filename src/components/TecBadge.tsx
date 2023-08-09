import './TecBadge.css'

interface TecBadgeProps {
    name:string
    deviconClass:string
}

export default function TecBadge(props:TecBadgeProps) {
    return(
        <li className="tec-badge">
            <i className={props.deviconClass}></i>
            <p>{props.name}</p>
        </li>
    )
}
