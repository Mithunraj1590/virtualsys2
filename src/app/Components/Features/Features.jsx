import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import data from '../../Data/feature.json'

const Features = () => {
    return (
        <div className="feature-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" style={{marginBottom: '50px'}}>
                                <SectionTitle
                                    SubTitle="WHY CHOOSE US"
                                    Title="Why Businesses Trust Us"
                                ></SectionTitle>
                            </div>
                        </div>
                    </div>
                    <div className="row about align-items-center">
                        <div className="feature-box">
                        {data.map((item, i) => (
                            <div key={i} className="feature-sinble-single-box">
                                <div className="feature-icon">
                                    <Image src={item.img} alt="img" width={36} height={36}   />
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{item.title}</h3>
                                    <p className="feature-text">{item.desc}</p>
                                </div>
                            </div>
                             ))}

                        </div>
                    </div>
                </div>	
            </div>
    );
};

export default Features;