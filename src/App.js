import { useState } from "react";
import Mcq from "./Mcq";

function App() {
  let arr=[{id:1,title:"q1",opt:"a1",opt2:"a2",opt3:"a3",opt4:"a4"},
            {id:2, title:"q2",opt:"a1",opt2:"a2",opt3:"a3",opt4:"a4"},
            {id:3,title:"q3",opt:"a1",opt2:"a2",opt3:"a3",opt4:"a4"},
            {id:4,title:"q4",opt:"a1",opt2:"a2",opt3:"a3",opt4:"a4"}]
            let [ans,setAns]=useState({})
            let [marks,setMarks]=useState(0)
            let ar={1:1,2:2,3:3,4:4}
            let fun=(e)=>{
              setAns({...ans,[e.target.value]:e.target.value})
              
              console.log(ans)
            }
            let evalans=()=>{
              let c=0
              for (let i in ans){
                if (ans[i]==ar[i]){
                  c++
                }
              }
              console.log(c)
              setMarks(c)
            } 
  return (
    <div>
     <div>
      {arr.map((item,index)=><Mcq qn={item} fun={fun} key={index}/>)}
     </div>
     <button onClick={evalans}>submit</button>
     Marks:{marks}/{arr.length}
    </div>
  );
}

export default App;
