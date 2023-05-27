import React from "react";

const DataBioItems = ({ id, name, age, profession, bio, removeHandler }) => {
  const handleRemove = () => {
    removeHandler({ id });
  };

  return (
    <div className="grid">
      <div key={id} className="p-4 border rounded-lg flex flex-col bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-black">{name}</h1>
        <p className="text-gray-600">Age: {age}</p>
        <p className="text-gray-600">Profession: {profession}</p>
        <p className="mt-4">{bio}</p>
        <div className="m-1.5 flex-grow"></div>
        <div>
          <button
            onClick={handleRemove}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataBioItems;
