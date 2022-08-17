import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/respositories";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
