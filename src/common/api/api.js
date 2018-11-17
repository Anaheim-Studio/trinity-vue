class Api {
  
  static connectWS (url) {

    console.log('connectWS' + ': ' + url)

    let ws = new WebSocket(url)

    console.log(ws)

    ws.onopen = (evt) => {
      let data = {
        "type":"InitRenderer",
        "req":{
          "rid":1,"sid":0,
          "params":{
            "protocol":"tcp.ws",
            "rendertype":"SimpleRenderer",
            "fileid":"UVFData@./Bonsai-SCANLINE-132-lz4.uvf",
            "ioendpoint":"tcp.prefixed:127.0.0.1:6678",
            "streamingparams":{
              "xres":800,
              "yres":800
            }
          }
        }
      }
      ws.send(JSON.stringify(data))
    }
    // ws.onopen()
  }
}

export default Api