import { useEffect, useState } from 'react'
import type { ITask } from '../types/task'

const STORAGE_KEY = 'tasks'

export const useTasks = (initialTasks: ITask[]) => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialTasks
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string) => {
    setTasks(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
        createdAt: Date.now(),
      },
    ])
  }

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const updateTaskDescription = (id: string, title: string) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, title } : task))
    )
  }

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
    updateTaskDescription,
  }
}
