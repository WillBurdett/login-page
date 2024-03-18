# Login-Page
## A React App to demonstrate the different options for CSS in React

# Options for CSS
- **Vanilla CSS**   
   Advantages
   - CSS code is decoupled from JSX, you can use existing CSS knowledge
   - Other developers do not require access to JSX code to adapt CSS   
   
   Disadvantages
   - You need to know CSS
   - CSS code is not scoped, so it may clash with other components           
- **Inline styles**   
   Advantages
   - Easy to add
   - Only effect 1 element 
   
   Disadvantages
   - You have to target each element individually
   - No seperation between CSS and JSX# login-page
   - **CSS Modules**   
   Advantages
   - Scoped CSS rules to a component
   - CSS decoupled from JSX
   - You write plain CSS
   
   Disadvantages
   - You must know CSS
   - You may end with lots of small CSS files in your project
    - **Styled Components**   
   Advantages
   - Quick and easy to add
   - Continue thinking in React (configurable styled functions)
   - Scoped CSS rules to a component
   - You write plain CSS
   
   Disadvantages
   - Must 'npm install styled-components'
   - Couples CSS and JSX code
   - Must know CSS
