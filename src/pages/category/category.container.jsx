import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "./../../redux/shop/shop.selectors";
import withSpinner from "./../../components/with-spinner/with-spinner.component";
import CategoryPage from "./category.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CategoryPage);

export default CategoryPageContainer;
