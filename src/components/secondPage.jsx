import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multistepContext } from './stepContext';

export default function SecondStep() {
    const {setStep, userData, setUserData} = useContext(multistepContext);
  return (
    <div className='step'>
      <div>
      <TextField id="pages" margin="normal" label="Pages" type="text" value={userData["Pages"]} defaultValue={"All"} onChange={(e)=>setUserData({...userData,"Pages":e.target.value})} style={{ marginTop: '12px', marginRight: '16px' }}/>
      </div>
      <div style={{ marginTop: '12px', marginRight: '16px', margin:'auto' }}  >
      <input type="file" id="firstimg" className="cober" margin="normal" accept="file" onChange={e => setUserData({...userData,"file":e.target.files[0]})} style={{ marginTop: '12px', marginRight: '16px', margin:'auto' }} />
      </div>
      <div>
      <Button variant="contained" onClick={()=>setStep(1)} color="secondary.main" style={{ marginTop: '12px', marginRight: '16px' }}>Back</Button> 
      <Button variant="contained" onClick={()=>setStep(3)} color="primary" style={{ marginTop: '12px', marginLeft: '16px', backgroundColor: '#00df9a', color: 'black'}}>Next</Button> 
      </div>
      
    </div>
  )
}