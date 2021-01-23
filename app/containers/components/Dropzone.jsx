import React, {useRef, useState, useEffect} from "react";
import { Button } from "shards-react";
import {urlUpload} from "../../configUrl";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


const Dropzone = (props) => {

    const fileInputRef = useRef();
    const modalImageRef = useRef();
    const modalRef = useRef();
    const progressRef = useRef();
    const uploadRef = useRef();
    const uploadModalRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        let filteredArr = selectedFiles.reduce((acc, current) => {
            const x = acc.find(item => item.name === current.name);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        setValidFiles([...filteredArr]);

    }, [selectedFiles]);

    const preventDefault = (e) => {
        e.preventDefault();
        // e.stopPropagation();
    }

    const dragOver = (e) => {
        preventDefault(e);
    }

    const dragEnter = (e) => {
        preventDefault(e);
    }

    const dragLeave = (e) => {
        preventDefault(e);
    }

    const fileDrop = (e) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const handleFiles = (files) => {

        if (selectedFiles.length <= 0) {
            for (let i = 0; i < files.length; i++) {
                if (validateFile(files[i])) {
                    setSelectedFiles(prevArray => [...prevArray, files[i]]);
                } else {
                    files[i]['invalid'] = true;
                    setSelectedFiles(prevArray => [...prevArray, files[i]]);
                    setErrorMessage('File type not permitted');
                    setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
                }
            }
        }

    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon', 'application/pdf'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }

        return true;
    }

    const fileSize = (size) => {
        if (size === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
        const index = validFiles.findIndex(e => e.name === name);
        const index2 = selectedFiles.findIndex(e => e.name === name);
        const index3 = unsupportedFiles.findIndex(e => e.name === name);
        validFiles.splice(index, 1);
        selectedFiles.splice(index2, 1);
        setValidFiles([...validFiles]);
        setSelectedFiles([...selectedFiles]);
        if (index3 !== -1) {
            unsupportedFiles.splice(index3, 1);
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }


    const closeModal = () => {
        modalRef.current.style.display = "none";
        modalImageRef.current.style.backgroundImage = 'none';
    }

    const optionUpload = (responde) => {

        props.shareMethods(responde.data, props.option);

    }

    const uploadFiles = async () => {
        uploadModalRef.current.style.display = 'block';
        uploadRef.current.innerHTML = 'Cargando Archivo(s)...';
        for (let i = 0; i < validFiles.length; i++) {
            let formData = new FormData();
            formData.append('file', validFiles[i]);
            axios.post(urlUpload, formData,
                {
                    headers: {'Content-Type': 'multipart/form-data'},
                    onUploadProgress: (progressEvent) => {
                        const uploadPercentage = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
                        progressRef.current.innerHTML = `${uploadPercentage}%`;
                        progressRef.current.style.width = `${uploadPercentage}%`;

                        if (uploadPercentage === 100) {
                            uploadRef.current.innerHTML = 'Archivo(s) subido';
                            validFiles.length = 0;
                            setValidFiles([...validFiles]);
                            setSelectedFiles([...validFiles]);
                            setUnsupportedFiles([...validFiles]);
                        }
                    },
                }).then((responde) => optionUpload(responde))
                .catch((error) => {
                    uploadRef.current.innerHTML = `<span class="error">Error al cargar archivo(s). <br> ${props.upload}</span>`;
                    progressRef.current.style.backgroundColor = 'red';
                    console.log(error)
                })
        }
    }

    const closeUploadModal = () => {
        uploadModalRef.current.style.display = 'none';
    }

    const backFile = (option) =>{
        props.shareMethods('', option);
    }


    return (
        <div>
            {(() => {
                if(props.url != ""){

                    return (
                        <div className="container">
                            <i className="icon-upload-success"></i>
                            <h3 className="titel-upload-success">¡Archivo subido!</h3>
                            <p className="image-url">{props.url}</p>
                            <Button type="button" className="btn-back-upload" outline pill onClick={()=>backFile(props.option)} >Volver a subir</Button>
                        </div>
                    );
                }else {
                    return (
                        <div>
                            <div className="container pl-3 p-0">
                                {unsupportedFiles.length === 0 && validFiles.length ?
                                    <button type="button" className="file-upload-btn"
                                            onClick={() => uploadFiles()}>Subir
                                        Archivo</button> : ''}
                                {unsupportedFiles.length ?
                                    <p className="textmessage">Elimina todos los archivos no compatibles.</p> : ''}
                                <div className="drop-container"
                                     onDragOver={dragOver}
                                     onDragEnter={dragEnter}
                                     onDragLeave={dragLeave}
                                     onDrop={fileDrop}
                                     onClick={fileInputClicked}
                                >
                                    <div className="drop-message">
                                        <p>{props.upload}</p>
                                        <p className="p-3">Arrastre y suelte archivos aquí o haga clic para
                                            seleccionar.</p>
                                        <p style={{fontSize: '12px'}}>Formatos de archivos aceptados: png, jpg, pdf, jpge.</p>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        className="file-input"
                                        type="file"
                                        multiple
                                        onChange={filesSelected}
                                    />
                                </div>
                                <div className="file-display-container">
                                    {
                                        validFiles.map((data, i) =>
                                            <div className="file-status-bar" key={i}>
                                                <div onClick={!data.invalid ? () => '' : () => removeFile(data.name)}>
                                                    <div className="file-type-logo"></div>
                                                    <div className="file-type">{fileType(data.name)}</div>
                                                    <div
                                                        className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</div>
                                                    <span
                                                        className="file-size">({fileSize(data.size)})</span> {data.invalid &&
                                                <span className='file-error-message'>({errorMessage})</span>}
                                                </div>
                                                <div className="file-remove" onClick={() => removeFile(data.name)}>
                                                    <i className="close-file"></i>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="modal" ref={modalRef}>
                                <div className="overlay"></div>
                                <span className="close" onClick={(() => closeModal())}></span>
                                <div className="modal-image" ref={modalImageRef}>
                                </div>
                            </div>

                            <div className="upload-modal" ref={uploadModalRef}>
                                <div className="overlay"></div>
                                <div className="progress-container">
                                    <div className="close" onClick={(() => closeUploadModal())}></div>
                                    <span ref={uploadRef}></span>
                                    <div className="progress">
                                        <div className="progress-bar" ref={progressRef}></div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            })()}
        </div>
    );
}

export default Dropzone;
