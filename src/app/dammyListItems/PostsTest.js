import React from "react";

const PostsTest = ({ card }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-2xl font-bold mb-4">Card Details</h1>
      {card ? (
        <div>
          <p className="font-bold text-gray-800">Card ID: {card.id}</p>
          <ul className="mt-4">
            {card.products &&
              card.products.map((product) => (
                <li
                  key={`${card.id}-${product.id}`}
                  className="mb-4 border-b pb-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                  <p className="text-gray-600">
                    Total: ${product.total.toFixed(2)}
                  </p>
                  <p className="text-gray-600">
                    Discount: {product.discountPercentage.toFixed(2)}%
                  </p>
                  <p className="text-gray-600">
                    Discounted Price: ${product.discountedPrice.toFixed(2)}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <p>Loading card details...</p>
      )}
    </div>
  );
};

export default PostsTest;
