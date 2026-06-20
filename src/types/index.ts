export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
  blogUrlArr: BlogUrl[]
  category: 'game' | 'data' | 'service'
  features: string[]
  highlights: string[],
  portfolioImg: string,
}

export interface BlogPost {
  id: string
  title: string
  date: string
  tags: string[]
  summary: string
  url: string
}

interface BlogUrl {
  url: string, 
  title: string 
}