import Image from "next/image";

const news= () => {
    return ( 
        <section className="review-bg">
            <div className="container">
                <div className="text-center">
                <button className="btnn2 mt-md-0 mt-md-5 px-3 py-2" type="submit">
                    <a className="text-white fs-small fw-bold ">NEWS FOR YOU</a>
                 </button>
                </div>

                <div className="row pb-5 mt-5 ps-md-5">
                    <div className="col-md-6">
                        <div className="card bg-transparent px-md-5 px-4 border card-border rounded-3 news-card" style={{width: "27rem"}}>
                        <Image src="/assets/trainer4.png" width="320" height="298" alt="..." className="mt-3"/>
                        <div class="card-body">
                            <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                                <a className="text-white fs-small fw-bold ">Devops </a>
                            </button>
                            <p className="fs-small text-white mt-3">GitOps vs DevOps – What’s the difference?</p>
                            </div>
                        </div>    
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="card bg-transparent px-md-5 px-4 border card-border rounded-3 news-card" style={{width: "27rem"}}>
                        <Image src="/assets/trainer3.png" width="320" height="298" alt="..." className="mt-3"/>
                        <div class="card-body">
                            <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                                <a className="text-white fs-small fw-bold ">Devops </a>
                            </button>
                            <p className="fs-small text-white mt-3">GitOps vs DevOps – What’s the difference?</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default news;  