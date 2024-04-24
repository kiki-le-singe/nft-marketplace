import { Modal } from "ui";

export default function PhotoModal({
  params: { slug },
}: {
  params: { slug: number };
}) {
  return (
    <Modal>
      <div className="text-black">{slug}</div>
    </Modal>
  );
}
