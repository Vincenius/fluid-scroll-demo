import Head from 'next/head'
import FluidAnimationBG from '../components/FluidBg'
import styled from 'styled-components'

const SMain = styled.main`
  position: relative;
  z-index: 2;
  color: #fff;
  font-family: sans-serif;
`
const SSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SFluidAnimationBg = styled(FluidAnimationBG)`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
`
const SFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  a { color: #fff; }

  div:last-child {
    a { margin: 0 10px; }
  }
`

const Home = () => (
  <div className="container">
    <Head>
      <title>Next-JS WebGL-Fluid Scroll</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SFluidAnimationBg />
    <SMain>
      <SSection>
        <h1>This is a demo for a fluid scroll effect</h1>
      </SSection>
      <SSection>
        <h1>Also works when scrolling up</h1>
      </SSection>
      <SFooter>
        <div>
          Created by <a href="https://wweb.dev/">wweb.dev/</a>
        </div>
        <div>
          <a href="https://github.com/Vincenius/fluid-scroll-demo">GitHub</a>
          <a href="https://github.com/PavelDoGreat/WebGL-Fluid-Simulation">WebGL-Fluid-Simulation</a>
        </div>
      </SFooter>
    </SMain>
  </div>
)

export default Home
