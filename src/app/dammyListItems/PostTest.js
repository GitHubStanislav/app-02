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
    <>
      {cards.map((card) => (
        <PostsTest key={card.id} card={card} />
      ))}
    </>
  );
};

export default PostTest;
