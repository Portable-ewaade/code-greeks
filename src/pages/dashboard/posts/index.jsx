import { Col, Row } from 'react-bootstrap';
import TopSection from '@/components/dashboard/TopSection';
import DashMenu from '@/components/dashboard/DashMenu';
import PostCard from '@/components/dashboard/posts/PostCard';
import Link from 'next/link';
import { dashBg } from '@/components/dashboard/commons/dash-bg';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const DashboardBlogPosts = () => {
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
                        Welcome to the Admin Dashboard (Blog posts)
                      </h5>
                      <Link href="/dashboard/posts/add-post">Add New Post</Link>
                    </div>
                    <PostCard />
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

export default DashboardBlogPosts;
