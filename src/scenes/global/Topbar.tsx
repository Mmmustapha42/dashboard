//import React,{useContext} from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import {tokens } from '../../Themes'
import {InputBase} from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'


export const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [darkTheme, setDarkTheme]= useState(false)

  const handleClick = () => {setDarkTheme(!darkTheme)}
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* search */}
      <Box display='flex' bgcolor={colors.primary[700]} borderRadius='3px'>
        <InputBase sx={{ml:2, flex:1}} placeholder='Search'/>
        <IconButton type='button' sx={{p:1}}>
          <SearchIcon/>
        </IconButton>
      </Box>
      {/* ICONS */}

      <Box display='flex'>
      <IconButton onClick={handleClick}>
        {darkTheme ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
      </IconButton>
        <IconButton> <PersonOutlinedIcon/></IconButton>
      </Box>
      
    </Box>
  )
}