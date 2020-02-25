import Head from 'next/head'
import FluidAnimation from '../components/FluidBg'

const Home = () => (
  <div className="container">
    <Head>
      <title>Next-JS WebGL-Fluid Scroll</title>
      <link rel="icon" href="/favicon.ico" />
      <style>
        {`body {
          margin: 0;
          height: 300vh;
        }`}
      </style>
    </Head>

    <main>
      <FluidAnimation
        style={{
          position: 'fixed',
          height: '100vh'
        }}
      />
    </main>
  </div>
)

export default Home
