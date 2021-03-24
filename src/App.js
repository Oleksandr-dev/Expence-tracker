import React from 'react';
import {Header} from './components/Header';
//import { Balance } from './components/Balance';
//import { IncomeExpenses } from './components/IncomeExpenses';
//import { TransactionList } from './components/TransactionList';
//import { AddTransaction } from './components/AddTransaction';
import {Home} from "./Home/Home";
import {TransactionListAll} from "./HistoryTransaction/HistoryTransactionList";

import {GlobalProvider} from './context/GlobalState';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Route path='/' exact component={Home}/>
                    <Route path='/all-history' component={TransactionListAll}/>
                </div>
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
