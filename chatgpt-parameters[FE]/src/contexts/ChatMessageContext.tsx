import { createContext } from "react";

interface ChatMessageContextValue {
  messages: Array<string>;
  addMessage: (message: string) => void;
}

export const ChatMessageContext = createContext<ChatMessageContextValue | any>(undefined);
