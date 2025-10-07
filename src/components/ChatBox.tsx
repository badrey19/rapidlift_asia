"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";


type Role = "user" | "assistant" | "system";

type Message = {
  id: string;
  role: Role;
  text: string;
  createdAt: number;
};

const STORAGE_KEY = "rl_chat_session_v1";

function uid(prefix = "") {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return prefix + crypto.randomUUID();
  }
  return prefix + Math.random().toString(36).slice(2, 9);
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions] = useState<string[]>([
    "Estimasi biaya sewa untuk crane 50 ton (1 hari)",
    "Butuh operator + mobilisasi, berapa biaya?",
    "Area Jakarta Selatan, apakah tersedia hari ini?",
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Load history from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      setMessages(raw ? JSON.parse(raw) : []);
    } catch {
      setMessages([]);
    }
  }, []);

  // Save history + scroll
  useLayoutEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (msg: Message) =>
    setMessages((prev) => [...prev, msg]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: uid("u_"),
      role: "user",
      text,
      createdAt: Date.now(),
    };
    addMessage(userMsg);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      const replyText: string =
        data?.text ?? "⚠️ Maaf, gagal mendapat jawaban.";

      addMessage({
        id: uid("a_"),
        role: "assistant",
        text: replyText,
        createdAt: Date.now(),
      });
    } catch (err: unknown) {
  const errorMessage =
    err instanceof Error
      ? err.message
      : "⚠️ Terjadi kesalahan saat menghubungi server. Silakan coba lagi.";

  addMessage({
    id: uid("a_"),
    role: "assistant",
    text: errorMessage,
    createdAt: Date.now(),
  });
} finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {open ? (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setOpen(false)}
              title="Tutup Chat"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-2xl hover:scale-105 transition"
            >
              ✕
            </motion.button>
          ) : (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setOpen(true)}
              title="Buka Chat AI"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl hover:scale-105 transition"
            >
              💬
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-full h-[520px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg font-semibold shadow">
                  AI
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    RapidLift Assistant
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Tanyakan soal armada, estimasi, dan teknis
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  title="Hapus chat"
                  className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Clear
                </button>
                <button
                  onClick={() => setOpen(false)}
                  title="Minimize"
                  className="text-gray-500 dark:text-gray-400 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  ▢
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
              {messages.length === 0 && (
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  👋 Halo! Saya siap bantu. Coba ketik:{" "}
                  <span className="italic">
                    Estimasi sewa crane 50 ton 1 hari Jakarta
                  </span>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[85%] ${
                    m.role === "user" ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl break-words ${
                      m.role === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
                    }`}
                  >
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                    </div>

                    <div className="text-[10px] mt-1 text-gray-400 text-right">
                      {new Date(m.createdAt).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="max-w-[60%] mr-auto">
                  <div className="px-3 py-2 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150" />
                      <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-300" />
                    </span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions */}
            {suggestions.length > 0 && (
              <div className="px-3 py-2 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="flex gap-2 overflow-x-auto">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-sm px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 shadow text-gray-700 dark:text-gray-200 whitespace-nowrap"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Composer */}
            <div className="px-3 py-3 border-t dark:border-gray-800 bg-white dark:bg-gray-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2"
              >
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ketik pertanyaan... (mis. 'Butuh crane 25 ton untuk 2 hari')"
                  className="flex-1 px-4 py-2 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  rows={1}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl disabled:opacity-60"
                >
                  ➤
                </button>
              </form>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
