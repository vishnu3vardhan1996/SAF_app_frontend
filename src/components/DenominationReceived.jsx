import React, { useState } from "react";
require('dotenv').config();

function DenominationReceived(props) {

    let [twoThoDeRec, setTwoThoDeRec] = useState(props.NTwoThousand);
    let [fiveHundredDeRec, setFiveHundredDeRec] = useState(props.NFiveHundred);
    let [twoHundredDeRec, setTwoHundredDeRec] = useState(props.NTwoHundred);
    let [oneHundredDeRec, setOneHundredDeRec] = useState(props.NHundred);
    let [fiftyDeRec, setFiftyDeRec] = useState(props.NFifty);
    let [twentyDeRec, setTwentyDeRec] = useState(props.NTwenty);
    let [tenDeRec, setTenDeRec] = useState(props.NTen);
    let [fiveDeRec, setFiveDeRec] = useState(props.NFive);
    let [twoDeRec, setTwoDeRec] = useState(props.NTwo);
    let [oneDeRec, setOneDeRec] = useState(props.NOne);

    const totalAmount = (twoThoDeRec * 2000) + (fiveHundredDeRec * 500) + (twoHundredDeRec * 200) + (oneHundredDeRec * 100) + (fiftyDeRec * 50) + (twentyDeRec * 20) + (tenDeRec * 10) + (fiveDeRec * 5) + (twoDeRec * 2) + (oneDeRec * 1);

    const cardNoDetailsOfCust = props.CustomerNumber;

    fetch(`${process.env.API_URL}/cust_update/:cardno`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            two_thou: twoThoDeRec, five_hund: fiveHundredDeRec, two_hund: twoHundredDeRec,
            onehund: oneHundredDeRec, fifty: fiftyDeRec, twenty: twentyDeRec, ten: tenDeRec, five: fiveDeRec, two: twoDeRec, one: oneDeRec, card_no: cardNoDetailsOfCust
        })
    })
        .then(res => {
            // Handle the response here
        })
        .catch(err => {
            // Handle the error here
        });


    function handletwoThoDe(event) {
        setTwoThoDeRec(event.target.value);
    }

    function handlefiveHudDe(event) {
        setFiveHundredDeRec(event.target.value);
    }

    function handletwoHudDe(event) {
        setTwoHundredDeRec(event.target.value);
    }

    function handleoneHudDe(event) {
        setOneHundredDeRec(event.target.value);
    }

    function handlefiveTyDe(event) {
        setFiftyDeRec(event.target.value);
    }

    function handletwoTyDe(event) {
        setTwentyDeRec(event.target.value);
    }

    function handleoneTyDe(event) {
        setTenDeRec(event.target.value);
    }

    function handlefiveCoin(event) {
        setFiveDeRec(event.target.value);
    }

    function handletwoCoin(event) {
        setTwoDeRec(event.target.value);
    }

    function handleoneCoin(event) {
        setOneDeRec(event.target.value);
    }

    return (<div>
        <table cellPadding="2" width="22%" align="left" cellSpacing="2" >
            <thead>
                <tr>
                    <td colSpan={2} style={{ padding: '0px' }}>
                        <h3 style={{ marginTop: '0px', marginBottom: '11px' }}>SAF Received</h3>
                    </td>
                </tr>
            </thead>

            <tbody>
                <tr className="de_alignment_received">
                    <td >
                        Card No:
                    </td>
                    <td >
                        <span style={{ color: 'black' }}>{props.CustomerNumber}</span>
                    </td>
                </tr>

                <tr className="de_alignment_received">
                    <td >
                        <b>2000:</b>
                    </td>
                    <td >
                        <input size="10" value={twoThoDeRec} type="text" id="two_thousand" name="two_t" onChange={handletwoThoDe} disabled={!props.Button_Status} />
                    </td>
                </tr>

                <tr className="de_alignment_received">
                    <td >
                        <b>500:</b>
                    </td>
                    <td >
                        <input size="10" value={fiveHundredDeRec} type="text" id="five_hundred" name="five_h" onChange={handlefiveHudDe} disabled={!props.Button_Status} />
                    </td>
                </tr>

                <tr className="de_alignment_received">
                    <td >
                        <b>200:</b>
                    </td>
                    <td >
                        <input size="10" value={twoHundredDeRec} type="text" id="two_hundred" name="two_h" onChange={handletwoHudDe} disabled={!props.Button_Status} />
                    </td>
                </tr>

                <tr className="de_alignment_received">
                    <td >
                        <b>100:</b>
                    </td>
                    <td >
                        <input size="10" value={oneHundredDeRec} type="text" id="one_hundred" name="one_h" onChange={handleoneHudDe} disabled={!props.Button_Status} />
                    </td>
                </tr>

                <tr className="de_alignment_received">
                    <td >
                        <b>50:</b>
                    </td>
                    <td >
                        <input size="10" value={fiftyDeRec} type="text" id="fifty" name="five_ty" onChange={handlefiveTyDe} disabled={!props.Button_Status} />
                    </td>
                </tr>
                <tr className="de_alignment_received">
                    <td >
                        <b>20:</b>
                    </td>
                    <td >
                        <input size="10" value={twentyDeRec} type="text" id="twenty" name="two_ty" onChange={handletwoTyDe} disabled={!props.Button_Status} />
                    </td>
                </tr>
                <tr className="de_alignment_received">
                    <td >
                        <b>10:</b>
                    </td>
                    <td >
                        <input size="10" value={tenDeRec} type="text" id="ten" name="one_ty" onChange={handleoneTyDe} disabled={!props.Button_Status} />
                    </td>
                </tr>
                <tr className="de_alignment_received">
                    <td >
                        <b>5:</b>
                    </td>
                    <td >
                        <input size="10" value={fiveDeRec} type="text" id="five" name="five_coin" onChange={handlefiveCoin} disabled={!props.Button_Status} />
                    </td>
                </tr>
                <tr className="de_alignment_received">
                    <td >
                        <b>2:</b>
                    </td>
                    <td >
                        <input size="10" value={twoDeRec} type="text" id="two" name="two_coin" onChange={handletwoCoin} disabled={!props.Button_Status} />
                    </td>
                </tr>
                <tr className="de_alignment_received">
                    <td >
                        <b>1:</b>
                    </td>
                    <td >
                        <input size="10" value={oneDeRec} type="text" id="one" name="one_coin" onChange={handleoneCoin} disabled={!props.Button_Status} />
                    </td>
                </tr>

                <p style={{ marginTop: '0px', marginBottom: '0px' }}>--------</p>

                <tr className="de_alignment_received">
                    <td >
                        <b>Total:</b>
                    </td>
                    <td >
                        <input size="10" value={totalAmount} type="text" id="total_value" name="total" disabled={!props.Button_Status} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export { DenominationReceived };