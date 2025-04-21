// app/router.tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary';
import { NotFound } from './components/NotFound';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			networkMode: 'always',
			refetchOnWindowFocus: false,
			staleTime: 60 * 1000,
		},
	},
});

export function createRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: 'intent',
		context: {
			queryClient: queryClient,
		},
		defaultPendingComponent: () => {
			return <div>loading...</div>;
		},
		Wrap: ({ children }) => {
			return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
		},
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
	});

	return router;
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
	interface StaticDataRouteOption {
		crumb?: {
			title: string;
		};
	}
}
