import React, { Component, PropTypes } from 'react';

class ImageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', tooltip: '', editing: false };
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

    onRemoveClick = (e) => {
        e.preventDefault();
        confirm('Do you really want to delete the image?') &&
        this.props.actions.deleteImage(this.props.id);
    }

    onEditClick = (e) => {
        e.preventDefault();
        const { name, tooltip } = this.props;
        this.setState({ name, tooltip, editing: true });
    }

    onCancelClick = (e) => {
        e.preventDefault();
        const { name, tooltip } = this.props;
        this.setState({ name, tooltip, editing: false });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { name, tooltip } = this.state;
        this.props.actions.editImage(this.props.id, name, tooltip);
        this.setState({ name: '', tooltip: '', editing: false });

    }

    render() {
        const {id, name, tooltip} = this.props;
        const { editing } = this.state;
        return (
            <form
                onSubmit={this.onFormSubmit}
                id={id}
                className='image-details'>
                <p className='media-heading'>Image name</p>

                {editing ?
                    (<div>
                        <input
                            onChange={this.onInputChange}
                            value={this.state.name}
                            data-id='name'
                            className='form-control form-control-sm'
                            type='text'
                            maxLength='16'
                        />
                        <p className='media-heading'>Tooltip text</p>
                        <textarea
                            onChange={this.onInputChange}
                            value={this.state.tooltip}
                            data-id='tooltip'
                            className='form-control form-control-sm'
                            type='text'
                            maxLength='80'>
                        </textarea>
                        <div>
                            <button
                                onClick={this.onCancelClick}
                                className='btn btn-sm btn-secondary'>
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className='btn btn-sm btn-primary'>
                                Save
                            </button>
                        </div>
                    </div>) :

                    (<div>
                        {name ? <h4>{name}</h4> :
                        <a href='#' onClick={this.onEditClick}>Add name</a>}
                        <p className='media-heading'>Tooltip text</p>
                        {tooltip ? <p className='tooltip-text'>{tooltip}</p> :
                            <a href='#' onClick={this.onEditClick}>Add tooltip text</a>}
                        <div>
                            <button
                                onClick={this.onRemoveClick}
                                className='btn btn-sm btn-danger'>
                                Delete
                            </button>
                            <button
                                onClick={this.onEditClick}
                                className='btn btn-sm btn-info'>
                                Edit
                            </button>
                        </div>
                    </div>)
                }

            </form>
        );
    };
}

export default ImageDetails;