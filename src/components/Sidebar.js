import React from 'react'
import { useDispatch } from 'react-redux'
import './Sidebar.css'
import { openSendMessage } from '../features/mailSlice'
import SidebarOption from './SidebarOption'
import { Button, IconButton } from '@material-ui/core'
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"
import SendIcon from "@material-ui/icons/Send"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PersonIcon from "@material-ui/icons/Person"
import DuoIcon from "@material-ui/icons/Duo"
import PhoneIcon from "@material-ui/icons/Phone"


export default function Sidebar() {
  const dispatch = useDispatch()

    return (
      <div className="sidebar">
        <Button
          startIcon={<img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' alt=''/>}
          className="sidebar__compose"
          onClick={() => dispatch(openSendMessage())}
        >
          Compose
        </Button>

        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={20}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" number={10} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={10} />
        <SidebarOption
          Icon={LabelImportantIcon}
          title="Important"
          number={10}
        />
        <SidebarOption Icon={SendIcon} title="Sent" number={10} />
        <SidebarOption Icon={InsertDriveFileIcon} title="Draft" number={1} />
        <SidebarOption Icon={ExpandMoreIcon} title=" More" />

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
              <PhoneIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
}
