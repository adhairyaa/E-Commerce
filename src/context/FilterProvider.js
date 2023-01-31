import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const handleDispatch = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return (state = {
        ...state,
        sortBy: "LOW_TO_HIGH",
      });
    case "HIGH_TO_LOW":
      return (state = { ...state, sortBy: "HIGH_TO_LOW" });
    case "GENDER_FILTER":
      return (state = {
        ...state,
        gender: state.gender.includes(action.payload)
          ? state.gender.filter((gender) => gender !== action.payload)
          : [...state.gender, action.payload],
      });
    case "SIZE_FILTER":
      return (state = {
        ...state,
        size: state.size.includes(action.payload)
          ? state.size.filter((size) => size !== action.payload)
          : [...state.size, action.payload],
      });
    case "CLEAR_FILTER":
      return (state = {
        ...state,
        size: [],
        gender: [],
        sortBy: null,
      });

    default:
      return state;
  }
};
export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(handleDispatch, {
    sortBy: null,
    gender: [],
    size: [],
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilterProvider = () => useContext(FilterContext);

export { useFilterProvider };
