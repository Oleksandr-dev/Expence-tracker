import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import {TransactionList} from "../components/TransactionList";
import {Transaction} from '../components/Transaction';

//const
localStorage.setItem('transactions', JSON.stringify(TransactionList));

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);
let transactionsInStorage =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];