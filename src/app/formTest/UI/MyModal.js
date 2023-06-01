const MyModal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-96 rounded shadow-lg z-50">
        <div className="modal-content p-4">{children}</div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute top-2 right-2"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MyModal;
