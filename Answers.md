# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
   A: Created by Facebook devs, used to create components while making loading times faster. Instead of reloading a whole page when the state of something changes, it just reaches out to the virtual dom to grab a specific element and only changes that component.

1. What does it mean to think in react?
   A: To think in a way of components and component hierarchies.

1. Describe state.
   A: State, or data - is what we display in components for our users

1. Describe props.
   A: Props are similar to parameters/variable in a function but in a react component. It holds information that is passed to it by its parent component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
   A: A side effect is anything that affects something outside the scope of the function being executed. We sync effects by passing in a dependency array as the second argument to the effect hook.