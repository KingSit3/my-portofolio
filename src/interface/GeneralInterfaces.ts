export type UsedTechs = 'tailwind' | "bootstrap" | 'laravel' | 'mysql' | 'php' | 'typescript' | 'vue' | 'nuxt' | 'go' | 'javascript'

export interface DataInterface {
  link: string
  title: string
  image: string
  usedTech: Array<UsedTechs>
}

export interface TechStackInterface {
  link: string
  title: UsedTechs
}