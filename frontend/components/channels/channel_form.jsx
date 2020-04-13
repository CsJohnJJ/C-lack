import React from "react";

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.channel;
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .createChannel(this.state)
      .then(() =>
        this.props.history.push(`/main/channels/1`)
      );
  }

  cancelCreate(e){
      e.preventDefault();
      this.props.history.push(`/main/channels/1`);
  }

  handleClick(e) {
    if (e.target.checked && !this.state.is_private) {
      this.setState({ is_private: true });
    }
  }

  toggleChannelCreateForm(e) {
    // e.stopPropagation();
    const modalEle = document.getElementsByClassName("channel-create-form")[0];
    if (modalEle) {
      if (!modalEle.classList.contains("active-modal")) {
        modalEle.classList.add("active-modal");
      } else {
        modalEle.classList.remove("active-modal");
      }
    }
  }

  render() {
    return (
      <div
        className="channel-form-container channel-create-form"
        onClick={this.toggleChannelCreateForm()}
      >
        <form
          className="channel-form"
          onClick={(e) => e.stopPropagation()}
          onSubmit={this.handleSubmit}
        >
          <div className="x-button-container">
            <p className="x-button" onClick={this.cancelCreate}>
              X
            </p>
          </div>
          <div className="create-header">
            <h2 className="create-title">Create a Channel</h2>
          </div>

          <div className="create-form-info">
            <p className="create-detail-info">
              Create a channel for your team to communicate. They're best when
              organized around a topic - marketing, for example.
            </p>
          </div>

          <label className="input-label">
            <p className="input-info name">Name</p>
            <input
              className="create-input create-input-field"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>
          <label className="input-label">
            <p className="input-info">
              Description <span className="optional">(optional)</span>
            </p>
            <input
              className="create-input create-input-field"
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>

          <div className="create-bottom">
            <label className="input-label private-input">
              Private:
              <input
                className="isPrivate"
                type="checkbox"
                onClick={this.handleClick}
              />
            </label>

            <button className="form-button">{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChannelForm;
