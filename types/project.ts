type Features = {
  name: string
  description: string
}

type Techs = {
  name: string
  icon: React.ComponentType<any>
}

type Category = 'Individual' | "Collaborative";

export type ProjectTypes = {
  slug: string
  name: string
  description: string
  content: string
  features: Features[]
  techs: Techs[]
  category: Category
  timestamp: string
  link: string
  github: string
  img: string
};