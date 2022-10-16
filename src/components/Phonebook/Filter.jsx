import PropTypes from 'prop-types';
export const Filter = ({onChange, value}) => {
    return <label><input type="text" value={value} onChange={onChange}/></label>
}
Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}