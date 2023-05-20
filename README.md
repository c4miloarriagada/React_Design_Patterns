# React Design Patterns

👷 W.I.P

## Índice

1. Introducción a los patrones de diseño en React
2. Patrón HOC (Higher-Order Component)
3. Patrón Presentational Container
4. Patrón Provider
5. Patrón Compound Components

## 1. Introducción a los patrones de diseño en React

**Español:**
En la construcción de aplicaciones React, es importante utilizar patrones de diseño que promuevan la reutilización de código, el mantenimiento y la escalabilidad. Los patrones de diseño ayudan a organizar el código de manera estructurada y brindan soluciones comunes a problemas recurrentes.

**English:**
In the construction of React applications, it is important to use design patterns that promote code reuse, maintenance, and scalability. Design patterns help organize code in a structured manner and provide common solutions to recurring problems.


## 2. Patrón HOC (Higher-Order Component)

**Español:**
El patrón HOC (Higher-Order Component) es un patrón de diseño en React que permite reutilizar lógica entre componentes. Un HOC es una función que toma un componente y devuelve un nuevo componente con funcionalidad adicional. Esto permite encapsular lógica común en un solo lugar y aplicarla a varios componentes.

**English:**
A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional functionality. This pattern allows for the reuse of logic between components and promotes modularity and separation of concerns.

## 3. Patrón Presentational Container


**Español:**
El patrón Presentational Container separa los componentes en dos categorías distintas: presentacionales y contenedores. Los componentes presentacionales se encargan de la apariencia y la estructura visual, mientras que los componentes contenedores manejan la lógica y los datos. Esta separación ayuda a mantener los componentes más simples, facilita su prueba y promueve la reutilización.

**English:**
The Presentational Container pattern separates components into two distinct categories: presentational and container components. Presentational components are responsible for the appearance and visual structure, while container components handle the logic and data. This separation helps to keep components simpler, facilitates testing, and promotes reusability.

## 4. Patrón Provider


**Español:**
El patrón Provider permite pasar datos o funcionalidad a través de la jerarquía de componentes sin necesidad de pasar propiedades manualmente en cada nivel. El componente proveedor (Provider) envuelve a los componentes hijos y les proporciona el contexto necesario. Los componentes descendientes pueden acceder a los datos o la funcionalidad proporcionada por el proveedor mediante el uso del componente de consumidor (Consumer).

**English:**
The Provider pattern allows passing data or functionality through the component hierarchy without manually passing props at each level. The provider component wraps the child components and provides them with the necessary context. Descendant components can access the data or functionality provided by the provider using the consumer component.

## 5. Patrón Compound Components


**Español:**
El patrón Compound Components es un enfoque para crear componentes que trabajan juntos y comparten un estado común. Los componentes compuestos permiten a los desarrolladores construir interfaces más flexibles y reutilizables, donde cada componente tiene un propósito claro pero depende de otros para funcionar correctamente.

**English:**
The Compound Components pattern is an approach to creating components that work together and share common state. Compound components allow developers to build more flexible and reusable interfaces, where each component has a clear purpose but relies on others to function properly.

