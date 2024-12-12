import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assetes/images/logo_optimus.webp';
import avatarUser from '../../assetes/images/avatar_man.webp';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "@mui/material";
import SearchBox from "../SearchBox/SearchBox";

/**Icons */
import { MdLightbulbOutline } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6"; 
import { IoShieldHalfSharp } from "react-icons/io5";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificatonDrop, setOpenNotificatonDrop] = useState(null);
    const open = Boolean(anchorEl);
    const openNotification = Boolean(isOpenNotificatonDrop);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlerOpenNotificationsDrop = ()=>{
        setOpenNotificatonDrop(true);
    }

    const handlerCloseNotificationsDrop = ()=>{
        setOpenNotificatonDrop(false);
    }
    
    return (
        <>
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center w-100">
                    {/** LOGO */}
                    <div className="col-sm-2 part1">
                        <Link to={'./'} className="d-flex align-items-center logo">
                            <img src={logo}  alt="logotipo"/>
                            <span className="ml-2"> OPTIMUS </span>
                        </Link>
                    </div>

                    <div className="col-sm-3 d-flex align-items-center part2 pl-3">
                       <Button className="rounded-circle mr-3"> <MdMenuOpen/></Button>
                        <SearchBox className/>
                    </div>

                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
                        <Button className="rounded-circle mr-3"> <MdLightbulbOutline/></Button>
                        <Button className="rounded-circle mr-3"> <MdOutlineEmail/></Button>
                        
                        <div className='dropdownWrapper position-relative'>
                            <Button onClick={handlerOpenNotificationsDrop} className="rounded-circle mr-3"> <FaRegBell/>
                            </Button>
                            <Menu
                                anchorEl={isOpenNotificatonDrop}
                                className='notifications dropdown_list'
                                id="notifications"
                                open={openNotification}
                                onClose={handlerCloseNotificationsDrop}
                                onClick={handlerCloseNotificationsDrop}
                                slotProps={{    
                                paper: {
                                    elevation: 0,
                                    sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className='scroll'>
                                    <div className='head pl-3 pb-0'>
                                        <h4>Orders (10) </h4>
                                    </div>
                                    <Divider className='mb-1' />
                                    
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                
                                    <MenuItem onClick={handlerCloseNotificationsDrop}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatarUser} />
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>carlos </b>
                                                        add a favoritos
                                                        <b> transporte lirquen</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'> OT: 212526</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                </div>
                                <Divider className='mb-1' />
                                <div className='d-flex align-items-center pl-3 pr-3 w-100 pt-2 pb-1'>
                                    <Button className='btn-blue w-100'>View All Notifications</Button>
                                </div>
                                
                            </Menu>
                        </div>
                        
                        <div className="myAccWrapper">
                            <Button onClick={handleClick} className="myAcc d-flex align-items-center">
                                <div className="userImg">
                                    <span className="rounded-circle"><img src={avatarUser} /></span>
                                </div>
                                <div className="userInfo">
                                    <h4>Usuario Chofer</h4>
                                    <p className="mb-0"> @gmail.com </p>
                                </div>
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                paper: {
                                    elevation: 0,
                                    sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon> <PersonAdd fontSize="small" /></ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon> <IoShieldHalfSharp /> </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon> <Settings fontSize="small" /></ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}


export default Header;