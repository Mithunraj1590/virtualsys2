"use client"
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { MotionSection, MotionStagger } from "../Common/MotionWrappers";

const Process5Steps = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const steps = [
        {
            number: "01",
            title: "Discuss",
            content: "Define project scope, stack, and KPIs."
        },
        {
            number: "02",
            title: "Shortlist",
            content: "Match you with pre-screened talent."
        },
        {
            number: "03",
            title: "Deploy",
            content: "Secure onboarding with infrastructure setup."
        },
        {
            number: "04",
            title: "Execute",
            content: "Agile sprints with weekly reviews."
        },
        {
            number: "05",
            title: "Scale",
            content: "Expand team capacity as your needs grow."
        }
    ];

    return (
        <MotionSection className="process-5steps-area" style={{padding: '100px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="OUR PROCESS"
                                Title="From Requirement to Success - Our 5-Step Process"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <MotionStagger className="row justify-content-center">
                    {steps.map((step, index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-12">
                            <div className="process-step-box text-center" style={{marginBottom: '30px'}}>
                                <div className="process-step-number" style={{
                                    fontSize: '48px',
                                    fontWeight: 'bold',
                                    color: '#06406D',
                                    marginBottom: '15px'
                                }}>
                                    {step.number}
                                </div>
                                <h4 style={{fontSize: '20px', marginBottom: '10px', color: '#050a1e'}}>
                                    {step.title}
                                </h4>
                                <p style={{fontSize: '14px', color: '#7a7a7a'}}>
                                    {step.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </MotionStagger>
            </div>
        </MotionSection>
    );
};

export default Process5Steps;

