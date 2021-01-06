import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import './App.css'
import { auth} from "./firebase"
import { login } from "./features/userSlice"
import { selectUser } from "../src/features/userSlice"
import { selectSendMessageIsOpen } from '../src/features/mailSlice'
import Mail from "./components/Mail"
import Social from './components/Social'
import Promotion from './components/Promotion'
import EmailList from "./components/EmailList"
import SendMail from './components/SendMail'
import Header from "./components/Header"
import Sidebar from './components/Sidebar'
import Login from './components/Login'


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      }
    })
  }, [dispatch])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>

              <Route path='/social'>
                <Social />
              </Route>

              <Route path='/promotions'>
                <Promotion />
              </Route>

              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
