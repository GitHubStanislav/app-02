"use client";
import React, { useState } from "react";
import ListBio from "@/app/formTest/ListBio";
import FormTestInput from "@/app/formTest/FormTestInput";
import DATA_BIO from "@/app/formTest/data";
import MySelect from "@/app/formTest/UI/MySelect";

function Home() {
  const emptyListMessage = (
    <h2 className="text-xl text-center">Your list is empty</h2>
  );
  const [dataListElements, setDataListElements] = useState(DATA_BIO);
  const [selectedSort, setSelectedSort] = useState("");

  const addUsersHandler = (user) => {
    setDataListElements((prevUsers) => [...prevUsers, user]);
  };

  const removeListElement = (user) => {
    setDataListElements((prevUsers) =>
      prevUsers.filter((u) => u.id !== user.id)
    );
  };

  const sortList = (sort) => {
    setSelectedSort(sort);
    setDataListElements((prevDataList) =>
      [...prevDataList].sort((a, b) => {
        const valueA = a[sort];
        const valueB = b[sort];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB);
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return valueA - valueB;
        }
        return 0; // Handle case where sort property is undefined or not a string/number
      })
    );
  };
  return (
    <>
      <FormTestInput addUsers={addUsersHandler} />
      <MySelect
        value={selectedSort}
        onChange={sortList}
        options={[
          { value: "name", name: "Sort by name" },
          { value: "age", name: "Sort by age" },
          { value: "profession", name: "Sort by profession" },
        ]}
        defaultValue="Sort by"
      />
      {dataListElements.length !== 0 ? (
        <ListBio
          removeHandler={removeListElement}
          dataListElements={dataListElements}
        />
      ) : (
        emptyListMessage
      )}
    </>
  );
}

export default Home;
