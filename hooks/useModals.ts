import { ModalsContext } from "@/contexts/ModalsContext";
import { useContext } from "react";

export function useModals() {
  return useContext(ModalsContext);
}
