import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyDropDown = () => {
    const { dispatch, currency } = useContext(AppContext);
    const setCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });

    }
    return (
        <div className='alert alert-success'>
            <span>Currency: </span>
                <select 
                    name="currency" 
                    id="currency"
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setCurrency(event.target.value)}
                    value={currency}
                    >

                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
        </div>
    );
};
export default CurrencyDropDown;
