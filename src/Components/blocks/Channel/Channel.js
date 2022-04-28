import React from 'react'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import "./Channel.css"

const Channel = () => {
  return (
    <div className="cmain-wrapper">
        <Navbar />
        <div className="ccontainer-main">
            <div className="ccontainer">
            <h1>National Channels</h1>
                <div className="one">
                    <figure className="back">
                        <h3 className="chh3">101 Great Goals</h3>
                        <i className="fas fa-rss"></i>
                    </figure>
                    <img src="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.18169-9/27336825_944376395710748_2329846606667251935_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ezXSszW9jhgAX-TufGK&_nc_ht=scontent.fisb1-2.fna&oh=00_AT-pK8feyuWqmBqUktn-jgefNV-fymv64Kvg3fE3mzFTag&oe=625EB863" alt="" />
                </div>
                <div className="two">
                    <figure className="back">
                        <h3 className="chh3">TEAMtalk</h3>
                        <i className="fas fa-rss"></i>
                    </figure>
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1499440455/ifdhsj9tf8nneuzwgw5b.png" alt="" />
                </div>
                <div className="three">
                    <figure className="back">
                        <h3 className="chh3">Soccer News</h3>
                        <i className="fas fa-rss"></i>
                    </figure>
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <h1>International Channels</h1>
                {/* <div className="four">
                    <figure className="back">
                        <h3 className="chh3">Style</h3>
                        <i className="fas fa-rss"></i>
                    </figure>
                    <img src="https://i.pinimg.com/564x/27/dd/82/27dd82fa862a4744b6ddd12ade6ee7e9.jpg" alt="" />
                </div>
                <div className="five">
                    <figure className="back">
                        <h3 className="chh3">Science</h3>
                        <i className="fas fa-rss"></i>
                    </figure>
                    <img src="https://media.istockphoto.com/vectors/chemical-logo-for-science-or-research-vector-id1056303534?k=20&m=1056303534&s=170667a&w=0&h=nPKe6IgQyI9Mhj2ErVIgeSdXUm_Mb1tcTyhW03qHV9A=" alt="" />
                </div>
                <div className="six">
                    <figure className="back">
                        <h3 className="chh3">Business</h3>
                        <i className="fas fa-rss"></i>
                    </figure>
                    <img src="https://clipartstation.com/wp-content/uploads/2018/09/aktien-clipart-1.jpg" alt="" />
                </div> */}
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Channel