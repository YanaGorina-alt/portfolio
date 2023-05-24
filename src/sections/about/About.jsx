import './about.css'
import AboutImage from '../../assets/about.png'
import CV from '../../assets/cv.pdf'
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'


const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Hello, I'm Yana Gorina, a recent graduate from a coding bootcamp with a focus on the MERN stack. I enjoy creating dynamic and user-friendly web applications and have a strong foundation in JavaScript. With expertise in MERN technologies, I'm eager to contribute to innovative projects and showcase my software development skills.
          </p>
          {/* <p>
          As a recent bootcamp graduate, I'm enthusiastic about applying my newly acquired skills to projects. I thrive on learning, problem-solving, and making a tangible impact as a software developer. With my knowledge of the MERN stack and a passion for continuous improvement, I'm excited to contribute to the software development industry and take on new challenges.
          </p> */}
          <a href={CV} download className='btn primary'>Download CV <HiOutlineDocumentDownload/></a>
        </div>
      </div> 
  

    </section>
  )
}

export default About