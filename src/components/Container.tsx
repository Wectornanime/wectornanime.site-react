import './Container.css'

interface ContainerProps {
    title:string,
    description:string,
    children:JSX.Element | JSX.Element[]
}

export default function Container(props:ContainerProps) {
    return (
        <section>
            <div className="container_content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <ul>{props.children}</ul>
            </div>
        </section>
    )
}
