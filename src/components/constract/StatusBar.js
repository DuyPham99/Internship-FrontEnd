import { Chip } from '@mui/material';
import * as React from 'react';

function getStatus(status) {
  switch (status) {
    case 'APPROVE':
      return "success";
    case 'PENDING':
      return "warning";
    case 'DECLINE':
      return "error";
    default:
      throw new Error('Unknown step');
  }
}

export const Status = (props) => {
  const status = getStatus(props.status);

  return (
    <>
      <Chip label={props.status} color={status}/>
    </>
  );
};
