import { TextField } from '@mui/material'
import { useState } from 'react'

interface Props {
  onAddTask: (title: string) => void
}

const Input = ({ onAddTask }: Props) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!value.trim()) {
      setError(true)
      return
    }

    onAddTask(value.trim())
    setValue('')
    setError(false)
  }

  return (
    <TextField
      fullWidth
      label="Add task"
      placeholder="Add task"
      value={value}
      error={error}
      helperText={error ? 'Task title is required' : ' '}
      variant="standard"
      onChange={e => {
        setValue(e.target.value)
        if (error) setError(false)
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault()
          handleSubmit()
        }
      }}
    />
  )
}

export default Input
