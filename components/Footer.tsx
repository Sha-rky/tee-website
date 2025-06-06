import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full py-8 px-[80px] bg-white/90 border-t border-gray-800">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={2667} height={1611} className="w-[120px] h-auto" />
				</Link>

				<div className="text-sm text-gray-600">
					<p>02-2758-5208</p>
					<a href="mailto:tai.enefa@gmail.com"><p>tai.enefa@gmail.com</p></a>
					
					© {new Date().getFullYear()} 台灣能源效率集團 All rights reserved.
				</div>
			</div>
		</footer>
	)
} 