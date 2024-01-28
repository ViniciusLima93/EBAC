import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import * as S from './style'

export default function BasicRating() {
  const [value, setValue] = React.useState(5);

  return (
    <S.StyledRating>
    <Box
      sx={{
        '& > legend': { mt: 0.5, marginRight: -16 },
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
      
    >
      <S.StyledTypography component="legend">HTML</S.StyledTypography>
      <Rating
        readOnly
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <S.StyledTypography component="legend">CSS</S.StyledTypography>
      <Rating
        readOnly
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
       <S.StyledTypography component="legend">JavaScript</S.StyledTypography>
      <Rating
        readOnly
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <S.StyledTypography component="legend">TypeScript</S.StyledTypography>
      <Rating
        readOnly
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <S.StyledTypography component="legend">NodeJS</S.StyledTypography>
      <Rating
        readOnly
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    
    </Box>
    </S.StyledRating>
  );
}
