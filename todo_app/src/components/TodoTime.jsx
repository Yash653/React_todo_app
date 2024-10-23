import { useState } from "react";
export const TodoTime = () => {
  const [dateTime, setDateTime] = useState();
  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}  -  ${formattime}`);
  }, 1000);
  return <h2> {dateTime}</h2>;
};
