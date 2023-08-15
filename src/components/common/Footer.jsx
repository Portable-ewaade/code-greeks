import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className=''  style={{
        backgroundImage: "url('../../../assets/footer-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center' }}>

        <div className='pt-5 '>
        <div className="container ">
            <div className="row mt-3 ">
                <div className="col-6 col-md-3">
                    <ul> <h5> Company</h5></ul>
                    <div className="footer-text-color">
                    <a href="/">
                        <ul> About</ul>
                    </a>
                    <a href="/">
                        <ul>Our Services</ul>
                    </a>
                    <a href="/">
                        <ul>Gallery</ul>
                    </a>
                    </div>                  
                </div>
                {/* <hr className='d-md-none mt-4'/> */}

                <div className="col-6 col-md-3">
                <ul> <h5>Students</h5></ul>
                <div className="footer-text-color">
                <a href="/">
                        <ul>Student Reviews</ul>
                    </a>
                    <a href="/">
                        <ul>Get Started</ul>
                    </a>
                </div>
                    
                </div>
                {/* <hr className='d-md-none mt-4'/> */}

                <div className="col-6 col-md-3">
                <ul> <h5>Explore</h5></ul>
                <div className="footer-text-color">
                <a href="/">
                        <ul>Tech News</ul>
                    </a>
                    <a href="/">
                        <ul>Tech Careers</ul>
                    </a>
                    <a href="/">
                        <ul>Courses </ul>
                    </a>
                </div>
                   
                </div>
                {/* <hr className='d-md-none mt-4'/> */}

                <div className="col-6 col-md-3">
                <ul> <h5>Legal & Help</h5></ul>
                <div className="footer-text-color">
                <a href="/">
                        <ul>Privacy Policy</ul>
                    </a>
                    <a href="/">
                        <ul>Terms & Conditions</ul>
                    </a>
                    <a href="/">
                        <ul>Contact Us</ul>
                    </a>
                </div>
                    
                </div>
                <div className="col-md-11 ms-md-4">
                    <hr />
                </div>
            </div>
        </div>
    
            <div className="container text-center pt-4 pb-5">
                <img src="../../../assets/logo.png" alt="..." className='img-fluid mb-1' style={{width: "8rem", height: "auto"}}/>
                <h6 className='letter-space mb-2'> CODE GEEKS 9JA</h6>
                <p className='fs-small'>Copyright &copy; 2023, Code Geeks 9ja. All rights reserverd. </p>

                <div>
                    <a href="/" className='mx-3'>
                    < BsInstagram />
                    </a>
                    <a href="/">
                    < BsTwitter />
                    </a>
                    <a href="/" className='mx-3'>
                    < BsLinkedin />
                    </a>
                </div>
            </div>
        </div>
    </section>
   
  )
}

export default Footer

{/* <a href="#" className="position-absolute position-fixed bottom-0 end-0 top-25 m-4 arrow-up">
<i className="bi bi-arrow-up-circle h2"></i>
</a> */}