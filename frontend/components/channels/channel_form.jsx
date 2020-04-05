import React from 'react';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.channel;
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state).then(
            () => this.props.history.push(`/main/channel`)
        );
    };

    handleClick(e) {
        if (e.target.checked && !this.state.is_private) {
            this.setState({ is_private: true })
        };
    }

    toggleChannelCreateModal(e) {
        e.stopPropagation();

         const membersModalEl = document.getElementsByClassName(
           "channel-create-modal-outer"
         )[0];
         if (!membersModalEl.classList.contains("active-modal")) {
           membersModalEl.classList.add("active-modal");
         } else {
           membersModalEl.classList.remove("active-modal");
         }
    }

    render() {
        return (
            <div>
                ChannelForm
            </div>
        )
    }
}

export default ChannelForm;