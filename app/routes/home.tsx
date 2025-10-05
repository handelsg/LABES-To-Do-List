import type { Route } from "./+types/home";
import { TodoApp } from "../components/TodoApp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LABES To-Do List" },
    { name: "description", content: "Lista de tarefas simples e eficiente" },
  ];
}

export default function Home() {
  return <TodoApp />;
}
