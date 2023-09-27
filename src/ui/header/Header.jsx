import React from 'react'
import logo from '../../imgs/ST.png'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { Link as UiLink } from '@mui/material'

const Header = () => {
  return (
    <>

      <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} pl={15} pr={15} pt={3} pb={3} bgcolor={"secondary.main"}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={370}>
          <Box display={'flex'} alignItems={'center'}>
            <img className='img' src={logo} alt="" />
            <svg
              // ingenieur team
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="16"
              fill="none"
              viewBox="0 0 162 16"
            >
              <path
                fill="#282828"
                d="M.24 15.065L2.22.925h1.697l-1.98 14.14H.239zM5.683 15.065L7.663.925h1.84l5.516 11.07L16.565.925h1.697l-1.98 14.14h-1.829L8.936 3.995 7.38 15.066H5.683zM26.235 15.327c-.977 0-1.863-.188-2.657-.565a5.727 5.727 0 01-1.991-1.586 6.463 6.463 0 01-1.152-2.343c-.229-.889-.273-1.838-.131-2.848a8.09 8.09 0 01.96-2.899 8.938 8.938 0 011.859-2.323 8.628 8.628 0 012.455-1.535 7.132 7.132 0 012.748-.555c1.065 0 2.041.249 2.93.747.896.498 1.627 1.219 2.193 2.162l-1.637.818a4.402 4.402 0 00-1.637-1.515 4.383 4.383 0 00-2.101-.526c-.714 0-1.412.145-2.092.435-.68.29-1.3.693-1.859 1.212a7.192 7.192 0 00-1.404 1.797c-.37.68-.61 1.418-.718 2.212a5.59 5.59 0 00.101 2.182c.182.68.475 1.279.88 1.798.41.511.915.912 1.515 1.201.6.29 1.263.435 1.99.435.58 0 1.146-.098 1.698-.293a5.975 5.975 0 001.556-.828 6.8 6.8 0 002.243-2.859h-3.476l.212-1.515h5.477a8.177 8.177 0 01-.97 2.788 8.985 8.985 0 01-1.819 2.293 8.564 8.564 0 01-2.425 1.555 7.034 7.034 0 01-2.748.555zM36.22 15.065L38.2.925h8.68l-.233 1.697h-6.982l-.566 4.02h5.719l-.232 1.696h-5.73l-.707 5.03h6.982l-.232 1.697h-8.68zM48.242 15.065l1.98-14.14h1.839l5.517 11.07L59.124.925h1.697l-1.98 14.14h-1.83l-5.516-11.07-1.556 11.07h-1.697zM62.58 15.065L64.56.925h1.698l-1.98 14.14H62.58zM68.023 15.065l1.98-14.14h8.68l-.232 1.697h-6.982l-.566 4.02h5.719l-.233 1.696H70.66l-.707 5.03h6.982l-.232 1.697h-8.68zM85.424 15.327c-1.132 0-2.075-.276-2.83-.828-.747-.552-1.283-1.293-1.606-2.222-.317-.936-.394-1.972-.233-3.11L81.907.925h1.698l-1.152 8.242c-.115.808-.07 1.552.131 2.232.202.68.56 1.222 1.071 1.626.512.404 1.183.606 2.011.606.829 0 1.556-.202 2.183-.606a4.686 4.686 0 001.515-1.626c.39-.68.643-1.424.758-2.232L91.274.925h1.697L91.82 9.167a8.036 8.036 0 01-.727 2.403 7.113 7.113 0 01-1.384 1.96 6.125 6.125 0 01-1.93 1.323 5.792 5.792 0 01-2.354.474zM94.297 15.065l1.98-14.14h4.972c.754 0 1.411.185 1.97.556.559.37.974.872 1.243 1.505.27.626.35 1.326.243 2.1a4.56 4.56 0 01-.657 1.859 4.924 4.924 0 01-1.314 1.404 4.714 4.714 0 01-1.707.767l2.617 5.949h-1.96l-2.557-5.807h-2.324l-.808 5.807h-1.698zm2.749-7.504h3.102a2.7 2.7 0 001.303-.334 3.201 3.201 0 001.051-.919c.283-.39.458-.828.525-1.313.074-.491.024-.929-.151-1.312a2.06 2.06 0 00-.788-.92 2.17 2.17 0 00-1.213-.343h-3.102l-.727 5.14zM119.237.925l-.243 1.697h-4.708l-1.738 12.443h-1.697l1.738-12.443H107.9l.233-1.697h11.104zM120.295 15.065l1.981-14.14h8.679l-.232 1.697h-6.982l-.566 4.02h5.719l-.232 1.696h-5.729l-.708 5.03h6.982l-.232 1.697h-8.68zM138.741.925h2.051l3.162 14.14h-1.798l-.657-2.889h-6.618l-1.455 2.889h-1.809l7.124-14.14zm-3.001 9.555h5.375l-1.657-7.383-3.718 7.383zM146.175 15.065l4.719-14.14h1.303l2.415 10.04 5.213-10.04h1.304l.768 14.14h-1.728l-.546-10.261-4.93 9.493h-1.112l-2.263-9.493-3.415 10.26h-1.728z"
              ></path>
            </svg>
          </Box>
          <Typography fontSize={"12px"} color={"primary.main"}>TÜV SÜD AUTO PARTNER <br /> IN NEUSS</Typography>

        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={420}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={150}>
            {/* maps */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#282828"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M10.417 5.868a2.5 2.5 0 102.049 2.049M4.167 12.68c-.54-1.378-.834-2.845-.834-4.227 0-3.748 2.985-6.786 6.667-6.786s6.667 3.038 6.667 6.786c0 3.718-2.128 8.057-5.448 9.61a2.875 2.875 0 01-2.438 0c-1.06-.496-1.999-1.276-2.786-2.23"
              ></path>
            </svg>
            <a className='links' href='https://www.google.com/maps/place/Heinrich-Pesch-Stra%C3%9Fe+5a,+50739+K%C3%B6ln,+Alemania/@50.9761526,6.92362,18z/data=!3m1!4b1!4m6!3m5!1s0x47bf2ff516b34efb:0x89a570688681b4ce!8m2!3d50.9761509!4d6.9249075!16s%2Fg%2F11g9qpv7lw?entry=ttu'
              target='blank'>
              <Typography sx={{ textDecoration: "underline" }} fontSize={"12px"}>Heinrich-Pesch-Str. <br /> 5a 50739 Köln</Typography>
            </a>
          </Box>
          <Box>
            <Typography fontSize={"12px"}>Mon-Fri, 9:00-19:00</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={100}>
            <svg   // tiktok
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="11.4"
                stroke="#282828"
                strokeWidth="1.2"
              ></circle>
              <path
                fill="#282828"
                d="M14.016 7.33l-.244-.384h-1.475v3.463l-.005 3.381a.785.785 0 01.005.078 1.538 1.538 0 11-1.538-1.538c.176 0 .347.033.505.088V10.73a3.026 3.026 0 00-.505-.043 3.188 3.188 0 00-3.18 3.184 3.185 3.185 0 003.182 3.18 3.185 3.185 0 003.182-3.18V9.848c.636.636 1.458 1.256 2.368 1.455V9.577c-.988-.437-1.97-1.729-2.295-2.246z"
              ></path>
            </svg>

            <svg   // fb
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="11.4"
                stroke="#282828"
                strokeWidth="1.2"
              ></circle>
              <path
                fill="#282828"
                d="M12.4 12.821v4.23h-1.943v-4.23H8.842v-1.715h1.615v-.624c0-2.317.968-3.536 3.016-3.536.627 0 .784.101 1.128.183v1.697c-.385-.067-.493-.105-.893-.105-.475 0-.729.135-.96.4-.232.266-.348.725-.348 1.383v.606h2.201l-.59 1.715H12.4v-.004z"
              ></path>
            </svg>
            <svg   //ig
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="11.4"
                stroke="#282828"
                strokeWidth="1.2"
              ></circle>
              <g fill="#282828" clipPath="url(#clip0_177_6583)">
                <path d="M11.999 7.856c1.35 0 1.51.006 2.04.03.494.021.76.104.938.173.235.091.405.202.58.377.178.178.287.346.378.58.069.178.152.447.173.938.024.533.03.693.03 2.041 0 1.35-.006 1.51-.03 2.04-.021.494-.104.76-.173.938-.091.235-.202.405-.377.58a1.553 1.553 0 01-.58.377c-.178.07-.447.152-.938.174-.533.024-.693.03-2.041.03-1.35 0-1.51-.006-2.04-.03-.494-.021-.76-.104-.938-.173a1.562 1.562 0 01-.58-.377 1.554 1.554 0 01-.377-.58c-.07-.178-.152-.447-.174-.938-.024-.533-.03-.693-.03-2.041 0-1.35.006-1.51.03-2.04.022-.494.104-.76.174-.938.09-.235.2-.405.376-.58.178-.178.346-.287.58-.378.178-.069.447-.152.938-.173.531-.024.691-.03 2.041-.03zm0-.91c-1.372 0-1.543.006-2.082.03-.537.024-.906.11-1.226.235-.333.13-.616.302-.896.584-.282.28-.454.562-.584.894-.124.322-.211.689-.235 1.226-.024.54-.03.712-.03 2.084s.006 1.543.03 2.082c.024.537.11.906.235 1.226.13.333.302.616.584.896.28.28.563.454.894.582.322.124.689.211 1.226.235.539.024.71.03 2.082.03 1.372 0 1.543-.006 2.082-.03.537-.024.906-.11 1.226-.235a2.47 2.47 0 00.894-.582c.28-.28.454-.563.582-.894.125-.322.212-.689.235-1.226.024-.539.03-.71.03-2.082 0-1.372-.006-1.543-.03-2.082-.023-.537-.11-.906-.235-1.226a2.368 2.368 0 00-.578-.898 2.47 2.47 0 00-.894-.582c-.322-.125-.689-.211-1.226-.235-.54-.026-.712-.032-2.084-.032z"></path>
                <path d="M12 9.404a2.596 2.596 0 100 5.192 2.596 2.596 0 000-5.192zm0 4.278a1.684 1.684 0 110-3.367 1.684 1.684 0 010 3.367zM15.303 9.301a.606.606 0 11-1.212 0 .606.606 0 011.212 0z"></path>
              </g>
              <defs>
                <clipPath id="clip0_177_6583">
                  <path
                    fill="#fff"
                    d="M0 0H10.105V10.105H0z"
                    transform="translate(6.946 6.946)"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
      </Grid>
      <Grid pl={15} pr={15} pt={3} pb={3} bgcolor={"secondary.main"} display={'flex'} justifyContent={"space-between"}>
        <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} width={370}>
          <NavLink to={'/'} className={({ isActive }) => `nav-item nav-link ${isActive ? "onactive" : 'links'}`}>
            <Typography className='hvr-underline-from-center' fontWeight={600} fontSize={14}>Homepage</Typography>
          </NavLink>
          <NavLink to={'/about'} className={({ isActive }) => `nav-item nav-link ${isActive ? "onactive" : 'links'}`}>
            <Typography className='hvr-underline-from-center' fontWeight={600} fontSize={14}>About</Typography>
          </NavLink>
          <NavLink to={'/services'} className={({ isActive }) => `nav-item nav-link ${isActive ? "onactive" : 'links'}`}>
            <Typography className='hvr-underline-from-center' fontWeight={600} fontSize={14}>Services</Typography>
          </NavLink>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={430}>
          <Typography color={"primary.main"} fontWeight={600} fontSize={14}>+49 221 57 000 807</Typography>
          <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 4, fontSize: 12 }} >Call Back</Button>
          <Button variant="contained" sx={{ textTransform: "none", borderRadius: 4, fontSize: 12 }}>Book an Appointment</Button>
        </Box>
      </Grid>
    </>
  )
}

export default Header