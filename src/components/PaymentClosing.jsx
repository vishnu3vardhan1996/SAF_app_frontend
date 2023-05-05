import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
        </form>

        <h1>{cardNo}</h1>

    </div>)
}

export { PaymentClosing };
