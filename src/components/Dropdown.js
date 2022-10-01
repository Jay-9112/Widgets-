import React, { useEffect, useState ,useRef } from "react";

function Dropdown (props) {

    const [dropdown ,setDropdown ] = useState(false); 
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setDropdown(false);
        }

        document.body.addEventListener("click", onBodyClick);

        return () => {
            document.body.removeEventListener("click" , onBodyClick);
        }
    }, []);

    const renderedOptions = props.options.map((option) => {

        if(props.selected.value === option.value){
            return null;
        }
        return (
            <div 
            key={option.value} className="item"
            onClick={() => {
                props.onSelectedChange(option);
            }}>
                {option.label}
            </div>
        )
    })

    return (
       <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className={"ui selection dropdown " + (dropdown ? "visible active" : null)}
                onClick={() => setDropdown(!dropdown)}>
                <i className="dropdown icon"></i>
                <div className="text">{props.selected.label}</div>
                <div className={"menu "+ ( dropdown ?  "visible transition" : null)} >{renderedOptions}</div>
                </div>
            </div>
       </div> 
    );
}

export default Dropdown;


