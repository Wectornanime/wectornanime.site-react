import { useState } from 'react'
import './CertificateCard.css'

interface CertificateCardProps {
    description:string
    imageURL?:string | undefined
    link:string
}

export default function CertificateCard(props:CertificateCardProps) {
    const [error, setError] = useState(false);
    
    const handleImageError = () => {
        setError(true);
    };

    return (
        <li className="certificate-card">
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="image-wrapper">
                    {
                        error ? (<img src="../assets/images/no-image.png" alt="Imagem do Certificado" />) : (<img src={props.imageURL} alt="Imagem do Certificado" onError={handleImageError} />)
                    }
                </div>
                <div className="certificate-card_content">
                    <p>{props.description}</p>
                </div>
            </a>
        </li>
    )
}
