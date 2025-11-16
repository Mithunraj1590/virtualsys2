import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import data from '../../Data/feature.json'
import { MotionSection, MotionStagger } from '../Common/MotionWrappers';

const Features = () => {
    return (
        <MotionSection className="feature-area">
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
                    <MotionStagger className="row about align-items-center">
                        <div className="feature-box">
                        {data.map((item, i) => (
                            <div key={i} className="feature-sinble-single-box">
                                <div className="feature-icon">
                                    <Image
                                        src={item.img}
                                        alt={`${item.title} icon`}
                                        width={64}
                                        height={64}
                                        style={{ objectFit: 'cover', borderRadius: '18px' }}
                                    />
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{item.title}</h3>
                                    <p className="feature-text">{item.desc}</p>
                                </div>
                            </div>
                             ))}

                        </div>
                    </MotionStagger>
                </div>	
            </MotionSection>
    );
};

export default Features;