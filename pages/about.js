import Head from 'next/head';
import Layout from '../components/MyLayout'

const Index = props => (
    <Layout>
        <Head>
            <title>NNJA.tech - Blog - About</title>
        </Head>
        <div className="post">
            Just me :-) Into exploring decentralized technology and build apps.<br/><br/>
            <picture>
                <img srcset={require(`../public/images/me.jpg?resize&size=650`) + ' 650w,' +
                        require(`../public/images/me.jpg?resize&size=300`) + '300w'} 
                    sizes={"(max-width: 650px) 300px,400px"}
                    src={require(`../public/images/me.jpg?resize&size=650`)}
                />
            </picture>
        </div>
        <style jsx>
            {`
                .post {
                    color: white;
                    margin: 0px;
                    border-bottom: 1px solid #BBB;
                    padding: 40px 0px;
                }
           `}
        </style>
        
    </Layout>
)

export default Index