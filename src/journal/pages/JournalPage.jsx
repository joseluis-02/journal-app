import { Button, IconButton, Typography } from '@mui/material';
import { AddOutlined, MailOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/';

export const JournalPage = () => {
  return (
      <JournalLayout>
        {/* NothinSelected */}
        <NothingSelectedView />

        {/*NateView */}
        {/*<NoteView />*/}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.7},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30}} />
        </IconButton>

      </JournalLayout>
  )
}
