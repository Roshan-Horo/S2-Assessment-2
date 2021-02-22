import React from 'react'

const Form = () => {
    return (
        <React.Fragment>
        <div className="info">
         <h1>Form</h1>
        </div>
        <div className="form-container">
         <div className="form-left">
          <form>
           <label >Full Name</label><br />
           <input type="text" placeholder="Enter Full Name" /><br />

           <label>Email</label><br />
           <input type="eamil" placeholder="Enter Email" /><br />

           <label for="cars">Select Fruit</label><br/>
             <select name="fruit" >
               <option value="grapefruit">Grapefruit</option>
               <option value="mango">Mango</option>
               <option value="apple">Apple</option>
               
            </select><br />

           <label>Message</label><br />
           <textarea rows="5" ></textarea><br />

           <input type="submit" value="Submit" className="submit"/>

          </form>
         </div>

         <div className="form-right">
          <table>
           <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Fruit</th>
            <th>Message</th>
           </tr>

           <tr>
            <td>Ashish Kumar</td>
            <td>ashish@text.com</td>
            <td>Lime</td>
            <td>hello</td>
           </tr>

           <tr>
            <td>Ankit</td>
            <td>ankit@text.com</td>
            <td>coconut</td>
            <td>qwerty</td>
           </tr>

           <tr>
            <td>Atul</td>
            <td>atul@text.com</td>
            <td>apple</td>
            <td>asdfg</td>
           </tr>

          </table>
         </div>

        </div>
        
        </React.Fragment>
    )
}

export default Form
