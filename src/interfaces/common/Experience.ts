
export default interface IExperience {
    startDate: string
    endDate?: string
    company: string
    companyUrl?: string
    role: string
    location: string
    description: string
    technologies: string[]
    type: 'work' | 'freelance'
}