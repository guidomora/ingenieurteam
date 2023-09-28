import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import frame1 from '../imgs/frame388.png'
import frame2 from '../imgs/frame389.png'
import frame3 from '../imgs/frame390.png'
import frame4 from '../imgs/frame391.png'


const imgs = [
  frame1,
  frame2,
  frame3,
  frame4
]

const names = [
  'Alex', "James", "Wërner", "Frank"
]

const jobs = [
  'Master straightener',
  'Chief engineer',
  'Master straightener',
  'Chief engineer'
]

const About = () => {
  return (
    <Grid>
      <Box pt={4} pb={15} bgcolor={'secondary.main'}>
        <Typography color={'primary.main'} sx={{ fontSize: { xs: 55, md: 64 } }} fontWeight={600}
          textAlign={'center'} >About us</Typography>
        <Typography color={'#28282880'} textAlign={'center'}>
          Learn more about what it means to be a Ingenieurteam customer by <br /> starting your quote today
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'space-evenly'} sx={{ flexWrap: { xs: 'wrap', md: 'unset' } }} pt={7} pb={15}>
        <Typography sx={{ pb: { xs: 2, md: 0 }, fontSize: { xs: 20, md: 32 }, width: { xs: 300, md: 600 } }}>
          Hi, we're INGENIEURTEAM <br /> We're provide a professional car services across the Germany
        </Typography>
        <Typography color={'#28282880'} sx={{ width: { xs: 300, md: 600 } }}>
          we are INGENIEURTEAM, your trusted partner for professional car services throughout Germany. With a passion for precision engineering and a commitment to excellence. <br />
          <br />
          At INGENIEURTEAM, we believe that your vehicle deserves nothing but the best. Our team of highly 
          skilled engineers and mechanics is dedicated to providing top-notch automotive solutions tailored to your specific needs. 
          From routine maintenance to complex repairs, we have the knowledge, experience, and state-of-the-art equipment to keep your vehicle running smoothly.
        </Typography>
      </Box>
      <Box>
        <Box display={'flex'} justifyContent={'space-evenly'}>
          {imgs.map((imagenes, idx) =>
            <CardMedia key={idx} src={`${imagenes}`} component='img' height={270} sx={{ width: 270 }} />
          )}
        </Box>
        <Box display={'flex'} justifyContent={'space-evenly'} pt={2}>
          {names.map((name, idx) =>
            <Typography key={idx} fontWeight={600} sx={{ width: 270 }}>{`${name}`}</Typography>
          )}
        </Box>
        <Box display={'flex'} justifyContent={'space-evenly'} pt={2} pb={40}>
          {jobs.map((job, idx) =>
            <Typography key={idx} color={'primary.main'} sx={{ width: 270 }}>{`${job}`}</Typography>
          )}
        </Box>
      </Box>
    </Grid>
  )
}

export default About