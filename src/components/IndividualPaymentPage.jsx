import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { SearchOptionSelect } from "./SearchOptionSelect";
import { DenominationPaid } from "./DenominationPaid";
import { DenominationReceived } from "./DenominationReceived";
import { Comments } from "./Comments";
import { InterestReceive } from "./InterestReceive";
import { InterestShowing } from "./InterestShowing";

function IndividualPaymentPage() {

    const { cardno } = useParams();

    const [cardNoDetails, setCardNoDetail] = useState({ userDetailsDB: [], DeDetailsDB: [], DeRecDetailsDB: [], CommentsDB: [], InterestsDB: [] });

    // const [ interestShowing, setInterestShowing ] = useState("");

    const [selectedValue, setSelectedValue] = useState("");

    const [isEditable, setIsEditable] = useState(false);

    const [isDeRecEditable, setIsDeRecEditable] = useState(false);

    const [isTextAreaEdit, setIsTextAreaEdit] = useState(true);

    const [isTextAreaEditInterest, setIsTextAreaEditInterest] = useState(true);

    const [isEditableTextArea, setIsEditableTextArea] = useState(false);

    const [isEditableTextAreaInterest, setIsEditableTextAreaInterest] = useState(false);

    const [ interestDateIntShow, setInterestDateIntShow ] = useState("");

    const [ commentMarginStyle, setCommentMarginStyle ] = useState();

    const [ commentMarginStyleInterest, setCommentMarginStyleInterest ] = useState();

    const gettingPaidStatus = cardNoDetails.userDetailsDB.find(detail => detail.Customer_number === cardno);

    const commentsFromDB = cardNoDetails.CommentsDB.find(detail => detail.Customer_number === cardno);

    const interestDetailsFromDB = cardNoDetails.InterestsDB.find(detail => detail.Customer_number === cardno);

    // const finalPaymentStatus = gettingPaidStatus.Status;

    const finalPaymentStatus = (gettingPaidStatus && gettingPaidStatus.Status);

    const commentsCust = (commentsFromDB && commentsFromDB.Comments);

    const interestDBReceivedDate = (interestDetailsFromDB && interestDetailsFromDB.Interest.Interest_Received_Date);

    const interestInterest =(interestDetailsFromDB && interestDetailsFromDB.Interest.Interest);

    const interestInterestRate =(interestDetailsFromDB && interestDetailsFromDB.Interest.Interest_Rate);

    const interestInterestForDate =(interestDetailsFromDB && interestDetailsFromDB.Interest.Interest_for_Date);

    const interestAllDetails = [interestDBReceivedDate, interestInterest, interestInterestRate, interestInterestForDate];

    // Interest.Interest_Received_Date

    // console.log(interestDBDisplay);

    // console.log(commentsCust);

    // console.log(interestDateIntShow);

    let styleForDeReceived;

    if ((finalPaymentStatus === 'paid') && (!isEditable)) {
        styleForDeReceived = { display: 'inline-block' }
    }
    else {
        styleForDeReceived = { display: 'none' }
    }

    useEffect(() => {
        fetch(`https://sri-abirami-finance-backend.onrender.com/cust_update/${cardno}`)
            .then(res => res.json())
            .then(data => setCardNoDetail(data))
            .catch(error => console.log(error));
    }, [cardno]);

    // setInterestShowing
    // function handleForInterestSharingCompToComp(interestValue) {
    //     setInterestShowing(interestValue);
    // }

    // const [ textAreaValue, setTextAreaValue ] = useState("");

    function handleInterestRate(event) {
        setSelectedValue(event.target.value);
    }

    function handleOnEdit(event) {
        setIsEditable(true);
        // event.preventDefault();
    }

    function handleDeRecEdit(event) {
        setIsDeRecEditable(true);
        // event.preventDefault();
    }

    function handleDeRecDone(event) {
        // event.preventDefault();
        setIsDeRecEditable(false);
    }

    function handleTextAreaEdit() {
        setIsTextAreaEdit(false);
        setIsEditableTextArea(true);
    }

    function handleTextAreaInterestEdit() {
        setIsTextAreaEditInterest(false);
        setIsEditableTextAreaInterest(true);
    }

    function handletextAreaDone(textAreaValue) {
        fetch(`https://sri-abirami-finance-backend.onrender.com/cust_update/${cardno}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comments: textAreaValue, Cust_No: cardno })
        })
            .then(res => {
                // Handle the response here
            })
            .catch(err => {
                // Handle the error here
            });
        setIsEditableTextArea(false);
        setIsTextAreaEdit(true);
    }

    function handleTextAreaInterestDone() {
        setIsEditableTextAreaInterest(false);
        setIsTextAreaEditInterest(true);
    }

    function handleIntererestTransferToChildComp(interestDate) {
        setInterestDateIntShow(interestDate);
    }

    function handleMarginStyleComment(newValue) {
        setCommentMarginStyle(newValue);
    }

    function handleMarginStyleInterestArea(newValue) {
        setCommentMarginStyleInterest(newValue);
    }

    // {maginTop: "400px"}
    function handleOnDelete() {

    }

    function handleDeRecDelete() {

    }

    return (<div>
        <div>
            <select value={setSelectedValue} onChange={handleInterestRate}>
                <option value="">Select Interest Rate</option>
                <option value="2">2%</option>
                <option value="2.5">2.5%</option>
                <option value="3">3%</option>
            </select>
        </div>

        {/* {cardNoDetail.Date} */}
        {cardNoDetails.userDetailsDB.map(function (cardNoDetail) {
            return (
                <div >
                    <div className="box" >
                        <SearchOptionSelect
                            CustomerNumber={cardNoDetail.Customer_number}
                            Name={cardNoDetail.Name}
                            Date={cardNoDetail.Date}
                            InterestDate={interestDateIntShow}
                            Amount={cardNoDetail.Amount}
                            Husband_Father_Name={cardNoDetail.Husband_Father_Name}
                            Address={cardNoDetail.Address}
                            Mobile_number={cardNoDetail.Mobile_number}
                            Gold_details={cardNoDetail.Gold_details}
                            Gold_grams={cardNoDetail.Gold_grams}
                            Gold_actual_value={cardNoDetail.Gold_actual_value}
                            Attender={cardNoDetail.Attender}
                            Aadhar_number={cardNoDetail.Aadhar_number}
                            Selected_Interest={selectedValue}
                            Status={cardNoDetail.Status}
                            Payment_Status={cardNoDetail.Payment_close_date}
                            Interest_Rate={cardNoDetail.Interest_rate}
                            Interest={cardNoDetail.Interest_for_first_month}
                            Service_Charge={cardNoDetail.Service_Charge}
                            Amount_Gave_Aft_Int_Ser={cardNoDetail.Amount_after_int_and_ser_charge}
                            //****** Button status sending ****
                            Button_Status={!isEditable}
                            // InterestSharing={handleForInterestSharingCompToComp}
                            // InterestRateSelection={handleInterestRate}
                        />
                        <br />
                        <form>
                            <button name="recordsave" onClick={handleOnEdit} disabled={isEditable}>Edit</button> <button disabled={isEditable} onClick={handleOnDelete}>Delete</button> <button disabled={!isEditable} onClick={handleOnEdit} hidden={!isEditable}>Done</button>
                        </form>
                    </div>

                    {cardNoDetails.DeDetailsDB.map((cardNoDetail) => {
                        return (
                            <DenominationPaid
                                CustomerNumber={cardNoDetail.Customer_number}
                                TwoThousand={cardNoDetail['2000']}
                                FiveHundred={cardNoDetail['500']}
                                TwoHundred={cardNoDetail['200']}
                                Hundred={cardNoDetail['100']}
                                Fifty={cardNoDetail['50']}
                                Twenty={cardNoDetail['20']}
                                Ten={cardNoDetail['10']}
                                Five={cardNoDetail['5']}
                                Two={cardNoDetail['2']}
                                One={cardNoDetail['1']}
                                Total={cardNoDetail.Total}
                            />
                        )
                    })}

                    {cardNoDetails.DeRecDetailsDB.map((cardNoDetail) => {
                        return (<div className="de_received_box" style={styleForDeReceived}>
                            <DenominationReceived
                                CustomerNumber={cardNoDetail.Customer_number}
                                Button_Status={isDeRecEditable}
                                NTwoThousand={cardNoDetail['2000']}
                                NFiveHundred={cardNoDetail['500']}
                                NTwoHundred={cardNoDetail['200']}
                                NHundred={cardNoDetail['100']}
                                NFifty={cardNoDetail['50']}
                                NTwenty={cardNoDetail['20']}
                                NTen={cardNoDetail['10']}
                                NFive={cardNoDetail['5']}
                                NTwo={cardNoDetail['2']}
                                NOne={cardNoDetail['1']}
                                NTotal={cardNoDetail.Total}
                            />
                            <form>
                                <button style={{ marginTop: '10px' }} name="de_re_record" onClick={handleDeRecEdit} disabled={isDeRecEditable}>Edit</button> <button disabled={isDeRecEditable} onClick={handleDeRecDelete}>Delete</button> <button disabled={!isDeRecEditable} onClick={handleDeRecDone} hidden={!isDeRecEditable}>Done</button>
                            </form>
                        </div>
                        )
                    })}

                    <InterestReceive
                        CustNo={cardNoDetail.Customer_number}
                        StyleUpdate={handleMarginStyleComment}
                        StyleUpdateInterest={handleMarginStyleInterestArea}
                        // Interest={interestShowing}
                    />

                    <Comments
                        Disable={isTextAreaEdit}
                        TextAreaOnChange={commentsCust}
                        Button={handleTextAreaEdit}
                        ButtonDisable={isEditableTextArea}
                        ButtonDone={handletextAreaDone}
                        StyleUpdate={commentMarginStyle}
                    // TextValue={textAreaValue}
                    />

                    <InterestShowing
                        Disable={isTextAreaEditInterest}
                        ButtonDisable={isEditableTextAreaInterest}
                        Button={handleTextAreaInterestEdit}
                        ButtonDone={handleTextAreaInterestDone}
                        Interest={interestAllDetails}
                        // InterestMonth={interestInterestForDate}
                        InterestTransfer={handleIntererestTransferToChildComp}
                        StyleUpdateValue={commentMarginStyleInterest}
                        // InterestReceivedDate={interestDBReceivedDate, interestInterest, interestInterestRate, interestInterestForDate}
                    />

                    {/* <div className="fixed_text">
                    <textarea className="fixed_textarea_div" disabled={isTextAreaEdit} value={textAreaValue} onChange={handleTextAreaOnchange}></textarea> <br/>
                    <button style={{marginLeft: '520px'}} onClick={handleTextAreaEdit} disabled={isEditableTextArea}>Edit</button><button onClick={handletextAreaDone}>Done</button>
                    </div> */}
                </div>)
        })}

    </div>)

}

export { IndividualPaymentPage };