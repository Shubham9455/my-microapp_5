import { AuthProvider } from '@microapp-io/react';
import Home from "./home";
type HomeProps = {
  lang?: 'es' | 'en' | 'pt';
  theme?: 'light' | 'dark';
}
export default function App(props: HomeProps) {
  return (
    <AuthProvider>
      {/* Your microapp code here */}
      <Home {...props} />
    </AuthProvider>
  );
}
