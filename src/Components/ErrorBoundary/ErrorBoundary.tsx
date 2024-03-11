import React, { ReactNode } from "react";
import "./ErrorBoundary.scss";

interface State {
  hasError: boolean;
}
interface Props {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (process.env.NODE_ENV === "development") {
      console.log({ error, errorInfo });
    }
  }

  render() {
    if (this.state.hasError && process.env.NODE_ENV !== "development") {
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-image"></div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
