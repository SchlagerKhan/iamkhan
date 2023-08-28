import { Home__Intro } from '../Home.1.Intro';
import { Home__About } from '../Home.3.About';
import { Home__Portfolio } from '../Home.2.Portfolio';

export function Home() {
    return (
        <main>
            <Home__Intro />
            <Home__Portfolio />
            <Home__About />
        </main>
    );
}
