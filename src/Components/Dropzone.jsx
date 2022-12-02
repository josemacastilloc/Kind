import React, {useCallback, useState} from "react"
import {useDropzone} from 'react-dropzone';
import "../Style/Dropzone.css";

function MyDropzone(props) {
  const [myFiles, setMyFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv, text/csv"],
      "text/plain": [".csv", "text/plain"],
      "application/vnd.ms-excel": [".csv"], },
  });


  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const removeAll = () => {
    setMyFiles([]);
  };

  const files = myFiles.map((file) => (
    <li key={file.path} style={{margin: "5px", fontWeight: "500"}}>
      {file.path}
      <button onClick={removeFile(file)} style={{color: "red", marginLeft: "10px", padding: "2px", backgroundColor: "transparent", border: "0px", fontWeight: "600"}}>X</button>
    </li>
  ));

  const uploadFiles = () => {
    console.log(myFiles);
  }

  return (
    // <div className="main-drop-container">
    //   <div {...getRootProps()} className="drop-container">
    //     <input {...getInputProps()} />
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //     <em>(Only *.jpeg and *.png images will be accepted)</em>
    //     <button type="button" onClick={open} className="rejected-files">
    //       Open File Dialog
    //     </button>
    //     <aside>
    //       <h4 className="accepted-files">Accepted files</h4>
    //       <ul>{acceptedFileItems}</ul>
    //       {/* <h4 className="rejected-files">Rejected files</h4> */}
    //       {/* <ul>{fileRejectionItems}</ul> */}
    //     </aside>
    //   </div>
    // </div>;
    <section className="main-drop-container">
      <div {...getRootProps({ className: "drop-container" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={{margin: "5px"}}>
        <ul style={{listStyleType: "None", backgroundColor: "#fff", padding: "5px", border: "1px dashed #000", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>{files}</ul>
      </aside>
      <div>
        {files.length > 0 && <button className="rejected-files" onClick={removeAll}>Remove</button>}
        {files.length > 0 && <button className="accepted-files" onClick={uploadFiles}>Upload</button>}
      </div>
    </section>
  );
}

export default MyDropzone;

