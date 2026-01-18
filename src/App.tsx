import Input from './components/Input'

import './App.css'
import { tasksList } from './data/tasksList'
import TasksList from './components/TasksList'
import { useTasks } from './hooks/useTasks'
import { useState } from 'react'
import CustomModal from './components/Modal'
import type { ITask } from './types/task'
import Typography from '@mui/material/Typography'
import { Container, Stack } from '@mui/material'

function App() {
  const { tasks, addTask, removeTask, updateTaskDescription, toggleTask } =
    useTasks(tasksList)
  const [editingTask, setEditingTask] = useState<ITask | null>(null)

  const openEditModal = (task: ITask) => {
    setEditingTask(task)
  }

  const closeEditModal = () => {
    setEditingTask(null)
  }

  return (
    <>
      <Container maxWidth="sm">
        <Stack spacing={3}>
          <Typography variant="h4" component="h1">
            My todo app
          </Typography>

          <Input onAddTask={addTask} />

          <TasksList
            tasks={tasks}
            removeTask={removeTask}
            onEdit={openEditModal}
            toggleTask={toggleTask}
          />
        </Stack>
      </Container>

      <CustomModal
        open={Boolean(editingTask)}
        task={editingTask}
        onClose={closeEditModal}
        onSave={updateTaskDescription}
      />
    </>
  )
}

export default App
