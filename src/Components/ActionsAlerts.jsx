import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  return (
    <Stack className='alert-message'>
      <Alert>Anime Deleted!</Alert>
    </Stack>
  );
}