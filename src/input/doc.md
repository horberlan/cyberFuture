## CyberInput Component
The CyberInput component is a reusable React input component with an optional label. It renders an HTML input element with a label if the label prop is provided.

## Props
The component accepts the following props:

`type` (string, optional, default "text"): the type of the input element, such as "text", "password", etc.
`label` (string, optional): the label to display for the input element.
`value` (string): the value of the input element.
#### Example Usage
```jsx
Copy code
import React, { useState } from "react";
import CyberInput from "./CyberInput";

const MyForm = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <CyberInput
        type="text"
        label="Username"
        value={username}
        onChange={handleUsernameChange}
      />
    </form>
  );
};
```
In this example, the CyberInput component is used inside a form. The type prop is set to "text", the label prop is set to "Username", and the value prop is set to the value of the username state variable. The onChange prop is also provided to handle changes to the input element.