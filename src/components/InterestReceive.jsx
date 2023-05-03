import React, {useState} from "react";

function InterestReceive(props) {

    const [ interestAdd, setInterestAdd ] = useState(true);

    const [ quitEditable, setQuitEditable ] = useState(false);

    function handleAddInterest() {
        setInterestAdd(false);
        props.StyleUpdate({marginTop: "320px"});
        props.StyleUpdateInterest({marginTop: "450px"});
        setQuitEditable(true);
    }

    function handelQuitButton() {
        setQuitEditable(false);
        setInterestAdd(true);
        props.StyleUpdate();
        props.StyleUpdateInterest();
    }

    function handleAddInterestHidden() {
        setInterestAdd(true);
        setQuitEditable(false);
        props.StyleUpdate();
        props.StyleUpdateInterest();
    }

    // onClick={handleOnChangeEvent}
    return (<div className="interest_section">
        <div>
            <button type="submit" name="addinterestbutton" onClick={handleAddInterest}>Add Interest</button> <button type="button" name="quitbutton" hidden={!quitEditable} onClick={handelQuitButton}>X</button>
        </div>
        <form style={{marginTop: "20px"}} action="/interest_update" method="POST" hidden={interestAdd}>
            <label for="card_details">Card No: <span className="required"> </span></label>
            <input id="card_details" type="text" placeholder="Enter Card No" name="cardnodetails" value={props.CustNo}/><br /><br />
            <label for="interest_rate">Interest Rate: <span className="required">* </span></label>
            <input id="interest_rate" type="text" name="interestrate" required/><br /> <br />
            <label for="interest_for">Interest Date: <span className="required">* </span></label>
            <input id="interest_for" type="date" name="interestrecord" required/><br /> <br />
            <label for="interest_details">Interest Amount: <span className="required">* </span></label>
            <input id="interest_details" type="text" placeholder="Interest Upto Date" name="interestdetails" value={props.Interest} required/><br /><br />
            <label for="date_received">Interest Received Date: <span className="required">* </span></label>
            <input id="date_record" type="date" name="daterecord" required/><br /><br />
            <button type="submit" name="submitbutton" onClick={handleAddInterestHidden} >Submit</button>
        </form>
    </div>)
}

export { InterestReceive }