import React, { useEffect, useState } from 'react'
import CommonCards from './CommonCards';

export default function DataCard() {
  const [ data, setData ] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://randomuser.me/api/?results=50"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData(data);
  }, []);
  console.log(data);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {data &&
        data.results.map((item,index) => {
          return (
            <CommonCards
              picture={item.picture.large}
              name={item.name.first}
              dob={item.dob.date}
              phone={item.phone}
              email={item.email}
              gender={item.gender}

            />
          );
        })}
    </div>
  );
}
