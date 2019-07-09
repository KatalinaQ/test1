import React from 'react';
import './style.css';

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {},
        }
    };

    handleChange = (e) => {
        debugger;
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    };

    submitRegistrationForm = (e) => {
        debugger;
        e.preventDefault();
        if (this.validateForm()) {
            const fields = this.state.fields;
            let fieldsTemp = {
                ...fields,
                "userName": '',
                "email": '',
                "mobile": '',
                "password": ''
            };
            this.setState({ fields: fieldsTemp });
            alert("Form submitted");
        }
    };

    validateUserName = () => {
        const fields = this.state.fields;
        const errors = this.state.errors;
        let formIsValid = true;

        if (!fields["userName"]) {
            formIsValid = false;
            errors["userName"] = "*Please enter your username.";
        }

        else if (typeof fields["userName"] !== "undefined") {
            if (!fields["userName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["userName"] = "*Please enter alphabet characters only.";
            }
        }

        if (formIsValid) {
            errors["userName"] = "";
        }

        this.setState({
            errors
        });
        
        
        return formIsValid;
    };

    validateEmail = () => {
        const fields = this.state.fields;
        const errors = this.state.errors;
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        else if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

        if (formIsValid) {
            errors["email"] = "";
        }

        this.setState({
            errors
        });

        return formIsValid;
    };

    validateMobile = () => {

        const fields = this.state.fields;
        const errors = this.state.errors;
        let formIsValid = true;

        if (!fields["mobile"]) {
            formIsValid = false;
            errors["mobile"] = "*Please enter your mobile no.";
        }

        else if (typeof fields["mobile"] !== "undefined") {
            if (!fields["mobile"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobile"] = "*Please enter valid mobile no.";
            }
        }
        if (formIsValid) {
            errors["mobile"] = "";
        }

        this.setState({
            errors
        });

        return formIsValid;
    }

    validatePassword = () => {
        const fields = this.state.fields;
        const errors = this.state.errors;
        let formIsValid = true;

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"]  = "*Please enter your password.";
        }

        else if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (formIsValid) {
            errors["password"] = "";
        }
        this.setState({
            errors
        });
        return formIsValid;
    };

    validateForm = () => {
        let formIsValid = true;
 
        if (!this.validateUserName()) {
            formIsValid = false;
        }

        if (!this.validateEmail()) {
            formIsValid = false;
        }

        if (!this.validateMobile()) {
            formIsValid = false;
        }

        if (!this.validatePassword()) {
            formIsValid = false;
        }

        return formIsValid;


    };

    render() {
        return (           
            <div id="main-registration-container">
                <div id="register">
                    <h3>Registration page</h3>
                    <form method="post" name="userRegistrationForm" onSubmit={this.submitRegistrationForm} >
                        <label>Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={this.state.fields.userName}
                            onChange={this.handleChange} />
                        <div className="errorMsg">
                            {this.state.errors.userName}
                        </div>
                        <label>Email ID:</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.fields.email}
                            onChange={this.handleChange} />
                        <div className="errorMsg">
                            {this.state.errors.email}
                        </div>
                        <label>Mobile No:</label>
                        <input
                            type="text"
                            name="mobile"
                            value={this.state.fields.mobile}
                            onChange={this.handleChange} />
                        <div className="errorMsg">
                            {this.state.errors.mobile}
                        </div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.fields.password}
                            onChange={this.handleChange} />
                        <div className="errorMsg">
                            {this.state.errors.password}
                        </div>
                        <input
                            type="submit"
                            className="button"
                            value="Register" />
                    </form>
                </div>
            </div>

        );
    }
}


export default RegisterForm;