import React from "react";
import DATA_BIO from "@/app/formTest/data";
import DataBioItems from "@/app/formTest/DataBioItems";

const AppTest = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {DATA_BIO.map((item) => (
        <DataBioItems key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AppTest;
