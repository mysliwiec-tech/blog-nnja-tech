import Link from 'next/link'

const Header = () => (
  <div>
    <div className="separated">
      <Link href="/"><a id="logo">nnja.tech</a></Link>
      <nav>
        <Link href="/">
          <a className="menuLinkStyle">Home</a>
        </Link>
        <Link href="/about">
          <a className="menuLinkStyle">About</a>
        </Link>
      </nav>
    </div>
    <div className="separated">Welcome on NNJA.tech, a blog about cloud, decentralized systems, smart home solutions and Linux.</div>
    <style jsx>{`
      #logo {
        font-size: 32px;
        font-family: 'Major Mono Display', monospace;
        font-weight: bold;
        text-decoration: none;
        color: white;
      }

      .separated {
        padding: 16px 0px;
        border-bottom: 1px solid #DDD;
      }

      .menuLinkStyle {
        margin-left: 20px;
      }

      nav {
        float: right;
        font-family: 'B612 Mono', monospace;
        vertical-align: middle;
        line-height: 35px;
      }

      a:not(#logo) {
        color: white;
        text-transform: uppercase;
      }

      @media screen and (max-width: 400px) {
        nav {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Header
