import { Box, Button, CardMedia, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import maps from '../imgs/Map.png'

const ContactUs = () => {
    const [services, setServices] = useState('')
    const handleChange = (event) => {
        setServices(event.target.value)
    }
    return (
        <Grid id='contact' sx={{display:{xs:'flex', md:'unset'}, alignItems:{xs:'center', md:'unset'}, flexDirection:{xs:'column', md:'unset'}}}>
            <Box pt={5} pb={5} textAlign={'center'}>
                <Typography sx={{fontSize:{xs:55, md:64}}} fontWeight={600}>Contact us</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
                flexWrap={'wrap'} pt={3}>
                <Box>
                    <Typography pb={1} color={'black'}>First name</Typography>
                    <TextField className='border' sx={{ backgroundColor: 'secondary.main', width:{xs:300, md:500}}} label='First name' />
                </Box>
                <Box pt={3}>
                    <Typography pb={1} color={'black'}>Last name</Typography>
                    <TextField className='border' sx={{ backgroundColor: 'secondary.main', width:{xs:300, md:500}}} label='Last name' />
                </Box>
                <Box pt={3}>
                    <Typography pb={1} color={'black'}>Choose service</Typography>
                    <Select
                        sx={{ width:{xs:300, md:500}, pb:1 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        value={'services'}
                    >
                        <MenuItem value={'Inspections'}>Inspections</MenuItem>
                        <MenuItem value={'Emissions'}>Emissions</MenuItem>
                        <MenuItem value={'Test'}>Safety systems</MenuItem>
                        <MenuItem value={'Test'}>Documents</MenuItem>
                        <MenuItem value={'Test'}>Gas</MenuItem>
                        <MenuItem value={'Test'}>Liquid</MenuItem>
                        <MenuItem value={'Test'}>Classic cars</MenuItem>
                        <MenuItem value={'Test'}>UVV</MenuItem>
                        <MenuItem value={'Test'}>Used cars</MenuItem>
                    </Select>
                </Box>
                <Box display={'flex'} justifyContent={'center'} pt={3}>
                    <Button variant='contained' fullWidth sx={{ height: 50, textTransform: 'none', borderRadius: 2 }}>
                        Send message</Button>
                </Box>
                <Box pb={5} display={'flex'} justifyContent={'center'} pt={3} flexWrap={'wrap'} sx={{ width:{xs:300, md:500}, textAlign:{xs:'center', md:'unset'}}}>
                    <Typography fontSize={12}>If you have a technical question, please always provide us with your contact details - even if you
                        are already our customer. In order to quickly forward your request to the right place, as well as
                        for any questions, it is very helpful for us to provide us with your place of residence and your
                        telephone number. Thank you.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{pt:{xs:5, md:10}}} pb={5} display={'flex'} justifyContent={'center'}>
                <Link target='_blank' href='https://www.google.com/maps/place/Heinrich-Pesch-Stra%C3%9Fe+5a,+50739+K%C3%B6ln,+Alemania/@50.9761526,6.92362,18z/data=!3m1!4b1!4m6!3m5!1s0x47bf2ff516b34efb:0x89a570688681b4ce!8m2!3d50.9761509!4d6.9249075!16s%2Fg%2F11g9qpv7lw?entry=ttu'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="175"
                        height="50"
                        fill="none"
                        viewBox="0 0 175 50"
                    >
                        <rect width="49" height="49" x="0.5" y="0.5" fill="#fff" rx="12.5"></rect>
                        <path
                            fill="#1A73E8"
                            d="M27.17 12.56a9.416 9.416 0 00-2.832-.435c-2.88 0-5.458 1.3-7.182 3.347l4.43 3.723 5.584-6.635z"
                        ></path>
                        <path
                            fill="#EA4335"
                            d="M17.156 15.471a9.343 9.343 0 00-2.195 6.026c0 1.76.35 3.193.928 4.471l5.696-6.773-4.429-3.724z"
                        ></path>
                        <path
                            fill="#4285F4"
                            d="M24.338 17.917a3.588 3.588 0 012.737 5.903l5.58-6.635a9.38 9.38 0 00-5.49-4.62L21.591 19.2a3.575 3.575 0 012.747-1.283z"
                        ></path>
                        <path
                            fill="#FBBC04"
                            d="M24.338 25.088a3.588 3.588 0 01-3.586-3.586 3.553 3.553 0 01.838-2.302l-5.701 6.773c.976 2.16 2.593 3.893 4.259 6.079l6.927-8.232a3.582 3.582 0 01-2.737 1.268z"
                        ></path>
                        <path
                            fill="#34A853"
                            d="M26.937 34.295c3.13-4.89 6.773-7.112 6.773-12.798 0-1.56-.382-3.029-1.055-4.323L20.153 32.052c.53.695 1.066 1.432 1.586 2.249C23.638 37.239 23.113 39 24.34 39c1.224 0 .7-1.766 2.598-4.705z"
                        ></path>
                        <rect
                            width="49"
                            height="49"
                            x="0.5"
                            y="0.5"
                            stroke="#F2F2F2"
                            rx="12.5"
                        ></rect>
                        <path
                            fill="#5F6368"
                            fillRule="evenodd"
                            d="M118.762 25.869l4.672-1.942c-.259-.654-1.027-1.106-1.941-1.106-1.168-.005-2.787 1.027-2.731 3.047zm5.485 1.879l1.783 1.185c-.575.852-1.958 2.319-4.356 2.319-2.968 0-5.113-2.297-5.113-5.226 0-3.109 2.162-5.225 4.859-5.225 2.477.085 4.018 1.682 4.712 3.916l-6.998 2.89c.537 1.05 1.366 1.585 2.534 1.585 1.163 0 1.975-.575 2.568-1.444m-11.343 3.188h2.297v-15.35h-2.297v15.35zm-3.747-4.893c0-1.84-1.23-3.188-2.793-3.188-1.58 0-2.912 1.349-2.912 3.188 0 1.823 1.326 3.15 2.912 3.15 1.569 0 2.793-1.327 2.793-3.15zm2.021-4.926v9.367c0 3.86-2.275 5.446-4.966 5.446-2.534 0-4.058-1.704-4.633-3.087l1.997-.83c.356.853 1.231 1.863 2.636 1.863 2.567-.292 2.793-1.953 2.793-3.82h-.085c-.513.632-1.506 1.19-2.753 1.19-2.613 0-5.011-2.274-5.011-5.208 0-2.951 2.392-5.248 5.011-5.248 1.247 0 2.24.553 2.753 1.168h.079v-.852c0-.006 2.179-.006 2.179-.006v.017zm-25.055 4.91c0-1.88-1.344-3.166-2.895-3.166-1.558 0-2.895 1.286-2.895 3.165 0 1.863 1.343 3.166 2.895 3.166 1.551 0 2.895-1.309 2.895-3.166zm2.257 0c0 3.007-2.314 5.225-5.152 5.225-2.839 0-5.153-2.218-5.153-5.226 0-3.03 2.314-5.225 5.153-5.225 2.838 0 5.152 2.195 5.152 5.226zm9.31 0c0-1.88-1.342-3.166-2.894-3.166-1.558 0-2.895 1.286-2.895 3.165 0 1.863 1.343 3.166 2.895 3.166s2.895-1.309 2.895-3.166zm2.258 0c0 3.007-2.314 5.225-5.152 5.225-2.839 0-5.152-2.218-5.152-5.226 0-3.03 2.313-5.225 5.152-5.225 2.838 0 5.152 2.195 5.152 5.226zm-30.698 5.225c-4.47 0-8.239-3.645-8.239-8.126C61 18.651 64.764 15 69.239 15c2.477 0 4.238.97 5.564 2.24l-1.563 1.563c-.948-.891-2.235-1.585-4.001-1.585-3.267 0-5.813 2.635-5.813 5.869 0 3.267 2.557 5.868 5.813 5.868 2.116 0 3.324-.852 4.097-1.625.632-.632 1.05-1.546 1.207-2.793H69.24v-2.218h7.449c.079.395.118.869.118 1.383 0 1.664-.457 3.724-1.918 5.185-1.423 1.496-3.245 2.292-5.644 2.292"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fill="#63666A"
                            d="M131.523 30.82V17.174h1.762l4.739 8.311h.072l4.739-8.31h1.762V30.82h-1.762l.072-10.383h-.072l-4.262 7.477h-1.024l-4.263-7.477h-.071c.13 3.453.071 6.93.071 10.383h-1.763zm18.575.238c-1 0-1.81-.286-2.477-.858-.667-.571-1-1.333-1-2.262 0-1.024.405-1.81 1.191-2.382.786-.571 1.762-.857 2.905-.857 1.024 0 1.881.19 2.524.571-.017-1.98-1.386-2.524-2.453-2.524-1.007.048-1.881.47-2.238 1.358l-1.596-.691c.215-.548.643-1.072 1.286-1.548s1.477-.714 2.525-.714c1.19 0 2.19.357 2.976 1.047.786.691 1.191 1.691 1.191 2.953v5.644h-1.667V29.51c-.779.977-1.831 1.527-3.167 1.548zm3.143-4.334c-1.026-.782-3.167-.88-4.167-.072-.786.762-.869 1.784-.048 2.381 1.986 1.274 4.287-.71 4.215-2.31zm8.525 4.334c-.714 0-1.357-.143-1.905-.453-.547-.31-.976-.69-1.262-1.143h-.095l.071 1.286v4.12h-1.738V21.413h1.667V22.7h.071c.286-.452.691-.833 1.263-1.143.571-.31 1.214-.452 1.905-.452 1.214 0 2.238.476 3.119 1.428.881.953 1.309 2.144 1.309 3.549 0 1.405-.428 2.595-1.309 3.548-.857.952-1.905 1.429-3.096 1.429zm-.285-1.62c.809 0 1.5-.31 2.095-.928.596-.62.881-1.43.881-2.453 0-1.024-.285-1.834-.881-2.453-.595-.62-1.286-.929-2.095-.929-.834 0-1.524.31-2.096.905-.571.62-.857 1.429-.857 2.453 0 1.024.286 1.857.857 2.453.572.667 1.262.952 2.096.952zm9.811 1.62c-1.048 0-1.905-.262-2.572-.762-.691-.5-1.167-1.143-1.5-1.905l1.571-.643c.501 1.166 1.334 1.762 2.525 1.762.547 0 1-.119 1.333-.357.357-.239.524-.548.524-.953 0-.62-.428-1.024-1.286-1.238l-1.881-.453c-.595-.143-1.167-.452-1.691-.857-.524-.405-.809-1-.809-1.715 0-.833.357-1.5 1.095-2 .738-.524 1.595-.762 2.596-.762.833 0 1.571.19 2.214.572.643.38 1.12.904 1.381 1.619l-1.524.619c-.333-.834-1.047-1.238-2.143-1.238-.524 0-.952.118-1.309.333-.357.215-.524.5-.524.881 0 .524.405.905 1.238 1.096l1.858.428c.881.215 1.524.548 1.953 1.048.428.5.619 1.048.619 1.667 0 .834-.334 1.548-1.024 2.096-.667.476-1.548.762-2.644.762z"
                        ></path>
                    </svg>
                </Link>
            </Box>
            <Box>
                <CardMedia src={maps} component='img' height={200} />
            </Box>
        </Grid>
    )
}

export default ContactUs