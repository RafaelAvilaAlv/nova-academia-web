"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const quickOptions = [
  "¿Qué programas ofrecen?",
  "¿Cómo funciona admisiones?",
  "¿Dónde están ubicados?",
  "¿Cómo puedo contactarlos?",
];

function getBotResponse(input: string): string {
  const text = input.toLowerCase();

  if (
    text.includes("programa") ||
    text.includes("carrera") ||
    text.includes("ofrecen") ||
    text.includes("estudian")
  ) {
    return "En Nova Academia puedes revisar nuestros programas académicos desde la sección “Programas” del sitio. Ahí encontrarás la oferta educativa y más detalles sobre cada opción disponible.";
  }

  if (
    text.includes("admis") ||
    text.includes("inscrip") ||
    text.includes("matr") ||
    text.includes("aplicar")
  ) {
    return "El proceso de admisión lo puedes consultar en la sección “Admisiones”. Ahí encontrarás la información para iniciar tu proceso y conocer los pasos necesarios.";
  }

  if (
    text.includes("ubic") ||
    text.includes("dirección") ||
    text.includes("direccion") ||
    text.includes("dónde") ||
    text.includes("donde")
  ) {
    return "Puedes revisar nuestra ubicación y medios de contacto en la sección “Contacto” del sitio web.";
  }

  if (
    text.includes("contact") ||
    text.includes("whatsapp") ||
    text.includes("correo") ||
    text.includes("telefono") ||
    text.includes("teléfono")
  ) {
    return "Puedes comunicarte con Nova Academia desde la sección “Contacto”. También puedes escribirnos por nuestros canales oficiales para recibir atención personalizada.";
  }

  if (
    text.includes("horario") ||
    text.includes("atienden") ||
    text.includes("hora")
  ) {
    return "Para información sobre horarios de atención, te recomendamos revisar la sección de contacto o escribirnos directamente para recibir confirmación actualizada.";
  }

  if (
    text.includes("noticia") ||
    text.includes("evento") ||
    text.includes("novedad")
  ) {
    return "Puedes consultar nuestras novedades institucionales en la sección “Noticias”, donde compartimos eventos, información y actualizaciones importantes.";
  }

  return "Puedo ayudarte con información sobre programas, admisiones, ubicación, contacto y noticias. Escríbeme tu consulta o elige una de las opciones rápidas.";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "¡Hola! Soy el asistente virtual de Nova Academia. Estoy aquí para ayudarte con información sobre programas, admisiones, contacto y más.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = (textToSend?: string) => {
    const finalText = (textToSend ?? input).trim();
    if (!finalText) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: finalText,
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      role: "bot",
      text: getBotResponse(finalText),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#1E3A5F] text-white shadow-2xl transition hover:scale-105"
        aria-label="Abrir chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#1E3A5F] px-5 py-4 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Asistente Nova Academia
              </h3>
              <p className="text-xs text-white/80">En línea</p>
            </div>
          </div>

          {/* Mensajes */}
          <div className="h-96 overflow-y-auto bg-slate-50 px-4 py-4">
            <div className="mb-4 flex flex-wrap gap-2">
              {quickOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => sendMessage(option)}
                  className="rounded-full border border-[#C9895B]/40 bg-white px-3 py-2 text-xs font-medium text-[#1E3A5F] transition hover:bg-[#C9895B]/10"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      message.role === "user"
                        ? "bg-[#C9895B] text-white"
                        : "bg-white text-slate-700"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Links útiles */}
          <div className="border-t border-slate-200 bg-white px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2 text-xs">
              <Link
                href="/programas"
                className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                Programas
              </Link>
              <Link
                href="/admisiones"
                className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                Admisiones
              </Link>
              <Link
                href="/contacto"
                className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                Contacto
              </Link>
              <Link
                href="/noticias"
                className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                Noticias
              </Link>
            </div>

            <a
              href="https://wa.me/593958635351"
              target="_blank"
              className="rounded-full bg-green-500 px-3 py-1.5 text-white hover:bg-green-600"
            >
              WhatsApp
            </a>

            {/* Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Escribe tu mensaje..."
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#C9895B]"
              />
              <button
                onClick={() => sendMessage()}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9895B] text-white transition hover:scale-105"
                aria-label="Enviar mensaje"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}