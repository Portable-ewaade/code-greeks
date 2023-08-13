import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
  return (
   <section className='mb-4'>
     <div className='container'>
     <nav className="navbar navbar-expand-lg pt-2">
     <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="../../../assets/logo.png" alt="..." className='img-fluid me-4'
            style={{width:"6rem", height:"3rem"}}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <BiMenu />
        </button>   
     </div>

     <div className="collapse navbar-collapse mt-4 me-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto fs-normal ms-4 ms-md-0 fw-medium ">
            <li className="nav-item me-4 ">
            <Link href="/" class="nav-link text-white active font-weight-600"> HOME
            </Link>
            </li>
            <li className="nav-item me-4 ">
            <Link href="/" class="nav-link text-white active"> ABOUT
            </Link>
            </li>
            <li className="nav-item me-4 ">
            <Link href="/" class="nav-link text-white active"> REVIEW
            </Link>
            </li>
            <li className="nav-item me-4 ">
            <Link href="/" class="nav-link text-white active"> CONTACT
            </Link>
            </li>

           
        </ul>
        <button className="btnn mt-md-0 mt-2" type="submit">
            <a href="/">Get Started </a>
            </button>
            
        </div>
    </nav>
    </div>
   </section>
  )
}

export default Navbar