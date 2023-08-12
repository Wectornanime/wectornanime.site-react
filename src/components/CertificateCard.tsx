import './CertificateCard.css'

interface CertificateCardProps {
    description: string
    imageURL?:string | undefined
}

export default function CertificateCard(props:CertificateCardProps) {
    let certificateImage:string
    if (typeof(props.imageURL) === "undefined" || props.imageURL === "") {
        certificateImage = 'images/no-image.png'
    } else {
        certificateImage= props.imageURL as string;
    }

    return (
        <li className="certificate-card">
            <div className="image-wrapper">
                <img src={certificateImage} alt="Imagem do Certificado" />
            </div>
            <div className="certificate-card_content">
                <p>{props.description}</p>
            </div>
        </li>
    )
}
