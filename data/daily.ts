// data/daily.ts
export interface DailyDilemma {
    id: string
    question: string
    options: string[]
    duration: number  // seconds
  }
  
  export const dailyDilemma: DailyDilemma = {
    id: 'refugee-algo',
    question: 'You’re designing an algorithm to approve refugees. What principle guides you?',
    options: ['Maximize overall well-being', 'Respect universal rights', 'Prioritize the most vulnerable'],
    duration: 30,
  }
  