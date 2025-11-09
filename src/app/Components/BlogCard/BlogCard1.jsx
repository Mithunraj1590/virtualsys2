import Image from "next/image";
import Link from "next/link";

const BlogCard1 = ({ BlogImg, Title, Content, Author = 'Virtual Sys Team', Date = '20 June 2024', ReadTime = '5 min read' }) => {
    return (
        <div className="blog-singele-box">
        <div className="blog-thumb">
            <div className="blog-thumb-media">
                <Image
                    src={BlogImg}
                    alt={Title}
                    fill
                    sizes="(max-width: 768px) 100vw, 526px"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
        <div className="blog-content">
            <div className="blog-date">
                <span className="blog-date-item"><i className="bi bi-calendar2-check"></i>{Date}</span>
                <span className="blog-date-item"><i className="bi bi-alarm"></i>{ReadTime}</span>
                <span className="blog-date-item"><i className="bi bi-person"></i>{Author}</span>
            </div>
            <h3 className="blog-title"><Link href="/blog/blog-details">{Title}</Link></h3>
            <p className="blog-tex">{Content}</p>
            <div className="blog-btn">
            <Link href="/blog/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    </div>
    );
};

export default BlogCard1;