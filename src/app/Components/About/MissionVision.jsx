import SectionTitle from "../Common/SectionTitle";
import parse from 'html-react-parser';

const MissionVision = () => {
    return (
        <div className="mission-vision-area" style={{padding: '100px 0', background: '#f4f4f4'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center" style={{marginBottom: '60px'}}>
                            <SectionTitle
                                SubTitle="OUR FOUNDATION"
                                Title="Mission, Vision & <span>Core Values</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="mission-box" style={{
                            background: '#fff',
                            padding: '40px',
                            borderRadius: '15px',
                            height: '100%',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                        }}>
                            <div className="mission-icon" style={{
                                width: '70px',
                                height: '70px',
                                background: '#ff3b00',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '25px'
                            }}>
                                <i className="bi bi-bullseye" style={{fontSize: '30px', color: '#fff'}}></i>
                            </div>
                            <h3 className="h3" style={{marginBottom: '20px', color: '#050a1e'}}>Mission</h3>
                            <p style={{color: '#7a7a7a', lineHeight: '1.8'}}>
                                To simplify operations and scale innovation by connecting businesses with world-class offshore development talent, secure delivery infrastructure, and agile processes.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="vision-box" style={{
                            background: '#fff',
                            padding: '40px',
                            borderRadius: '15px',
                            height: '100%',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                        }}>
                            <div className="vision-icon" style={{
                                width: '70px',
                                height: '70px',
                                background: '#ff3b00',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '25px'
                            }}>
                                <i className="bi bi-eye" style={{fontSize: '30px', color: '#fff'}}></i>
                            </div>
                            <h3 className="h3" style={{marginBottom: '20px', color: '#050a1e'}}>Vision</h3>
                            <p style={{color: '#7a7a7a', lineHeight: '1.8'}}>
                                To be the most trusted global offshore software partner, enabling organizations to build sustainable, high-performance digital ecosystems.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="values-box" style={{
                            background: '#fff',
                            padding: '40px',
                            borderRadius: '15px',
                            height: '100%',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                        }}>
                            <div className="values-icon" style={{
                                width: '70px',
                                height: '70px',
                                background: '#ff3b00',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '25px'
                            }}>
                                <i className="bi bi-heart" style={{fontSize: '30px', color: '#fff'}}></i>
                            </div>
                            <h3 className="h3" style={{marginBottom: '20px', color: '#050a1e'}}>Core Values</h3>
                            <ul style={{listStyle: 'none', padding: 0, color: '#7a7a7a'}}>
                                <li style={{marginBottom: '10px', lineHeight: '1.8'}}>
                                    <i className="bi bi-check-circle-fill" style={{color: '#ff3b00', marginRight: '10px'}}></i>
                                    Innovation
                                </li>
                                <li style={{marginBottom: '10px', lineHeight: '1.8'}}>
                                    <i className="bi bi-check-circle-fill" style={{color: '#ff3b00', marginRight: '10px'}}></i>
                                    Integrity
                                </li>
                                <li style={{marginBottom: '10px', lineHeight: '1.8'}}>
                                    <i className="bi bi-check-circle-fill" style={{color: '#ff3b00', marginRight: '10px'}}></i>
                                    Reliability
                                </li>
                                <li style={{marginBottom: '10px', lineHeight: '1.8'}}>
                                    <i className="bi bi-check-circle-fill" style={{color: '#ff3b00', marginRight: '10px'}}></i>
                                    Transparency
                                </li>
                                <li style={{marginBottom: '10px', lineHeight: '1.8'}}>
                                    <i className="bi bi-check-circle-fill" style={{color: '#ff3b00', marginRight: '10px'}}></i>
                                    Teamwork
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;

