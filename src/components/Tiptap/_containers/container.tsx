"use client";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TiptapPresentational } from "./presentational";

export const TiptapContainer = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: { levels: [2, 3] } })],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "bg-gray-100 p-4",
      },
    },
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
  });
  return <TiptapPresentational editor={editor} />;
};
