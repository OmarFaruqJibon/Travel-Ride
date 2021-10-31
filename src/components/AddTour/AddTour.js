import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const AddTour = () => {
    const {user} = useAuth();
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('https://rocky-headland-86423.herokuapp.com/addTour',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            // console.log(result);
            if(result.insertedId){
                alert('Tour Added Succesfully.');
                reset();
            }
        })
    }

    return (
        <div className="container mb-5 text-center mt-5">
            <h4 className="fw-bold">Add a new Tour</h4>
            <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Title" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("email" , { required: true })} value={user.email} className="p-2 m-2 w-50"/>
                <br />
                <input {...register("description" , { required: true })} placeholder="description" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("img" , { required: true })} placeholder="Image Url" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("price" , { required: true })} placeholder="Price" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("duration" , { required: true })} placeholder="Duration" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("rating" , { required: true })} placeholder="Rating" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("address" , { required: true })} placeholder="Location" className="p-2 m-2 w-50"/>
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Add Tour" className="btn book-btn"/>
            </form>
        </div>
    );
};

export default AddTour;