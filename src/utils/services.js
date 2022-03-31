
const backendUrl = 'http://localhost:5555/'

const FetchHandler = (prop) => {
  if(prop.method == 'POST'){
    return fetch(backendUrl+prop.url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : prop.data
    })
    .then(res=>{
      return res.json()
    })
  }

}

const getCarts = () => {
  return fetch(backendUrl+'cart').then(res=>{
    return res.json()
  })
}

const upPool = (id, data) => {
  return FetchHandler({
    url:'cart/'+id,
    method: 'POST',
    data: JSON.stringify({upPool : data})
  })
}

const downPool = (id, data) => {
  return FetchHandler({
    url:'cart/'+id,
    method: 'POST',
    data: JSON.stringify({downPool : data})
  })
}

const login = data =>  {
  return FetchHandler({
    url : 'user/login',
    method:'POST',
    data : JSON.stringify(data)
  })
}
const registation = data =>  {
  return FetchHandler({
    url : 'user/register',
    method:'POST',
    data : JSON.stringify(data)
  })
}

module.exports = {
  getCarts,upPool, downPool,
  login, registation
}