export default interface Data {
    name: string,
    subName: string,
    imageURL: string,
    aboutMe: string,
    links: {
        label: string,
        url: string
    }[],
    hability: {
        name: string,
        deviconClass: string
    }[],
    projects: {
        title: string,
        description: string,
        imageURL: string,
        links: {
            label: string,
            url: string
        }[],
    }[],
    certificates: {
        description: string,
        imageURL: string,
        link: string
    }[]
}
