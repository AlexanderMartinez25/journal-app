import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos beatae id fuga deleniti sunt eveniet nulla, maiores voluptatem dicta asperiores architecto culpa? Itaque laboriosam excepturi tempore est nihil aut.</Typography > */}

      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
