import { Fragment, type ReactNode } from "react";

/** Renders **bold** spans inside a line of copy. */
function inline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>;
  });
}

type Block = { type: "p" | "ul"; lines: string[] };

function parse(text: string): Block[] {
  const blocks: Block[] = [];
  let open: Block | null = null;

  for (const raw of text.split("\n")) {
    const line = raw.trim();

    // a blank line closes whatever block is open
    if (!line) {
      open = null;
      continue;
    }

    if (line.startsWith("- ")) {
      if (open?.type !== "ul") {
        open = { type: "ul", lines: [] };
        blocks.push(open);
      }
      open.lines.push(line.slice(2));
      continue;
    }

    // a non-bullet line after bullets starts a new paragraph
    if (open?.type !== "p") {
      open = { type: "p", lines: [] };
      blocks.push(open);
    }
    open.lines.push(line);
  }

  return blocks;
}

/**
 * A deliberately small renderer for the lightly-marked-up project bodies in
 * data/projects.ts: blank-line paragraphs, `- ` bullets, and `**bold**`.
 * Not a general markdown parser — just enough for the content we author.
 */
export default function RichText({ text }: { text: string }) {
  return (
    <div className="copy text-[1.0625rem] text-slate-300/90">
      {parse(text).map((b, i) =>
        b.type === "ul" ? (
          <ul key={i}>
            {b.lines.map((l, j) => (
              <li key={j}>{inline(l, `${i}-${j}`)}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{inline(b.lines.join(" "), `${i}`)}</p>
        )
      )}
    </div>
  );
}
