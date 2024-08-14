import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';

const App = () => {
  const [mailboxes, setmailboxes] = useState([]);

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setmailboxes([...mailboxes, newMailbox]);
  }
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>}/>
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>} />
      <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>} />


    </Routes>
    </>
  )
};

export default App;