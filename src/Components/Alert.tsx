import * as React from 'react';
import {Alert,AlertTitle} from '@mui/material';
import Stack from '@mui/material/Stack';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone'; 
import DoneIcon from '@mui/icons-material/Done';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success" icon={<DoneIcon/>}><AlertTitle>Success</AlertTitle>This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
    </Stack>
  );
}
