import { Box } from "@mui/material";

type ProgressProps = {
  progress:number
  size:string
}


export const ProgressCircle = ({progress=0.75, size='40'}:ProgressProps) => {

    const angle:any = progress * 360;
  return (
    <Box sx={{background:`radial-gradient(violet 55% transparent 56%), conic-gradient(transparent 0deg ${angle}deg, blue ${angle}deg 360deg), green`,
               borderRadius:'50%',
               width:`${size}`,
               height:`${size}`
             }}></Box>
  )
}
