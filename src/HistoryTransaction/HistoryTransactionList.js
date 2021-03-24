import React, {useContext} from 'react';
import {Transaction} from '../components/Transaction';

import {GlobalContext} from '../context/GlobalState';
import {Link} from "react-router-dom";

export const TransactionListAll = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
            <Link className="link" to='/'><button className="btn">go back</button></Link>
        </>
    )
}