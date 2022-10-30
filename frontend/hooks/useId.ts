import { useRef } from "react";
import crypto from "crypto";

export const useId = (): string => {
  const id = crypto.randomBytes(10).toString("hex");
  const { current } = useRef(id);
  return current;
};
