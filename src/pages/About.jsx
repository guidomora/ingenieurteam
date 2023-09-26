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
        <Typography color={'primary.main'} fontSize={60} fontWeight={600}
          textAlign={'center'} >About us</Typography>
        <Typography color={'#28282880'} textAlign={'center'}>
          Learn more about what it means to be a Ingenieurteam customer by <br /> starting your quote today
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'space-evenly'} pt={7} pb={15}>
        <Typography fontSize={32} width={600}>
          Hi, we're INGENIEURTEAM <br /> We're provide a professional car services across the Germany
        </Typography>
        <Typography color={'#28282880'} width={600}>
          Lorem ipsum dolor sit amet consectetur. Morbi amet consequat pellentesque tellus. Mattis viverra id sed pretium viverra nisl massa neque nulla.
          <br />Volutpat nunc sapien faucibus consectetur integer in nulla. Ut massa sed urna sollicitudin urna et. Semper quam dui tortor interdum amet imperdiet sagittis. <br />
          Ut massa sed urna sollicitudin urna et. Semper quam dui tortor interdum amet imperdiet sagittis.
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