"use client";

import ListBio from "@/app/formTest/ListBio";
import FormTestInput from "@/app/formTest/FormTestInput";
import DATA_BIO from "@/app/formTest/data";
import { useState } from "react";
export default function Home() {
  const [dataListElements, setDataListElements] = useState(DATA_BIO);
  const addUsersHandler = (user) => {
    setDataListElements((prevUsers) => [...prevUsers, user]);
  };
  return (
    <>
      <FormTestInput addUsers={addUsersHandler} />
      <ListBio dataListElements={dataListElements} />
    </>
  );
}
