import { ProgressCircle } from "./ProgressCircle";
import { Box,Typography } from "@mui/material";

type StatBoxProps = {
    title:string;
    subtitle:string;
    icon:React.ReactNode;
    progress:string;
    increase:string
}

export const StatBox = ({title, subtitle, icon, progress, increase}:StatBoxProps) => {
  return (
    <Box width='100%' m='0 30px'>
        <Box display='flex' justifyContent='space-between'>
            <Box>
                {icon}
                <Typography variant="h4" fontWeight='bold' sx={{color:'grey'}}>
                    {title}
                </Typography>
            </Box>
            <Box>
                {/* <ProgressCircle progress={progress}/> */}
            </Box>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="h5" fontWeight='bold' sx={{color:'green'}}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontWeight='italic' sx={{color:'greenyellow'}}>
                    {increase}
                </Typography>
            </Box>

        </Box>
    </Box>
  )
}
