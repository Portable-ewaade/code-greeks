import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const review = () => {
    return ( 
        <div className=" review-bg">
            <div className="position-relative py-5">
                <div className="container py-5">
                    <div className=" review-card rounded-4  position-absolute top-0 start-50 translate-middle" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <Image src="/assets/trainer1.png" alt="..." width="173" height="200"  className="img-fluid"  />
                                    </div>
                                    <div className="col">
                                    <Image src="/assets/trainer2.png" alt="..." width="175" height="200"  className="img-fluid"  />
                                    </div>
                                </div>                  
                            </div>
                            <div className="col-md-6 p-sm-5 my-5 mb-5">
                            <button className="btnn2 mt-md-0 mt-5" type="submit">
                            <a className="text-white fs-small fw-bold ">WHY CHOOSE US </a>
                            </button>
                                <h5 className=" mt-3">Best And Experienced Trainers</h5>
                                <p className="fs-small">With us, you get the ultimate coding training and proper mentorship and guidance from some of the best and experienced hands in the business.</p>

                                <a href="/" className="fs-small footer-text-color mt-2 ">Read more</a>                     
                            </div>
                        </div>
                    </div>            
                </div>              
            </div>

               
                <div className="container pt-5 mt-5 pb-5">
                <div className="row mt-5 mt-md-0 mb-5 ">
           <div className="text-center mt-md-0 mt-5">
                <div className="my-4">
                    <div className="pt-5 pt-md-0">
                    <h6 className="fs-normal fw-bold mt-5 pt-5">STUDENT REVIEWS</h6>
                    <h6 className="fs-normal fw-bold mb-5 mt-4">4.5 out of 5 |  5,281 reviews</h6>
                    </div>
                </div>

                </div>
                    <div className="col-md-4 mb-3 text-center ">
                        <div className="card border border-4 bg-transparent  py-3 py-md-4 text-white">
                            <div className="card-title">
                                <h6 className="fs-small">FRONTEND DEVELOPMENT</h6>
                            </div>
                            <p className="fs-small footer-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">Kehinde Adetule - Frontend</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 text-center ">
                        <div className="card border border-4 bg-transparent p-4 text-white">
                            <div className="card-title">
                                <h6 className="fs-small">BACKEND DEVELOPMENT</h6>
                            </div>
                            <p className="fs-small footer-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">Ibrahim Jimoh - Frontend</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 text-center ">
                        <div className="card border border-4 bg-transparent p-4 text-white">
                            <div className="card-title">
                                <h6 className="fs-small">MOBILE APP DEVELOPMENT</h6>
                            </div>
                            <p className="fs-small footer-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">Ibrahim Jimoh - Frontend</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <a href="/" className="fs-normal mt-2 ">SEE MORE <BsArrowRight /> </a>
                    </div>
                   
                </div>

           </div>
         </div>

           
     );
}
 
export default review;