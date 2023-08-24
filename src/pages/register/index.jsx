import { Navbar } from '@/components/common';
import RegisterBanner from '@/components/register/RegisterBanner';
import RegsiterForm from '@/components/register/RegsiterForm';

const RegisterPage = () => {
  return (
    <>
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
        <RegisterBanner />
        {/* <TestForm /> */}
        <RegsiterForm />
      </section>
    </>
  );
};

export default RegisterPage;