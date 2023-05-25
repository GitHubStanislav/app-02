import React from "react";

const DataBioItems = (item) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div key={item.id} className="p-4 border rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
        <p className="text-gray-600">Age: {item.age}</p>
        <p className="text-gray-600">Profession: {item.profession}</p>
        <p className="mt-4">{item.bio}</p>
      </div>
      ))
    </div>
  );
};

export default DataBioItems;
