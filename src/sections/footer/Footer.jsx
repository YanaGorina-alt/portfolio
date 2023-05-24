import './footer.css'
import links from './data'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer