
const backendUrl = 'http://localhost:5555/'
const getCarts = () => {
  return fetch(backendUrl+'cart').then(res=>{
    return res.json()
  })
}

module.exports = {
  getCarts
}