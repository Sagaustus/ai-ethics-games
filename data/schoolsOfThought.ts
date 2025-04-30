// data/schoolsOfThought.ts

export interface SchoolOfThought {
    slug: string
    name: string
    description: string
    image: string
  }
  
  export const schoolsOfThought: SchoolOfThought[] = [
    {
      slug: 'deontology',
      name: 'Deontology',
      description: 'Ethics based on adherence to duty, rules, and universal moral laws.',
      image: '/img/deontology.png',
    },
    {
      slug: 'utilitarianism',
      name: 'Utilitarianism',
      description: 'Consequentialist ethics focused on maximizing overall happiness.',
      image: '/img/utilitarianism.png',
    },
    {
      slug: 'virtue-ethics',
      name: 'Virtue Ethics',
      description: 'Character-based ethics centered on developing virtues and moral character.',
      image: '/img/virtue-ethics.png',
    },
    {
      slug: 'care-ethics',
      name: 'Care Ethics',
      description: 'Ethics emphasizing empathy, relationships, and care for others.',
      image: '/img/care-ethics.png',
    },
    {
      slug: 'contractualism',
      name: 'Contractualism',
      description: 'Ethics grounded in social contracts and mutual agreements.',
      image: '/img/contractualism.png',
    },
    {
      slug: 'existentialism',
      name: 'Existentialism',
      description: 'Ethics highlighting individual freedom, choice, and personal responsibility.',
      image: '/img/existentialism.png',
    },
    {
      slug: 'pragmatism',
      name: 'Pragmatism',
      description: 'Ethics judged by practical consequences and problem-solving effectiveness.',
      image: '/img/pragmatism.png',
    },
    {
      slug: 'feminist-ethics',
      name: 'Feminist Ethics',
      description: 'Ethics focusing on gender equity, power dynamics, and social justice.',
      image: '/img/feminist-ethics.png',
    },
  ]
  