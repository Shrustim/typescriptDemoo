import React,{useState} from 'react'
interface FormsData {
    name: string,
    age: number | undefined
}

export default function FormsInType() {
    const [formss,setForms] = useState<FormsData>({ 
                                                name: "",
                                                 age: 0
                                                });
   const onSubmitForm = (e:any) =>{
    e.preventDefault();
     console.log("forms",formss)
   }                                             
  return (
    <div><h5>FormsInType</h5>
    <form onSubmit={(e) => onSubmitForm(e)}>
        <label>Name: </label><br/>
        <input type="text" value={formss.name} onChange={(e) => {setForms({...formss,name:e.target.value}) }} /><br/>
        <label>age: </label><br/>
        <input type="text" value={formss.age} onChange={(e) => {parseInt(e.target.value) ? setForms({...formss,age : parseInt(e.target.value)}) : setForms({...formss,age : 0 }) }} /><br/>
      <button type='submit'>Submit  </button>
        </form>
    </div>
  )
}
