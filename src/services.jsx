import { useState, useEffect } from "react";

export default function FetchData() {
  const [datas, setDatas] = useState([]);

  // https://jsonplaceholder.typicode.com/todos

  useEffect(() => {
    fetch("./datas/datas.json")
      .then(response => response.json())
      .then(data => setDatas(data))
      .catch(error => console.error(error));
  }, []);

  return console.log(datas);
}


// export default function FetchData() {

// fetch("./datas/datas.json")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// }