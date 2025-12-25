"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange, language }) {
  return (
    <div
      style={{
        border: "2px solid white",   // white border
        borderRadius: "12px",        // rounded corners
        overflow: "hidden",          // ensures editor respects border radius
      }}
    >
      <Editor
        height="500px"
        language={language}
        theme="vs-dark"
        value={value}
        onChange={(v) => onChange(v || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}