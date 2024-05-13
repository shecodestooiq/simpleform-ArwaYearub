import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { useState } from "react";

const Hw = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handelSubmit = (e) => {
        event.preventDefault();
        console.log('YAAAAAAYYYYYY Form Submitted: ', {name, email, message});
    }
    return ( 
        <form onSubmit={handelSubmit}>
            <InputField label="Name: " name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <InputField label="Email: " name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextAreaField label="message: " value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit"></button>
        </form>

     );
}
 
export default Hw;