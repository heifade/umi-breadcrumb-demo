import React from 'react';
import { Link } from 'umi';
import styles from './styles.less';

export default function(props: any) {
  const list = [
    {
      name: '文章1',
      id: '001',
    },
    {
      name: '文章2',
      id: '002',
    },
    {
      name: '文章3',
      id: '003',
    },
  ];

  const {
    location: { pathname },
  } = props;

  return (
    <div>
      <div className={styles.title}>文章列表</div>
      <table>
        <thead>
          <tr>
            <th>文章编号</th>
            <th>文章名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map(h => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.name}</td>
              <td>
                <Link to={`${pathname}/edit/${h.id}`}>编辑</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
