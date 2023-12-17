import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quizz-b14d2-default-rtdb.europe-west1.firebasedatabase.app/'
})

