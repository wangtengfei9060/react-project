import React, { Component, Fragment } from 'react'
import { Table, Modal, Button, Form, Input } from 'antd'

const mapPropsToFields = (props) => {
  return {
    title: Form.createFormField({
      ...props.formObj,
      value: props.formObj.title,
    }),
    description: Form.createFormField({
      ...props.formObj,
      value: props.formObj.description,
    })
  }
}

const CollectionCreateForm = Form.create({ name: 'form_in_modal', mapPropsToFields})(
  
  class extends React.Component {
    componentDidMount() {
      const { form, formObj } = this.props
      form.setFieldsValue(formObj)
    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          footer={[
            <Button key="back" onClick={onCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={onCreate}>
              Submit
            </Button>,
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
  
);

class Home extends Component {

    handleCancel = () => {
        this.props.closeModal(false)
    }

    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.props.handleSelectedRowKeys(selectedRowKeys)
    }

    handleCreate = () => {
      const { form } = this.formRef.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
  
        form.resetFields();
        this.props.closeModal(false)
      });
    };
  
    saveFormRef = formRef => {
      this.formRef = formRef;
    };

  render() {
    const columns = [
        {
            title: 'Title',
            key: 'title',
            dataIndex: 'title',
            width: 200
        },
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description',
            width: 200
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
            fixed: 'right',
            render: (text, record, index) => (
                <Fragment>
                    <Button key={index} onClick={() => {
                        showModal(true)
                        changeModalForm(record)
                    }}>编辑</Button>
                </Fragment>
            )
        }
    ];
    const { visible, selectedRowKeys, dataSource, showModal, changeModalForm, formObj, pagination, changePageSize, changeCurrent } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: false,
      showTotal: () => `共${pagination.total}条`,
      pageSize: pagination.pageSize,
      current: pagination.current,
      total: pagination.total,
      onShowSizeChange: (current, pageSize) => changePageSize(current, pageSize),
      onChange: (current) => changeCurrent(current),
    };

    return (
    	<div>
    		<Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} bordered pagination={paginationProps} />
       
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          formObj={formObj}
        />
    	</div>
    )
  }
}

export default Home
