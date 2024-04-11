// 加载远程组件js
function cleanup(script){
  if (script.parentNode) script.parentNode.removeChild(script)
  script.onload = null
  script.onerror = null
  script.type = null
  script = null
}

function scriptLoad(url, type="") {
  const target = document.getElementsByTagName('script')[0] || document.head

  let script = document.createElement('script')
  if(type=='module'){
    script.type = type
  }
  script.src = url
  if(target.localName === 'script'){
    target.parentNode.insertBefore(script, target)
  }else{
    target.appendChild(script)
  }

  return new Promise((resolve, reject) => {
    script.onload = function (e) {
      resolve(true)
      cleanup(script)
    }
    script.onerror = function () {
      reject(new Error('script load failed'))
      cleanup(script)
    }
  })
}

export default scriptLoad
