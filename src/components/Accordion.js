import React from "react"
import { useState } from "react";


function Accordian(props) {

  const [clickIndex ,setClickIndex] = useState(null);

  function handleClick (index){
    console.log("Title clicked"+ index);
    setClickIndex(index);
  }
  
 const renderedItems = props.items.map((item ,index) => {

  const active = (clickIndex === index) ? "active" : null ;
    
    return (
      <div key={item.title}>
        <div className={`title ${active}`} onClick={ () => handleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
        <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div  className="ui styled accordion">
  {renderedItems}
  
  </div>;
}

export default Accordian;
