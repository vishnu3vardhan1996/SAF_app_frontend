import React from "react";

function DenominationPaid(props) {



    return (<div className="de_box">
        <h3 style={{marginTop: '0px'}}>SAF Paid</h3>
        <label for="card_no_cust" className="cust_details">Card no: </label>
        <span id="card_no_cust">{props.CustomerNumber}</span> <br /><br />
        <label for="two_tho" className="cust_details">2000: </label>
        <span id="two_tho">{props.TwoThousand}</span> <br /><br />
        <label for="five_hun" className="cust_details">500: </label>
        <span id="five_hun">{props.FiveHundred}</span> <br /><br />
        <label for="two_hun" className="cust_details">200: </label>
        <span id="two_hun">{props.TwoHundred}</span> <br /><br />
        <label for="one_hun" className="cust_details">100: </label>
        <span id="one_hun">{props.Hundred}</span> <br /><br />
        <label for="five_ty" className="cust_details">50: </label>
        <span id="five_ty">{props.Fifty}</span> <br /><br />
        <label for="two_ty" className="cust_details">20: </label>
        <span id="two_ty">{props.Twenty}</span> <br /><br />
        <label for="one_ty" className="cust_details">10: </label>
        <span id="one_ty">{props.Ten}</span> <br /><br />
        <label for="five" className="cust_details">5: </label>
        <span id="five">{props.Five}</span> <br /><br />
        <label for="two" className="cust_details">2: </label>
        <span id="two">{props.Two}</span> <br /><br />
        <label for="one" className="cust_details">1: </label>
        <span id="one">{props.One}</span>
        <p>----------</p>
        <label for="total" className="cust_details">Total: </label>
        <span id="total">{props.Total}</span> <br /><br />

    </div>)
}

export { DenominationPaid }