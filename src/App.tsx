import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { Layout } from "@/components/layout/Layout";
import { Landing } from "./pages/Landing";
import { Signals } from "./pages/Signals";
import { SignalDetail } from "./pages/SignalDetail";
import { CreateSignal } from "./pages/CreateSignal";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { AuthGuard } from "./pages/AuthGuard";
import { AuthCallback } from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";
import "./i18n";

const queryClient = new QueryClient();

const App = () => {
	useEffect(() => {
		// Set default dark theme
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<AuthProvider>
					<BrowserRouter>
						<Layout>
							<Routes>
								<Route path="/" element={<Landing />} />
								<Route path="/signals" element={<Signals />} />
								<Route path="/signal/:id" element={<SignalDetail />} />
								<Route path="/login" element={<Login />} />
								<Route path="/auth/callback" element={<AuthCallback />} />
								<Route path="/auth-required" element={<AuthGuard />} />
								<Route
									path="/dashboard"
									element={
										<AuthGuard>
											<Dashboard />
										</AuthGuard>
									}
								/>
								<Route
									path="/create"
									element={
										<AuthGuard>
											<CreateSignal />
										</AuthGuard>
									}
								/>
								<Route
									path="/edit/:id"
									element={
										<AuthGuard>
											<CreateSignal />
										</AuthGuard>
									}
								/>
								<Route path="*" element={<NotFound />} />
							</Routes>
						</Layout>
					</BrowserRouter>
				</AuthProvider>
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App; 