# styled-components

> demo

https://codepen.io/xgqfrms/pen/LYGeYGo?editors=0010

https://cdnjs.cloudflare.com/ajax/libs/styled-components/3.2.1/styled-components.js


https://styled-components.com/


```jsx
import styled from 'styled-components';

const Button = styled.button``;

// This Button variable here is now a React component that you can use like any other React component! 
```

```js
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;
const Container = styled.div`
  text-align: center;
`
render(
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
);

```
