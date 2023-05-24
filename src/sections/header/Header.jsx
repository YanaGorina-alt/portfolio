import "./header.css"
import data from './data'
import HeaderImage from '../../assets/header.png'

const Header = () => {
  return (
    <header id = "header">
      <div className='container header__container'>
        {/* <div className="header__profile">
          <img src={HeaderImage}  alt='Header Portait'/>
        </div> */}
        <h3>Yana Gorina</h3>
        <p>
        Welcome to my software developer portfolio! I'm a passionate and dedicated developer specializing in innovative solutions. With expertise in diverse programming languages and technologies, I deliver efficient and scalable applications. My portfolio showcases my skills, experience, and projects, highlighting my problem-solving abilities and attention to detail. I stay updated with the latest industry trends, continuously expanding my knowledge to provide cutting-edge solutions. Explore my portfolio and see how I can contribute to your software development endeavors
        </p>
        <div className="header__cta">
          <a href='#contact' className="btn primary">Let's Talk</a>
          <a href='#portfolio' className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key ={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
    
  )
}

export default Header