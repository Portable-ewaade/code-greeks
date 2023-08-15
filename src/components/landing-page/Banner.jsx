import Image from "next/image";
import 'animate.css';

const banner = () => {
    return ( 
        <section className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 animate__animated animate__zoomIn ">
                        <Image src="/assets/banner-1.png" width="470" height="450" className="img-fluid" alt="..."/>

                        <button className="btn text-white fs-small px-4 py-2 ms-md-5 mb-5 m-3" style={{background: "#B700EE"}}>Get Started</button>
                    </div>

                    <div className="col-md-6 mt-md-5 animate__animated animate__slideInRight m-3 m-md-0">
                        <h4 className="fw-bold">Master Coding Through <br />
                            Proper Mentoring:
                        </h4>
                        <p className="fs-small mb-4">Access  a variety of effective private trainings <br />
                        and personified learning experiences <br />
                        that are designed just for you.</p>

                        <div className="border card-border rounded-5 px-3 pt-3 fs-small mt-md-5 text-start" style={{width: "20rem", height: "auto"}}>
                            <p>Developing fullstack web and mobile application using industry required modern tools, libraries and languages such as ReactJS, VueJS, NodeJS, React native, Flutter, MongoDB from absolute beginners to industry required advanced </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default banner;
