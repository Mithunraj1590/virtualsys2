import SectionTitle from "../Common/SectionTitle";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCardStyle2 from "../BlogCard/BlogCardStyle2";
import Link from "next/link";
import { MotionSection, MotionStagger } from "../Common/MotionWrappers";

const Blog1 = () => {
    const featurePost = {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=960&h=640&fit=crop',
        title: 'How Dedicated Tech Teams Accelerate Enterprise Delivery',
        excerpt: 'Discover how offshore squads unlock faster release cycles, resilient architectures, and round-the-clock productivity for global product orgs.',
        author: 'Aisha Rahman',
        date: '24 Oct 2025',
        readTime: '6 min read',
    };

    const secondaryPosts = [
        {
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=640&fit=crop',
            title: 'Design Systems That Keep Scaling With Your Product',
            excerpt: 'A practical playbook for building cohesive UI libraries across distributed teams without sacrificing velocity.',
            author: 'Miguel Costa',
            date: '18 Oct 2025',
            readTime: '4 min read',
        },
        {
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&h=640&fit=crop',
            title: 'From MVP to Enterprise: Governing Microservices Growth',
            excerpt: 'Patterns our architects use to evolve cloud-native platforms responsibly while keeping observability front-and-center.',
            author: 'Priya Nair',
            date: '11 Oct 2025',
            readTime: '5 min read',
        },
    ];

    return (
        <MotionSection className="blog-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="OUR LATEST BLOG"
                                    Title="Exploring Its Potential in<br> Various <span>Industries.</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-right">
                            <div className="main-btn">
                                <Link href="/blog">
                                    VIEW  all post
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <MotionStagger className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <BlogCard1
                            BlogImg={featurePost.image}
                            Title={featurePost.title}
                            Content={featurePost.excerpt}
                            Author={featurePost.author}
                            Date={featurePost.date}
                            ReadTime={featurePost.readTime}
                        ></BlogCard1>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        {secondaryPosts.map((post, index) => (
                            <BlogCardStyle2
                                key={index}
                                BlogImg={post.image}
                                Title={post.title}
                                Content={post.excerpt}
                                Author={post.author}
                                Date={post.date}
                                ReadTime={post.readTime}
                            ></BlogCardStyle2>
                        ))}
                    </div>
                </MotionStagger>
            </div>
        </MotionSection>
    );
};

export default Blog1;