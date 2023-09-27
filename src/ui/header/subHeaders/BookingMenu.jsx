import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const BookingMenu = () => {
    return (
        <Grid mt={-6} display={'flex'} justifyContent={'center'}>
            <Box borderRadius={3} display={'flex'} alignItems={'center'}
                justifyContent={'space-between'} bgcolor={"white"} border={'solid 1px #eef0f0'}
                height={90} width={"70vw"} >
                <Box display={'flex'} alignItems={'center'}
                    justifyContent={'space-evenly'} width={700}>
                    <Box display={'flex'} alignItems={'center'}
                        justifyContent={'space-evenly'} width={160}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="20"
                            fill="none"
                            viewBox="0 0 16 20"
                        >
                            <path
                                fill="#C5CBD5"
                                fillRule="evenodd"
                                d="M8 0C3.582 0 0 4.003 0 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 002.926 0C13.447 17.812 16 12.962 16 8.5 16 4.003 12.418 0 8 0zm0 10a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <Box>
                            <Typography fontSize={16} fontWeight={600}>Location</Typography>
                            <Typography color={"primary.main"} sx={{ textDecoration: "underline" }}>Cologne</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}
                        justifyContent={'space-evenly'} width={160}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            fill="none"
                            viewBox="0 0 20 21"
                        >
                            <path
                                fill="#C5CBD5"
                                d="M20 13v-2c0-.839 0-1.585-.013-2.25H.013C0 9.415 0 10.161 0 11v2c0 3.771 0 5.657 1.172 6.828C2.343 21 4.229 21 8 21h4c3.771 0 5.657 0 6.828-1.172C20 18.657 20 16.771 20 13zM5.75 1.5a.75.75 0 00-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092C.477 4.866.195 5.81.079 7.25h19.842c-.116-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V1.5a.75.75 0 00-1.5 0v1.513C13.585 3 12.839 3 12 3H8c-.839 0-1.585 0-2.25.013V1.5z"
                            ></path>
                        </svg>
                        <Box>
                            <Typography fontSize={16} fontWeight={600}>Date</Typography>
                            <Typography color={"primary.main"} sx={{ textDecoration: "underline" }}>28/9/2023</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}
                        justifyContent={'space-evenly'} width={200}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="#C5CBD5"
                                fillRule="evenodd"
                                d="M1.464 1.464C0 2.93 0 5.286 0 10c0 4.714 0 7.071 1.464 8.535C2.93 20 5.286 20 10 20c4.714 0 7.071 0 8.535-1.465C20 17.072 20 14.714 20 10s0-7.071-1.465-8.536C17.072 0 14.714 0 10 0S2.929 0 1.464 1.464zM6 6.25a.75.75 0 01.75.75v2.25h2.5V7a.75.75 0 011.5 0v2.25H11c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043a.75.75 0 011.5 0v.025c0 .445 0 .816-.02 1.12a2.822 2.822 0 01-.19.907 2.75 2.75 0 01-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.275V13a.75.75 0 01-1.5 0v-2.25h-2.5V13a.75.75 0 01-1.5 0V7A.75.75 0 016 6.25z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <Box>
                            <Typography fontSize={16} fontWeight={600}>Select a service</Typography>
                            <Typography color={"primary.main"} sx={{ textDecoration: "underline" }}>Emissions</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box pr={10}>
                    <Button variant="contained" sx={{ width: 200, textTransform: "none", borderRadius: 4, fontSize: 12 }}>Book an Appointment</Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default BookingMenu