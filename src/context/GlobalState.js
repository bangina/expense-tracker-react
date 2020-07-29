import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//1. Initial State
const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};

//2. Create context
export const GlobalContext = createContext(initialState);

//3. Provider component(컴포넌트들 모두 감쌀 것임. 왕부모)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //4. Actions(추가한 뒤에 AppReducer 에서 케이스 추가해줌)
  //4.1 아래 value에다가 passdown 해서 자식들이 쓸 수 있도록 추가해줌
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  //지우기함수는 id만 전달, 추가함수는 obj전체를 전달
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
