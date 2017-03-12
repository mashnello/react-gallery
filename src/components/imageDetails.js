import React, { Component, PropTypes } from 'react';

class ImageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', tooltip: '' };
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tooltip: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired
    }

    onInputChange = (e) => {
        const id = e.target.dataset.id,
            value = e.target.value;
        this.setState({
            [id === 'name' ? 'name' : 'tooltip']: value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { name, tooltip } = this.state;
        this.props.actions.editImage(this.props.id, name, tooltip);
        this.setState({ name: '', tooltip: '' });
    }

    render() {
        const {id, name, tooltip} = this.props;
        return (
            <form
              onSubmit={this.onFormSubmit}
              id={id}
              className='image-details'>
              <h5 className="media-heading">Image name</h5>
                <input
                  onChange={this.onInputChange}
                  value={this.state.name}
                  placeholder={name}
                  data-id="name"
                  className='form-control'
                  type='text'
                />
                <h5 className="media-heading">Tooltip text</h5>
                <input
                  onChange={this.onInputChange}
                  value={this.state.tooltip}
                  placeholder={tooltip}
                  data-id="tooltip"
                  className='form-control'
                  type='text'
                />
                <button
                  type='submit'
                  className='btn btn-primary'>
                  Save
                </button>
            </form>
        );
    };
}

export default ImageDetails;