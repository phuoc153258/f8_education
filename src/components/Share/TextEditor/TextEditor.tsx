import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { stateToHTML } from 'draft-js-export-html';

function TextEditor({ editorState, handleEditorChange }: any) {
    return (
        <>
            <div className="border-solid border-2 border-gray-100">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                />
            </div>
        </>
    );
}

export default TextEditor;
