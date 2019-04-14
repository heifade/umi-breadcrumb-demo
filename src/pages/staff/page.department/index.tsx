import React from 'react';
import { Link } from 'umi';
import styles from '../styles.less';

export default function(props: any) {
  const list = [
    {
      name: '技术部',
      id: '001',
    },
    {
      name: '人事部',
      id: '002',
    },
    {
      name: '财务部',
      id: '003',
    },
  ];

  const {
    location: { pathname },
  } = props;

  return (
    <div>
      <div className={styles.title}>部门列表</div>
      <table>
        <thead>
          <tr>
            <th>部门编号</th>
            <th>部门名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map(h => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.name}</td>
              <td>
                <Link to={`${pathname}/staff/${h.id}/${h.name}`}>编辑</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
