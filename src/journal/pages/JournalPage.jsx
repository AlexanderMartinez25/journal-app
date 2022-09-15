import { useDispatch } from 'react-redux'
import { IconButton, Typography } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal/thuks'

export const JournalPage = () => {


  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos beatae id fuga deleniti sunt eveniet nulla, maiores voluptatem dicta asperiores architecto culpa? Itaque laboriosam excepturi tempore est nihil aut.</Typography > */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
