const url = 'https://regres.in/api/users';
axios.get(url+'/1')
.then((data)=>console.log(data.data))
.catch((error)=>console.log('error: ' +error))
