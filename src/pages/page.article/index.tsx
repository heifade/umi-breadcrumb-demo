import React from 'react';
import styles from './styles.less';

export default function(props: any) {
  const { match } = props;

  return (
    <div>
      <div className={styles.title}>{match.params.id}文章内容</div>
    </div>
  );
}
