import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { NavLink } from 'umi';
import { pageRoutes } from '../../config/router';

export const Breadcrumbs = withBreadcrumbs(pageRoutes)(({ breadcrumbs }) => {
  const list = breadcrumbs.filter(breadcrumb => breadcrumb.name);
  return (
    <div>
      {list.map((breadcrumb, index) => {
        return (
          <span key={breadcrumb.key}>
            <NavLink to={breadcrumb.match.url}>{breadcrumb.name}</NavLink>
            {index < list.length - 1 && <i> / </i>}
          </span>
        );
      })}
    </div>
  );
});
