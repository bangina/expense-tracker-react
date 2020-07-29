//reducer? 어떤 액션 발생했을 때 어떻게 state 변경할 것인지

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      //id값 일치하지 않는 것 걸러내고 저장하기
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        //action.payload: transaction 오브젝트 전체 전달받음
        //신규 transaction + ...기존 transaction들
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
