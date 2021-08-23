import './index.css'

const FAQ = props => {
  const {eachQuestion} = props

  return (
    <li className="list-questions">
      <p className="question">{eachQuestion.question}</p>
      <p className="answer">{eachQuestion.answer}</p>
    </li>
  )
}
export default FAQ
