import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import type { ITask } from '../types/task'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Checkbox, Typography } from '@mui/material'
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material'
interface Props {
  task: ITask
  removeTask: (id: string) => void
  onEdit: (task: ITask) => void
  toggleTask: (id: string) => void
}

const Task = ({ task, removeTask, onEdit, toggleTask }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'text.secondary' : 'text.primary',
          }}
        >
          {task.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: 'flex',
            margin: 'auto',
          }}
        >
          {!task.completed && (
            <IconButton
              size="small"
              aria-label="Edit task"
              onClick={() => onEdit(task)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          )}
          <IconButton
            size="small"
            aria-label="Delete task"
            color="error"
            onClick={() => removeTask(task.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
          <Checkbox
            onChange={() => toggleTask(task.id)}
            icon={<CheckCircle />}
            checkedIcon={<CheckCircleOutline />}
            checked={task.completed}
          />
        </Box>
      </CardActions>
    </Card>
  )
}

export default Task
