import React ,{useState , useEffect} from 'react'
import axios from 'axios'

function Convert({text , language}) {

    const [translated , setTranslated] = useState('');
    const [debounceText , setDebounceText] = useState(text);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setDebounceText(text);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        }
    })

    useEffect(() => {
        // console.log("language or text changed");
        const doTranslate = async () => {
        const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params :{
                q : debounceText ,
                target : language.value ,
                key : "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            },
        }
        );
        setTranslated(data.data.translations[0].translatedText);
          
    };
        doTranslate();
  
    },[debounceText ,language])

    
  return (
    <div>
        <h2 className='ui header'>{translated}</h2>
    </div>
  )
  }

export default Convert;
