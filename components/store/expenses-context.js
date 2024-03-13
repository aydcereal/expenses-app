import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Groceries",
    amount: 50.35,
    date: "2024-03-05",
  },
  {
    id: 2,
    title: "Rent",
    amount: 500.5,
    date: "2024-03-01",
  },
  {
    id: 3,
    title: "Utilities",
    amount: 100.56,
    date: "2024-03-03",
  },
  {
    id: 4,
    title: "Car Payment",
    amount: 200.25,
    date: "2024-02-10",
  },
  {
    id: 5,
    title: "Internet",
    amount: 60.99,
    date: "2024-02-17",
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.data,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id != action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
