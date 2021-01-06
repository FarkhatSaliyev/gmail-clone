import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import firebase from 'firebase'
import './SendMail.css'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../firebase'
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import LinkIcon from "@material-ui/icons/Link"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import PhotoIcon from "@material-ui/icons/Photo"
import LockIcon from "@material-ui/icons/Lock"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import DeleteIcon from "@material-ui/icons/Delete"
import UndoIcon from "@material-ui/icons/Undo"
import RedoIcon from "@material-ui/icons/Redo"
import TextFieldsIcon from "@material-ui/icons/TextFields"
import FormatBoldIcon from "@material-ui/icons/FormatBold"
import FormatItalicIcon from "@material-ui/icons/FormatItalic"
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined"
import TextFormatIcon from "@material-ui/icons/TextFormat"


export default function SendMail() {
    const { register, handleSubmit, errors } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (formData) =>{
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage())
    }

    return (
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <CloseIcon
            onClick={() => dispatch(closeSendMessage())}
            className="sendMail__close"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name="to"
            placeholder="Recipients"
            ref={register({ required: true })}
          />
          {errors.to && (
            <p className="sendMail__error">
              Please specify at least one recipient.
            </p>
          )}
          <input
            name="subject"
            placeholder="Subject"
            type="text"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <p className="sendMail__error">Please specify subject.</p>
          )}
          <input
            name="message"
            className="sendMail__text"
            type="text"
            ref={register({ required: true })}
          />
          {errors.message && (
            <p className="sendMail__error">Message is required!</p>
          )}

          <div className="sendMail__settings">
            <UndoIcon />
            <RedoIcon />
            <span>Sans Serif</span>
            <ArrowDropDownIcon />
            <TextFieldsIcon />
            <ArrowDropDownIcon />
            <FormatBoldIcon />
            <FormatItalicIcon />
            <FormatUnderlinedIcon />
            <TextFormatIcon />
            <ArrowDropDownIcon />
            <ArrowDropDownIcon />
          </div>

          <div className="sendMail__options">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
              <ArrowDropDownIcon />
            </Button>

            <TextFormatIcon />
            <AttachFileIcon />
            <LinkIcon />
            <EmojiEmotionsIcon />
            <PhotoIcon />
            <LockIcon />
            <div className="sendMail__leftIcon">
              <MoreVertIcon />
              <DeleteIcon />
            </div>
          </div>
        </form>
      </div>
    );
}