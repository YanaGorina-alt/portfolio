import './faqs.css'
import questions from './data'
import FAQ from './FAQ'


const FAQs = () => {
  return (
    <section id="faqs">
        <h2>Frequently Asked Questions</h2>
        <p>
        Below are some common questions I typically encounter from potential employers. Simply click to reveal the answers. If you have any additional queries or would like to get in touch, please feel free to send me a message using the contact section.
        </p>
        <div className="container faqs__container">
            {
              questions.map(question => (
                <FAQ key={question.id} faq={question} />
              ))
            }
        </div>
        
    </section>
  )
}

export default FAQs