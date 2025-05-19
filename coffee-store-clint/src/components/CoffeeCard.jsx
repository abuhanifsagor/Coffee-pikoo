import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees, setCoffees }) => {
  const { _id, name, supplier, price,  photoURL } = coffee;

  const handleDelete = (id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been Removed.", "success");
            }
          });
          const remaining = coffees.filter(cof => cof._id !== id)
          setCoffees(remaining)
      }
    });
  };

  return (
    <div className="card  card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photoURL} />
      </figure>
      <div className="flex justify-between items-center gap-5 ">
        <div className="card-body p-2">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {supplier}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="p-5 flex gap-3 items-center justify-center flex-col">
          <Link
            to={`/coffees/${_id}`}
            className="text-2xl cursor-pointer rounded-lg p-2 bg-amber-300 "
          >
            <FaEye />
          </Link>
          <Link to={`/updatecoffee/${_id}`} className="text-2xl cursor-pointer text-white p-2 rounded-lg bg-green-600">
            <MdEdit />
          </Link>
          <span
            onClick={() => handleDelete(_id)}
            className="text-2xl cursor-pointer text-white p-2 rounded-lg bg-red-500"
          >
            <MdDelete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
