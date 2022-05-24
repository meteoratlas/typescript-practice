import React from "react";
import { connect } from "react-redux";
import { fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  onButtonClicked = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClicked}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
