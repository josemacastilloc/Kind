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
      "application/vnd.ms-excel": [".csv"],
    },
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
    <li key={file.path}>
      {file.path}
      <button onClick={removeFile(file)} style={{color: "red", marginLeft: "10px"}}>X</button>
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
      <aside>
        <ul style={{textDecoration: "None"}}>{files}</ul>
      </aside>
      {files.length > 0 && <button onClick={removeAll}>Remove All</button>}
      {files.length > 0 && <button onClick={uploadFiles}>Upload All</button>}
    </section>
  );
}

export default MyDropzone;

