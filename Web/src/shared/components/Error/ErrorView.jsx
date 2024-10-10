import React from 'react';
import { useError } from './ErrorContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Error() {
  const { error } = useError();

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};