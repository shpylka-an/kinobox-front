import React, { useMemo } from 'react'
import { acceptStyle, activeStyle, baseStyle, rejectStyle } from './styles'

const Dropzone = ({
  acceptedFiles,
  getRootProps,
  getInputProps,
  isDragActive,
  isDragAccept,
  isDragReject,
}) => {
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  )

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Accepted file:</h4>
        <ul>{acceptedFileItems}</ul>
      </aside>
    </div>
  )
}

export default Dropzone
