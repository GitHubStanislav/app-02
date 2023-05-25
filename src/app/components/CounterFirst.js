import BaseButtonFirst from "@/app/components/BaseButtonFirst";

const CounterFirst = ({ incrementHandler, decrementHandler, likes }) => {
  return (
    <>
      <div className="border border-gray-500 rounded-md p-2 mb-2 ">{likes}</div>
      <BaseButtonFirst
        className="border border-gray-500 rounded-md px-4 py-2 mb-2 bg-emerald-950 text-gray-50 w-1/5"
        onClickHandler={incrementHandler}
      >
        +
      </BaseButtonFirst>
      <BaseButtonFirst
        className="border border-gray-500 rounded-md px-4 py-2 mb-2 bg-red-600 text-gray-50 w-1/5"
        onClickHandler={decrementHandler}
      >
        -
      </BaseButtonFirst>
    </>
  );
};
export default CounterFirst;
