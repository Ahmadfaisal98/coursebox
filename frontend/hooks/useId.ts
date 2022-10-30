import { useRef } from "react";
import checkCrypto from "crypto";

export const useId = (): string => {
  const id = checkCrypto.randomBytes(10).toString("hex");
  const { current } = useRef(id);
  return current;
};
