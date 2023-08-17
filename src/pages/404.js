import RootLayout from '@/components/Layouts/RootLayout';
import { Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <div>
             <Typography variant="h2" gutterBottom>
                404 Error! Page Not Found
            </Typography>
        </div>
    );
};

export default NotFound;

NotFound.getLayout = function getLayout(page) {
    return (
      <RootLayout>{page}</RootLayout>
    )
}