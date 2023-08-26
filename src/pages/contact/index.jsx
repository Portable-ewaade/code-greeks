import { Navbar } from '@/components/common';
// import SectionOne from '@/components/contact/SectionOne';
import SectionOne from '@/components/contact/SectionTwo';
import RegsiterForm from '@/components/register/RegsiterForm';

const index = () => {
  return (
    <section
    style={{
      backgroundImage: "url('../../../assets/home-banner.png')",
      backgroundColor: '#121212',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Navbar />
    {/* <SectionOne /> */}
    <SectionOne />

    <RegsiterForm />
  </section>
  )
}

export default index