export interface IProject {
    name: string
    description: string
    links: {
        code?: string,
        production?: string
    }
    technologies: string[]
    type: 'personal' | 'work'
}