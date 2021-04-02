# [Children prop](https://children-prop.vercel.app/) example

An example of my favorite use case for the children prop to make UI elements more adaptable using a restaurant menu. 

Read my [Medium post](https://rachanastasia.medium.com/using-the-children-prop-for-dry-ui-components-fe0bd2a036e3) about this pattern.

View the [live version](https://children-prop.vercel.app/) of this code. 

## Tech

- React.js
- CSS3

## Image

![](/children-prop-menu.png)

## Codebase

### pages/index

This component imports the list component and renders it twice, once for each of the files of sample data. 

### components/Lists

This file contains four components: 

#### Lists

This component displays the title and maps through the sample data, returning either **ListItemFood** or **ListItemBeverage** depending on the list's type. 

#### ListItemFood/ListItemBeverage

These components display item-specific content, such as ingredients for food or origin and abv for beverages. They are wrapped in the **ListItem** component.

#### ListItem

This component renders non-item-specific content such as name, price, and dietary restrictions. It wraps the above component, returning the children to be returned to the left of the content. 

#### WinePricing

Just adding a little extra realism to the menu. 

### hooks/useDietaryRestrictionIcon

This hook imports all of the icons for dietary restrictions and returns the correct one through a switch statement. 