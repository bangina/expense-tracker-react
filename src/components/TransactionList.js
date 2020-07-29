//컨텍스트 사용하려면 먼저 불러오기.
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
//컴포넌트 안에 컴포넌트 넣기!
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  //컨텍스트 생성(글로벌 컨텍스트 가져와서)
  //const context = useContext(GlobalContext);
  //위에 코드 비구조화 할당해서 (context.transaction을 그냥 transaction으로 쓸 수 있게)
  const { transactions } = useContext(GlobalContext); //transaction: 배열임
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
          // 원래 <li> {transaction.amount}</li> 이런 내용이었는데, 그대로 잘라내서 transaction으로 옮김
          //그리고 transaction 자식에서도 그대로 사용하려면 props로 전달해줘야 함.(transaction={transaction})
          //map할 때 고유한 key값도 넣어줘야 함.
        ))}
      </ul>
    </>
  );
};
