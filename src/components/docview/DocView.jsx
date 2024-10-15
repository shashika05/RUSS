import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

function DocView() {
  const docs = [
    {
      uri: require("./files/Author_declaration_form_RUSS2025.docx"),
    }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default DocView;
