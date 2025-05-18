import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newCoffee = Object.fromEntries(fromData);

    // send data to server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="flex w-full  p-5 bg-[#f3f3f370] shadow-sm text-center flex-col gap-5">
        <h1 className="text-3xl font-bold">Add New Coffee</h1>
        <p className="text-sm max-w-xl mx-auto">
          its a long established fact that a reader will be distracted by the
          readable content of a page when looking at its Coffee.
        </p>

        <form onSubmit={handleAddCoffee} action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset        rounded-box    p-4">
              <label className="label">Name</label>
              <input
                required
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
                name="name"
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
              />
            </fieldset>
          </div>
          <fieldset className="fieldset        rounded-box    p-4">
            <label className="label">Photo</label>
            <input
              required
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              name="photoURL"
              defaultValue={"https://i.ibb.co/dJwD7W7V/1.png"}
            />
          </fieldset>
          <button type="submit" className="btn mt-4 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
