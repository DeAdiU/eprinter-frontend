import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export const Forms = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid gap-8'>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Enter your details and document</h2>
            <form className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-8'>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className=' p-4 my-8 mx-auto'/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className='  my-8 mx-auto'/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className=' p-4 my-8 mx-auto'/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className=' p-4  my-8 max-auto'/>
                <TextField id="outlined-number" label="Number" type="number" InputLabelProps={{shrink: true,}}/>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </form>

            </div>
        </div>
    </div>
  )
}
