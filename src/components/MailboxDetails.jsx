import { useParams } from 'react-router-dom';

const MailboxDetails = props => {
    const {mailboxId} = useParams ();
    const selectedBox = props.mailboxes.find(
     (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        <>
        <h1>Mailbox {selectedBox._id}</h1>
        <h2>Details</h2>
        <p>Boxholder: {selectedBox.boxHolder}</p>
        <p>Box size: {selectedBox.boxSize}</p>
        </>
    )

}

export default MailboxDetails;