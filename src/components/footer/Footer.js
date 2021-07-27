import './Footer.css'

const Footer = () => {
    return ( 
        <footer class="footer mt-auto py-3 bg-dark d-flex" id="contact-info">
            <ul>
                <li>Email: <a href="mailto:josh.a.stubbington@gmail.com">josh.a.stubbington@gmail.com</a></li>
                <li>
                    <div>Phone Number: (123) 456-7890</div>
                </li>
                <li>
                    <a href="https://github.com/ayfor">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joshua-stubbington/?originalSubdomain=ca">LinkedIn</a>
                </li>
            </ul>
        </footer>
    );
}
 
export default Footer;