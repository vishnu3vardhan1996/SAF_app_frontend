import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { apiURL } from "./App";
// import "../assets/styles.css";
// import { SearchOptionSelect } from "./SearchOptionSelect";

function CustSearch() {

    const [selectValue, setSelectValue] = useState("");

    const [inputChange, setInputChange] = useState("");

    const [paymentSelection, setPaymentSelection] = useState("");

    const navigate = useNavigate();

    function handleSelect(event) {
        const valueSelected = event.target.value;
        if (valueSelected === "dum") {
        }
        else if (valueSelected === "card_value") {
            document.getElementById("form_id").removeAttribute("hidden", "false");
            setSelectValue("Enter Card No");
        }
        else if (valueSelected === "mobile_value") {
            document.getElementById("form_id").removeAttribute("hidden", "false");
            setSelectValue("Enter Mobile No");
        }
        else if (valueSelected === "name_value") {
            document.getElementById("form_id").removeAttribute("hidden", "false");
            setSelectValue("Enter name");
        }
        else {
            console.log("nothing!!");
        }

    }

    function handleInputChange(event) {
        const inputValue = event.target.value;
        setInputChange(inputValue);
    }

    // , { state: requestBody }

    function handleSubmitOnClick() {
        // const requestBody = { payment_status: paymentSelection };
        navigate(`/customer_details/${inputChange}`);
    }

    function handleSelectPayment(event) {
        setPaymentSelection(event.target.value);
    }

    fetch(`${apiURL}/customer_details/:name`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment_status: paymentSelection })
    })
        .then(res => {
            // Handle the response here
        })
        .catch(err => {
            // Handle the error here
        });

    return (<div>
        <select id="dropdown_option" onChange={handleSelect} value="dum">
            <option id="dummy" value="dum">Select search</option>
            <option id="by_card_no" value="card_value">Card no</option>
            <option id="by_mobile_no" value="mobile_value">Mobile no</option>
            <option id="by_name" value="name_value">Name</option>
        </select>

        <select value={paymentSelection} name="payment_details" onChange={handleSelectPayment}>
            <option id="dummy" value="dum">Select search</option>
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
        </select>

        {/* value={paymentSelection}  */}

        <form id="form_id" hidden>
            <input type="text" value={inputChange} placeholder={selectValue} name="userinput" onChange={handleInputChange} />
            <button type="submit" onClick={handleSubmitOnClick}>submit</button>
        </form>

    </div>);
}

export { CustSearch };
// document.getElementById("form_id").hidden = true;