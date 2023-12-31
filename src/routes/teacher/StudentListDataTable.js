import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import UserListTable from './StudentTable';
import { Main, CardToolbox } from './styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';

function UserList() {
  const { searchData, users } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      users: state.users,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const usersTableData = [];

  users.map((user) => {
    const { id, name, designation, status } = user;

    return usersTableData.push({
      key: id,
      user: (
        <div className="user-info">
          <figcaption>
            <Heading className="user-name" as="h6">
              {name}
            </Heading>
            <span className="user-designation">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      email: 'john@gmail.com',
      company: 'Business Development',
      position: designation,
      joinDate: 'January 20, 2020',
      status: <span className={`status-text ${status}`}>{status}</span>,
      action: (
        <div className="table-actions">
          <Button className="btn-icon" type="primary" to="#" shape="circle">
            <UilEye />
          </Button>
          <Button className="btn-icon" type="info" to="#" shape="circle">
            <UilEdit />
          </Button>
          <Button className="btn-icon" type="danger" to="#" shape="circle">
            <UilTrashAlt />
          </Button>
        </div>
      ),
    });
  });

  return (
    <>
      <CardToolbox>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title="All Students"
          subTitle={
            <>
              <span className="title-counter">24 Students </span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Search by Name"
                width="100%"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" type="primary" key="1">
              <Link to="/teacher/add-user/StudentDetail">+ Add New Student</Link>
            </Button>,
            <Button className="btn-add_new" size="default" type="primary" key="2">
            <Link to="/teacher/add-batch/StudentBatch">+ Add New Batch</Link>
          </Button>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <UserListTable />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default UserList;
