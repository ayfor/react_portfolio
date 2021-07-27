import './Project.css'

const Project = (props) => {
    return ( 
        <div className="my-3 card text-white bg-dark mb-3 d-flex">
            <div className="card-header">{props.project.title}</div>
            <div className="card-body custom-center">
                <div className="px-5 d-flex card-img-top custom-center">
                    <a className="" href={props.project.link}>
                        <img  src={process.env.PUBLIC_URL + '/assets/images/' + props.project.img} alt="projectimage"/>
                    </a>
                </div>
                <p className="px-5 container">{props.project.description}</p>
            </div>
        </div>
    );
}
 
export default Project;