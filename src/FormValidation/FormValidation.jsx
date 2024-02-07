import { useRef, useState } from "react"

export default function FormValidation(){
     const name = useRef()
     const email = useRef()
     const message = useRef()
     const acceptAllConditions = useRef()
    const [ isFormSent , setIsFormSent ]= useState(false)

      const submitForm = (e)=> {
        e.preventDefault()
        const nameValue = name.current.value
        const messageValue = message.current.value 
        const emailValue = email.current.value 
        const acceptAllConditionValue = acceptAllConditions.current.checked
        console.log({nameValue,emailValue,messageValue,acceptAllConditionValue})
    
    
    }
    return <div className="container-fluid w-75 mx-auto my-5">
        {isFormSent?
        <div className="alert alert-success " role="alert">
            <strong>success </strong> Message sent successfully !! 
        </div> :  ''
        }
        <div className="alert alert-success " role="alert">
            <strong>success </strong> Message sent successfully !! 
        </div>
        <form onSubmit={submitForm}>
        <h1> Contact Form </h1>
        <hr />
        <div className="form-outline  mb-4">
            <label className='form-label'  htmlFor="name">Name</label>
            <input type="text" id='name' className="form-control" ref={name} />
        </div>
        <div className="form-outline  mb-4">
            <label className='form-label'  htmlFor="email"  >Email adress</label>
            <input type="email" id='email' className="form-control" ref={email}/>
        </div>
        <div className="form-outline  mb-4">
            <label className='form-label'  htmlFor="message">Message</label>
            <textarea  id='message' className="form-control" ref={message} > </textarea>
        </div>
        <div className="form-outline  mb-4">
            <input className='form-check-input me-2' type="checkbox"  id="acceptAllConditions" ref={acceptAllConditions}/>
            <label  className="form-check-label" id="acceptAllConditions" htmlFor="acceptAllConditions" >
            Accept all conditions
            </label> 
        </div>
        <button type="submit" className="btn btn-primary z-100 mb-4">Submit</button>
        </form>

    </div>


}