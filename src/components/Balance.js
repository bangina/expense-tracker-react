import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  //컨텍스트의 배열을 mapping 해서 amount를 담기
  const amounts = transactions.map((transaction) => transaction.amount);
  //담긴 amount들 값 전부 누적으로 더해서 소수점 2째자리까지 보이게
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
