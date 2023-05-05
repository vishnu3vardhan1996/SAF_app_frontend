import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { SearchOptionSelect } from "./SearchOptionSelect";

function UserDetails() {

    const { name } = useParams();
    const [user, setUser] = useState([]);

    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        fetch(`https://sri-abirami-finance-backend.onrender.com/customer_details/${name}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.log(error));
    }, [name]);

    // function handleInterestRate() {
    //     interestSelected = document.getElementById("int_2");
    // }

    const [selectedValue, setSelectedValue] = useState("");

    function handleInterestRate(event) {
        setSelectedValue(event.target.value);
    }

    function handleOnEdit(event) {
        setIsEditable(true);
        event.preventDefault();
    }

    return (<div className="container">
        <div>
            <select value={setSelectedValue} onChange={handleInterestRate}>
                <option value="">Select Interest Rate</option>
                <option value="2">2%</option>
                <option value="2.5">2.5%</option>
                <option value="3">3%</option>
            </select>
        </div>
        {user.map(function (users) {
            return (<div style={{height: '500px'}} className="box"><SearchOptionSelect
                CustomerNumber={users.Customer_number}
                Name={users.Name}
                Date={users.Date}
                Amount={users.Amount}
                Husband_Father_Name={users.Husband_Father_Name}
                Address={users.Address}
                Mobile_number={users.Mobile_number}
                Gold_details={users.Gold_details}
                Gold_grams={users.Gold_grams}
                Gold_actual_value={users.Gold_actual_value}
                Attender={users.Attender}
                Aadhar_number={users.Aadhar_number}
                Selected_Interest={selectedValue}
                Status={users.Status}
                Payment_Status={users.Payment_close_date}
                Interest_Rate={users.Interest_rate}
                Interest={users.Interest_for_first_month}
                Service_Charge={users.Service_Charge}
                Amount_Gave_Aft_Int_Ser={users.Amount_after_int_and_ser_charge}
                //****** Button status sending ****
                Button_Status={!isEditable}
            // Register_date={registeredDate}
            />
                <button onClick={handleOnEdit} disabled={isEditable} hidden />
            </div>)
        })}
    </div>);
}

export { UserDetails }


