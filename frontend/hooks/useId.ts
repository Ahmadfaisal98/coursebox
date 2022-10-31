import { useRef } from "react";
import crypto from "crypto";

function dec2hex(dec: any) {
  return dec.toString(16).padStart(2, "0");
}

// generateId :: Integer -> String
function generateId(len = 40) {
  const arr = new Uint8Array((len || 40) / 2);
  if (window.crypto) {
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  }
  return crypto.randomBytes(len / 2).toString("hex");
}

export const useId = (): string => {
  const id = generateId(20);
  const { current } = useRef(id);
  return current;
};
