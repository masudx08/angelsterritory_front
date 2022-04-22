
const { cookieParser } = require("./functions")
const backendUrl = 'http://localhost:5555/'


const FetchHandler = (prop) => {
  if(prop.method == 'POST'){
    return fetch(backendUrl+prop.url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        token: cookieParser('token')
      },
      body : prop.data
    })
    .then(res=>{
      return res.json()
    })
  }

  if(prop.method == 'GET'){
    return fetch(backendUrl+prop.url, {
      headers: {
        token: cookieParser('token')
      }
    }).then(res=>{
      return res.json()
    })
  }
}

const getCartsFetch = () => {
  return FetchHandler({
    url: 'cart',
    method: 'GET'
  })
}


const upPoolFetch = (id, amount) => {
  return FetchHandler({
    url:'cart/'+id,
    method: 'POST',
    data: JSON.stringify({upPool : amount})
  })
}

const downPoolFetch = (id, data) => {
  return FetchHandler({
    url:'cart/'+id,
    method: 'POST',
    data: JSON.stringify({downPool : data})
  })
}

const loginFetch = data =>  {
  return FetchHandler({
    url : 'user/login',
    method:'POST',
    data : JSON.stringify(data)
  })
}
const registationFetch = data =>  {
  if(data.password !== data.confirmPassword){
    return new Promise((resolve, reject)=>{
      resolve({message:'password & confirm password are not  same'})
    })
  }
  return FetchHandler({
    url : 'user/register',
    method:'POST',
    data : JSON.stringify(data)
  })
}

const getHistoryFetch = () => {
  return FetchHandler({
    url: 'history',
    method: 'GET'
  })
}
const profileFetch = () => {
  return FetchHandler({
    url: 'user',
    method: 'GET'
  })
}


module.exports = {
  getCartsFetch,upPoolFetch, downPoolFetch,
  loginFetch, registationFetch,
  getHistoryFetch,
  profileFetch
}