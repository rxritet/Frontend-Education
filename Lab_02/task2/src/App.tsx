import Card from "./components/Card";
import ProductList from "./components/ProductList";
import Section from "./components/Section";

function App() {
  return (
    <>
      {/* Task 1: два экземпляра Card */}
      <Card title="About This App">
        <p>A demo of custom JSX components with dynamic props.</p>
      </Card>

      <Card title="Tech Stack" className="highlight">
        <p>React 18, Vite, TypeScript, JSX fragments.</p>
      </Card>

      {/* Task 3: Section + ProductList через children */}
      <Section title="Products">
        <ProductList />
      </Section>
    </>
  );
}

export default App;
