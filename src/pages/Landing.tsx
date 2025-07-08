import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Zap, Star, BarChart3, Bell, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Landing = () => {
	const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

	const features = [
		{
			icon: <TrendingUp className="w-6 h-6" />,
			title: "智能交易信号",
			description: "基于AI算法生成高质量交易信号，实时分析市场趋势",
			color: "text-green-500",
		},
		{
			icon: <Bell className="w-6 h-6" />,
			title: "实时通知",
			description: "即时推送交易机会，不错过任何盈利时机",
			color: "text-blue-500",
		},
		{
			icon: <BarChart3 className="w-6 h-6" />,
			title: "策略分析",
			description: "深度分析交易策略表现，持续优化收益率",
			color: "text-purple-500",
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "社区订阅",
			description: "订阅优秀交易者的信号策略，学习成功经验",
			color: "text-orange-500",
		},
		{
			icon: <Shield className="w-6 h-6" />,
			title: "风险控制",
			description: "智能风险评估，帮助您制定合理的仓位管理",
			color: "text-red-500",
		},
		{
			icon: <Zap className="w-6 h-6" />,
			title: "快速执行",
			description: "毫秒级信号传输，确保最佳入场时机",
			color: "text-yellow-500",
		},
	];

	const popularSignals = [
		{
			id: 1,
			name: "BTC突破策略",
			creator: "CryptoMaster",
			subscribers: 1234,
			performance: "+24.5%",
			risk: "中等",
			price: "免费",
		},
		{
			id: 2,
			name: "ETH波段交易",
			creator: "EthTrader",
			subscribers: 856,
			performance: "+18.3%",
			risk: "低",
			price: "¥299/月",
		},
		{
			id: 3,
			name: "DeFi Alpha策略",
			creator: "DeFiPro",
			subscribers: 567,
			performance: "+45.2%",
			risk: "高",
			price: "¥599/月",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
			{/* Hero Section */}
			<section className="relative pt-20 pb-32 px-4 overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
				</div>

				<div className="container mx-auto text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						<Badge variant="secondary" className="mb-6 px-4 py-2">
							🎯 专业交易信号平台
						</Badge>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
							TradingSignal
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
							智能交易信号平台，为交易者提供
							<span className="text-blue-400 font-semibold">专业策略</span>、
							<span className="text-purple-400 font-semibold">实时信号</span>和
							<span className="text-cyan-400 font-semibold">社区订阅</span>服务
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
								<Link to="/signals">
									探索交易信号
									<ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link to="/create">开始创建策略</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 bg-gray-800/50">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">平台核心功能</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							为交易者提供全方位的信号服务，从策略创建到订阅管理，一站式解决您的交易需求
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								onHoverStart={() => setHoveredFeature(index)}
								onHoverEnd={() => setHoveredFeature(null)}
								className="group"
							>
								<Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full group-hover:shadow-xl group-hover:shadow-blue-500/10">
									<CardHeader>
										<div className={`${feature.color} mb-4 transition-transform duration-300 ${hoveredFeature === index ? "scale-110" : ""}`}>
											{feature.icon}
										</div>
										<CardTitle className="text-white group-hover:text-blue-400 transition-colors">
											{feature.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
											{feature.description}
										</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Popular Signals Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">热门交易策略</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							发现由专业交易者创建的优质策略，开始您的盈利之旅
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{popularSignals.map((signal, index) => (
							<motion.div
								key={signal.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
									<CardHeader>
										<div className="flex justify-between items-start">
											<div>
												<CardTitle className="text-white mb-2">{signal.name}</CardTitle>
												<CardDescription className="text-gray-400">
													创建者: {signal.creator}
												</CardDescription>
											</div>
											<Badge variant="secondary" className="bg-green-900/50 text-green-400">
												{signal.performance}
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span className="text-gray-400">订阅人数</span>
												<span className="text-white">{signal.subscribers}</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">风险等级</span>
												<Badge
													variant={signal.risk === "低" ? "default" : signal.risk === "中等" ? "secondary" : "destructive"}
												>
													{signal.risk}
												</Badge>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-400">价格</span>
												<span className="text-white font-semibold">{signal.price}</span>
											</div>
											<Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
												查看详情
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					<div className="text-center mt-12">
						<Button asChild variant="outline" size="lg">
							<Link to="/signals">
								查看更多策略
								<ArrowRight className="ml-2 w-4 h-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
				<div className="container mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto"
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">开始您的交易之旅</h2>
						<p className="text-gray-300 text-lg mb-8">
							加入TradingSignal社区，与专业交易者一起探索市场机会，提升您的交易技能
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
								<Link to="/login">
									立即注册
									<ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link to="/signals">浏览策略</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}; 