import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import ReactPlayer from 'react-player';
import {Container, Grid, Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box'
import {ArrowBack, ArrowForward} from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';

const FilePreview = ({imageAlt, fileBase64, fileType, isLoading, downloadProgress}) => {
  const isImage = fileType && fileType.includes('image');
  const isPDF = fileType && fileType.includes('pdf');
  const isVideo = fileType && fileType.includes('video');

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  if (downloadProgress > 0 && downloadProgress < 100)
    return (
      <Box mt={'250px'}>
        <Typography variant='h2' align='center'>{`(${downloadProgress.toFixed()}%) `}</Typography>
      </Box>
    )

  return (
    <>
      <div
        style={{height: 'calc(100vh-280px)', width: 'auto', marginTop: '20px'}}
        onClick={(e) => e.stopPropagation()}
      >
        {fileBase64 && !isLoading && fileType && (
          <>
            <div
              style={{
                border: 0,
                overflow: 'auto',
                width: 'calc(100vw-200px)',
                height: '84vh',
                margin: '0 auto'
              }}
            >
              {isImage && (
                <Grid container justify={'center'} alignItems={'center'} alignContent={'center'}>
                  <Grid item xs={12} sm={10} md={10} lg={8} xl={8} style={{height:'80vh'}}>
                      <PinchZoomPan minScale={'auto'} doubleTapBehavior={true}>
                        <img
                          src={fileBase64}
                          title={imageAlt}
                          alt={imageAlt}
                        />
                      </PinchZoomPan>
                  </Grid>
                </Grid>
              )}
              {isPDF && (
                <Container>
                  <Grid container direction="column" alignContent={'center'} alignItems={'center'} justify='center'>
                    <Grid item lg={12}>
                      <Box fullWidth color={'white'}>
                        Page {pageNumber || (numPages ? 1 : '--')} of{' '}
                        {numPages || '--'}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container alignContent={'center'} alignItems={'center'} justify='center'>
                    <Grid item>
                      <IconButton
                        color='primary'
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                      >
                        <ArrowBack/>
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Document
                        file={fileBase64}
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page
                          pageNumber={pageNumber}
                          renderAnnotationLayer={false}
                        />
                      </Document>
                    </Grid>
                    <Grid item>
                      <IconButton
                        color='primary'
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                      >
                        <ArrowForward/>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Container>
              )}
              {isVideo && (
                <>
                  <ReactPlayer
                    url={fileBase64}
                    controls={true}
                    width={'80%'}
                    height={'80%'}
                    playing
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FilePreview;
