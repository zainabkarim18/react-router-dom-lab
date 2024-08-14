import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MailboxForm = (props) => {

const [formData, setFormData] = useState({
    boxHolder: '', 
    boxSize: '',
   
})

const navigate = useNavigate();

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.addMailbox(formData)
    navigate('/mailboxes');
}
return (
    <>
     <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxHolder">Enter a Boxholder:</label>
            <input type="text" name="boxHolder" value={formData.boxHolder} onChange={handleChange}/>
            <label htmlFor="boxSize">Selectet a Box size:</label>
            <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </>
)

}

export default MailboxForm;