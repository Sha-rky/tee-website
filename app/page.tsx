import Image from "next/image";
import AvatarCard from "@/components/AvatarCard";
import AccordionList from "@/components/AccordionList";
export default function Home() {
	return (
		<main className="my-[40px]">
			<Image src="/hero1.png" alt="Image" width={3000} height={1264} className="px-[80px] w-full h-auto object-cover" />
			<div className="px-[80px]">
				<h1 className="text-7xl font-bold">Team</h1>
				<div className="flex items-center justify-center gap-8 max-w-[960px] mx-auto">
					<AvatarCard src="/ceo.png" alt="CEO" username="CEO" position="CEO" />
					<AvatarCard src="/cto.png" alt="CTO" username="CTO" position="CTO" />
					<AvatarCard src="/cio.png" alt="CIO" username="CIO" position="CIO" />
				</div>
				<AccordionList />
			</div>

{/* 
			<main className="flex-1 flex flex-row items-center justify-center px-12 py-8 gap-8">
				<div className="flex-1 flex items-center justify-center">
				</div>
				<div className="flex-1 flex flex-col justify-center items-start max-w-xl">
					<h1 className="text-5xl font-bold text-white mb-2 leading-tight">SMART COMMUNITY</h1>
					<h2 className="text-4xl font-bold text-white mb-6">智能社区</h2>
					<p className="text-white text-base mb-8">
						特斯联AIoT智能社区解决方案围绕社区安全智能化服务，以先进的技术、优质的产品应用到社区内各细分场景中，旨在创新社区服务、决策的智能化管理模式。
					</p>
					<div className="grid grid-cols-2 gap-x-8 gap-y-4 text-white text-base mb-8">
						<div className="flex items-center gap-3">
							<span className="text-2xl">👤</span> 智能硬件 实时上报
						</div>
						<div className="flex items-center gap-3">
							<span className="text-2xl">☁️</span> 云平台 数据处理
						</div>
						<div className="flex items-center gap-3">
							<span className="text-2xl">🛣️</span> 通行管理与视频联动
						</div>
						<div className="flex items-center gap-3">
							<span className="text-2xl">🛡️</span> 智能化安全保障
						</div>
						<div className="flex items-center gap-3">
							<span className="text-2xl">💾</span> 数据存储与分发
						</div>
						<div className="flex items-center gap-3">
							<span className="text-2xl">🏢</span> 智能化社区管理
						</div>
					</div>
					<button className="bg-[#00d6b2] text-white px-8 py-2 rounded-full font-bold shadow hover:bg-[#00bfa3] transition">更多 →</button>
				</div>
			</main> */}
		</main>
	);
}
