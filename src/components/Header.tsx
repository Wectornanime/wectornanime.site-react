import { useState } from 'react'
import './Header.css'

interface HeaderProps {
    imageURL?: string
    name:string
    subName:string
    children: JSX.Element | JSX.Element[]
}

export default function Header(props:HeaderProps) {
    const [error, setErro] = useState(false)

    const handleImageError = () => {
        setErro(true)
    }  
    return (
        <header>
            <div className="image-wrapper">
                {
                    error ? (<img src="../images/no-image.png" alt="Foto do usuário" />) : (<img src={props.imageURL} alt="Foto do usuário" onError={handleImageError} />)
                }
            </div>
            <h1>{props.name}</h1>
            <p>{props.subName}</p>
            <ul>
                {props.children}
            </ul>
        </header>
    )
}
