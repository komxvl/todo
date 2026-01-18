import type { ITask } from '../types/task'

export const tasksList: ITask[] = [
  {
    id: '1',
    title: 'Install React + Vite',
    completed: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
  },
  {
    id: '2',
    title: 'Setup Tailwind CSS',
    completed: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 12,
  },
  {
    id: '3',
    title: 'Configure Prettier',
    completed: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    id: '4',
    title: 'Build Todo Input component',
    completed: false,
    createdAt: Date.now(),
  },
]
