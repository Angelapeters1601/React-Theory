export const theories = [
  {
    title: "Key Props",
    summary:
      "Key props help React identify which items have changed, are added, or are removed. They should be given to elements inside an array to give the elements a stable identity. Keys must be unique among siblings.",
  },
  {
    title: "Lifecycle Methods",
    summary:
      "Lifecycle methods are special methods in a React component that allow you to run code at particular times in the process. Common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    title: "Reconciliation",
    summary:
      "Reconciliation is the process by which React updates the DOM with changes in component state. React uses a diffing algorithm to compare the old and new virtual DOM and apply the necessary updates to the real DOM.",
  },
  {
    title: "Diffing Algorithm",
    summary:
      "The diffing algorithm is how React determines the most efficient way to update the DOM. By comparing the previous and current virtual DOM trees, React can identify the minimum number of changes required to keep the UI in sync with the state.",
  },
  {
    title: "Event Handling",
    summary:
      "Event handling in React involves using synthetic events, which are a cross-browser wrapper around the browser’s native event. Events in React are named using camelCase, and event handlers are passed as functions.",
  },
  {
    title: "Event Bubbling",
    summary:
      "Event bubbling is a phase of event propagation in the DOM where an event starts from the target element and bubbles up to the root. This allows for the handling of events at a higher level in the DOM, making it possible to implement event delegation.",
  },

  {
    title: "Fiber",
    summary:
      "Fiber is a complete rewrite of React's reconciliation algorithm introduced in React 16.  It allows React to break down rendering work into chunks and prioritize updates, enabling  incremental rendering, better responsiveness, and more effective error handling. ",
  },
  {
    title: "Virtual DOM",
    summary:
      "The Virtual DOM is an in-memory representation of the real DOM elements. React uses it to efficiently update the real DOM by comparing the new Virtual DOM with the previous one and applying only the necessary changes. This approach improves performance by minimizing direct DOM manipulations.",
  },
  {
    title: "React Rendering Stages",
    summary:
      "React's rendering process involves two main phases: the render phase and the commit phase. During the render phase, React constructs a new Virtual DOM by calling the render methods of components and creating new React elements. This phase can be interrupted and paused to ensure a smooth user experience. Once the render phase completes, the commit phase begins, where React applies the changes to the real DOM. This phase includes updating the DOM elements, applying any side effects, and ensuring the UI reflects the new state.",
  },
  {
    title: "React Fragment",
    summary:
      "React Fragment allows you to group a list of children elements without adding extra nodes to the DOM. This is useful when you want to return multiple elements from a component without wrapping them in an extra div.",
  },

  {
    title: "React Hooks",
    summary:
      "React Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState, for managing state, and useEffect, for performing side effects.",
  },
  {
    title: "React Context",
    summary:
      "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is useful for global state management, such as theming or user authentication data.",
  },
  {
    title: "JSX",
    summary:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements directly within JavaScript code, making it easier to create and visualize the structure of your React components.",
  },
];
