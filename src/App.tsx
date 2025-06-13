import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

import { Banner } from "./lib/main";

function App() {
  return (
    <>
      <ThemeProvider>
        <main className="container w-2/3 mx-auto my-10">
          <ModeToggle />
          <h1>kf-react-components</h1>
          <Banner variant="right" color="red" />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
