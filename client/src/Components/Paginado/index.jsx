import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}