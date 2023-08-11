import './Header.css'

interface HeaderProps {
    imageURL?: string
    name:string
    subName:string
    children: JSX.Element | JSX.Element[]
}

export default function Header(props:HeaderProps) {
    let userImage:string

    if (typeof(props.imageURL) === 'undefined' || props.imageURL === '' ) {
        userImage = 'images/no-image.png'
    } else {
        userImage= props.imageURL as string;
    }

    return (
        <header>
            <div className="image-wrapper">
                <img src={props.imageURL} alt="" />
            </div>
            <h1>{props.name}</h1>
            <p>{props.subName}</p>
            <ul>
                {props.children}
            </ul>
        </header>
    )
}
