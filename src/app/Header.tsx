import { Container, Link, Typography } from '@mui/material'

export default function Header() {
  return (
    <Container className="w-full bg-white h-20 text-black flex">
      <div className="space-x-3">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/shop">Shop</Link>
      </div>

      <Typography>Ben Brochtrup</Typography>
    </Container>
  )
}
