// GITHUB
// github.com/TPashaxrd/react-input-control

import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import Toast, { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
  
const Start = () => {
   const [logs, setLogs] = useState(""); 
   const [msgerror, setMsgerror] = useState("");
   const handleChange = (e) => {
   const value = e.target.value.replace(/\s+/g, "-");
   const numberChr = /[0123456789]/g;
   const turkishCharacters = /[şŞı"İğ<>€#=î_\/$@ß♥ĞçÇö₺`ÖüÜé\[\]'.^+!%&/(;:),*{?}]/;
   const highC = [
    "A", "B", "C", "D", "E", "F", "G", "H", "J", '\ ', "K", "L", "M", "N", "O", "Ö", "V", "Y", "Z", "W", "U", "Ş", "V", "P", "T", "Q", "R", "S", "I", "İ", "X"
   ]

   for (let sentence of highC) {
    if (value.includes(sentence)) {
    setMsgerror(<p>! You cant write High sentences.</p>);
    return;
    }
    }

  const toprakControl = [
    "toprak", "topragim", "toprakk", "topram", "tpasha"
  ]
  for (let sentence of toprakControl) {
    if (value.includes(sentence)) {
      setMsgerror(<p>! Yeah!! What's going on? I builded this input CONTROL</p>);
      return;
    }
  }

   const forbiddenSentences = [
    "forbidden", "sentences",
    "sorry", "iloveusomuch", "enter-your-bad-words"
   ];
   const bosEx = [
   "--"
   ];
   if (numberChr.test(value)) {
   setMsgerror("! You can't write numbers");
   return;
   }
   for (let sentence of bosEx) {
   if (value.includes(sentence)) {
   setMsgerror(console.log("(Error) Double Line"));
   return;
   }
   } 
   if (value.charAt(0) === '-') {
    setMsgerror(<p>! Write Anything</p>)
   return;
   }
   for (let sentence of forbiddenSentences) {
   if (value.includes(sentence)) {
   setMsgerror(<p>You cant write This!!</p>);
   return;
   }
   }
   if (turkishCharacters.test(value)) {
   //  Dont use TurkishCharacters
   setMsgerror(<p>! use EU characters</p>);
   return;
   }
   setLogs(value);
   setTimeout(() => {
   setMsgerror("")
   }, 3500)
   //  setMsgerror(""); //Clear MSG Error
  };
   const CheckOp = () => {   
   
  }
   const sumbitCheck = () => {
    if(logs.trim() ==="") {
    toast.error("Fill in the blanks")
     } else {
    toast.success('You going to configure')
      CheckOp();
    }
   };
   const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sumbitCheck();
   }};
    
    return (
    <>
    <div style={{ marginTop: '185px' }}className="relative w-full max-w-xs mx-auto dis-stay">
      <div className="main-text">
        <h1 style={{ fontFamily: 'Roboto Mono, serif', marginLeft: '85px', fontSize: '35px' }}className="text-xl font-sans items-center text-white mb-4">Welcome!</h1>
        <p style={{ marginLeft: '48px' }}className="lb-text-alert text-white m-9">a small gift for your loved ones.</p>
      </div>
    <div className="relative">
    <div className="span-for-input"
      style={{ marginTop: '-25px'}}>
    <span className="reab absolute top-2.5 left-3 text-black-400 pointer-events-none">
        github.com/
      </span>
      </div>
    <input
      type="text"
      style={{ color: 'darkblue', marginLeft: '-3px', fontFamily: 'Ubuntu Mono, monospace' }}
      placeholder="username"
      value={logs}
      minlength="5"
      maxLength="15"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      className="pl-20 border border-gray-300 rounded-lg p-2 w-full bg-white text-black focus:outline-none placeholder-white"
    />
    <span 
      onClick={sumbitCheck} 
      style={{ fontSize: '25px' }}
      className="absolute top-2.5 right-3 text-gray-400 cursor-pointer"
    ><MdSend />
    </span>
      <p className="text-red-500">{msgerror}</p>
      </div>
    <div style={{ marginTop: '-85px'}} className="first-img flex justify-center">
      <img src="https://assets.guns.lol/profile_showcase.png" alt="OnlyTest" className="w-auto" />
      </div>
    <div className="t-terms">
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#101114', color: 'white', padding: '10px' }} className="text-white rounded-full mt-24"
        >
      <a href="/terms" style={{ color: 'gray', textDecoration: 'none'}}>
        Terms & Legal
      </a></p>
      </div>
    </div>
  </>
  );
};
export default Start;