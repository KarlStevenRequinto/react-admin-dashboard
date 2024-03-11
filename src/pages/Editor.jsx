import React from "react";
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from "@syncfusion/ej2-react-richtexteditor";
// eslint-disable-next-line no-unused-vars
import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Editor" />
            <RichTextEditorComponent>
                {/* uncomment EditorData to set default data of texts */}
                {/* <EditorData/> */}
                <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
        </div>
    );
};

export default Editor;
