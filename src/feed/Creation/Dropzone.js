import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Tooltip, IconButton } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
const Dropzone = ({ setAttachment,contentType,setContentType }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setAttachment(acceptedFiles[0]);
        setContentType(contentType);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                <Tooltip title="Add Image">
                    <IconButton>
                        <ImageOutlinedIcon />
                    </IconButton>
                </Tooltip>
            }
        </div>
    )
};
export default Dropzone;