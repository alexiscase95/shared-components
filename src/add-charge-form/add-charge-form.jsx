import React, {useState} from "react";
import { FormInput } from "../form-input/form-input.component";

const defaultFormFields = {
    transactionName: '',
    date: '',
    cost: '',
    creditCard: ''
}

const AddCharge = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { transactionName, date, cost, creditCard } = formFields;

    const handleSubmit = (event) => {
        console.log("SUBMITTING")
    };

    const handleChange = () => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div>
            <h1>Add Charge</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Transaction Name" type="text" name="transactionName" onChange={handleChange} value={transactionName} required />
                <FormInput label="Date" type="text" name="date" onChange={handleChange} value={date} required />
                <FormInput label="Cost" type="text" name="cost" onChange={handleChange} value={cost} required />
                <FormInput label="Credit Card" type="text" name="creditCard" onChange={handleChange} value={creditCard} required />
                {/* <Button type="submit">Sign Up</Button> */}
                {/* Check box for me and lucian */}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddCharge;