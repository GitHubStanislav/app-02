const BaseButtonFirst = ({ onClickHandler, children, className }) => {
  return (
    <>
      <button onClick={onClickHandler} className={className}>
        {children}
      </button>
    </>
  );
};
export default BaseButtonFirst;
