import React from 'react';
import PropTypes from 'prop-types';
import {shallowEqual} from '../../../utils';

export default class ExpandIcon extends React.Component {
  static propTypes = {
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    expandable: PropTypes.bool,
    expanded: PropTypes.bool,
    needIndentSpaced: PropTypes.bool,
    onExpand: PropTypes.func,
  };

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }

  render() {
    const {expandable, prefixCls, onExpand, needIndentSpaced, expanded, record} = this.props;
    if (expandable) {
      const expandClassName = expanded ? 'expanded' : 'collapsed';
      return (
        <span
          className={`${prefixCls}-expand-icon ${prefixCls}-${expandClassName}`}
          onClick={e => onExpand(record, e)}
        />
      );
    } else if (needIndentSpaced) {
      return <span className={`${prefixCls}-expand-icon ${prefixCls}-spaced`}/>;
    }
    return null;
  }
}
