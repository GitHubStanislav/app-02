const MyInputFirst = ({ onChangeInput, value }) => {
  return (
    <>
      <input
        className="border-4 border-black-500 bo rounded-md p-2 mb-2"
        value={value}
        onChange={onChangeInput}
        type="text"
      />
      <h2>{value}</h2>
    </>
  );
};
export default MyInputFirst;
