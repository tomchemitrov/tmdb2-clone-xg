export interface ModalProps {}

export const MoviesModal = ({}: ModalProps) => {
  return (
    <div
      className={
        "absolute bg-gray-800 text-white text-sm rounded-lg p-3 shadow-lg z-10"
      }
    >
      <p>Popup</p>
    </div>
  );
};
