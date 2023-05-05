import React from "react";
import { CustomerDetails } from "./CustomerDetails";
import { UserDetails } from "./UserDetails";
import {CustSearch} from "./CustSearch";
import {SearchOptionSelect} from "./SearchOptionSelect";
import {PaymentClosing} from "./PaymentClosing";
import {IndividualPaymentPage} from "./IndividualPaymentPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
// import "../assets/styles.css";

const platform = 'production';

if (platform === 'production') {
    disableReactDevTools();
}

const apiURL = "https://sri-abiramin-finance-business.onrender.com";

function App() {
    return (<div>
        <Router>
            <Routes>
                <Route path="/" element={<CustomerDetails />} />
                <Route path="/customer_details/:name" element={<UserDetails />} />
                <Route path="/cust_search" element={<CustSearch />} />
                <Route path="/search_option" element={<SearchOptionSelect />} />
                <Route path="/cust_update" element={<PaymentClosing />} />
                <Route path="/cust_update/:cardno" element={<IndividualPaymentPage />} />
            </Routes>
        </Router>
    </div>);
}

export { App, apiURL };

