import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (val) => {
        if(val > 20000) {
            alert("Budget exceeding  £20000");
            return;
        }           
        else if(val < totalExpenses) {
                alert("The budget must be mor than spending  £"+totalExpenses);
                return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: val
        });

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        step="10"
                        max="20000"
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                </input>
        </div>
    );
};
export default Budget;
