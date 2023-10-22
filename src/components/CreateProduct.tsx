import React from 'react'

export function CreateProduct() {
    return (
  <form>
    <input type="text"
      className="border py-2 px-4 mb-2 w-full outline-0"
      placeholder="Enter product title..."
     />
      <button type="submit"
       className=" relative bottom-0 right-0 py-2 px-4 border rounded-xl mb-2 bg-amber-500  hover:text-amber-100 ">
       Create
    </button>
  </form>
    )
}