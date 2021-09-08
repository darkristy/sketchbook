import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	console.log();

	return <Component {...pageProps} />;
};

export default App;
