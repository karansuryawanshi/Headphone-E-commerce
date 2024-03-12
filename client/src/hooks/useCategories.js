import { useContext } from "react";
import { CategoriesContext } from "../utils/context";

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  return context;
};
