var  TRI_Frontend = {
  
  // connectWS (url) {

  //   console.log('connectWS' + ': ' + url)

  //   let ws = new WebSocket(url)

  //   console.log(ws)

  //   ws.onopen = (evt) => {
  //     let data = {
  //       "type":"InitRenderer",
  //       "req":{
  //         "rid":1,"sid":0,
  //         "params":{
  //           "protocol":"tcp.ws",
  //           "rendertype":"SimpleRenderer",
  //           "fileid":"UVFData@./Bonsai-SCANLINE-132-lz4.uvf",
  //           "ioendpoint":"tcp.prefixed:127.0.0.1:6678",
  //           "streamingparams":{
  //             "xres":800,
  //             "yres":800
  //           }
  //         }
  //       }
  //     }
  //     ws.send(JSON.stringify(data))
  //   }
  //   // ws.onopen()
  // }
  connectFadeoutTimeout: undefined,
  slideCount: 0,
  dataSelected: false,
  datasetName: undefined,
  requirementPanelCount: 0,
  applicationTypes: [],
  deviceTypes: [],
  deviceDict: undefined,
  selectedApplicationName: undefined,
  selectedApplicationDescription: undefined,
  proposalRequestsCount: 0,
  proposalRequestsNeeded: 0,
  proposals: [],
  password: '',
  gridLeaper: false,
  //simple: false,
  canvas: undefined,
  canvasmini: undefined,
  canvascopy: undefined,
  img: undefined,
  ctx: undefined,
  imgmini: undefined,
  ctxmini: undefined,
  imgcopy: undefined,
  ctxcopy: undefined,
  
  init () {
    // 初始化
    console.log('init TRI_Frontend')
    this.canvas= document.getElementById('myCanvas')
    console.log(this.canvas)

  }
}

export default TRI_Frontend