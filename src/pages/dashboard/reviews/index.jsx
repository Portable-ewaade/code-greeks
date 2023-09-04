import { Col, Row } from 'react-bootstrap';
import TopSection from '@/components/dashboard/TopSection';
import DashMenu from '@/components/dashboard/DashMenu';
import { dashBg } from '@/components/dashboard/commons/dash-bg';
import Head from 'next/head';
import DashPageTitle from '@/components/dashboard/commons/dash-page-title';
import ReviewCard from '@/components/dashboard/reviews/ReviewCard';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const DashReviews = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <>
        <Head>
          <title>Admin Dashboard || Code Geeks 9ja</title>
        </Head>
        <section style={dashBg}>
          <TopSection />
          <div style={{ background: '#0F0113' }} className="py-5">
            <div className="text-center bx-container mt-5">
              <Row className="pb-3 px-3 px-md-0 justify-content-between">
                <DashMenu />

                {/* Main content */}
                <Col md={8} style={{ overflowY: 'scroll', maxHeight: '700px' }}>
                  <Row className="pb-3 px-3 px-md-0">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'bold',
                        color: '#e08cf9',
                      }}
                    >
                      <h5 className="pb-4 text-start" style={{ color: '#eee' }}>
                        Welcome to the Admin Dashboard (Student Reviews)
                      </h5>
                      <Link href="/dashboard/reviews/add-review">Add New Post</Link>
                    </div>
                    <ReviewCard />
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default DashReviews;
