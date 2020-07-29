import {Modal, Button, Form, Input, Checkbox} from 'antd';
import React, {useState} from "react";
import {connect} from 'react-redux';
import {joinRoom} from "../../actions/rooms";
import PropTypes from "prop-types";

const JoinRoomModal = ({joinRoom, owner_username, joined_room}) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const onFinish = (values) => {
        values.owner_username = owner_username;
        setConfirmLoading(true);
        joinRoom(values);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type={"primary"} onClick={showModal} style={{marginBottom: 8}} size={"large"} block
                    disabled={joined_room}>
                Join New Room
            </Button>
            <Modal
                title="Join Room"
                visible={visible}
                footer={[
                    <Button key={"cancel"} type={"secondary"} onClick={handleCancel}>Cancel</Button>,
                    <Button form="createRoomForm" key="submit" htmlType="submit" type={"primary"}
                            loading={confirmLoading}>
                        Submit
                    </Button>
                ]}
            >
                <Form
                    name="createRoomForm"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{required: true, message: 'Please input your room name!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: false, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                        Enter password if the chatroom is private
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

JoinRoomModal.propTypes = {
    createRoom: PropTypes.func.isRequired,
    owner_username: PropTypes.string,
    joined_room: PropTypes.string
};

const mapStateToProps = state => ({
    owner_username: state.auth.user && state.auth.user.username,
    joined_room: state.rooms.joined_room
});

export default connect(mapStateToProps, {joinRoom})(JoinRoomModal);