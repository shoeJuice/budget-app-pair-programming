"use client";

/**
 * @fileoverview This file contains the main context for the Budget application.
 * It allows for managing the state of the application from a single source of truth, preventing codesmells like prop drilling.
 * Global variables that are used in multiple components should be stored here.
 */
import { createContext, useReducer, useContext } from "react";
import { BudgetContextState } from "./types";

const initialState: BudgetContextState = {};

const BudgetContext = createContext<BudgetContextState>(initialState);

export default function BudgetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BudgetContext.Provider value={initialState}>
      {children}
    </BudgetContext.Provider>
  );
}
