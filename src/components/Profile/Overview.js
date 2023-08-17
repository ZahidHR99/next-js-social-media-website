import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';

export default function Overview() {
  return (
    <Box
      sx={{
        width: 600,
        maxWidth: '100%',
      }}
    >
      <InputLabel htmlFor="my-input" sx={{ mb: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />

      <InputLabel htmlFor="my-input" sx={{ mb: 2, mt: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />

      <InputLabel htmlFor="my-input" sx={{ mb: 2, mt: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />

      <InputLabel htmlFor="my-input" sx={{ mb: 2, mt: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />

      <InputLabel htmlFor="my-input" sx={{ mb: 2, mt: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />

      <InputLabel htmlFor="my-input" sx={{ mb: 2, mt: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />

      <InputLabel htmlFor="my-input" sx={{ mb: 2, mt: 2 }}>Text</InputLabel>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
      
    </Box>
  );
}
