import React from 'react';
import { Link } from 'umi';
import styles from '../styles.less';

export default function(props: any) {
  const list = [
    {
      name: '张三',
      id: 'a001',
    },
    {
      name: '李四',
      id: 'a002',
    },
    {
      name: '王五',
      id: 'a003',
    },
  ];

  const {
    location: { pathname },
  } = props;

  return (
    <div>
      <div className={styles.title}>角色列表</div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map(h => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.name}</td>
              <td>
                <Link to={`${pathname}/detail/${h.id}/${h.name}`}>编辑</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
