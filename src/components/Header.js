import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './Header.css';
import { selectUser, logout } from '../features/userSlice'
import { auth } from '../firebase';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from "@material-ui/icons/Apps";
import { IconButton, Avatar } from '@material-ui/core';

export default function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const signOut =()=>{
    auth.signOut().then(()=>{
      dispatch(logout())
    })
  }

    return (
      <div className="header">
        <Link to='/'>
          <div className="header__left">
            <IconButton>
              <MenuIcon />
            </IconButton>
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
              alt=""
            />
          </div>
        </Link>

        <div className="header__middle">
          <SearchIcon />
          <input placeholder="Search mail" type="text" />
          <ArrowDropDownIcon className="header_Caret" />
        </div>

        <div className="header__right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl} />
          </IconButton>
        </div>
      </div>
    );
}
