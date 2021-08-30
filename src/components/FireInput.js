import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

export class FireInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true,
    };
    this.ref = React.createRef();
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.state.isTyping !== nextState.isTyping && !nextState.isTyping) {
      this.props.onFire();
    }
  }

  componentDidMount() {
    this.props.fireOnMount && this.props.fireOnMount();
  }

  handleChange = (e) => {
    clearTimeout(this.ref.current);
    this.setState({ isTyping: true });
    this.props.onChange(e.target.value);
    this.ref.current = setTimeout(() => {
      this.setState({ isTyping: false });
    }, this.props.timeout || 1000);
  };

  render() {
    return (
      <TextField
        {...this.props}
        fullWidth
        label="Search"
        variant="filled"
        InputProps={{
          ...this.props.InputProps,
          endAdornment: (
            <React.Fragment>
              {this.props.busy ? <CircularProgress size={20} /> : null}
            </React.Fragment>
          ),
        }}
        value={this.props.value}
        onClick={this.props.onClick}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    );
  }
}
