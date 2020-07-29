import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
//부모 컴포넌트인 TransactionList에서 transaction을 props로 pass down
//catch 해야지!!그냥 (props)해도 되고, 비구조화할당 해서 ({transaction})해서 사용해도 되고.
export const Transaction = ({ transaction }) => {
  //여기는 삭제 기능만 필요하니 그것만 비구조화 할당!
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    //삼항연산자로 클래스 부여하기!(클래스 각각에 스타일 미리 다르게 적용해놓는다.)
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      {/* 삭제버튼 */}
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
