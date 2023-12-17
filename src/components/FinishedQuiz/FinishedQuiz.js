import React from "react";
import classes from './FinishedQuiz.css'
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = props => {
    const succesCount = Object.keys(props.results).reduce((total, key) =>{
        if (props.results[key] === 'success') {
            total ++
        }

        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'material-symbols-outlined',
                       classes[props.results[quizItem.id]] // должен добавлять цвет, но этого не происходит на первом эл-те
                    ]

                    return (
                        <li key ={index}
                        >
                            <syrong>{index +1}</syrong>.&nbsp;
                            {quizItem.question}

                            <div className={cls.join(' ')}>
                                {
                                    props.results[quizItem.id] === 'error' 
                                    ? <span class="material-symbols-outlined"
                            
                                        >close</span>
                                    : <span class="material-symbols-outlined"
                            
                                    >done</span>
                                }
                                
                            </div>
                        </li>
                    )

                }) }  
            </ul>

            <p>Правильно {succesCount} из {props.quiz.length}</p>
            <div>
                <Button onClick = {props.onRetry} type = "primary">Повторить</Button>
                <Link to ='/'>
                <Button type = "success">Перейти в список тестов</Button>
                </Link>
                
            </div>
        </div>
    )
}

export default FinishedQuiz