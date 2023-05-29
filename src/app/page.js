"use client";
import React, { useState, useMemo } from "react";
import ListBio from "@/app/formTest/ListBio";
import FormTestInput from "@/app/formTest/FormTestInput";
import DATA_BIO from "@/app/formTest/data";
import MySelect from "@/app/formTest/UI/MySelect";
import MyInput from "@/app/formTest/UI/MyInput";
import MyModal from "@/app/formTest/UI/myModal/MyModal";

function Home() {
  const emptyListMessage = (
    <h2 className="text-xl text-center">Your list is empty</h2>
  );

  const [dataList, setDataList] = useState(DATA_BIO);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredData = useMemo(() => {
    return dataList.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [dataList, searchValue]);

  const addUser = (user) => {
    setDataList((prevDataList) => [...prevDataList, user]);
  };

  const removeUser = (user) => {
    setDataList((prevDataList) =>
      prevDataList.filter((item) => item.id !== user.id)
    );
  };

  const sortList = (sort) => {
    setSelectedSort(sort);
    setDataList((prevDataList) =>
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
      <MyModal>
        <FormTestInput addUser={addUser} />
      </MyModal>
      <MyInput
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
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
      {dataList.length !== 0 ? (
        <ListBio removeHandler={removeUser} dataListElements={filteredData} />
      ) : (
        emptyListMessage
      )}
    </>
  );
}

export default Home;
