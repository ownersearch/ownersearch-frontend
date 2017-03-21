import React from 'react';
import styles from './styles';

export default (props) => {
  const { children, ...otherProps } = props;
  return (
    <div className={styles.header} {...otherProps}>
      {children}
    </div>
  )
}
