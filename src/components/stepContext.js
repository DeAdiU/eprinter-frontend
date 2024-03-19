import React, { useState } from 'react';
import {Form} from './Form';
import axios from 'axios';
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';


export const multistepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [responseData, setResponseData] = useState(null);


  const saveFile = () =>{
    console.log(userData)
    setFinalData()
    setUserData('')
    console.log(userData)
    console.log('Button clicked')
    console.log(finalData);

    let formData = new FormData();
    formData.append("pdf",userData.file)
    formData.append("regNo",userData.regNo)
    formData.append("Name",userData.Name)
    formData.append("category",userData.category)
    formData.append("Layout",userData.layout)
    formData.append("PaperSize",userData.papersize)
    formData.append("color",userData.color)
    formData.append("PagesPerSheet",userData.pagespersheet)
    formData.append("printSide",userData.paperside)
    formData.append("Pages",userData.Pages)
    formData.append("numberOfCopies",userData.nocopies)


    let axiosConfig = {
        headers: {
            'Content-Type': 'multpart/form-data'
        }
    }
    console.log(formData)
    axios.post("http://127.0.0.1:8000/post/files/",formData, axiosConfig).then(
        response =>{
            console.log(response.data)
            setResponseData(response.data);  
        }
    ).catch(error =>{
        console.log(error)
        setResponseData(null);
    })
}
  return (
    <div>
        <NavBar/>
        <Hero/>
      <multistepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, saveFile}}>
        <Form />
      </multistepContext.Provider>
      <Footer/>
    </div>
  );
};

export default StepContext;