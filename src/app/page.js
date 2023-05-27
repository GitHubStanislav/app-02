"use client";
import { useState } from "react";
import ListBio from "@/app/formTest/ListBio";
import FormTestInput from "@/app/formTest/FormTestInput";
import DATA_BIO from "@/app/formTest/data";

function Home() {
  const emptyListMessage = (
    <h2 className="text-xl text-center">Your list is empty</h2>
  );
  const [dataListElements, setDataListElements] = useState(DATA_BIO);

  const addUsersHandler = (user) => {
    setDataListElements((prevUsers) => [...prevUsers, user]);
  };

  const removeListElement = (user) => {
    setDataListElements((prevUsers) =>
      prevUsers.filter((u) => u.id !== user.id)
    );
  };

  return (
    <>
      <FormTestInput addUsers={addUsersHandler} />
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
