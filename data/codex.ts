// data/codex.ts

export interface CodexEntry {
    id: string
    title: string
    description: string
    lastUsed: string  // e.g. “2 rounds ago”
  }
  
  export const codexEntries: CodexEntry[] = [
    {
      id: 'double-effect',
      title: 'Principle of Double Effect',
      description: 'Actions with both good and bad effects are permissible if the bad effect is not intended.',
      lastUsed: 'Round 3',
    },
    {
      id: 'care-core',
      title: 'Care Ethics Core Ideas',
      description: 'Ethics grounded in relationships, empathy, and care responsibilities.',
      lastUsed: 'Round 1',
    },
    {
      id: 'categorical-imperative',
      title: 'Categorical Imperative',
      description: 'Act only on maxims that you could will to become universal laws.',
      lastUsed: 'Intro Phase',
    },
    // …add as many entries as you like
  ]
  