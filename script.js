import axios from 'axios'

axios.get('https://randomuser.me/api/')
  .then(function (response) {
    console.log(response);
  })



