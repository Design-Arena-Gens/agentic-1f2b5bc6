import ChristmasLights from '../components/ChristmasLights';
import Tree from '../components/Tree';

export default function Page() {
  return (
    <main className="page">
      <header className="site-header" aria-label="big Christmas tree">
        <div className="brand">big Christmas tree</div>
        <ChristmasLights />
      </header>
      <section className="hero" aria-label="Grand Christmas tree">
        <Tree />
      </section>
    </main>
  );
}
