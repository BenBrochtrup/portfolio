import Link from "next/link";

export default function Header() {
	return (
		<div className="flex justify-center">
			<div className="flex justify-center m-6 py-0 px-2 w-min rounded-full bg-bay-leaf-100">
				<div className="text-black m-4 no-underline bg-transparent hover:underline">
					<Link href="/about">About</Link>
				</div>
				<div className="text-black m-4 no-underline bg-transparent hover:underline">
					<Link href="/projects">Projects</Link>
				</div>
				<div className="text-black m-4 no-underline bg-transparent hover:underline">
					<Link href="/blog">Blog</Link>
				</div>
				<div className="text-black m-4 no-underline bg-transparent hover:underline">
					<Link href="/contact">Contact</Link>
				</div>
			</div>
		</div>
	);
}
