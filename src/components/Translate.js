import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

function Translate() {
 
    const options = [
        {
            label: "Afrikaans",
            value: "af",
        },
        {
            label: "Arabic",
            value: "ar",
        },
        {
            label: "Hindi",
            value: "hi",
        },
        {
          label: "Turkish",
          value: "tr",
        },
        {
          label: "Gujarati",
          value: "gu",
      }
    ];

    const [language, setLanguage] = useState(options[0]);
    const [text ,setText] = useState('');
    
  return (
    <div className="ui form">
      <div >
        <div className="field">
            <label>Enter Text</label>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} ></input>
        </div>
      </div>  
      <Dropdown 
      label={"Select a Language"}
      options={options}
      selected={language}
      onSelectedChange={setLanguage}
      />
      <hr />
      <h4 className="ui header">Output</h4>
      <Convert 
      text={text}
      language={language}  
      />
    </div>
  );
}

export default Translate;


// API key = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

