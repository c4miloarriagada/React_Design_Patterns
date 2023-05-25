import { products } from "../db/products";
import { todos } from "../db/todos";
import { ProductList } from "./PorductList/ProductList";
import { TodoList } from "./TodoList/TodoList";
import { withSearch } from "./WithSearch/withSearch";

const { todosHoc } = todos


export const ProductListWithSearch = withSearch(ProductList, products);
export const TodoListWithSearch = withSearch(TodoList, todosHoc)
