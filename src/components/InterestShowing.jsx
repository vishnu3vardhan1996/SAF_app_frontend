import React, { useState, useEffect } from "react";

function InterestShowing(props) {

    // const i=0;

    const interestTakenFromDB = props.Interest;

    // console.log(interestTakenFromDB[0]);
    // const interestMonth = props.InterestMonth;
    let interestDisplay = [];
    let latestInterestdate;
    let lengthOfArray;

    // function handleLatestInterestdateTransfer(latestInterestdate) {
    //     props.InterestTransfer(latestInterestdate);
    // }
    const { InterestTransfer } = props;

    useEffect(() => {
        InterestTransfer(latestInterestdate);
      }, [InterestTransfer, latestInterestdate]);

      if(!interestTakenFromDB || !interestTakenFromDB[0]) {
        lengthOfArray = -1;
      }
      else {
        lengthOfArray = interestTakenFromDB[0].length;
      }

    for (let i=0; i < lengthOfArray; i++) {
        interestDisplay.push( "\n Rs: " + interestTakenFromDB[1][i] + "/- Interest Paid for month " + interestTakenFromDB[3][i] + " on " + interestTakenFromDB[0][i] );
        if ((i + 1) === (lengthOfArray)) {
            latestInterestdate = interestTakenFromDB[3][i];
            // console.log(latestInterestdate);
        }
    }

    return (<div className="fixed_text_int" style={props.StyleUpdateValue}>
    <textarea className="fixed_textarea_div_int"  disabled={props.Disable} value={interestDisplay}></textarea> <br />
    <button style={{ marginLeft: '610px' }} disabled={props.ButtonDisable} onClick={props.Button}>Edit</button><button onClick={props.ButtonDone}>Done</button>
</div>)
}

export { InterestShowing };