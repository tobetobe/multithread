self.addEventListener(
  'message',
  function (e) {
    self.postMessage('You said: ' + e.data)
    console.log('event', e)
    for (let i = 0; i < 1000; i++) {
      console.log('now ', new Date())
    }

    self.postMessage('finish')
  },
  false
)
