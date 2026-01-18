import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import type { ITask } from '../types/task'
import Task from './Task'

interface Props {
  tasks: ITask[]
  removeTask: (id: string) => void
  onEdit: (task: ITask) => void
  toggleTask: (id: string) => void
}

const TasksList = ({ tasks, removeTask, onEdit, toggleTask }: Props) => {
  if (!tasks.length) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Create your first task
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onEdit={onEdit}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </Box>
  )
}

export default TasksList
