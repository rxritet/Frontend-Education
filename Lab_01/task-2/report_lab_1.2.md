React is “just the view layer”: it focuses on rendering UI based on data (props) and internal state, while other concerns like routing or data fetching are handled by additional libraries. In this lab, the Counter component demonstrates this idea by expressing the UI as a function of state: the displayed number comes from the `count` state value.

When a user clicks Increment or Decrement, the event handler calls `setCount` to update state. React then re-renders the component function, producing a new JSX description of how the UI should look. We do not manually change the DOM text node; instead, React reconciles the new output with the previous output and updates only what changed.

At a high level, React uses a virtual DOM representation to optimize performance. After state changes, React performs diffing (comparing the previous virtual UI tree and the new one) and then patching (applying minimal updates to the real DOM). That is why the DOM updates are efficient even when state changes frequently.

This workflow also fits the “data changes over time” concept: as state evolves through user interactions, the UI stays consistent because it is derived from state every render. The setup using a modern bundler (Vite) provides a fast development server, module handling, and a straightforward way to start a React project locally.
