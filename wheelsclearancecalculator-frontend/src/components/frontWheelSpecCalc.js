import React, {useState} from 'react';
import {InputAdornment} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function FrontWheelSpecCalc() {
    let [width, offset] = useState(0)

    return (
        <div>
            <TextField
            label="Width"
            variant="outlined"
            />
            <TextField
            variant="outlined"
            label="offset"
            />
        </div>
    )
}


export default FrontWheelSpecCalc