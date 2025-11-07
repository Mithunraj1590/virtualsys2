import Blog1 from '@/app/Components/Blog/Blog1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team2 from '@/app/Components/Team/Team2';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

export const metadata = {
  title: 'Team - Careers & Join Our Team | Virtual Sys Technologies',
  description: 'Join Virtual Sys Technologies - where innovation meets opportunity. We welcome developers, designers, and professionals who thrive in an agile, collaborative culture. Work on global projects with mentorship and career growth.',
  keywords: 'careers, jobs, join virtual sys technologies, developer jobs, designer jobs, software engineer jobs, remote jobs, IT careers',
  openGraph: {
    title: 'Careers - Join Virtual Sys Technologies Team',
    description: 'Join our team and work on global projects with mentorship and career growth opportunities.',
    url: 'https://virtualsys.com/team',
    type: 'website',
  },
};

const page = () => {
    return (
        <div className='team-page'>
            <BreadCumb Title="Team"></BreadCumb>
            <Team2></Team2>
            <Testimonial2></Testimonial2>
            <Blog1></Blog1>
        </div>
    );
};

export default page;