## Card Component
A styled card component for React with customizable styles and a responsive layout. It includes a title, body, and footer, and can be used in various scenarios such as displaying product information or showcasing team members.

### Usage

```javascript
import { Card } from "./Card";

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
import { CardCarousel } from "./Card";

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