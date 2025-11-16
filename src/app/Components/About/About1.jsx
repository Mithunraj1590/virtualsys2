import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { MotionSection } from '../Common/MotionWrappers';

const About1 = ({MainImg,ImgTitle,SubTitle,Title,Content,listTitle,BottomText,BtnUrl,BtnText}) => {
    return (
        <MotionSection className="about-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-lg-6">
                            <div className="about-thumb">
                                <Image src={MainImg} alt="img" width={636} height={560}   />
                                <div className="about-shape"></div>
                                {/* <h4 className="about-title">{ImgTitle}</h4> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">{SubTitle}</h5>
                                <h1 className="section-main-title">{parse(Title)}</h1>
                                <p className="section-title-descr">{Content}</p>
                            </div>
                            <div className="about-text">
                                <p>{BottomText}</p>
                            </div>
                            <div className="main-btn">
                                <Link href={BtnUrl}>
                                {BtnText}
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>
    );
};

export default About1;