import './contact.css'
import contacts from './data'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Feel free to send me a message using any of the links provided below!
      </p>
      <div className="container contact__container">
        {
        contacts.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact