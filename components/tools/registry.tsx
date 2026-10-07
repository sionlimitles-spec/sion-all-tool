import type { ComponentType } from "react";
import WordCounter from "./WordCounter";

export const TOOL_COMPONENTS: Record<string, ComponentType> = {
  "word-counter": WordCounter,
};
