import Link from 'next/link'

export default function FourOhFour() {
  console.log('====================================');
  console.log('404');
  console.log('====================================');
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}