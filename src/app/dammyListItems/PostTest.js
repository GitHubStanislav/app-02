import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsTest from "@/app/dammyListItems/PostsTest";

const API_URL = "https://dummyjson.com/carts";

const PostTest = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCards(response.data.carts);
        console.log(response.data.carts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap overflow-y-hidden">
      {cards.map((card) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          key={card.id}
        >
          <PostsTest card={card} />
        </div>
      ))}
    </div>
  );
};

export default PostTest;
