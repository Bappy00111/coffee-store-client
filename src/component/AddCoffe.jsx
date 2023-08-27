import React from 'react';
import Swal from 'sweetalert2'

const AddCoffe = () => {

    const handelCoffe = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const quantity = from.quantity.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;
        const user = {name,quantity,supplier,taste,category,details,photo}
        console.log(user)

        // send data to the server 
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className='max-w-[1240px] mx-auto bg-[#F4F3F0;] py-20 px-[112px]'>
            <h1 className='text-3xl font-bold'>added coffe</h1>
            <form onSubmit={handelCoffe}>
                {/* from row  */}

                <div className='md:flex gap-5 mt-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffe-name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5 mt-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5 mt-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex  mt-5'>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value='Add Coffe' className='btn btn-block bg-[#D2B48C;] mt-5' />
            </form>
        </div>
    );
};

export default AddCoffe;