import BreadCumb from '@/app/Components/Common/BreadCumb';
import Projecr3 from '@/app/Components/Project/Projecr3';
import React from 'react';

export const metadata = {
  title: 'Projects - Case Studies & Portfolio | Virtual Sys Technologies',
  description: 'Explore our portfolio of successful projects and case studies. Virtual Sys Technologies has delivered 150+ projects across SaaS platforms, smart mobility, workforce management, retail & e-commerce, and enterprise solutions.',
  keywords: 'software development projects, case studies, portfolio, SaaS development, mobile app projects, web development projects, enterprise solutions',
  openGraph: {
    title: 'Projects - Virtual Sys Technologies Portfolio',
    description: 'Explore 150+ successful projects delivered across various industries and technologies.',
    url: 'https://virtualsys.com/project',
    type: 'website',
  },
};

const page = () => {
    return (
        <div className='project-page'>
            <BreadCumb Title="Project"></BreadCumb>
            <Projecr3></Projecr3>
        </div>
    );
};

export default page;