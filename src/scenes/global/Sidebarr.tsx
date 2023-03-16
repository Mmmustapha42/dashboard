import React, { FC } from 'react'
import { useState } from 'react'
import { Avatar, Box, IconButton, Stack, Typography,useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../Themes'
import { SidebarData, charts, pages } from './SidebarData'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { deepOrange } from '@mui/material/colors'
import HomeIcon from '@mui/icons-material/Home';


interface SidebarItem {
  title: string,
  icon: React.ReactNode
  link: string;
}



export const Sidebarr: FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isOpen, setIsOpen] = useState(true)
  const [selected, setSelected] = useState("Dashboard")

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Box  sx={{backgroundColor:'#2f4050', height:'150vh', width:isOpen ? '255px' : '80px'}}>
      <Box sx={{justifyContent: isOpen ? 'space-around' : 'center'}}>
      <Box display='flex' justifyContent='space-around' alignItems='center' mt='8px'  >
        <Typography  variant='h5' sx={{color:deepOrange[900], scale:isOpen ? 1 : 0, }}>ADMIN</Typography>
        <IconButton sx={{ mr:'25px'}} onClick={handleClick}><MenuOpenIcon/></IconButton>
      </Box>

      <Box sx={{mt:'20px'}}>
        <Stack direction='column' alignItems='center'>
          <Avatar sx={{backgroundColor:deepOrange[900],}} >MN</Avatar>
          <Typography sx={{scale:isOpen ? 1 : 0,}} fontWeight='bold' variant='h5'>Xyxtyz</Typography>
          <Typography sx={{scale:isOpen ? 1 : 0,}} fontSize='12px' variant='body1'>Boss of all bosses</Typography>
        </Stack>
      </Box>

      <Box sx={{mt:'12px'}}>
        <Stack direction='row' alignItems='center' spacing={3} mb='30px' >
        <Link style={{textDecoration:'none', color:'white', display:'flex'}} to='/'>
          <HomeIcon/>
          <Typography sx={{scale:isOpen ? 1 : 0,ml:'50px', fontWeight:'bold'}} fontSize='20px' variant='body1'> Dashboard </Typography>
        </Link>
        </Stack>
      </Box>
      
        <Typography fontSize='14px'>Data</Typography>
      


      
      <Box sx={{mt:'10px', ml:'10%'}}>
      {SidebarData.map((items, index) => {
        return (
          <Box sx={{margin:isOpen ? 'auto' : 0, }}>
            <Stack  key={index} direction='column'>
               <Link style={{textDecoration:'none', color:'white'}} to={`${items.link}`}> 
                <Stack direction='row' spacing={3}>
                <Box>{items.icon}</Box>
                <Typography sx={{visibility:isOpen ? 'visible' : 'hidden'}}fontSize='14px' variant='body1'>{items.title}</Typography>
               </Stack>
               </Link>
          </Stack>
          </Box>
        )
      })}
      </Box>

      
        <Typography >Pages</Typography>
      

      <Box sx={{mt:'10px', ml:'10%'}}>
      {pages.map((items, index) => {
        return (
          <Box sx={{}}>
            <Stack  key={index} direction='column'>
              <Link style={{textDecoration:'none', color:'white'}} to={`${items.link}`}>
               <Stack direction='row' spacing={3}>
                <Box>{items.icon}</Box>
                <Typography sx={{visibility:isOpen ? 'visible' : 'hidden'}}fontSize='14px' variant='body1'>{items.title}</Typography>
               </Stack>
               </Link>
          </Stack>
          </Box>
        )
      })}
      </Box>

      <Box >
        <Typography fontSize='14px'>Charts</Typography>
      </Box>

      <Box sx={{mt:'10px', ml:'10%'}}>

      {charts.map((items, index) => {
        return (
          <Box sx={{}}>
            <Stack  key={index} direction='column'>
              <Link style={{textDecoration:'none', color:'white'}} to={`${items.link}`}>
               <Stack direction='row' spacing={3}>
                <Box>{items.icon}</Box>
                <Typography sx={{display:isOpen ? 'visible' : 'none'}} fontSize='14px' variant='body1'>{items.title}</Typography>
               </Stack>
               </Link>
          </Stack>
          </Box> 
        )
      })}
      </Box>
      </Box>
    </Box>
  )
}
