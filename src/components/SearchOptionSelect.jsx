import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function SearchOptionSelect(props) {

    // const [colorChange, setColorChange] = useState({color: 'red'});

    const { cardno } = useParams();

    const [paymentStatus, setPaymentStatus] = useState(props.Status);

    const [paymentDate, setPaymentDate] = useState(props.Payment_Status);

    const [cardNoDetails, setCardNoDetail] = useState({ userDetailsDB: [], DeDetailsDB: [], DeRecDetailsDB: [], CommentsDB: [], InterestsDB: [] });

    const [selectedValue, setSelectedValue] = useState("");

    const statusPayment = props.Status;
    let styleForUnpaid;

    if (statusPayment === "unpaid") {
        styleForUnpaid = { color: 'red' };
    }
    else {
        styleForUnpaid = { color: 'black' };
    }

    //Interest Details from DB
    useEffect(() => {
        fetch(`https://sri-abirami-finance-backend.onrender.com/cust_update/${cardno}`)
            .then(res => res.json())
            .then(data => setCardNoDetail(data))
            .catch(error => console.log(error));
    }, [cardno]);



    //Interest Calculation Section//
    let interestDateFromComp = props.InterestDate;
    let interestDateValue;
    
    if(!interestDateFromComp) {
        interestDateValue = props.Date;
    }
    else {
        interestDateValue = props.InterestDate;
    }

    const registeredDate = new Date(interestDateFromComp);
    const todayDate = new Date();
    const diffTime = Math.abs(todayDate.getTime() - registeredDate.getTime());
    const noOfDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const selectedInterestRate = (props.Selected_Interest) / 100;
    const interestPerDay = (props.Amount * selectedInterestRate) / 30;
    const totalInterest = Math.ceil(interestPerDay * noOfDays)

    function handlePaymentInput(event) {
        setPaymentStatus(event.target.value);
    }

    function handlePaymentDate(event) {
        setPaymentDate(event.target.value);
    }

    let cardNoDetailsOfCust = props.CustomerNumber;

    fetch('https://sri-abirami-finance-backend.onrender.com/cust_update/:cardno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment_status: paymentStatus, card_no: cardNoDetailsOfCust, payment_close_date: paymentDate })
    })
        .then(res => {
            // Handle the response here
        })
        .catch(err => {
            // Handle the error here
        });

    return (
            <div>
                <label for="card_no_cust" className="cust_details">Card no: </label>
                <span id="card_no_cust">{props.CustomerNumber}</span> <br /><br />

                <label for="cust_name" className="cust_details">Name: </label>
                <span id="cust_name">{props.Name}</span> <br /><br />

                <label for="date_cust" className="cust_details">Date: </label>
                <span id="date_cust">{props.Date}</span> <br /><br />

                <label for="amount_cust" className="cust_details">Amount: </label>
                <span id="amount_cust">{props.Amount}</span> <br /><br />

                <label for="interest_rate_cust" className="cust_details">Interest rate: </label>
                <span id="interest_rate_cust">{props.Selected_Interest}</span> <br /><br />

                <label for="interest_cust" style={{ color: "red" }} className="cust_details">Interest: </label>
                <span id="interest_cust">{totalInterest}</span> <br /><br />

                <label for="hus_fat_cust" className="cust_details">Husband/Father name: </label>
                <span id="hus_fat_cust">{props.Husband_Father_Name}</span> <br /><br />

                <label for="address_cust" className="cust_details">Address: </label>
                <span id="address_cust">{props.Address}</span>  <br /><br />

                <label for="mobile_cust" className="cust_details">Mobile number: </label>
                <span id="mobile_cust">{props.Mobile_number}</span> <br /><br />

                <label for="gold_det_cust" className="cust_details">Gold details: </label>
                <span id="gold_det_cust">{props.Gold_details}</span> <br /><br />

                <label for="gold_gram_cust" className="cust_details">Gold gram: </label>
                <span id="gold_gram_cust">{props.Gold_grams}</span> <br /><br />

                <label for="gold_act_cust" className="cust_details">Gold actual value: </label>
                <span id="gold_gram_cust">{props.Gold_actual_value}</span> <br /><br />

                <label for="attender_cust" className="cust_details">Attender: </label>
                <span id="attender_cust">{props.Attender}</span> <br /><br />

                <label for="aadhar_cust" className="cust_details">Aadhar number: </label>
                <span id="aadhar_cust">{props.Aadhar_number}</span> <br /><br />

                <label for="int_rat" className="cust_details">Interest rate: </label>
                <span id="int_rat">{props.Interest_Rate}</span> <br /><br />

                <label for="int_first_month" className="cust_details">Interest for first month: </label>
                <span id="int_first_month">{props.Interest}</span> <br /><br />

                <label for="service_charge" className="cust_details">Service charge: </label>
                <span id="service_charge">{props.Service_Charge}</span> <br /><br />

                <label for="amount_gave_int_ser" className="cust_details">Amount after Interest and Service charge: </label>
                <span id="amount_gave_int_ser">{props.Amount_Gave_Aft_Int_Ser}</span> <br /><br />

                <label for="payment_status_cust" className="cust_details">Payment Status: </label>
                <select id="payment_status_cust" value={paymentStatus} name="payment_status" disabled={(props.Button_Status)} onChange={handlePaymentInput} style={styleForUnpaid}>
                    <option value="paid">PAID</option>
                    <option value="unpaid">UN-PAID</option>
                </select> <br /><br />
                <label for="payment_close" className="cust_details">Payment Closed Date: </label>
                <input id="payment_close" type="date" value={paymentDate} name="payment_closed_date" disabled={props.Button_Status} onChange={handlePaymentDate} />
                {/* <input id="payment_status_cust" name="payment_status" value={paymentStatus} disabled={(props.Button_Status)} style={styleForUnpaid} onChange={handlePaymentInput} /> <br /><br /> */}
            </div>
        )
}

// Interest_Rate={cardNoDetail.Interest_rate}
// Interest={cardNoDetail.Interest_for_first_month}
// Service_Charge={cardNoDetail.Service_Charge}
// Amount_Gave_Aft_Int_Ser={cardNoDetail.Amount_after_int_and_ser_charge}

// style={colorChange}

export { SearchOptionSelect };
