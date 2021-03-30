import React from 'react'
import TextInput from './TextInput.js'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function itemForm (props) {
    const {itemFormValues, setItemFormValues, loginDisabled} = props
    const postItem = (() => {
        axios.post()
          .then(response => {
            console.log("response: ", response)
            console.log(Object.values(response.data));
          })
          .catch(err => { console.log(err) });
      })

    const inputChange = (e) => {
        const { name, value } = e.target;
        // console.log(`name: ${name}, value: ${value}`);
        const inputValue = value;
        console.log("inputValue: ", inputValue)
        setItemFormValues({ ...itemFormValues, [name]: inputValue });
    } 

    const onFormSubmit = (e) => {
        console.log('Item Submitted and Displayed on Next Line');
        e.preventDefault();
        const item = {
            itemName: itemFormValues.itemName,
            location: itemFormValues.location,
            itemcategory1: itemFormValues.itemcategory1,
            itemcategory2: itemFormValues.itemcategory2,
            
        }
        // console.log(item);
        getItem(item)
    }
    return (
        <>
            <Header/>
            <div className='background-itemForm'>
            
              <div className='itemForm-container'>
              <form className='itemForm' onSubmit={formSubmit}>
                  <div className='itemForm-title'>
                    <h1 >Add Product</h1>
                  </div>
    
                  <TextInput
                    type="text"
                    name="itemName"
                    placeholder="Product's Name"
                    onChange={inputChange} 
                    value={itemFormValues.itemName}
                    label={"Name"}
                  />
                  <div>{itemFormErrors.itemName}</div>
    
                  <div className='itemForm-radio'>
                  <input type="radio" name="isOverEighteen" onChange={inputChange} value={true}/>Are you over 18 years of age?
                  </div>
                  <div>{itemFormErrors.isOverEighteen}</div>
        
    
                  <div className='itemForm-slider'>
                      <div className="slider-container">
                      <label className="switch">
                        <input id="isInstructorInput" type="checkbox" name="isInstructor"
                        checked={itemFormValues.isInstructor} onChange={inputChange}/> 
                        <span className="slider"></span><br/>
                      </label>
                      <p className="slider-text">Are you an instructor?</p>
                      
                      </div>
                  </div>

                  <br/>
                  <br/>
                  <button  id="submitBtn" disabled={itemDisabled}>Submit</button> 
    
              </form>
              </div>
              </div>
          
            <Footer/>
    
        </>
      )
    }    
export default ItemForm;
