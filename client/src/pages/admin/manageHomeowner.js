const  {useState,useEffect} =require("react");

export default function manageHomeowner(){
    const[form,setForm]=useState({
        kebleID:"",
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        gender:"",
        address:"",
        phoneNumber:"",
        familyInfo:"",
          maxRepresentations: z.number().min(1).max(5),

        
     
    });
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
     const handleSubmit= async (e)=>{
        e.preventDefault();

        const res =await fetch("http://localhost:5000/admin/homeowners",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify({...form})
        });
     const data=await res.json();
      console.log(data);
     }
  
     return(
        <div>
            <h1>record Homeowner</h1>
            <form onSubmit={handleSubmit}>
                <input name="kebleID" onChange={handleChange} ></input>
                <input name="firstName" onChange={handleChange} ></input>
                <input name="lastName" onChange={handleChange} ></input>
                <input name="dateOfBirth" onChange={handleChange} ></input>
                <input name="gender" onChange={handleChange} ></input>
                <input name="address" onChange={handleChange} ></input>
                <input name="phoneNumber" onChange={handleChange} ></input>
                <input name="familyInfo" onChange={handleChange} ></input>
                <input name="maxRepresentations" onChange={handleChange} ></input>

                <button type="submit">Create Homeowner</button>
            </form>
        </div>
     )
}

