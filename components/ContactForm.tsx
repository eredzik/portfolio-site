import { useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        })
    }
    return < Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
            <Label for="yourname">Twoje imię</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Twoje imię"
                onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
            <Label for="youremail">Twój email do kontaktu</Label>
            <Input
                type="email"
                name="email"
                id="youremail"
                placeholder="twoj@email.com"
                onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
            <Label for="messagetoMe">Treść wiadomości</Label>
            <Input
                type="textarea"
                name="text"
                id="messagetoMe"
                placeholder="Tu możesz wpisać treść swojej wiadomości"
                onChange={(e) => setMessage(e.target.value)} />
        </FormGroup>
        <Button>Wyślij!</Button>
    </Form >
}
export default ContactForm;
