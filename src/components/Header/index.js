import { Link } from "react-router-dom";
import logo from '../../assetes/images/logo_optimus.webp';
import avatarUser from '../../assetes/images/avatar_man.webp';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "@mui/material";
import SearchBox from "../SearchBox/SearchBox";
import { MdLightbulbOutline } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
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
                        <Button className="rounded-circle mr-3"> <IoCartOutline/></Button>
                        <Button className="rounded-circle mr-3"> <MdOutlineEmail/></Button>
                        <Button className="rounded-circle mr-3"> <FaRegBell/></Button>

                        <div className="myAccWrapper">
                            <Button className="myAcc d-flex align-items-center">
                                <div className="userImg">
                                    <span className="rounded-circle"><img src={avatarUser} /></span>
                                </div>
                                <div className="userInfo">
                                    <h4>Usuario Chofer</h4>
                                    <p className="mb-0"> @gmail.com </p>
                                </div>
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </header>
        </>
    )
}


export default Header;