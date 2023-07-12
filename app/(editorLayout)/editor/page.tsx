"use client";

import ExitAnimationOnMount from "@/app/_shared/components/animations/EditorLoadingAnimation/ExitAnimationOnMount";
import Editor from "@/app/(editorLayout)/editor/_components/Editor/Editor";

const EditorPage = () => {
    return (
    <>
      <ExitAnimationOnMount />
      <Editor />
    </>
  );
};

export default EditorPage;
