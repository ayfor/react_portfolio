const ContactForm = () => {
    return ( 
        <div className="container">
            <form className="form-horizontal" action="">
                <legend className="text-center">Contact us</legend>
        
                <div className="form-group">
                <label className="col-md-3 control-label" for="name">Name</label>
                <div className="col-md-9">
                    <input id="name" name="name" type="text" placeholder="Name" className="form-control"/>
                </div>
                </div>
        
                <div className="form-group">
                <label className="col-md-3 control-label" for="email">E-mail</label>
                <div className="col-md-9">
                    <input id="email" name="email" type="text" placeholder="Email" className="form-control"/>
                </div>
                </div>
        
                <div className="form-group">
                <label className="col-md-3 control-label" for="message">Message</label>
                <div className="col-md-9">
                    <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                </div>
                </div>
        
                <div className="form-group">
                <div className="col-md-12 text-right my-2">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                </div>
                </div>
            </form>
        </div>
     );
}
 
export default ContactForm;