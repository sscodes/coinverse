import { Modal } from "react-bootstrap";
import "./TelegramModal.css";

const TelegramModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          <h2 className="mod-head">
            <b>Telegrams Links</b>
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h5 className="my-3">
          <a
            target="_blank"
            href="https://t.me/Coinverseofficialcommunity"
            rel="noreferrer"
            className="tel-links"
          >
            Official Telegram Community{" "}
          </a>
        </h5>
        <h5 className="my-3">
          <a
            target="_blank"
            href="https://t.me/Coinversecommunity"
            rel="noreferrer"
            className="tel-links"
          >
            Coinverse Announcements
          </a>
        </h5>
      </Modal.Body>
    </Modal>
  );
};

export default TelegramModal;
