import React, { useState } from "react";
import { Button, Modal } from "antd";

const RequestModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="mt-10 !bg-[#6dfffd] !text-black !font-bold !border-none !shadow-2xl"
      >
        Send request
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Upload video</p>
        <input type="file" accept="video/*" onChange={"handleFileChange"} className="pointer"/>
        <div className="mt-3">
        <p>Enter message</p>
        <input type="text" className="border border-slate-400 w-full h-20"></input>
        </div>
      </Modal>
    </>
  );
};
export default RequestModal;
