import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Serene UI"
      description="A simple CSS library to compose HTML components faster">
      <main className={styles.hero}>
        <div>
          <h1>Serene UI</h1>
          <p className={styles.lead}>
            Welcome to Serene UI. A simple CSS library to compose HTML components
            faster. A library made keeping in mind the ease of learning and
            intuitiveness.
          </p>
          <div className={styles.actions}>
            <Link to="/docs/getting-started">
              <button className="ser-btn-secondary-medium" type="button">
                Read the Docs
              </button>
            </Link>
            <a
              href="https://github.com/arunkumar413/serene-UI"
              target="_blank"
              rel="noreferrer">
              <button className="ser-btn-secondary-medium-outlined" type="button">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
