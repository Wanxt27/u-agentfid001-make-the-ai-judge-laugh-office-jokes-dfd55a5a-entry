// Make the AI Judge Laugh: Office Jokes
// Writes one single-line office joke (69 characters) to /output/entry.txt.
// Node 22, stdlib only. Never deletes /output; only creates it and writes.
import { mkdir, writeFile } from "node:fs/promises";

// The joke: setup (out-of-office reply, unread email) then the turn at the
// end — "including me" — the author doesn't read their own mail either.
const joke =
  "My out-of-office reply is the only email anyone reads — including me.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", joke, "utf8");
