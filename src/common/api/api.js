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
    wsUri: "",


  }
})()

TRI_Frontend.VisControlConnector = (function () {
  "use strict"
  var websocketControl = undefined
  var port = undefined
  var righttime = undefined
  var lefttime = undefined
  var setSetUserViewMatrixNeeded = true
  var lastX = undefined
  var lastY = undefined
  var isRotating = false
  var deltaX = 0.0
  var deltaY = 0.0
  var stoppedSending = false
  var rotMode = true
  var zoomCounter = 0
  var zoomOutNeeded = true
  var currentTF = 0
  var tfCount = 0
  var resetCameraNeeded = true
  var resetSceneNeeded = true
  var changeBgNeeded = true
  var getBgcolorNeeded = true
  var isovalue = 0.0
  var enableClipping = true
  var slideminx = 0.0
  var slidemaxx = 400
  var slideminy = 0.0
  var slidemaxy = 400
  var slideminz = 0.0
  var slidemaxz = 400
  var clippz = 0.0
  var light_ambient = {"w":25,"x":25,"y":25,"z":255}
  var light_diffuse = {"w":255,"x":255,"y":255,"z":255}
  var light_specular = {"w":255,"x":255,"y":255,"z":255}
  var lightx = 0.0
  var lighty = 0.0
  var lightz =-1.0
  var bgColorSet1 = {"x":0,"y":0,"z":0}
  var bgColorSet2 = {"x":0,"y":0,"z":0}
  var value_tran_num = 1 / 2560 
  var color_tran_num = 1 / 256
  var enableLightning = true
  var checkState = false
  var setIsovalueNeeded = true
  var setBoundingBoxNeeded = true
  var setRescaleSceneNeeded = true
  var scalevalue = 0.0
  var clearViewPositionNeeded = true
  var cutxCanvas = document.getElementById(cutxCanvas)
  var cutyCanvas = document.getElementById(cutyCanvas)

  return {
    controlConnectionUri: '',
    onMove: function (e) {
      if (isRotating) {
        //calculate deltas. mouse movement to the right and up is positive
        if (e.type === 'touchmove') {
          deltaX = e.originalEvent.touches[0].pageX - lastX
          deltaY = lastY - e.originalEvent.touches[0].pageY

          lastX = e.originalEvent.touches[0].pageX
          lastY = e.originalEvent.touches[0].pageY
          
          
        }
      }
    }
  }
})()



export default TRI_Frontend