async function platform(){
  return new Promise(resolve => {
    if(typeof uni !== 'undefined' && typeof uni.getSystemInfo !== 'undefined'){
      uni.getSystemInfo({
        success:(res)=>{
          resolve(res.uniPlatform)
        },
        fail:(err)=>{
          resolve('web')
        }
      })
    } else {
      resolve('html5')
    }
  })
}

export default platform()
