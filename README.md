<h1 align="center"> Cyberfuture </h1>
<div>
  <img align="left" alt="npm" src="https://img.shields.io/npm/dm/cyberfuture?style=flat-square">
  <img align="right" alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/horberlan/CyberFuture?style=flat-square">
  <img align="right" alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/cyberfuture?style=flat-square">
</div>
<br/><br/>
Times change and apps need to adapt to those changes❗

The Cyberfuture package provides several components for React that can be used to quickly and easily create styled user interfaces.

All of these components can be customized using CSS variables or by passing in props to modify their appearance. 

By using the Cyberfuture package, developers can save time and effort when building user interfaces. The purpose is to create more visually appealing and engaging experiences for users.

## CyberButton Component
The CyberButton component is a customizable button with an animated clip-path effect. It receives a text prop, which sets the text that appears inside the button.

### Props

<table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>text</td><td>string</td><td>Yes</td><td>-</td><td>The text that appears inside the button.</td></tr></tbody></table>

```jsx
import { CyberButton } from 'cyberfuture';
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
A styled card component with customized styles and responsive layout. It includes a title, a body, and a footer, and can be used in various scenarios such as displaying product information or showcasing team members.

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
<ul><li><code>title</code>: Title of the carousel (required).</li><li><code>body</code>: Body of the carousel, not used in this variant.</li><li><code>end</code>: Footer of the carousel, can be any valid JSX element.</li><li><code>CardBody</code>: A required prop to be used with the <code>CardCarousel</code> variant, renders a carousel of cards with this element as a template.</li><li><code>variant</code>: A prop used to customize the colors of the cards. It must be <code>"Matrix"</code>, <code>"Rose"</code>, <code>"Punk"</code>, or <code>"Gold"</code>.</li><li><code>background</code>: Background color of the carousel. If not provided, a default color of <code>rgba(17, 25, 40, 0.75)</code> will be used.</li><li><code>width</code>: Width of the carousel in CSS units. Default is <code>calc(350px - 2vmin)</code>.</li><li><code>height</code>: Height of the carousel in CSS units. Default is <code>30em</code>.</li></ul>

## CardCarousel Component
This is a variation of the Card component that includes a horizontal carousel with body items.

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
<ul>
<li><code>title</code>: The title of the card (string, required).</li>
<li><code>end</code>: The content of the card footer (React node).</li>
<li><code>variant</code>: The variant of the card style (string, required). It can be one of these:<code>"Matrix"</code>, <code>"Rose"</code>, <code>"Punk"</code>, <code>"Gold"</code></li>
<li><code>background</code>: The background color of the card. Default is rgba(17, 25, 40, 0.75).</li>
</ul>

### Usage
```javascript
<CardCarousel
  title="My Carousel Title"
  CardBody={<p>Some text here</p>}
  variant="Matrix"
  background="#00FF00"
/>
```
## CyberInput Component
The CyberInput component is a reusable React input component with an optional label. It renders an HTML input element with a label when the label prop is provided.

## Props
The component accepts the following props:

<ul>
<li><code>type</code>: This is the type of the input element, such as "text", "password", etc (string, optional, default "text").</li>
<li><code>label</code>: This is the label that will be displayed for the input element (string, optional).</li>
<li><code>value</code>: The value of the input element (string).</li>
</ul>

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
In this example, the CyberInput component is used inside a form. The type prop is set to "text", the label prop is set to "Username", and the value prop is set to the value of the username state variable. The onChange prop is also provided to handle changes in the input element.


<br/>
👩‍💻 We are working on improvements. But, we are very busy. Please, be patient...
<br/>
<br/>
<img src="https://media.giphy.com/media/1aIDN81XDJuDK/giphy.gif"/>
