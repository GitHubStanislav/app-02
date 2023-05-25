import React from "react";
import DATA_BIO from "@/app/formTest/data";
import DataBioItems from "@/app/formTest/DataBioItems";

const AppTest = () => {
  return (
    <div>
      {DATA_BIO.map((item) => (
        <DataBioItems key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AppTest;
