import React, { useState, useEffect } from "react";

const FormTestInput = ({ addUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  useEffect(() => {
    const isValid =
      name !== "" && age !== "" && profession !== "" && bio !== "";
    setIsFormValid(isValid);
  }, [name, age, profession, bio]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: Date.now(),
      name: name,
      age: age,
      profession: profession,
    };
    addUser(newUser); // Вместо addUsers(newUser)
    setName("");
    setAge("");
    setProfession("");
  };

  return (
    <form
      className="max-w-md mx-auto m-5 border border-gray-300 p-4 rounded-lg bg-gray-100"
      onSubmit={handleSubmit}
    >
      <h1 className="text-gray-700 text-xl font-bold">TEST FORM</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="age"
        >
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="profession"
        >
          Profession
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="profession"
          type="text"
          placeholder="Enter your profession"
          value={profession}
          onChange={handleProfessionChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="bio"
        >
          Bio
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bio"
          placeholder="Enter your bio"
          rows={4}
          value={bio}
          onChange={handleBioChange}
        />
      </div>
      <button
        type="submit"
        className={`${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg"
            : "bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-lg"
        }`}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
};

export default FormTestInput;
