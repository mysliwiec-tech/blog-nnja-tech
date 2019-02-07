import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => (
  <div className="layout">
    <Header />
    {props.children}
    <Footer />
    <style global jsx>{`
      body {
        margin: 0px;
        background-color: #222;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 20px;
        max-width: 650px;
        margin: auto;
        font-family: 'Overpass Mono';
        color: white;
      }
    `}</style>
  </div>
)

export default Layout
