import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [oper, setOper] = useState(0);
    const [category, setCategory] = useState('')

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +(oper + amount),
            category: category
        }

        addTransaction(newTransaction);
        setCategory('');
        setAmount('');
        setText('');
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Income/Expense</label>
                    <select className="select-css" value={oper} onChange={(e) => setOper(e.target.value)}>
                        <option value=" "></option>
                        <option value="">Income</option>
                        <option value="-">Expense</option>
                    </select>

                </div>

                <div className="form-control">
                    <label htmlFor="text">Choose category</label>
                    <select className="select-css" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {oper==="-" ? (
                            <>
                                <option value=" "></option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Education">Education</option>
                                <option value="Tickets">Tickets</option>
                                <option value="Leisure">Leisure</option>
                                <option value="Hobbi">Hobbi</option>
                            </>
                        ) : (
                            <>
                                <option value=" "></option>
                                <option value="Salary">Salary</option>
                                <option value="Other">Other</option>
                            </>
                            )}

                    </select>

                </div>

                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                           placeholder="Enter amount..."/>
                </div>

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                           placeholder="Enter text..."/>
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
