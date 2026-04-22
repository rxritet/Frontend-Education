import React from 'react';

// Task 1: Fragment-only layout без wrapper div
function FragmentLayout(): React.ReactElement {
  return (
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>

      <main>
        <p>React fragments allow grouping siblings without adding extra DOM nodes.</p>
      </main>

      <footer>
        <p>&copy; 2026 Radmir Abraev. All rights reserved.</p>
      </footer>
    </>
  );
}

export default FragmentLayout;
