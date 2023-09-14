import React from 'react'
import * as C from "./styles";

const MailList = () => {
    return (
        <C.Mail>
            <C.MailTitle>Save time, save money!</C.MailTitle>
            <C.MailDesc>Sign up and we'll send the best deals to you</C.MailDesc>
            <C.MailInputContainer>
                <C.Input type='text' placeholder='Your Email' />
                <C.Button>Subscribe</C.Button>
            </C.MailInputContainer>
        </C.Mail>
    )
}

export default MailList