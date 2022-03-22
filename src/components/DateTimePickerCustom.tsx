import React, { useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DatePicker, DateTimePicker } from '@mui/lab';
import ButtonComponent from './ButtonComponent';


const DateTimePickerCustom = () => {
    const [value, setValue] = useState<Date>(new Date())
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickHandler = () => {
        setIsOpen((prev) => !prev);
    }
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
                value={value}
                inputFormat='yyyy/MM/dd　hh:mm'
                open={isOpen}
                onClose={() => { setIsOpen(false); } }
                renderInput={(params) => {
                    return (
                        <ButtonComponent ref={params.inputRef} onClick={clickHandler}>Open</ButtonComponent>
                    );
                } } 
                onChange={(date, keyboardEvent) => {
                    if(date){
                        setValue(value);
                    }
                }
            }/>
        </LocalizationProvider>
    )
}

export default DateTimePickerCustom;