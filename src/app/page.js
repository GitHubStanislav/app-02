"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useTransition, animated, useSpring } from "@react-spring/web";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transitions = useTransition(isModalOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const styles = useSpring({
    opacity: isModalOpen ? 1 : 0,
    config: { duration: 300 },
  });

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown, closeModal]);

  const filteredData = useMemo(() => {
    return dataList.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [dataList, searchValue]);

  const addUser = useCallback((user) => {
    setDataList((prevDataList) => [...prevDataList, user]);
  }, []);

  const removeUser = useCallback((user) => {
    setDataList((prevDataList) =>
      prevDataList.filter((item) => item.id !== user.id)
    );
  }, []);

  const sortList = useCallback((sort) => {
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
        return 0;
      })
    );
  }, []);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
        onClick={openModal}
      >
        Add User
      </button>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              className="modal-overlay"
              style={{
                ...styles,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            >
              <div className="modal-container">
                <div className="modal-content">
                  <MyModal closeModal={closeModal}>
                    <FormTestInput addUser={addUser} closeModal={closeModal} />
                  </MyModal>
                </div>
              </div>
            </animated.div>
          )
      )}
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
