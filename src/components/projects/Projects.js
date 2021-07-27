import Project from './project'

let projectsArray = [
    {
        title:"Tech Blog",
        description:"This application is built using Handlebars, Express and MySQL. It enables a user to Sign Up with a new account or Login with an existing account to create Posts on the User's Dashboard page. ",
        link:"https://github.com/ayfor/tech_blog",
        img:"techblog_screenshot.png"
    }, 
    {
        title:"E-Commerce Backend",
        description:"This application enables users to create and maintain a database of online products.The application enables a user to Create, Read, Update and Delete entries from the three main tables including Products, Categories and Tags through various API endpoints.",
        link:"https://github.com/ayfor/ecommerce_back_end",
        img:"ecommerce_screenshot.png"
    }, 
    {
        title:"Employee Tracker",
        description:"This application enables a user to create their own employee tracker using a basic Node.js application. A user is able to add and view employees, roles, and departments. A user is also able to update an employee's role. All data that the user has entered or manipulated is continually synced to a local MySQL database for easy integration with other systems.",
        link:"https://github.com/ayfor/employee_tracker",
        img:"employee_screenshot.png"
    }, 
    {
        title:"Leftover Variables",
        description:"This application was completed alongside a team of 5 developers with the goal of allowing users to log the food present in thier pantry. This list can then be used to search recipes based on your current leftovers in an effort to reduce food waste and promote a waste free lifestyle.",
        link:"https://ayfor.github.io/left-over-variables/",
        img:"leftovervars_screenshot.png"
    }, 
]

const Projects = () => {
    return ( 
        <div className="container">
          {projectsArray.map((project) => (
              <Project project={project}/>
          ))}  
        </div>
    );
}
 
export default Projects;