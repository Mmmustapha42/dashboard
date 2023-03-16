import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../Themes'

type inputProps = {
    title:string
    subtitle:string
}

export const Header = ({title, subtitle}:inputProps) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box mb='30px'>
        <Typography sx={{mb:"5px"}} variant='h4' fontWeight='bold' color={colors.grey[100]}>{title}</Typography>
        <Typography variant='body1' color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
  )
}
 