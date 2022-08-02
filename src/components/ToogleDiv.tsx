import React,{useState} from 'react'

export default function ToogleDiv() {
    const [isToogle,setToogle] = useState(true);
  return (
    <div style={{display:"flex"}}>ToogleDiv
        <input type="checkbox" checked={isToogle} onChange={(e:any) => setToogle(isToogle ? false : true) } />
       {isToogle ? <h2>my Name is  SHRUSHTI</h2> : null } 
    </div>
  )
}
