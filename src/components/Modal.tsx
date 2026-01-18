import { Box, Button, Modal, Typography, TextField } from '@mui/material'
import type { ITask } from '../types/task'
import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  task: ITask | null
  onClose: () => void
  onSave: (id: string, title: string) => void
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}

export const CustomModal = ({ open, task, onClose, onSave }: Props) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (task) {
      setTitle(task.title ?? '')
      setError(false)
    }
  }, [task])

  if (!task) return null

  const handleSave = () => {
    if (!title.trim()) {
      setError(true)
      return
    }

    onSave(task.id, title.trim())
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          Edit task
        </Typography>

        <TextField
          fullWidth
          label="Task title"
          value={title}
          error={error}
          helperText={error ? 'Task title is required' : ' '}
          onChange={e => {
            setTitle(e.target.value)
            if (error) setError(false)
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleSave()
            }
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1,
            mt: 3,
          }}
        >
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default CustomModal
