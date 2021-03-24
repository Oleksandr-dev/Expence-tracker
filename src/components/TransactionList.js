import React, {useContext} from 'react';
import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';
import {Link} from "react-router-dom";

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <div className="form-control">
                <ul className="list">
                    {transactions.slice(0, 5).map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>))}
                </ul>
            </div>
            <Link className="link" to={'/all-history'}>
                <button className="btn">Watch all history</button>
            </Link>
        </>
    )
}
