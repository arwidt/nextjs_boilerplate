import { createPortal } from 'react-dom';
import usePortal from 'global/hooks/usePortal';

/**
 * @example
 * <ModalPortal>
 *   <p>Thing within portal</p>
 * </ModalPortal>
 */
const ModalPortal = ({ id, children }) => {
  id = id ? id : 'modal-root';
  const target = usePortal(id);
  return createPortal(
    children,
    target
  );
};

export default ModalPortal;
