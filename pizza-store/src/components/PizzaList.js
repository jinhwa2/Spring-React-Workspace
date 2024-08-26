import React,{useState,useEffect} from "react";
import axios from 'axios';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost9090/api/pizza")
    .then(response => {
      setPizzas(response.data);
      console.log("pizzas :",pizzas)
   },[])
    .catch(e => {
     alert("피자리스트를 불러오는데 실패했습니다.")
    })
  })

  return(
    <div className="pizza-container">
      <h1>피자메뉴</h1>
      <ul>
        {pizzas.map(pizza => {
          <li key={pizza.id}>
            <div className="pizza-name">{pizza.name}</div>
            <div className="pizza-escription">{pizza.escription}</div>
            <div className="pizza-price">₩{pizza.price}원</div>
            <button>상세보기</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default PizzaList;