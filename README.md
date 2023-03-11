<h1 align="center"> Cyberfuture </h1>
<div>
  <img align="left" alt="npm" src="https://img.shields.io/npm/dm/cyberfuture?style=flat-square">
  <img align="right" alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/horberlan/CyberFuture?style=flat-square">
  <img align="right" alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/cyberfuture?style=flat-square">
</div>
<br/><br/>
Times change and apps needs to adapt to those changes❗

With this library you can change the visual of your components to give your app a more "cybish" aspect. 

🚧 This library is still under development, but you can try some components and collaborate at will. 🚧

## CyberButton Component
The CyberButton component is a customizable button with an animated clip-path effect. It receives a text prop, which sets the text that appears inside the button.

### Props

<table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>text</td><td>string</td><td>Yes</td><td>-</td><td>The text that appears inside the button.</td></tr></tbody></table>

text	string	Yes	-	The text that appears inside the button.

```jsx
import CyberButton from './CyberButton';
function App() {
  return (
    <div>
      <CyberButton text="Click me!" />
    </div>
  );
}
```

### Customization
The CyberButton component can be customized by modifying the following CSS variables:

CSS Variable	Default Value	Description
<table><thead><tr><th>CSS Variable</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--cyber-button-color</td><td>#fff</td><td>The text color of the button.</td></tr><tr><td>--cyber-button-background</td><td>linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)</td><td>The background of the button.</td></tr><tr><td>--cyber-button-background-noise1</td><td><code>keyframes</code> animation</td><td>The first noise animation of the button background.</td></tr><tr><td>--cyber-button-background-noise2</td><td><code>keyframes</code> animation</td><td>The second noise animation of the button background.</td></tr></tbody></table>
Here's an example of how to modify these CSS variables:

```css
.Cyber-green-button {
  --cyber-button-color: #000;
  --cyber-button-background: linear-gradient(106deg, #ff296d 8%, #8e52f5 44%, #95f11c 87%);
}
```
#### Additional Notes
The CyberButton component is part of a larger theme object that contains additional colors and text styles. These can be used to further customize the component and the app as a whole.


## Card Component
A styled card component for React with customizable styles and a responsive layout. It includes a title, body, and footer, and can be used in various scenarios such as displaying product information or showcasing team members.

### Usage

```javascript
import { Card } from "cyberfuture";

<Card 
  title="Card Title"
  body={<div>Card Body</div>}
  end={<div>Card Footer</div>}
  variant="Matrix"
  background="#333333"
/>
```
### Props
`title` (string, required)
The title of the card.

`body` (React node, required)
The content of the card body.

`end` (React node)
The content of the card footer.

`variant` (string)
The variant of the card style. Can be one of the following:

* Matrix
* Rose
* Punk
* Gold

`background` (string)
The background color of the card. Defaults to rgba(17, 25, 40, 0.75).

## CardCarousel Component
A variation of the Card component that includes a horizontal carousel of card body items.

### Usage

```javascript
import { CardCarousel } from "cyberfuture";

<CardCarousel 
  title="Carousel Title"
  end={<div>Carousel Footer</div>}
  variant="Matrix"
  background="#333333"
/>
```
### Props
`title` (string, required)
The title of the card.

`end` (React node)
The content of the card footer.

`variant` (string)
The variant of the card style. Can be one of the following:

* Matrix
* Rose
* Punk
* Gold

`background` (string)
The background color of the card. Defaults to rgba(17, 25, 40, 0.75).

## CyberInput Component
The CyberInput component is a reusable React input component with an optional label. It renders an HTML input element with a label if the label prop is provided.

## Props
The component accepts the following props:

`type` (string, optional, default "text"): the type of the input element, such as "text", "password", etc.
`label` (string, optional): the label to display for the input element.
`value` (string): the value of the input element.
#### Example Usage
```jsx
import React, { useState } from "react";
import { CyberInput } from "cyberfuture";

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


<br/>
👩‍💻 We are building a webpage for showing our components.
<br/>
But, we are very busy. Please, be patient... 
<br/>
<br/>
<img src="https://media.giphy.com/media/1aIDN81XDJuDK/giphy.gif"/>


