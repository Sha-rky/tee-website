import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full h-[120px] flex items-center justify-between py-4 px-[80px] bg-white/90 border-b border-gray-800">
			<Link href="/">
				<Image src="/logo.png" alt="Logo" width={2667} height={1611} className="w-[150px] h-auto" />
			</Link>
			<nav>
				<ul className="flex items-center justify-end gap-8 text-gray-700 text-base font-medium">
					<li>
						<Link href="/mission">
							Mission
						</Link>
					</li>
					<li>
						<Link href="/solutions">
							Solutions
						</Link>
					</li>
					<li>
						<Link href="/carbon">
							Carbon
						</Link>
					</li>
					<li>
						<Link href="/partner">
							Partner
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}