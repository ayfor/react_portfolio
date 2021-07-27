const Resume = () => {
    return (
        <div className="container">
            <div className="list-group my-3" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" href={process.env.PUBLIC_URL + '/assets/Joshua Stubbington Resume.pdf'} download>Download Resume</a>
            </div>
            <ul className="list-group my-3">
                <li className="list-group-item list-group-item-dark">Skills</li>
                <li className="list-group-item">Full Stack Development</li>
                <li className="list-group-item">MERN Stack</li>
                <li className="list-group-item">Object-Oriented Programming</li>
                <li className="list-group-item">Project Management</li>
            </ul>
            <ul className="list-group my-3">
                <li className="list-group-item list-group-item-info">Front-End Proficiencies</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Angular</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">Bootstrap</li>
            </ul>
            <ul className="list-group my-3">
                <li className="list-group-item list-group-item-primary">Back-End Proficiencies</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">PostgreSQL</li>
            </ul>
        </div> 
    );
}
 
export default Resume;