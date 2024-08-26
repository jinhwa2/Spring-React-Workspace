import axios from "axios";
import { useState } from "react";


const PizzaForm = () => {
  const [pizzaName, setPizzaName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const 전달데이터 = {
     pizzaName,
     description,
     price
  }
  //스프링부트 연결 후 input에 작성한 데이터 전달
  const handleRegister = () => {
    axios.post("http://localhost:9090/api/pizza",전달데이터)
    .then((response) => {
      alert("메뉴가가 성공적으로 등록되었습니다.")
    })
    .catch(e=>{
      alert("데이터가 전달되는데 실패했습니다.")
    })
  }
  return (
    <div className="pizzaform-container">
      <label htmlFor="pizzaName">
        메뉴 이름:
        <input type="text" id='pizzaName' value={pizzaName}
         onChange={(e) => setPizzaName(e.target.value)} />
      </label>
      <label htmlFor="description">
        메뉴 설명:
        <input type="text" id='description' value={description}
         onChange={(e) => setDescription(e.target.value)}/>
      </label>
      <label htmlFor="price">
        메뉴 가격:
        <input type="text" id='price' value={price}
         onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button onClick={handleRegister}>등록하기</button>
    </div>
  )

}

export default PizzaForm;