import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="grid place-items-center mt-40">
      <h1 className="text-9xl font-bold mb-0">404</h1>
      <h3 className="text-5xl mt-0">Not Found</h3>
      <p className="mt-10">
        Go to{' '}
        <Link href="/" className="underline font-medium">
          Home Page
        </Link>{' '}
      </p>
    </div>
  )
}

export default NotFound
