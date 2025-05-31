import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-background p-8 md:p-16 w-full max-w-6xl mx-auto mt-8">
      <div className="text-foreground text-lg mb-8 opacity-60">Contacts</div>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 bg-transparent border border-foreground text-foreground text-2xl font-mono p-4 outline-none placeholder:text-foreground/60"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent border border-foreground text-foreground text-2xl font-mono p-4 outline-none placeholder:text-foreground/60"
          />
        </div>
        <input
          type="text"
          placeholder="Title"
          className="w-full bg-transparent border border-foreground text-2xl font-mono text-foreground p-4 outline-none placeholder:text-foreground/60"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full bg-transparent border border-foreground text-2xl font-mono text-foreground p-4 outline-none placeholder:text-foreground/60 resize-none"
        />
        <button
          type="submit"
          className="mt-4 px-8 py-2 border-2 border-secondary text-2xl font-mono text-foreground font-bold bg-transparent hover:bg-secondary/10 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
} 