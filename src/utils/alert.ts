import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

const Alert = (
  icon: 'error' | 'info' | 'question' | 'success' | 'warning',
  title = '',
  text = '',
  confirmButtonText = 'OK',
  showCancelButton = false,
  cancelButtonText = 'CANCELAR',
  confirmButtonColor = '#2196f3'
) =>
  mySwal.fire({
    icon,
    title,
    text,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    confirmButtonColor,
    allowOutsideClick: false,
    reverseButtons: true,
  });

export default Alert;
