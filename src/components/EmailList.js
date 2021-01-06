import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './EmailList.css'
import Section from './Section'
import EmailRow from './EmailRow'
import { db } from '../firebase'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import SettingsIcon from '@material-ui/icons/Settings'
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import InboxIcon from '@material-ui/icons/Inbox'


export default function EmailList() {
  const [emails, setEmails] = useState([])
  console.log(emails)

  useEffect(()=>{
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) =>({
              id: doc.id,
              data: doc.data(),
            })
          )
        )
      );
  },[])

    return (
      <div className="emailList">
        <div className="emailList__settings">
          <div className="emailList__settingsLeft">
            <Checkbox />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RedoIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="emailList__settingRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>

        <div className="emailList__section">
          <Link to='/primary'>
            <Section Icon={InboxIcon} title="Primary" color="red" selected />
          </Link>
          <Link to='/social'>
            <Section Icon={PeopleIcon} title="Social" color="blue" />
          </Link>
          <Link to='/promotions'>
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
          </Link>
        </div>

        <div className="emailList__list">
          {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
            return (
              <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            );
          })}
          
        </div>
      </div>
    );
}
