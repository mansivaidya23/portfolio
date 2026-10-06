import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
          <div>
            <h1 className="text-lg font-semibold text-primary">
              Something went wrong loading the portfolio.
            </h1>
            <p className="mt-2 text-sm text-secondary">
              Try refreshing the page. If the issue persists, restart the dev
              server with <code className="text-accent">npm run dev</code>.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
