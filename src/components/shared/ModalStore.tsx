import React, { FC } from "react";
import { Modal } from "antd";
import { Store } from "antd/lib/form/interface";
import { Product } from "./models";

export interface ModalStoreProps {
  isModalVisible: boolean;
  images: typeof import("*.png")[];
  setIsModalVisible: (isModalVisible: boolean) => void;
  modalInfo: Store;
}

const ModalStore: FC<ModalStoreProps> = ({
  isModalVisible,
  images,
  setIsModalVisible,
  modalInfo,
}) => {
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      visible={isModalVisible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      {images[modalInfo.id - 1] && (
        <img src={images[modalInfo.id - 1].default} className="modal-img" />
      )}
      <div className="modal-content">
        <h2>{modalInfo.name}</h2>
        <p>{modalInfo.description}</p>
        <strong>Productos:</strong>
        <ul>
          {modalInfo.products.map((product: Product) => {
            return <li>{product.name}</li>;
          })}
        </ul>
      </div>
    </Modal>
  );
};

export default ModalStore;
