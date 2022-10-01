import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


const items = [{
    title : "React" ,
    content : "n1"},
    {
        title : "Angular" ,
        content : "n2"
    },{
        title : "Vue" ,
        content : "n3"
    }]

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color blue",
    value: "blue",
  },
  {
    label: "The color green",
    value: "green",
  },
];

function App() {

  const [selected , setSelected] = useState(options[0]);

  return (
    <div>
    <Header />
      <Route path="/">
        <Accordion 
         items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color" 
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate"> 
        <Translate />
      </Route>
    </div>
  );

 
}

export default App;


  


