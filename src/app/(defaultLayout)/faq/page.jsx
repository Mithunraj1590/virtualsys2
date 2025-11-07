import BreadCumb from '@/app/Components/Common/BreadCumb';
import Faq from '@/app/Components/Faq/Faq';
import React from 'react';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | Virtual Sys Technologies',
  description: 'Find answers to frequently asked questions about Virtual Sys Technologies services, offshore development teams, dedicated IT staffing, managed software teams, and our development process.',
  keywords: 'FAQ, frequently asked questions, offshore development FAQ, IT staffing questions, software development FAQ, virtual sys technologies FAQ',
  openGraph: {
    title: 'FAQ - Virtual Sys Technologies',
    description: 'Find answers to frequently asked questions about our services and development process.',
    url: 'https://virtualsys.com/faq',
    type: 'website',
  },
};

const page = () => {
    return (
        <div className='faq-page'>
            <BreadCumb Title="Faq"></BreadCumb>
            <Faq></Faq>
        </div>
    );
};

export default page;