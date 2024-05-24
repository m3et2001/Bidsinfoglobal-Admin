import { Table } from 'antd'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BaseUrl } from '../../../helper/baseurl';

export default function DemoRequestCommon() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        (async function() {
            var response = await axios.get(BaseUrl + '/common/demo-request')
            var result = response.data;

            setRecords(result.result);
        })()
    }, [])

    const columns = [
        {
            title: 'Index',
            dataIndex: 'index',
            key: 'index',
            render: (e, _, index) => <span>{index + 1}</span> 
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phoneno',
            key: 'phoneno',
        },
        {
            title: 'Organization',
            dataIndex: 'organization',
            key: 'organization',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (e, record) => new Date(e).toLocaleString()
        },
        // {
        //     title: 'Action',
        //     dataIndex: 'Action',  
        //     key: 'Action',
        //     width: '150px',
        //     render: (e, record) => <div className="flex gap-2" key={record._id}>
        //         <Button title="Delete" icon={<DeleteOutlined />} onClick={() => handleDeleteSlide(record._id)}></Button>
        //     </div>
        // }
    ];

  return (
    <div>
        <div className='flex items-center justify-between mb-4'>
            <h1 className='text-xl'>Demo Requests</h1>
        </div>
        <Table
        // loading={CPVCode.loading}
        dataSource={records}
        columns={columns}
        pagination={false}
        scroll={{ y: 430 }}
        />
    </div>
  )
}
