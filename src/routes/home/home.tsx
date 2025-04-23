import { createFileRoute } from '@tanstack/react-router'
import { testAction } from './actions/actions';

export const Route = createFileRoute('/_NavigationLayout/')({
  component: RouteComponent,
  loader: async () => {
    await testAction();
    return {
      message: "Hello World",
    };
  },
});

function RouteComponent() {
  return <div className="text-blue-500 text-xl">Hello "/home"!</div>
}
