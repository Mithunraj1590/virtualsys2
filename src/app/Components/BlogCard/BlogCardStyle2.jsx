import Image from "next/image";
import Link from "next/link";

const BlogCardStyle2 = ({ BlogImg, Title, Content, Author = 'Virtual Sys Team', Date = '20 June 2024', ReadTime = '4 min read' }) => {
    return (
        <div className="blog-singele-box-tow">
        <div className="blog-card-horizontal">
            <div className="blog-thumb-tow">
                <div className="blog-thumb-media">
                    <Image
                        src={BlogImg}
                        alt={Title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="blog-content-tow">
                <div className="blog-date-tow">
                    <span className="blog-date-item"><i className="bi bi-calendar2-check"></i>{Date}</span>
                    <span className="blog-date-item"><i className="bi bi-alarm"></i>{ReadTime}</span>
                    <span className="blog-date-item"><i className="bi bi-person"></i>{Author}</span>
                </div>
                <h3 className="blog-title-two"><Link href="/blog/blog-details">{Title}</Link></h3>
                <p className="blog-tex-tow">{Content}</p>
                <div className="blog-btn-tow">
                <Link href="/blog/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BlogCardStyle2;