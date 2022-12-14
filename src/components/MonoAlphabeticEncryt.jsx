import React, { useEffect } from 'react'
import { useState } from 'react'

const MonoAlphabeticEncrypt = () => {
    const [parameters, setParameters] = useState({key:0, plainText:""})
    const [cipherText, setCipherText] = useState("")
    let cipheredString = "";
    let ciphered = "";

    const letterMap = {
        97 : "e",   // a
        98 : "w",   // b
        99 : "s",   // c
        100 : "t",  // d
        101 : "a",  // e
        102 : "d",  // f
        103 : "k",  // g
        104 : "h",  // h
        105 : "m",  // i
        106 : "b",  // j
        107 : "p",  // k
        108 : "r",  // l
        109 : "c",  // m
        110 : "x",  // n
        111 : "o",  // o
        112 : "u",  // p
        113 : "g",  // q
        114 : "y",  // r
        115 : "z",  // s
        116 : "i",  // t
        117 : "l",  // u
        118 : "f",  // v
        119 : "q",  // w
        120 : "n",  // x
        121 : "v",  // y
        122 : "j"   // z
    }

    // const letterMap = {
    //     a : "e",
    //     b : "w",
    //     c : "s",
    //     d : "t",
    //     e : "a",
    //     f : "d",
    //     g : "k",
    //     h : "h",
    //     i : "m",
    //     j : "b",
    //     k : "p",
    //     l : "r",
    //     m : "c",
    //     n : "x",
    //     o : "o",
    //     p : "u",
    //     q : "g",
    //     r : "y",
    //     s : "z",
    //     t : "i",
    //     u : "l",
    //     v : "f",
    //     w : "q",
    //     x : "n",
    //     y : "v",
    //     z : "j"
    // }
    
    const onchange = (e) => {
        setParameters({...parameters, [e.target.name] : e.target.value})
        // setParameters({cipherText : ciphered})
    }

    const CipherOnchange = () => {
        setCipherText(cipheredString)
    }

    useEffect(() => {
       
      for (let index = 0; index < parameters.plainText.length; index++) {
        let ascii = parameters.plainText.toLowerCase().charCodeAt(index)
        // console.log(letterMap[ascii])
        let shifted = ""
        // if(ascii>=65 && ascii <=90){
        //     // console.log(ascii)
        //     // console.log(ascii + parseInt(parameters.key))
        //     ascii + parseInt(parameters.key)>90 ? ascii = 64+( (ascii +parseInt(parameters.key))-90) :ascii= ascii+parseInt(parameters.key)
        //     // console.log(ascii)
        //     shifted = String.fromCharCode(ascii)
        //     // console.log(shifted)
        //     ciphered = ciphered.concat(shifted)
            
        // }
        if(ascii>=97 && ascii <=122){
            // ascii + parseInt(parameters.key)>122 ? ascii = 96+( (ascii +parseInt(parameters.key))-122) :ascii= ascii+parseInt(parameters.key)
            // shifted = String.fromCharCode(ascii)
            // ascii + parseInt(parameters.key)>122 ? ascii = 96+( (ascii +parseInt(parameters.key))-122) :ascii= ascii+parseInt(parameters.key)
            // shifted = String.fromCharCode(ascii)
            ciphered = ciphered.concat(letterMap[ascii])
        }
        // if(ascii>=65 && ascii <=90){
        //     // console.log(ascii)
        //     // console.log(ascii + parseInt(parameters.key))
        //     ascii + parseInt(parameters.key)>90 ? ascii = 64+( (ascii +parseInt(parameters.key))-90) :ascii= ascii+parseInt(parameters.key)
        //     // console.log(ascii)
        //     shifted = String.fromCharCode(ascii)
        //     // console.log(shifted)
        //     ciphered = ciphered.concat(shifted)
            
        // }
        // else if(ascii>=97 && ascii <=122){
        //     ascii + parseInt(parameters.key)>122 ? ascii = 96+( (ascii +parseInt(parameters.key))-122) :ascii= ascii+parseInt(parameters.key)
        //     shifted = String.fromCharCode(ascii)
        //     ciphered = ciphered.concat(shifted)
        // }
        else{
            ciphered = ciphered.concat(parameters.plainText[index])   
        }
        cipheredString = ciphered
    }
    console.log(ciphered)
    CipherOnchange()
    
    }, [parameters.key, parameters.plainText, cipherText])
    

    return (
        <div>
            <h2>Convert Plain Text to Mono Alphabetic Cipher Text</h2>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Plain Text</h5>
                    <div className="mb-3">
                    <label htmlFor="plainText" className="form-label">Write Plain Text Here......</label>
                    <textarea className="form-control" id="plainText" rows="3" value={parameters.plainText} name="plainText" onChange={onchange}></textarea>
                </div>
                {/* <label htmlFor="key"></label>
                <p>Key <input name="key" id="key" type="range" min="0" max="25" value={parameters.key} onChange={onchange}></input> {parameters.key} </p> */}
                </div>
            </div>

            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Cipher Text</h5>
                    <p className="card-text" onChange={onchange}>{cipherText}</p>
                </div>
            </div>
        </div>
    )
}

export default MonoAlphabeticEncrypt