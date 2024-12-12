import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa";
import { PiTruckTrailerLight } from "react-icons/pi";
import { MdOutlineNewspaper } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FiMessageSquare } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
const Siderbar = () => {
    return(
        <>
        <div className="siderbar">
            <ul>
                <li>
                    
                    <Button className="w-100">
                        <span className="icon"><RxDashboard /></span>
                        Dashboard
                        <span className="arrow"><FaAngleRight/></span>
                    </Button>
                    <ul className="submenu">
                    <li><Link to="#">Balances Mensuales</Link></li>
                    <li><Link to="#">Catastros</Link></li>
                    <li><Link to="#">Cargas</Link></li>
                    </ul>
                    
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><PiTruckTrailerLight /></span>
                            Mis Vehiculos
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><FaUsersViewfinder /></span>
                            Mis Choferes
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><MdOutlineNewspaper /></span>
                            Mis Ordenes Transporte
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><LiaMoneyBillSolid /></span>
                            Mis Gastos
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>      
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><FiMessageSquare /></span>
                            Mis Mensajes
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><IoNotificationsOutline /></span>
                            Mis Notificaciones
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className="w-100">
                            <span className="icon"><IoSettingsOutline /></span>
                            Mis Ajustes
                            <span className="arrow"><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )

}

export default Siderbar;