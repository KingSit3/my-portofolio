export type UsedTechs = 'tailwind' | "bootstrap" | 'laravel' | 'mysql' | 'php' | 'typescript' | 'vue' | 'nuxt' | 'golang' | 'javascript' | 'express' | 'fastify'

export interface DataInterface {
  link: string
  title: string
  image: string
  description: string
  usedTech: Array<UsedTechs>
}

export interface TechStackInterface {
  link: string
  title: UsedTechs
}