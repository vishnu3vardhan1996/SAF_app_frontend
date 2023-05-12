import React from "react";
import { CustomerDetails } from "./CustomerDetails";
import { UserDetails } from "./UserDetails";
import { CustSearch } from "./CustSearch";
import { SearchOptionSelect } from "./SearchOptionSelect";
import { PaymentClosing } from "./PaymentClosing";
import { IndividualPaymentPage } from "./IndividualPaymentPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { SignUpFailure } from "./SignupFailure";
import { LoginFailure } from "./LoginFailure";
import { HomePage } from "./HomePage";
// import "../assets/styles.css";

const platform = 'production';
// const platform = 'dev';

if (platform === 'production') {
    disableReactDevTools();
}

const apiURL = "https://sri-abiramin-finance-backend-sandbox.onrender.com";
// const apiURL = "http://localhost:3001";
// const reactURL = "http://localhost:3000";
const reactURL = "https://sri-abirami-finance-frontend-sandbox.onrender.com"

function App() {
    return (<div>
        <Router>
            <Routes>
                <Route path={`${process.env.REACT_APP_DEFAULT_ROUTE}`} element={<HomePage />} />
                <Route path={`${process.env.REACT_APP_LOGIN_ROUTE}`} element={<Login />} />
                <Route path={`${process.env.REACT_APP_CUST_INFO_LOAD_ROUTE}`} element={<CustomerDetails />} />
                <Route path={`${process.env.REACT_APP_SIGNUP_ROUTE}`} element={<SignUp />} />
                <Route path={`${process.env.REACT_APP_LOGIN_FAILURE_ROUTE}`} element={<LoginFailure />} />
                <Route path={`${process.env.REACT_APP_SIGNUP_FAILURE_ROUTE}`} element={<SignUpFailure />} />
                <Route path={`${process.env.REACT_APP_CUST_DETAIL_ROUTE}`} element={<UserDetails />} />
                <Route path={`${process.env.REACT_APP_CUST_FIND_ROUTE}`} element={<CustSearch />} />
                <Route path={`${process.env.REACT_APP_CUST_SEARCH_ROUTE}`} element={<SearchOptionSelect />} />
                <Route path={`${process.env.REACT_APP_CUST_IMPORT_ROUTE}`} element={<PaymentClosing />} />
                <Route path={`${process.env.REACT_APP_CUST_IMPORT_DETAILS_ROUTE}`} element={<IndividualPaymentPage />} />
            </Routes>
        </Router>
    </div>);
}

export { App, apiURL, reactURL };

