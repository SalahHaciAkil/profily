"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const message = error.message || "Unknown error";
  return (
    <html>
      <body>
        <h2>{message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
