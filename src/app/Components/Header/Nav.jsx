import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>Home</Link>
      </li>
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>About Us</Link>
      </li>
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>Services</Link>
      </li>
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>Projects</Link>
      </li>
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>Careers</Link>
      </li>
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>Contact</Link>
      </li>
    </ul>
  );
}
