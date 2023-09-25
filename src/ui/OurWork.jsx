import '../App.css'
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import audi from '../imgs/audia5.png'
import volvo from '../imgs/volvo.png'
import toyota from '../imgs/toyota.png'

const OurWork = () => {
    return (
        <Grid>
            <Box pb={5} textAlign={'center'}>
                <Typography fontWeight={600} fontSize={64}>Our work</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'} mb={5}>
                <Box display={'flex'} justifyContent={'space-around'} width={1200}>
                    <Box className='card'>
                        <CardMedia component='img' src={audi}
                            height={450} sx={{ width: 380, borderRadius: 5 }} />
                        <Typography pl={3} mt={-4} color={'white'}>
                            Audi A5</Typography>
                        <Typography fontWeight={600} pl={3} mt={-8} color={'white'}>
                            General inspections and safety</Typography>
                    </Box>
                    <Box className='card'>
                        <CardMedia component='img' src={toyota}
                            height={450} sx={{ width: 380, borderRadius: 5 }} />
                    </Box>
                    <Box className='card'>
                        <CardMedia component='img' src={volvo}
                            height={450} sx={{ width: 380, borderRadius: 5 }} />
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default OurWork