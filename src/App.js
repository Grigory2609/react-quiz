// можно не писать import  React и похуй
import Layout from './hoc/Layout/Layout';
import {Route, Routes, Navigate} from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path = "/auth" element={<Auth />}/>
        <Route path = "/quiz-creator" element={<QuizCreator />}/>
        <Route path = "/quiz/:id" element={<Quiz />}/>    
        <Route path='*' element={<Navigate to="/" replace /> }   />  {/* адекватный вариант чтоб перенаправить на главную страницу при неверном пути */}
        </Routes>
    </Layout>
  );
}

export default App;
