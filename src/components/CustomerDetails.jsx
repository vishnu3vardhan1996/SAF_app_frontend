import React, { useState } from "react";
require('dotenv').config();
// import "../assets/styles.css";
// import UserDetails from "./UserDetails";

function CustomerDetails() {

    const [twoThoDe, setTwoThoDe] = useState(0);
    const [fiveHudDe, setFiveHudDe] = useState(0);
    const [twoHudDe, setTwoHudDe] = useState(0);
    const [oneHudDe, setOneHudDe] = useState(0);
    const [fiveTyDe, setFiveTyDe] = useState(0);
    const [twoTyDe, setTwoTyDe] = useState(0);
    const [oneTyDe, setOneTyDe] = useState(0);
    const [fiveCoin, setFiveCoin] = useState(0);
    const [twoCoin, setTwoCoin] = useState(0);
    const [oneCoin, setOneCoin] = useState(0);
    const [total, setTotal] = useState(0);

    const [serviceCharge, setServiceChanrge] = useState();

    const [interestCal, setInterestCal] = useState();

    // const amountValueForInt;

    const [amountValueForInt, setAmountValueForInt] = useState();



    function handletwoThoDe(event) {
        setTwoThoDe(event.target.value);
    }

    function handlefiveHudDe(event) {
        setFiveHudDe(event.target.value);
    }

    function handletwoHudDe(event) {
        setTwoHudDe(event.target.value);
    }

    function handleoneHudDe(event) {
        setOneHudDe(event.target.value);
    }

    function handlefiveTyDe(event) {
        setFiveTyDe(event.target.value);
    }

    function handletwoTyDe(event) {
        setTwoTyDe(event.target.value);
    }

    function handleoneTyDe(event) {
        setOneTyDe(event.target.value);
    }

    function handlefiveCoin(event) {
        setFiveCoin(event.target.value);
    }

    function handletwoCoin(event) {
        setTwoCoin(event.target.value);
    }

    function handleoneCoin(event) {
        setOneCoin(event.target.value);
    }

    function handleServiceChange() {

        const amountValue = document.getElementById("amount_id").value;

        if ((amountValue >= 1000) && (amountValue < 10000)) {
            setServiceChanrge(10);
            setAmountValueForInt(amountValue);
        }
        else if (amountValue >= 10000) {
            setServiceChanrge(20);
            setAmountValueForInt(amountValue);
        }
        else {
            setServiceChanrge(10);
            setAmountValueForInt(amountValue);
        }
    }

    function handleInterestCal() {
        const amountValue = document.getElementById("amount_id").value;
        const interestRate = document.getElementById("interest_rate_id").value;
        const interestValue = (amountValue * (interestRate/100));
        setInterestCal(Math.ceil(interestValue));
    }

    // function handleTotal() {
    //     setTotal(totalAmount);

    // }

    const totalAmount = (twoThoDe * 2000) + (fiveHudDe * 500) + (twoHudDe * 200) + (oneHudDe * 100) + (fiveTyDe * 50) + (twoTyDe * 20) + (oneTyDe * 10) + (fiveCoin * 5) + (twoCoin * 2) + (oneCoin * 1);

    const amountAfterInterest = (amountValueForInt - interestCal - serviceCharge);

    // const totalAmount = [twoThoDe, fiveHudDe, twoHudDe, oneHudDe, fiveTyDe, twoTyDe, oneTyDe, fiveCoin, twoCoin, oneCoin];
    // const sum = totalAmount.reduce((acc, val) => acc + val, 0);

    return (
        // Customer Number, Date, Amount, Name, Husband/Father Name, Address, Mobile number, 
        // Gold Details, Gold Grams, Gold Actual Value, Attender, Aadhar Number (optional).
        <div>
            <form align="center" action={`${process.env.API_URL}/registration`} method="POST">
                <table cellPadding="2" width="30%" align="left"
                    cellSpacing="2" style={{ paddingLeft: "100px" }}>
                    <thead>
                        <tr>
                            <td colSpan={4}>
                                <h1 className="brand_name">SRI ABIRAMI FINANCE</h1>
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="tr_alignment">
                            <td >
                                Card no: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="cust_no_id" name="custno" required />
                            </td>
                            <td >
                                Date: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="date" id="date_id" name="date" required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Amount: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="amount_id" name="amount" onChange={handleServiceChange} required />
                            </td>
                            <td >
                                Interest Rate: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="interest_rate_id" name="interest_rate" onChange={handleInterestCal} required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Interest: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="interest_id" value={interestCal} name="interest" required />
                            </td>

                            <td >
                                Service Charge: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" value={serviceCharge} id="service_id" name="service_charge" required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Amount After Interest and Service Charge: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="amount_int_id" value={amountAfterInterest} name="amount_after_int" required />
                            </td>
                        
                            <td >
                                Name: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="name_id" name="name" required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Husband/Father Name: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="hus_fat_name_id" name="hus_fat_name" required />
                            </td>
                        
                            <td >
                                Address: <span className="required">* </span>
                            </td>
                            <td >
                                <textarea type="text" id="address_id" name="address" required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Phone no: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="phone_no_id" name="phone_no" required />
                            </td>
                        
                            <td >
                                Gold details: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="gold_det_id" name="gold_det" required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Gold grams: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="gold_grams_id" name="gold_grams" required />
                            </td>
                        
                            <td >
                                Gold Actual Value : <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="gold_value_id" name="gold_value" required />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Attender: <span className="required">* </span>
                            </td>
                            <td >
                                <input type="text" id="attender_id" name="attender" required />
                            </td>
                        
                            <td >
                                Aadhar Number:
                            </td>
                            <td >
                                <input type="text" id="aadhar_id" name="aadhar" />
                            </td>
                        </tr>

                        <tr className="tr_alignment">
                            <td >
                                Status: <span className="required">* </span>
                            </td>
                            <td >
                                {/* <input type="text" id="status_id" name="status" /> */}
                                <select id="status_id" name="status">
                                    <option value="paid">PAID</option>
                                    <option value="unpaid">UN-PAID</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <table cellPadding="2" width="22%" align="center" cellSpacing="2" style={{ paddingLeft: "100px" }}>
                    <thead>
                        <tr>
                            <td colSpan={2}>
                                <h1 className="brand_name">DENOMINATION</h1>
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="de_alignment">
                            <td >
                                <b>2000:</b>
                            </td>
                            <td >
                                <input type="text" id="two_thousand" value={twoThoDe} name="two_t" onChange={handletwoThoDe} />
                            </td>
                        </tr>

                        <tr className="de_alignment">
                            <td >
                                <b>500:</b>
                            </td>
                            <td >
                                <input type="text" id="five_hundred" value={fiveHudDe} name="five_h" onChange={handlefiveHudDe} />
                            </td>
                        </tr>

                        <tr className="de_alignment">
                            <td >
                                <b>200:</b>
                            </td>
                            <td >
                                <input type="text" id="two_hundred" value={twoHudDe} name="two_h" onChange={handletwoHudDe} />
                            </td>
                        </tr>

                        <tr className="de_alignment">
                            <td >
                                <b>100:</b>
                            </td>
                            <td >
                                <input type="text" id="one_hundred" value={oneHudDe} name="one_h" onChange={handleoneHudDe} />
                            </td>
                        </tr>

                        <tr className="de_alignment">
                            <td >
                                <b>50:</b>
                            </td>
                            <td >
                                <input type="text" id="fifty" value={fiveTyDe} name="five_ty" onChange={handlefiveTyDe} />
                            </td>
                        </tr>
                        <tr className="de_alignment">
                            <td >
                                <b>20:</b>
                            </td>
                            <td >
                                <input type="text" id="twenty" value={twoTyDe} name="two_ty" onChange={handletwoTyDe} />
                            </td>
                        </tr>
                        <tr className="de_alignment">
                            <td >
                                <b>10:</b>
                            </td>
                            <td >
                                <input type="text" id="ten" value={oneTyDe} name="one_ty" onChange={handleoneTyDe} />
                            </td>
                        </tr>
                        <tr className="de_alignment">
                            <td >
                                <b>5:</b>
                            </td>
                            <td >
                                <input type="text" id="five" value={fiveCoin} name="five_coin" onChange={handlefiveCoin} />
                            </td>
                        </tr>
                        <tr className="de_alignment">
                            <td >
                                <b>2:</b>
                            </td>
                            <td >
                                <input type="text" id="two" value={twoCoin} name="two_coin" onChange={handletwoCoin} />
                            </td>
                        </tr>
                        <tr className="de_alignment">
                            <td >
                                <b>1:</b>
                            </td>
                            <td >
                                <input type="text" id="one" value={oneCoin} name="one_coin" onChange={handleoneCoin} />
                            </td>
                        </tr>

                        <tr className="de_alignment">
                            <td >
                                <b>Total:</b>
                            </td>
                            <td >
                                <input type="text" id="total_value" value={totalAmount} name="total" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export { CustomerDetails };