import React from 'react';
import Hero1 from '../../Components/Banner/Hero1';
import { MotionSection } from '../../Components/Common/MotionWrappers';
import SectionTitle from '../../Components/Common/SectionTitle';
import Image from 'next/image';

export const metadata = {
  title: 'Careers - Join Our Team | Virtual Sys Technologies',
  description: 'Join Virtual Sys Technologies and be part of a dynamic team building innovative digital solutions. Explore career opportunities in software development, design, and technology.',
  keywords: 'careers, jobs, software development jobs, IT careers, offshore development jobs, technology careers India',
  openGraph: {
    title: 'Careers - Virtual Sys Technologies',
    description: 'Join our team and build the future of digital products.',
    url: 'https://virtualsys.com/careers',
    type: 'website',
  },
};

const Careers = () => {
    const jobOpenings = [
        {
            title: 'Senior Full Stack Developer',
            department: 'Development',
            location: 'India (Remote)',
            type: 'Full-time',
            description: 'We are looking for an experienced Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies.',
            requirements: [
                '5+ years of experience in full-stack development',
                'Proficiency in React, Node.js, and TypeScript',
                'Experience with cloud platforms (AWS/Azure)',
                'Strong problem-solving skills'
            ]
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'India (Remote)',
            type: 'Full-time',
            description: 'Join our design team to create beautiful and intuitive user experiences. You will work on various projects from concept to implementation.',
            requirements: [
                '3+ years of UI/UX design experience',
                'Proficiency in Figma, Adobe XD, or Sketch',
                'Strong portfolio showcasing design skills',
                'Understanding of user-centered design principles'
            ]
        },
        {
            title: 'DevOps Engineer',
            department: 'Operations',
            location: 'India (Remote)',
            type: 'Full-time',
            description: 'We need a DevOps Engineer to help us build and maintain our infrastructure, automate deployments, and ensure system reliability.',
            requirements: [
                '4+ years of DevOps experience',
                'Experience with Docker, Kubernetes, CI/CD',
                'Knowledge of cloud infrastructure (AWS/Azure/GCP)',
                'Strong scripting skills (Bash, Python)'
            ]
        },
        {
            title: 'QA Engineer',
            department: 'Quality Assurance',
            location: 'India (Remote)',
            type: 'Full-time',
            description: 'Join our QA team to ensure the highest quality of our software products through comprehensive testing and quality assurance processes.',
            requirements: [
                '3+ years of QA experience',
                'Experience with automated testing tools',
                'Knowledge of testing methodologies',
                'Attention to detail and analytical thinking'
            ]
        },
        {
            title: 'Project Manager',
            department: 'Management',
            location: 'India (Remote)',
            type: 'Full-time',
            description: 'We are seeking an experienced Project Manager to lead our development teams and ensure successful project delivery.',
            requirements: [
                '5+ years of project management experience',
                'PMP or Agile certification preferred',
                'Strong communication and leadership skills',
                'Experience with Jira, Slack, and project management tools'
            ]
        },
        {
            title: 'Business Analyst',
            department: 'Business',
            location: 'India (Remote)',
            type: 'Full-time',
            description: 'Join our team as a Business Analyst to bridge the gap between business needs and technical solutions.',
            requirements: [
                '3+ years of business analysis experience',
                'Strong analytical and problem-solving skills',
                'Excellent communication skills',
                'Experience with requirement gathering and documentation'
            ]
        }
    ];

    const benefits = [
        {
            icon: 'bi-briefcase',
            title: 'Career Growth',
            description: 'Opportunities for professional development and career advancement'
        },
        {
            icon: 'bi-people',
            title: 'Great Team',
            description: 'Work with talented professionals in a collaborative environment'
        },
        {
            icon: 'bi-calendar-check',
            title: 'Work-Life Balance',
            description: 'Flexible working hours and remote work options'
        },
        {
            icon: 'bi-graph-up',
            title: 'Competitive Salary',
            description: 'Attractive compensation packages and performance bonuses'
        },
        {
            icon: 'bi-heart',
            title: 'Health Benefits',
            description: 'Comprehensive health insurance and wellness programs'
        },
        {
            icon: 'bi-book',
            title: 'Learning & Development',
            description: 'Access to training programs and skill development resources'
        }
    ];

    return (
        <div className='careers-page'>
            <Hero1
                bgImg="/assets/1.png"
                Title="Build Your Career With Us<br> Join <span>Virtual Sys Technologies</span>"
                Content="Join a team of passionate professionals building innovative digital solutions. We offer exciting career opportunities in software development, design, and technology. Grow your career with us!"
            />
            
            <MotionSection className="careers-benefits-area" style={{ padding: '80px 0', background: '#f8f9fc' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" style={{ marginBottom: '60px' }}>
                                <SectionTitle
                                    SubTitle="WHY JOIN US"
                                    Title="Benefits & <span>Perks</span>"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    background: '#fff',
                                    padding: '35px 30px',
                                    borderRadius: '15px',
                                    boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(6, 64, 109, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 30px rgba(0,0,0,0.08)';
                                }}
                                >
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        background: 'linear-gradient(135deg, #06406D 0%, #0a5a8f 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        fontSize: '30px',
                                        color: '#fff'
                                    }}>
                                        <i className={`bi ${benefit.icon}`}></i>
                                    </div>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        color: '#050a1e',
                                        marginBottom: '15px',
                                        fontFamily: 'var(--heading-font)'
                                    }}>{benefit.title}</h3>
                                    <p style={{
                                        color: '#7a7a7a',
                                        fontSize: '15px',
                                        lineHeight: '1.8',
                                        margin: 0
                                    }}>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="careers-jobs-area" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" style={{ marginBottom: '60px' }}>
                                <SectionTitle
                                    SubTitle="OPEN POSITIONS"
                                    Title="Current Job <span>Openings</span>"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="col-lg-6 col-md-12" style={{ marginBottom: '30px' }}>
                                <div style={{
                                    background: '#fff',
                                    border: '1px solid #e4e4e4',
                                    borderRadius: '15px',
                                    padding: '35px 30px',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#06406D';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 64, 109, 0.1)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e4e4e4';
                                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '20px',
                                        flexWrap: 'wrap',
                                        gap: '15px'
                                    }}>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontSize: '22px',
                                                fontWeight: '600',
                                                color: '#050a1e',
                                                marginBottom: '10px',
                                                fontFamily: 'var(--heading-font)'
                                            }}>{job.title}</h3>
                                            <div style={{
                                                display: 'flex',
                                                gap: '15px',
                                                flexWrap: 'wrap',
                                                marginBottom: '15px'
                                            }}>
                                                <span style={{
                                                    background: '#f0f4f8',
                                                    color: '#06406D',
                                                    padding: '5px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '13px',
                                                    fontWeight: '500'
                                                }}>{job.department}</span>
                                                <span style={{
                                                    background: '#f0f4f8',
                                                    color: '#06406D',
                                                    padding: '5px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '13px',
                                                    fontWeight: '500'
                                                }}>{job.location}</span>
                                                <span style={{
                                                    background: '#f0f4f8',
                                                    color: '#06406D',
                                                    padding: '5px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '13px',
                                                    fontWeight: '500'
                                                }}>{job.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{
                                        color: '#555',
                                        fontSize: '15px',
                                        lineHeight: '1.8',
                                        marginBottom: '20px'
                                    }}>{job.description}</p>
                                    <div style={{ marginBottom: '20px' }}>
                                        <h4 style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#050a1e',
                                            marginBottom: '12px',
                                            fontFamily: 'var(--heading-font)'
                                        }}>Key Requirements:</h4>
                                        <ul style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: 0
                                        }}>
                                            {job.requirements.map((req, reqIndex) => (
                                                <li key={reqIndex} style={{
                                                    color: '#7a7a7a',
                                                    fontSize: '14px',
                                                    lineHeight: '1.8',
                                                    marginBottom: '8px',
                                                    paddingLeft: '20px',
                                                    position: 'relative'
                                                }}>
                                                    <i className="bi bi-check-circle-fill" style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        color: '#06406D',
                                                        fontSize: '14px'
                                                    }}></i>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a href={`mailto:info@vstbiz.com?subject=Application for ${job.title}`} style={{
                                        display: 'inline-block',
                                        background: '#06406D',
                                        color: '#fff',
                                        padding: '12px 30px',
                                        borderRadius: '30px',
                                        textDecoration: 'none',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#ff3d00';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#06406D';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="careers-cta-area" style={{ 
                padding: '80px 0', 
                background: 'linear-gradient(135deg, #06406D 0%, #0a5a8f 100%)',
                color: '#fff'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: '#fff',
                                fontFamily: 'var(--heading-font)'
                            }}>Don't See a Role That Fits?</h2>
                            <p style={{
                                fontSize: '18px',
                                marginBottom: '30px',
                                opacity: 0.9,
                                maxWidth: '600px',
                                margin: '0 auto 30px'
                            }}>We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
                            <a href="mailto:info@vstbiz.com?subject=General Application" style={{
                                display: 'inline-block',
                                background: '#fff',
                                color: '#06406D',
                                padding: '15px 40px',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#ff3d00';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#fff';
                                e.currentTarget.style.color = '#06406D';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                            >
                                Send Your Resume
                            </a>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </div>
    );
};

export default Careers;

