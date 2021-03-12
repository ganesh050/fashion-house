import React, { Component } from "react";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            status: "Submit"
        };
    }
    // render() {}
}

export default ContactForm;