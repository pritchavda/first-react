import React , {useState} from 'react'

export default function Buttonn() {
    // let heandleOnclcick = () => {

    // }
    const heandleOnclcick = (event) => {
        // event.preventdefault()
        let newtext = text.toUpperCase();
        setText(newtext);
    }
   let [text,setText] = useState("Nothing to do")
  return (
    <div>
    //     <button>click</button>
    //     {/* <input type="text" /> */}
    //     <button className="btn_class" onClick={heandleOnclcick}>button</button>
    </div>
  )
}
