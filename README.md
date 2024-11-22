# Grid Selection Component Using Symbols Framework

## Introduction

This project focuses on creating an interactive grid selection component using the Symbols framework. The primary objectives were:

- Build an interactive grid where users can select boxes.
- Update the grid's state based on user interactions and reflect these changes visually.
- Learn and understand the new Symbols framework, exploring its features and conventions.

## Initial Task

The initial task was to develop a grid composed of boxes arranged in a specified number of rows and columns (16 columns and 8 rows). The requirements included:

- Selectable Boxes: Each box in the grid should be clickable. Upon clicking a box, it and all boxes above and to the left of it should change color to indicate selection.
- State Management: The component should keep track of the number of selected rows and columns, as well as the total number of selected boxes.
- Footer Display: A footer should display the selection coordinates and the total number of selected boxes.
- Proper Grid Layout: The grid should display correctly without any layout issues or overlapping boxes.

## Modifications and Implementation

To achieve the desired functionality, several modifications were made to the initial template:
1. Extending the Correct Base Component

    Changed from Flex to Grid: The GridSelection component was modified to extend the Grid component directly. This decision was made to utilize grid-specific properties and behaviors inherent to the Grid component in the Symbols framework.

   ``` export const GridSelection = {
      extend: Grid,
      // ...
    };```

2. Generating Grid Items Directly

    Avoided Extra Nesting: Grid items were generated directly within the content function of the GridSelection component. This approach prevents extra nesting levels that could interfere with the grid layout.

    ```content: (element, state) => {
      const gridItems = { /* ...grid items... */ };
      return {
        key: false, // Prevents extra wrapping
        ...gridItems,
      };
    },```

3. Attaching Event Handlers Properly

    Attached click Events Correctly: Event handlers were attached directly to each grid item using the on property. This aligns with the Symbols framework's conventions for event handling.

    ```on: {
      click: (event, element, state) => {
        // Event handler code
      },
    },```

4. State Management and Reactivity

    `Utilized Shared State Object`: A shared state object was used to track the selected rows, columns, and total selected boxes.

    Used `state.update()`: State updates were performed using `state.update()`, which triggers a re-render of the component and updates the UI accordingly.

   ``` state.update({
      selectedRows: row,
      selectedColumns: col,
      totalSelected: row * col,
    });```

5. Dynamic Styling Based on State

    `Changed Box Colors Dynamically`: The props function for each grid item was used to apply dynamic styles based on the current state, changing the background color of boxes when they are selected.

    ```props: (element, state) => {
      const isSelected = /* ... */;
      return {
        style: {
          background: isSelected ? '#3D7BD9' : '#E8F1FF',
        },
      };
    },```

6. Adjusting the Footer

    Aligned Footer Content: The footer was modified to display the selection coordinates on the left and the total number of selected boxes on the right. Flexbox was used to achieve justify-content: space-between alignment.

    ```props: {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      },
    },```

    Updated Footer Content: The footer now shows:
        ```Left Side: Selection coordinates: X,Y
        Right Side: Total cells selected: N```

7. Learning the Symbols Framework

    `Explored Symbols Documentation`: Throughout the development process, a key goal was to learn the Symbols framework. This involved:
        Understanding how to properly define components, properties, and event handlers.
        Learning how state management and reactivity work within Symbols.
        Adhering to best practices and conventions outlined in the Symbols documentation.

## Conclusion

By modifying the initial template and applying the features of the Symbols framework, we successfully created an interactive grid selection component that meets the project's requirements. The process not only involved solving specific technical challenges but also provided valuable experience in working with the Symbols framework.

### Key Takeaways:

    `Component Structure`: Understanding how to structure components in Symbols is crucial for creating functional and maintainable code.
    `Event Handling`: Properly attaching event handlers ensures that user interactions are captured and processed correctly.
    `State Management`: Utilizing the shared state object and the state.update() method allows for dynamic and responsive UI components.
    `Layout and Styling`: Careful management of layout properties and styling is essential for achieving the desired visual appearance.

This project served as both a practical application and a learning experience with the Symbols framework, equipping us with the knowledge to leverage its capabilities in future projects.


### Setup

1. Clone the repo
```
git clone https://github.com/elanor/grid-selection.git
```

2. Install scripts
```
npm
```

3. Run the project
```
npm start
```
