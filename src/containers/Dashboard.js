import React from "react";
import { connect } from "react-redux";
import { getRecipe } from "../store/actions/recipeActions";

class Dashboard extends React.Component {
  componentDidMount = () => {
    this.props.getRecipe();
  };

  render() {
    return (
      <>
        {this.props.users.length ? (
          this.props.users.map(u => {
            return <h1>{u.username}</h1>;
          })
        ) : (
          <h1>No Users Yet</h1>
        )}

        {this.props.recipes.map(r => {
          return <p>{r.title}</p>;
        })}
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.authReducer.users,
  recipes: state.recipeReducer.recipes
});

export default connect(
  mapStateToProps,
  { getRecipe }
)(Dashboard);
