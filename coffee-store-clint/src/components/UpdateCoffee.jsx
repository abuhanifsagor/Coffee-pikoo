import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const { _id , name , supplier, price,  photoURL, category, details, taste } = useLoaderData();
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const updateCoffee = Object.fromEntries(fromData);

        // send to server
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Coffee updated successfully! ",
                        icon: "success",
                        draggable: true,
                    });
                }
            });
    }
    return (
        <div>
            <div className=" min-h-screen flex items-center justify-center">
      <div className="flex w-full  p-5 bg-[#f3f3f370] shadow-sm text-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Update Coffee</h1>
        <p className="text-sm max-w-xl mx-auto">
          its a long established fact that a reader will be distracted by the
          readable content of a page when looking at its Coffee.
        </p>

        <form onSubmit={handleUpdateCoffee} action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Name</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
                name="name"
                defaultValue={name}
              />
            </fieldset>
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Price</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Price of Coffee"
                name="price"
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Supplier</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Supplier Name"
                name="supplier"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Taste</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Type of Taste"
                name="taste"
                defaultValue={taste}
              />
            </fieldset>
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Category</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Category Name"
                name="category"
                defaultValue={category}
              />
            </fieldset>
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Details</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Details"
                name="details"
                defaultValue={details}
              />
            </fieldset>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <fieldset className="fieldset        rounded-box    p-4">
            <label className="label">Photo</label>
            <input
              required
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              name="photoURL"
              defaultValue={photoURL}
            />
          </fieldset>
          <div className='flex items-center justify-center'>
            <img className='w-25' src={photoURL} alt="" />
          </div>
          </div>
          <button type="submit" className="btn mt-4 w-full">
            Update
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateCoffee;