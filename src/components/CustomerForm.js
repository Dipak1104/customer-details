import React from 'react';
import { useFormik } from "formik"
import * as Yup from "yup"
import Message from './Message';
import Table from './Table';



const initialValues = {
    name: '',
    lastname: '',
    age: ''
}

const onSubmit = values => {
    console.log('Form data', values)
    


    var list1 = [];
    var list2 = [];
    var list3 = [];


    var n = 1;
    var x = 0;


    var Addrow = document.getElementById('show');

    var NewRow = Addrow.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("lastname").value;
    list3[x] = document.getElementById("age").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

    n++;
    x++;

}


const validate = values => {
    let errors = {}

    if (!values.name) {
        errors.name = ''
    }
    if (!values.lastname) {
        errors.lastname = ''
    }
    if (!values.age) {
        errors.age = ''
    }
    return errors
}

function CustomerForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema: Yup.object({
            name: Yup.string().max(10, "Must be 10 characters or less"),
            lastname: Yup.string().max(10, "Must be 10 characters or less")
            

        })
    })

    // console.log('Form errors', formik.errors)
    let component;
if(formik.values >0)
{
component = <Table/>
}else{
component = <Message />
}

    

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h1>Customer Details</h1>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} placeholder='Enter Name' required />
                    {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type='text' id='lastname' name='lastname' onChange={formik.handleChange} value={formik.values.lastname} placeholder='Enter Last Name' required />
                    {formik.errors.lastname ? <div className='error'>{formik.errors.lastname}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' name='age' onChange={formik.handleChange} value={formik.values.age} placeholder='Enter Age' required min="1" />
                    {formik.errors.age ? <div className='error'>{formik.errors.age}</div> : null}
                </div>

                <button type='submit' className='submitbtn' > Submit </button>
                <button type='reset' className='resetbtn' > Reset </button>

            </form><br></br>
            <br></br>
            {formik.values.name.length === 0 || formik.values.lastname.length === 0 || formik.values.age.length === 0 ? <Message/> : <Table />}



        </div>
    )
}

export default CustomerForm;
