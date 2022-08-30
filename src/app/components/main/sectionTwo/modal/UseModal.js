import React, {useState} from 'react';
import Styles from "../../../../styles/App.module.scss";
import DataJson from "../../../../data/DataJson.json";
import MonkeyLogo from "../../../../assets/icon/Monkey_icon.svg";
import CloseIcon from './closeIcon/CloseIcon';
import Modal from "react-modal";
Modal.setAppElement("#root");


const ModalUse = () => {
  const dataModal = DataJson.sectionTwoComponent;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleModal} className={Styles.text_center}>{dataModal.text.linkName}</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={Styles.mymodal}
        overlayClassName={Styles.myoverlay}
        closeTimeoutMS={500}
      >
        <div className={`${Styles.d_flex} ${Styles.close}`}>
          <button onClick={toggleModal}><CloseIcon/></button>
        </div>
        <div className={Styles.container_modal}>
          <div className={`${Styles.bloc_img} ${Styles.d_flex}`}>
            <img src={MonkeyLogo} alt="monkey_logo"/>
          </div>
          <div className={`${Styles.bloc_text} ${Styles.text_center}`}>
            <h2>{dataModal.modal.title}</h2>
            <div className={Styles.bloc_text_children}>
              <p>{dataModal.modal.paragraphSection}</p>
              <p>{dataModal.modal.paragraphFooter}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalUse;