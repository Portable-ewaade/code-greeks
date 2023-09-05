import { Col, Row } from 'react-bootstrap';
import TopSection from '@/components/dashboard/TopSection';
import DashMenu from '@/components/dashboard/DashMenu';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  console.log('Session:', session);

  if (session.status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <section
        style={{
          backgroundImage: "url('../../../assets/review-bg.jpg')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <TopSection />
        <div style={{ background: '#0F0113' }} className="py-5">
          <div className="text-center bx-container mt-5">
            <Row className="pb-3 px-3 px-md-0 justify-content-between">
              <DashMenu />

              {/* Main content */}
              <Col md={8} style={{ overflowY: 'scroll', maxHeight: '700px' }}>
                <Row className="pb-3 px-3 px-md-0">
                  <h5 className="pb-4 text-start" style={{ color: '#eee' }}>
                    Welcome to the Admin Dashboard (Dashboard)
                  </h5>
                  <Col md={4} className="mb-3 text-white">
                    <div className="dashCard">
                      <div
                        className=""
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'start',
                          alignItems: 'start',
                        }}
                      >
                        <div className="text-dark fw-bold py-2">Total Registered Students</div>
                        <div className="text-white fs-xlarge fw-bold ">65</div>
                      </div>
                      <Image src="/assets/icons/profile.png" width={50} height={50} alt="Code Geeks 9ja" />
                    </div>
                  </Col>
                  <Col md={4} className="mb-3 text-white">
                    <div className="dashCard">
                      <div
                        className=""
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'start',
                          alignItems: 'start',
                        }}
                      >
                        <div className="text-dark fw-bold py-2">Total Registered Students</div>
                        <div className="text-white fs-xlarge fw-bold ">65</div>
                      </div>
                      <Image src="/assets/icons/profile.png" width={50} height={50} alt="Code Geeks 9ja" />
                    </div>
                  </Col>
                  <Col md={4} className="mb-3 text-white">
                    <div className="dashCard">
                      <div
                        className=""
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'start',
                          alignItems: 'start',
                        }}
                      >
                        <div className="text-dark fw-bold py-2">Total Registered Students</div>
                        <div className="text-white fs-xlarge fw-bold ">65</div>
                      </div>
                      <Image src="/assets/icons/profile.png" width={50} height={50} alt="Code Geeks 9ja" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
};

export default Dashboard;
