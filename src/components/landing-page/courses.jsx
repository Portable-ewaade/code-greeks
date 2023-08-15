const courses = () => {
    return ( 
        <section style={{
            backgroundImage: "url('../../../assets/banner-bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>

            <div className="container p-5">
                <div className="card text-center">
                    <div className="">
                    <button className="btnn2 mt-md-0 mt-2" type="submit">
                      <a className="text-color fs-small fw-bold">STARTING SOON</a>
                     </button>
                        <h6 className="fs-small fw-bold">Fullstack Web Development <br /> Using MERN Stack</h6>
                        <p className="fs-small">The development journey will take you through mastering fullstack web application development using HTML, CSS, Javascript, ReactJS, Styling Components, NodeJS + Express, MongoDB from absolute zero to hero</p>

                        <div className="row">
                            <div className="col-md-2 col-4">
                                <img src="/assets/html.png" alt="..." />
                            </div>
                            <div className="col-md-2 col-4">
                                <img src="/assets/css.png" alt="..." />
                            </div>
                            <div className="col-md-2 col-4">
                                <img src="/assets/javascript.png" alt="..." />
                            </div>
                            <div className="col-md-2 col-4">
                                <img src="/assets/reactjs.png" alt="..." />
                            </div>
                            <div className="col-md-2 col-4">
                                <img src="/assets/node.png" alt="..." />
                            </div>
                            <div className="col-md-2 col-4">
                                <img src="/assets/mongodb.png" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default courses;