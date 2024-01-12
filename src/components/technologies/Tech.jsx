import './tech.scss';

const Tech = () => {
  return (
    <section id="technologies" >
      <div className="container" >
      <div className="row" >
      <h2 className="title" >
            Technology Stack
          </h2>
      <div className="language-list" >
            <Language name="Java" imgSrc="./javaicon.png" />
            <Language name="HTML" imgSrc="./htmlicon.png" />
            <Language name="CSS" imgSrc="./cssicon.png" />
            <Language name="JavaScript" imgSrc="./jsicon.png" />
            <Language name="BootStrap" imgSrc="./Bootstrap_logo.svg.png" />
            <Language name="MongoDb" imgSrc="./mongodb_logo.png" />
            <Language name="ExpressJS" imgSrc="./express.png" />
            <Language name="React" imgSrc="./react.png" />
            <Language name="NodeJS" imgSrc="./nodejs-logo.png" />
            <Language name="Redux" imgSrc="./redux.svg" />
            <Language name="SCSS" imgSrc="./sass.png" />
            <Language name="Tailwind CSS" imgSrc="./tailwind.png" />
      </div>
      </div>
      </div>
    </section>
    );
};

const Language = ({ name, imgSrc }) => {
    return (
      <div className="language">
        <figure className="lang-imgwrapper">
          <img className="tech-img" src={imgSrc} alt={name} />
        </figure>
        <span className="lang-name">{name}</span>
      </div>
    );
  };

export default Tech;