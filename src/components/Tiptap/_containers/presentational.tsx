import { EditorContent, Editor } from "@tiptap/react";

type TiptapPresentationalProps = {
  editor: Editor | null;
};

export const TiptapPresentational = ({ editor }: TiptapPresentationalProps) => {
  return <EditorContent editor={editor} />;
};
