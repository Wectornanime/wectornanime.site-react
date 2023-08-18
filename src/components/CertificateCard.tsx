import { useState } from 'react'
import './CertificateCard.css'
import default_image from '../assets/images/no-image.png'

interface CertificateCardProps {
    description: string
    imageURL?:string | undefined
}

export default function CertificateCard(props:CertificateCardProps) {
    const [error, setError] = useState(false);
    
    const handleImageError = () => {
        setError(true);
    };

    return (
        <li className="certificate-card">
            <div className="image-wrapper">
                {
                    error ? (<img src={default_image} alt="Imagem do Certificado" />) : (<img src={props.imageURL} alt="Imagem do Certificado" onError={handleImageError} />)
                }
            </div>
            <div className="certificate-card_content">
                <p>{props.description}</p>
            </div>
        </li>
    )
}
