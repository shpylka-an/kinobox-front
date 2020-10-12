import React, { useMemo, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { useDropzone } from 'react-dropzone'
import Dropzone from './Dropzone'

const UploadMovieFiles = () => {
  const [open, setOpen] = useState(false)

  const previewDropzone = useDropzone({
    accept: 'image/*',
    multiple: false,
  })
  const videoFileDropzone = useDropzone({
    accept: 'video/*',
    multiple: false,
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={handleClickOpen}
      >
        Upload files
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Upload files</DialogTitle>
        <DialogContent>
          <Dropzone {...previewDropzone} />
          <Dropzone {...videoFileDropzone} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UploadMovieFiles
