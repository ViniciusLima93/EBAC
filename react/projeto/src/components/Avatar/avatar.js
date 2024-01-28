import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import photo from '../../assets/img_perfil.jpg'

import * as S from './style'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Vinicius" src={photo}  sx={{ width: 100, height: 100, margin:'8px !important'  }} />
      <S.NameLabel>Vinicius Lima
      <S.JobLabel>Desenvolvedor FullStack</S.JobLabel>
      </S.NameLabel>
     
    </Stack>
  );
}