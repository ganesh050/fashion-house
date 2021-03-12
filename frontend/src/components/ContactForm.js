import React from "react";

function ContactForm() 
{
    render() 
    {
        this.state = 
        {
            name: "",
            email: "",
            message: "",
            status: "Submit"
        };
    }
}

export default ContactForm;