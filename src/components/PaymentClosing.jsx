import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {reactURL, apiURL} from "./App";

function PaymentClosing() {

    const navigate = useNavigate();

    const [cardNo, setCardNo] = useState("");

    function handleCradNoInput(event) {
        const cardNoFromCustUpdate = event.target.value;
        setCardNo(cardNoFromCustUpdate);
    }

    function handleCustDetails(event) {
        navigate(`/cust_update/${cardNo}`);
        // event.preventDefault();
    }

    return (<div>
        <form>
            <label for="card_details">Card No: <span className="required">* </span></label>
            <input id="card_details" value={cardNo} type="text" placeholder="Enter Card No" name="cardnodetails" onChange={handleCradNoInput} />
            <button type="submit" name="submitbutton" onClick={handleCustDetails}>Submit</button>
            <a href={`${reactURL}/cust_update/A-121`}>
            <h1>cust_bio</h1>
        </a>
        </form>

        <h1>{cardNo}</h1>

    </div>)
}

export { PaymentClosing };
