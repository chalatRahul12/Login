import React, {useState, useEffect} from 'react'
import {Formik,Form} from 'formik'
import FeildComponent from './FeildComponent'
import ButtonComponent from './Button'
import PasswdAuth from './PasswdAuth'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import ErrorText from './ErrorText'
import ValidationContainer from './ValidationContainer'

function FormComp() {
    const [items, setItems] = useState({});


    console.log(items,'@@@@@@@@')
    const navigate = useNavigate()
    const initialValues = {
        email: "",
        phone: "",
        passwd: "",
        confirmPasswd:""
    }

    
    let userSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("email is required"),
        phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),
        passwd: Yup.string().required('Password is required'),
        confirmPasswd: Yup.string().oneOf([Yup.ref('passwd'),null],"Password must match").required("Password is required"),
    })
    
    return (
        <>


            <Formik
                initialValues={initialValues}
                validationSchema={userSchema}
                onSubmit={values => {
                    localStorage.setItem('items', JSON.stringify(values                    ));
                   
                    navigate("/dashboard")
                }}
            >
                {({ errors, touched }) => (
                    <Form className='absolute flex flex-col items-center justify-center h-[100%] w-[100%] gap-[20px] '>
                        <h1 className='text-3xl'>Login</h1>
                
                 
                        <ValidationContainer errors={errors} touched={touched} name={'email'} type={'email'} placeholder={'Enter Email'} />
                        
                        <ValidationContainer errors={errors} touched={touched} type={'text'} name={'phone'} placeholder={'Enter Phone number'} />
                
                        <ValidationContainer name={'passwd'} errors={errors} touched={touched} type={'text'}  placeholder={'Enter password'} />
                       
                        <ValidationContainer errors={errors} touched={touched} type={'text'} name={'confirmPasswd'} placeholder={'Confirm password'} />
                        <ButtonComponent type='submit' text='Submit' />
                    </Form>
                )}
            </Formik>
            </>
        )

}

export default FormComp