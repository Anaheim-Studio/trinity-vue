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
    this.canvasmini = document.getElementById('myCanvasmini')
    this.canvascopy = document.getElementById('myCanvascopy')
    this.img = new Image()
    this.imgmini = new Image()
    this.imgcopy = new Image()
    this.ctx = this.canvas.getContext('2d')
    this.ctxmini = this.canvasmini.getContext('2d')
    this.ctxcopy = this.canvascopy.getContext('2d')
    this.canvasmini.style.width = '26%'
    this.canvasmini.style.height = '24%'
    // ...then set the internal size to match
    this.canvasmini.width = this.canvasmini.offsetWidth
    this.canvasmini.height = this.canvasmini.offsetHeight

    this.canvascopy.style.width = '70%'
    this.canvascopy.style.height = '970%'
    // ...then set the internal size to match
    this.canvascopy.width = this.canvascopy.offsetWidth
    this.canvascopy.height = this.canvascopy.offsetHeight

    this.canvas.style.width = '100%'
    this.canvas.style.height = '100%'
    // ...then set the internal size to match
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
    console.log(this.canvas)

  }


}

TRI_Frontend.NodeConnector = (function() {
  var messageDict = undefined
  var parameterDict = undefined
  var websocket = undefined

  return {
    
  }
})()



export default TRI_Frontend