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
Copy code
.Cyber-green-button {
  --cyber-button-color: #000;
  --cyber-button-background: linear-gradient(106deg, #ff296d 8%, #8e52f5 44%, #95f11c 87%);
}
```
#### Additional Notes
The CyberButton component is part of a larger theme object that contains additional colors and text styles. These can be used to further customize the component and the app as a whole.